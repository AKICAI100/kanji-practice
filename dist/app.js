(function () {
  'use strict';
  const data = window.KanjiGardenData;
  const progress = window.KanjiGardenProgress;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let index = 0, mode = 'trace', strokesThisKanji = 0, soundEnabled = true, currentStroke = 0;
  let readIndex = 0, testIndex = 0, testAnswered = false, readAnswered = false;
  const board = $('#drawingBoard');
  const drawing = window.KanjiDrawing.createDrawingSurface($('#practiceCanvas'), () => {
    strokesThisKanji += 1;
    if (mode === 'guided' && verifiedStrokePaths(data[index]).length) {
      currentStroke = Math.min(currentStroke + 1, verifiedStrokePaths(data[index]).length - 1);
      renderGuidedGuide(data[index]);
      $('#strokeNotice').textContent = `Stroke ${currentStroke + 1} of ${verifiedStrokePaths(data[index]).length}`;
    }
  });
  const testDrawing = window.KanjiDrawing.createDrawingSurface($('#testWriting canvas'));

  function safe(value) { return value === null || value === undefined || value === '' ? '—' : value; }
  function verifiedStrokePaths(item) {
    if (Array.isArray(item.strokePaths)) return item.strokePaths;
    if (Array.isArray(item.strokes)) return item.strokes;
    return [];
  }
  function renderGuidedGuide(item) {
    const svg = $('#guidedStrokeGuide'), paths = verifiedStrokePaths(item);
    svg.replaceChildren();
    if (mode !== 'guided' || !paths.length) return;
    paths.forEach((pathData, strokeIndex) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', typeof pathData === 'string' ? pathData : pathData.path);
      path.classList.toggle('current', strokeIndex === currentStroke);
      path.classList.toggle('completed', strokeIndex < currentStroke);
      svg.append(path);
    });
  }
  function itemStatus(kanji) { const p = progress.getItem(kanji); return p.learned ? 'Learned' : p.practices ? 'Practicing' : 'Not started'; }
  function updateStatus() {
    const p = progress.getItem(data[index].kanji);
    $('#practiceStatus').textContent = `${itemStatus(data[index].kanji)} · ${p.practices || 0} practice${p.practices === 1 ? '' : 's'}`;
    $('#markLearned').textContent = p.learned ? '✓ Learned' : '✓ Mark Learned';
    $('#markLearned').classList.toggle('is-learned', p.learned);
  }
  function renderPractice(clear = true) {
    const item = data[index];
    if (clear) drawing.clear(); strokesThisKanji = 0;
    $('#practicePosition').textContent = `${index + 1} / ${data.length}`;
    $('#kanjiGuide').textContent = item.kanji; $('#infoKanji').textContent = item.kanji;
    currentStroke = 0; renderGuidedGuide(item);
    $('#infoMeaning').textContent = item.meaning; $('#infoMeaningLong').textContent = item.meaning;
    $('#infoOnyomi').textContent = safe(item.onyomi); $('#infoKunyomi').textContent = safe(item.kunyomi);
    $('#infoOnRomaji').textContent = safe(item.onRomaji); $('#infoKunRomaji').textContent = safe(item.kunRomaji);
    $('#infoStrokes').textContent = safe(item.strokeCount); $('#infoRadical').textContent = safe(item.radical);
    $('#infoExamples').innerHTML = item.examples.length ? item.examples.map(x => `<span>${x}</span>`).join('') : '<span>—</span>';
    $('#descriptionRow').hidden = !item.description; $('#infoDescription').textContent = item.description;
    $('#previousKanji').disabled = index === 0; updateStatus();
  }
  function completePracticeRound() {
    if (!strokesThisKanji) return false;
    progress.recordPractice(data[index].kanji);
    strokesThisKanji = 0;
    updateStatus();
    return true;
  }
  function moveKanji(delta) { completePracticeRound(); index = (index + delta + data.length) % data.length; renderPractice(); }
  function setMode(next) {
    completePracticeRound();
    mode = next; currentStroke = 0;
    board.classList.toggle('trace-mode', mode === 'trace'); board.classList.toggle('guided-mode', mode === 'guided'); board.classList.toggle('free-mode', mode === 'free');
    ['trace', 'guided', 'free'].forEach(name => { const button = $(`#${name}Mode`); const active = mode === name; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    const paths = verifiedStrokePaths(data[index]);
    $('#strokeNotice').textContent = mode === 'trace' ? 'Trace the pale kanji' : mode === 'free' ? 'Write it by yourself' : paths.length ? `Stroke 1 of ${paths.length}` : 'Stroke guide not available yet';
    renderGuidedGuide(data[index]); drawing.clear();
  }
  function speak(item) {
    if (!soundEnabled || !('speechSynthesis' in window)) return;
    speechSynthesis.cancel(); const text = item.kunyomi !== '—' ? item.kunyomi.split('、')[0] : item.kanji; const u = new SpeechSynthesisUtterance(text); u.lang = 'ja-JP'; u.rate = .72; speechSynthesis.speak(u);
  }
  function showView(name) {
    $$('.view').forEach(v => v.classList.toggle('active', v.id === `${name}View`)); $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === name));
    document.body.classList.toggle('practice-active', name === 'practice');
    if (name === 'collection') renderCollection(); if (name === 'progress') renderProgress(); if (name === 'read') renderRead(); if (name === 'test') renderTest();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function shuffledChoices(correct, field) {
    const options = [correct]; for (let step = 1; options.length < 4; step++) { const candidate = data[(correct.id - 1 + step * 17) % data.length]; const value = candidate[field]; if (value && value !== '—' && !options.some(x => x[field] === value)) options.push(candidate); }
    return options.sort(() => Math.random() - .5);
  }
  function renderRead() {
    let item = data[readIndex % data.length]; let guard = 0; while (item.kunyomi === '—' && guard++ < data.length) item = data[++readIndex % data.length];
    $('#readKanji').textContent = item.kanji; $('#readHint').textContent = `Meaning: ${item.meaning}`; $('#readFeedback').textContent = ''; readAnswered = false;
    $('#readChoices').innerHTML = shuffledChoices(item, 'kunyomi').map(x => `<button data-correct="${x.kanji === item.kanji}"><b>${x.kunyomi}</b><small>${x.kunRomaji}</small></button>`).join('');
    $$('#readChoices button').forEach(button => button.onclick = () => { if (readAnswered) return; readAnswered = true; const ok = button.dataset.correct === 'true'; button.classList.add(ok ? 'correct' : 'wrong'); if (!ok) $('#readChoices [data-correct="true"]').classList.add('correct'); $('#readFeedback').textContent = ok ? 'Great job! ✓' : `Nice try! The answer is ${item.kunyomi}.`; progress.recordTest(ok); });
  }
  function renderTest() {
    const item = data[(testIndex * 7) % data.length]; const type = testIndex % 4; testAnswered = false; $('#testFeedback').textContent = ''; $('#testWriting').hidden = type !== 3; $('#testChoices').hidden = type === 3; testDrawing.clear();
    const configs = [
      { prompt: `What is one reading for ${item.kanji}?`, field: item.kunyomi !== '—' ? 'kunyomi' : 'meaning' },
      { prompt: `Which kanji means “${item.meaning}”?`, field: 'kanji' },
      { prompt: `Which kanji matches “${item.kunRomaji !== '—' ? item.kunRomaji : item.meaning}”?`, field: 'kanji' }
    ];
    if (type === 3) { $('#testPrompt').innerHTML = `Write the kanji for <strong>“${item.meaning}”</strong>`; $('#testChoices').innerHTML = ''; $('#testFeedback').textContent = 'Practice writing, then check your answer below.'; $('#nextTest').textContent = `Show answer: ${item.kanji} ›`; }
    else { const c = configs[type]; $('#testPrompt').textContent = c.prompt; $('#testChoices').innerHTML = shuffledChoices(item, c.field).map(x => `<button data-correct="${x.kanji === item.kanji}"><b>${x[c.field]}</b></button>`).join(''); $('#nextTest').textContent = 'Next question ›'; $$('#testChoices button').forEach(button => button.onclick = () => { if (testAnswered) return; testAnswered = true; const ok = button.dataset.correct === 'true'; button.classList.add(ok ? 'correct' : 'wrong'); if (!ok) $('#testChoices [data-correct="true"]').classList.add('correct'); $('#testFeedback').textContent = ok ? 'Excellent! ✓' : 'Good try — look at the green answer.'; progress.recordTest(ok); updateTestScore(); }); }
    updateTestScore();
  }
  function updateTestScore() { const s = progress.getState(); $('#testScore').textContent = `Score ${s.testCorrect} / ${s.testTotal}`; }
  function renderCollection() {
    const search = $('#collectionSearch').value.trim().toLowerCase(), filter = $('#collectionFilter').value;
    const filtered = data.filter(item => { const status = itemStatus(item.kanji); const matchText = !search || item.kanji.includes(search) || item.meaning.toLowerCase().includes(search); const matchFilter = filter === 'all' || filter === 'learned' && status === 'Learned' || filter === 'practicing' && status === 'Practicing' || filter === 'new' && status === 'Not started'; return matchText && matchFilter; });
    $('#collectionGrid').innerHTML = filtered.map(item => { const status = itemStatus(item.kanji); return `<button data-id="${item.id}" class="${status.toLowerCase().replace(' ', '-')}"><b>${item.kanji}</b><span>${item.meaning}</span><small>${status === 'Learned' ? '✓ ' : status === 'Practicing' ? '◔ ' : '○ '}${status}</small></button>`; }).join('') || '<p class="empty">No kanji match this filter.</p>';
    $$('#collectionGrid button').forEach(button => button.onclick = () => { index = Number(button.dataset.id) - 1; renderPractice(); showView('practice'); });
  }
  function renderProgress() {
    const state = progress.getState(), learned = data.filter(item => progress.getItem(item.kanji).learned), practicing = data.filter(item => { const p = progress.getItem(item.kanji); return p.practices && !p.learned; }).sort((a,b) => progress.getItem(a.kanji).practices - progress.getItem(b.kanji).practices); const percent = Math.round(learned.length / data.length * 100);
    $('#completedCount').textContent = learned.length; $('#practiceCount').textContent = state.totalPractices; $('#progressPercent').textContent = `${percent}%`; $('#progressEncouragement').textContent = percent ? 'Growing strong!' : 'Start with one!'; $('#progressBar').style.width = `${percent}%`; $('#progressRing').style.setProperty('--progress', `${percent * 3.6}deg`); $('#progressRing span').textContent = `${percent}%`;
    $('#recentList').innerHTML = state.recent.length ? state.recent.slice(0,8).map(k => `<button data-kanji="${k}">${k}</button>`).join('') : '<span class="empty">No practice yet</span>';
    $('#needsPracticeList').innerHTML = practicing.length ? practicing.slice(0,8).map(x => `<button data-kanji="${x.kanji}">${x.kanji}</button>`).join('') : '<span class="empty">Practice a kanji to see it here</span>';
    $$('.kanji-row button').forEach(button => button.onclick = () => { index = data.findIndex(x => x.kanji === button.dataset.kanji); renderPractice(); showView('practice'); });
  }

  $$('[data-view]').forEach(t => t.onclick = () => showView(t.dataset.view));
  $('#homeButton').onclick = () => showView('home');
  $('#previousKanji').onclick = () => moveKanji(-1); $('#nextKanjiTop').onclick = $('#nextKanji').onclick = () => moveKanji(1);
  $('#clearCanvas').onclick = () => { drawing.clear(); strokesThisKanji = 0; }; $('#tryAgain').onclick = () => { completePracticeRound(); drawing.clear(); };
  $('#traceMode').onclick = () => setMode('trace'); $('#guidedMode').onclick = () => setMode('guided'); $('#freeMode').onclick = () => setMode('free');
  $('#markLearned').onclick = () => { completePracticeRound(); progress.toggleLearned(data[index].kanji); updateStatus(); };
  $('#pronounceButton').onclick = () => speak(data[index]); $('#soundToggle').onclick = () => { soundEnabled = !soundEnabled; $('#soundToggle').firstChild.textContent = soundEnabled ? '🔊' : '🔇'; };
  $('#helpButton').onclick = () => $('#helpDialog').showModal(); $('#closeHelp').onclick = () => $('#helpDialog').close();
  $('#nextRead').onclick = () => { readIndex = (readIndex + 1) % data.length; renderRead(); };
  $('#nextTest').onclick = () => { testIndex += 1; renderTest(); }; $('#clearTestCanvas').onclick = () => testDrawing.clear();
  $('#collectionSearch').oninput = renderCollection; $('#collectionFilter').onchange = renderCollection;
  // Optional WebMCP bridge: exposes the same completion action as the visible button.
  if (document.modelContext && typeof document.modelContext.registerTool === 'function') {
    Promise.resolve(document.modelContext.registerTool({
      name: 'mark_current_kanji_learned',
      title: 'Mark current kanji learned',
      description: 'Marks the kanji currently open in Practice as learned and updates Collection and Progress.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).length) {
          throw new TypeError('This tool does not accept input fields.');
        }
        const item = data[index];
        if (!progress.getItem(item.kanji).learned) progress.toggleLearned(item.kanji);
        updateStatus();
        return { kanji: item.kanji, status: 'learned' };
      }
    })).catch(() => {});
  }
  document.body.classList.add('practice-active'); renderPractice();
}());
