(function () {
  'use strict';
  function createDrawingSurface(canvas, onStroke) {
    const ctx = canvas.getContext('2d');
    let drawing = false, last = null, moved = false, activePoints = [], pointerType = 'unknown';
    const strokes = [];
    function drawStroke(points, width, height) {
      if (!points.length) return;
      const first = { x: points[0].x * width, y: points[0].y * height };
      ctx.beginPath(); ctx.moveTo(first.x, first.y);
      if (points.length === 1) {
        ctx.arc(first.x, first.y, ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fillStyle = ctx.strokeStyle; ctx.fill(); return;
      }
      let previous = first;
      for (let i = 1; i < points.length; i += 1) {
        const current = { x: points[i].x * width, y: points[i].y * height };
        ctx.quadraticCurveTo(previous.x, previous.y, (previous.x + current.x) / 2, (previous.y + current.y) / 2);
        previous = current;
      }
      ctx.stroke();
    }
    function redraw() {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      strokes.forEach(stroke => drawStroke(stroke.points, rect.width, rect.height));
    }
    function resize() {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * ratio); canvas.height = Math.round(rect.height * ratio);
      canvas.style.width = `${rect.width}px`; canvas.style.height = `${rect.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#26344a'; ctx.lineWidth = Math.max(8, rect.width * .026);
      redraw();
    }
    function point(event) { const r = canvas.getBoundingClientRect(); return { x: event.clientX - r.left, y: event.clientY - r.top, width: r.width, height: r.height }; }
    function start(event) { event.preventDefault(); drawing = true; moved = false; last = point(event); pointerType = event.pointerType || 'unknown'; activePoints = [{ x: last.x / last.width, y: last.y / last.height, t: performance.now() }]; canvas.setPointerCapture?.(event.pointerId); ctx.beginPath(); ctx.moveTo(last.x, last.y); }
    function move(event) { if (!drawing) return; event.preventDefault(); const p = point(event); const mx = (last.x + p.x) / 2, my = (last.y + p.y) / 2; ctx.quadraticCurveTo(last.x, last.y, mx, my); ctx.stroke(); last = p; moved = true; activePoints.push({ x: p.x / p.width, y: p.y / p.height, t: performance.now() }); }
    function end(event) {
      if (!drawing) return;
      event.preventDefault();
      if (!moved) { ctx.beginPath(); ctx.arc(last.x, last.y, ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fillStyle = ctx.strokeStyle; ctx.fill(); }
      const stroke = { points: activePoints, pointerType };
      strokes.push(stroke); drawing = false; last = null; activePoints = [];
      onStroke?.(stroke);
    }
    function cancel(event) { if (!drawing) return; event.preventDefault(); drawing = false; last = null; activePoints = []; redraw(); }
    canvas.addEventListener('pointerdown', start); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', cancel); canvas.addEventListener('contextmenu', e => e.preventDefault());
    const observer = new ResizeObserver(resize); observer.observe(canvas); resize();
    return {
      clear() { strokes.length = 0; redraw(); },
      undo() { const removed = strokes.pop() || null; redraw(); return removed; },
      getStrokes() { return strokes.map(stroke => ({ ...stroke, points: stroke.points.map(point => ({ ...point })) })); },
      destroy() { observer.disconnect(); }
    };
  }
  window.KanjiDrawing = { createDrawingSurface };
}());
