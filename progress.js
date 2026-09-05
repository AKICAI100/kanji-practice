(function () {
  'use strict';
  const KEY = 'kanjiGardenProgress.v1';
  const empty = () => ({ items: {}, totalPractices: 0, recent: [], testCorrect: 0, testTotal: 0 });
  function load() {
    try { return { ...empty(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
    catch (_) { return empty(); }
  }
  let state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {} }
  function touch(kanji) {
    const item = state.items[kanji] || { practices: 0, learned: false };
    item.practices += 1; item.lastPracticed = Date.now(); state.items[kanji] = item;
    state.totalPractices += 1; state.recent = [kanji, ...state.recent.filter(k => k !== kanji)].slice(0, 12); save();
    return item;
  }
  window.KanjiGardenProgress = {
    getState: () => state,
    getItem: kanji => state.items[kanji] || { practices: 0, learned: false },
    recordPractice: touch,
    toggleLearned(kanji) { const item = state.items[kanji] || { practices: 0, learned: false }; item.learned = !item.learned; item.lastPracticed ||= Date.now(); state.items[kanji] = item; state.recent = [kanji, ...state.recent.filter(k => k !== kanji)].slice(0, 12); save(); return item; },
    recordTest(correct) { state.testTotal += 1; if (correct) state.testCorrect += 1; save(); },
    resetItem(kanji) { if (state.items[kanji]) { state.items[kanji].practices = 0; state.items[kanji].learned = false; save(); } }
  };
}());
