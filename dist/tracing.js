(function () {
  'use strict';
  function createDrawingSurface(canvas, onStroke) {
    const ctx = canvas.getContext('2d');
    let drawing = false, last = null, moved = false;
    function resize() {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const snapshot = canvas.width && canvas.height ? canvas.toDataURL() : null;
      canvas.width = Math.round(rect.width * ratio); canvas.height = Math.round(rect.height * ratio);
      canvas.style.width = `${rect.width}px`; canvas.style.height = `${rect.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#26344a'; ctx.lineWidth = Math.max(8, rect.width * .026);
      if (snapshot) { const image = new Image(); image.onload = () => ctx.drawImage(image, 0, 0, rect.width, rect.height); image.src = snapshot; }
    }
    function point(event) { const r = canvas.getBoundingClientRect(); return { x: event.clientX - r.left, y: event.clientY - r.top }; }
    function start(event) { event.preventDefault(); drawing = true; moved = false; last = point(event); canvas.setPointerCapture?.(event.pointerId); ctx.beginPath(); ctx.moveTo(last.x, last.y); }
    function move(event) { if (!drawing) return; event.preventDefault(); const p = point(event); const mx = (last.x + p.x) / 2, my = (last.y + p.y) / 2; ctx.quadraticCurveTo(last.x, last.y, mx, my); ctx.stroke(); last = p; moved = true; }
    function end(event) { if (!drawing) return; event.preventDefault(); if (!moved) { ctx.beginPath(); ctx.arc(last.x, last.y, ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fillStyle = ctx.strokeStyle; ctx.fill(); } drawing = false; last = null; onStroke?.(); }
    canvas.addEventListener('pointerdown', start); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end); canvas.addEventListener('contextmenu', e => e.preventDefault());
    const observer = new ResizeObserver(resize); observer.observe(canvas); resize();
    return { clear() { ctx.save(); ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.restore(); }, destroy() { observer.disconnect(); } };
  }
  window.KanjiDrawing = { createDrawingSurface };
}());
