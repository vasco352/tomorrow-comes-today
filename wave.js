
const WAVE = {
  ink:     '#FF6A00',   // cor dos pontos
  paper:   '#fcfcf9',   // cor do fundo
  spacing: 9,           // distância entre pontos (px) — maior = pontos mais grossos
  maxDot:  0.62,        // tamanho máximo do ponto (em relação ao espaçamento)
  speed:   0.7,         // velocidade da animação (0 = parado, 1 = mais rápido)
  direction: 'horizontal', // 'horizontal' ou 'vertical' (direção das ondas)
  respectReducedMotion: false, // true = parar se o sistema tiver "reduzir movimento" ativo
  invert:  false        // true = pontos brancos sobre fundo laranja
};

(function () {
  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COS = Math.SQRT1_2, SIN = Math.SQRT1_2;   // grelha rodada a 45°, como no halftone

  let W = 0, H = 0, dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // campo de valores 0..1 — faixas verticais que ondulam
  function field(x, y, t) {
    const warp = Math.sin(y * 0.0042 + t * 0.9) * 1.3 +
                 Math.sin(y * 0.0115 - t * 0.6) * 0.55;
    const a = Math.sin(x * 0.028 + warp - t * 1.2) +
              0.6 * Math.sin(x * 0.061 - warp * 1.4 + 1.7 + t * 0.3) +
              0.4 * Math.sin(x * 0.011 + y * 0.002 + t * 0.45);
    const v = (a / 2 + 0.5);                              // aprox. 0..1
    const s = Math.min(1, Math.max(0, (v - 0.22) / 0.7)); // contraste suave
    return s * s * (3 - 2 * s);                           // smoothstep
  }

  function draw(t) {
    const ink = WAVE.invert ? WAVE.paper : WAVE.ink;
    const paper = WAVE.invert ? WAVE.ink : WAVE.paper;

    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, W, H);

    const sp = WAVE.spacing;
    const horizontal = WAVE.direction === 'horizontal';
    const diag = Math.hypot(W, H);
    const cx = W / 2, cy = H / 2;
    const n = Math.ceil(diag / sp / 2) + 1;

    ctx.fillStyle = ink;
    ctx.beginPath();
    for (let i = -n; i <= n; i++) {
      for (let j = -n; j <= n; j++) {
        const gx = i * sp, gy = j * sp;
        const x = cx + gx * COS - gy * SIN;
        const y = cy + gx * SIN + gy * COS;
        if (x < -sp || x > W + sp || y < -sp || y > H + sp) continue;

        const f = horizontal ? field(y, x, t) : field(x, y, t);
        const r = f * sp * WAVE.maxDot;
        if (r < 0.35) continue;
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, Math.PI * 2);
      }
    }
    ctx.fill();
  }

  let last = performance.now(), t = 0, acc = 0;
  function frame(now) {
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    if (document.body.classList.contains('in-vision')) {   // página my vision aberta: poupa processador
      acc = 0;
      requestAnimationFrame(frame);
      return;
    }
    acc += dt;
    if (acc >= 1 / 30) {          // ~30 imagens por segundo chegam para um movimento lento
      t += acc * WAVE.speed;
      acc = 0;
      draw(t);
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', () => { resize(); draw(t); });
  resize();
  draw(0);
  if ((!reduceMotion || !WAVE.respectReducedMotion) && WAVE.speed > 0) requestAnimationFrame(frame);
})();