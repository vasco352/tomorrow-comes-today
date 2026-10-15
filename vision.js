
const VISION = {
  photoSpeed: 1,        // velocidade das fotos (1 = normal, 0.5 = metade, 2 = o dobro)
  orbitSpeed: 1,        // velocidade do fundo de órbitas
  questionFadeMs: 2400, // duração do fade das perguntas
  questionReadMs: 3200, // tempo base de leitura (aumenta com o tamanho da pergunta)
  questionGapMs: 900    // pausa entre perguntas
};

// órbitas das fotos: fa/fb = tamanho (fração do ecrã), tilt = inclinação (graus),
// speed = rad/s (negativo = sentido contrário), phase = posição inicial (graus)
const PHOTO_ORBITS = [
  { fa: 0.80, fb: 0.64, tilt: -18, speed:  0.030, phase:  20 },
  { fa: 0.62, fb: 0.72, tilt:  25, speed: -0.036, phase: 110 },
  { fa: 0.90, fb: 0.60, tilt: -30, speed:  0.026, phase: 200 },
  { fa: 0.70, fb: 0.80, tilt:   8, speed: -0.032, phase: 290 },
  { fa: 0.56, fb: 0.62, tilt: -10, speed:  0.040, phase:  65 },
  { fa: 0.86, fb: 0.76, tilt:  35, speed: -0.024, phase: 155 },
  { fa: 0.76, fb: 0.62, tilt:  15, speed:  0.034, phase: 335 },
  { fa: 0.60, fb: 0.88, tilt: -40, speed: -0.028, phase: 245 }
];
// tamanho relativo de cada foto (se não indicares "size" em CONTENT.vision.images)
const PHOTO_SIZES = [1.0, 1.5, 1.0, 1.15, 1.05, 1.25, 0.9, 1.15];

const Vision = (function () {
  const root     = document.getElementById('vision');
  const canvas   = document.getElementById('vision-bg');
  const ctx      = canvas.getContext('2d');
  const photosEl = document.getElementById('vision-photos');
  const qEl      = document.getElementById('vision-question');
  const tlEl     = document.getElementById('vision-text-tl');
  const brEl     = document.getElementById('vision-text-br');

  let built = false, running = false, raf = 0, last = 0;
  let W = 0, H = 0, dpr = 1;
  let orbits = [];          // órbitas decorativas do fundo
  let photos = [];          // fotos em órbita
  let qToken = 0, qTimer = 0;

  /* ---------- números aleatórios repetíveis (o fundo é sempre igual) ---------- */
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- fundo: órbitas com rasto, como longas exposições ---------- */
  function buildOrbits() {
    const R = rng(23);
    const vmin = Math.min(W, H), vmax = Math.max(W, H);
    const old = orbits;
    orbits = [];

    // anéis interiores, quase circulares, à volta do centro
    for (let i = 0; i < 9; i++) {
      const r = lerp(0.05, 0.27, i / 8) * vmin;
      orbits.push({
        a: r, b: r * lerp(0.82, 0.96, R()),
        tilt: R() * Math.PI, drift: (R() - 0.5) * 0.02,
        dx: (R() - 0.5) * 0.03 * vmin, dy: (R() - 0.5) * 0.03 * vmin,
        phi: R() * 6.28, speed: (R() < 0.5 ? -1 : 1) * 0.34 * Math.sqrt(0.05 * vmin / r),
        trail: lerp(2.4, 4.4, R()), base: 0.10, peak: 0.78, w: lerp(1.2, 2.2, R()), dot: R() < 0.6
      });
    }
    // elipses grandes e inclinadas que saem do ecrã
    for (let i = 0; i < 11; i++) {
      const a = lerp(0.45, 1.05, R()) * vmax * 0.62;
      orbits.push({
        a, b: a * lerp(0.34, 0.62, R()),
        tilt: lerp(-0.7, 0.7, R()), drift: (R() - 0.5) * 0.012,
        dx: (R() - 0.5) * 0.12 * W, dy: (R() - 0.5) * 0.12 * H,
        phi: R() * 6.28, speed: (R() < 0.5 ? -1 : 1) * lerp(0.05, 0.14, R()),
        trail: lerp(1.4, 3.0, R()), base: 0.08, peak: 0.7, w: lerp(1.2, 2.6, R()), dot: R() < 0.7
      });
    }
    // mantém a posição atual quando a janela muda de tamanho
    old.forEach((o, i) => { if (orbits[i]) { orbits[i].phi = o.phi; orbits[i].tilt = o.tilt; } });
  }

  function drawOrbits(dt) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.6);
    g.addColorStop(0, 'rgba(255,255,255,0.05)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    ctx.lineCap = 'round';
    const N = 40;
    for (const o of orbits) {
      o.phi += o.speed * VISION.orbitSpeed * dt;
      o.tilt += o.drift * VISION.orbitSpeed * dt;
      const c = Math.cos(o.tilt), s = Math.sin(o.tilt);
      const ox = W / 2 + o.dx, oy = H / 2 + o.dy;
      const dir = Math.sign(o.speed) || 1;

      // órbita completa, muito ténue
      ctx.beginPath();
      ctx.ellipse(ox, oy, o.a, o.b, o.tilt, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${o.base})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // rasto brilhante que vai desaparecendo para trás
      let px = 0, py = 0, hx = 0, hy = 0;
      for (let k = 0; k <= N; k++) {
        const ang = o.phi - dir * o.trail * (1 - k / N);
        const ex = o.a * Math.cos(ang), ey = o.b * Math.sin(ang);
        const x = ox + ex * c - ey * s, y = oy + ex * s + ey * c;
        if (k > 0) {
          const f = k / N;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(255,255,255,${(o.peak * f * f).toFixed(3)})`;
          ctx.lineWidth = o.w * (0.3 + 0.7 * f);
          ctx.stroke();
        }
        px = x; py = y; hx = x; hy = y;
      }
      if (o.dot) {
        ctx.beginPath();
        ctx.arc(hx, hy, 2 + o.w, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.fill();
      }
    }
  }

  /* ---------- fotos em órbita ---------- */
  function buildPhotos() {
    const imgs = (CONTENT.vision && CONTENT.vision.images) || [];
    photos = imgs.map((it, i) => {
      const spec = PHOTO_ORBITS[i % PHOTO_ORBITS.length];
      const cycle = Math.floor(i / PHOTO_ORBITS.length);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'vision-photo';
      btn.style.setProperty('--s', it.size || PHOTO_SIZES[i % PHOTO_SIZES.length]);

      const img = new Image();
      img.src = it.src;
      img.alt = it.alt || '';
      img.draggable = false;
      img.addEventListener('error', () => {
        const note = document.createElement('span');
        note.className = 'vision-missing';
        note.textContent = 'Foto não encontrada: ' + it.src;
        img.replaceWith(note);
      });
      btn.appendChild(img);
      photosEl.appendChild(btn);

      const p = {
        el: btn, spec,
        phi: (spec.phase + cycle * 37) * Math.PI / 180,
        speed: spec.speed * (cycle % 2 ? -1 : 1),
        v: 1, hover: false, a: 0, b: 0, cos: 1, sin: 0
      };
      btn.addEventListener('mouseenter', () => { p.hover = true; });
      btn.addEventListener('mouseleave', () => { p.hover = false; });
      btn.addEventListener('focus', () => { p.hover = true; });
      btn.addEventListener('blur', () => { p.hover = false; });
      btn.addEventListener('click', () => {
        const el = btn.querySelector('img');
        if (el) openLightbox(el.src, el.alt);
      });
      return p;
    });
  }

  function layoutPhotos() {
    const vmin = Math.min(W, H);
    const m = Math.max(70, vmin * 0.1);               // margem para a foto não sair do ecrã
    photos.forEach(p => {
      const t = p.spec.tilt * Math.PI / 180;
      const c = Math.cos(t), s = Math.sin(t);
      const a = p.spec.fa * W / 2, b = p.spec.fb * H / 2;
      const hw = Math.hypot(a * c, b * s), hh = Math.hypot(a * s, b * c);
      const k = Math.min(1, (W / 2 - m) / hw, (H / 2 - m) / hh);
      p.a = a * k; p.b = b * k; p.cos = c; p.sin = s;
    });
  }

  function updatePhotos(dt) {
    for (const p of photos) {
      p.v += ((p.hover ? 0 : 1) - p.v) * Math.min(1, dt * 6);   // abranda quando o rato está por cima
      p.phi += p.speed * VISION.photoSpeed * p.v * dt;
      const ex = p.a * Math.cos(p.phi), ey = p.b * Math.sin(p.phi);
      const x = W / 2 + ex * p.cos - ey * p.sin;
      const y = H / 2 + ex * p.sin + ey * p.cos;
      const sc = 1 + 0.07 * Math.sin(p.phi);                    // ligeira sensação de profundidade
      p.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${sc.toFixed(3)})`;
    }
  }

  /* ---------- perguntas no centro ---------- */
  function startQuestions() {
    const list = ((CONTENT.vision && CONTENT.vision.questions) || []).filter(Boolean);
    if (!list.length) return;
    const token = ++qToken;
    const wait = ms => new Promise(res => { qTimer = setTimeout(res, ms); });
    (async function loop() {
      let i = 0;
      await wait(900);
      while (token === qToken) {
        const q = list[i % list.length];
        qEl.textContent = q;
        qEl.classList.add('show');
        await wait(VISION.questionFadeMs + VISION.questionReadMs + q.length * 35);
        if (token !== qToken) return;
        qEl.classList.remove('show');
        await wait(VISION.questionFadeMs + VISION.questionGapMs);
        i++;
      }
    })();
  }

  function stopQuestions() {
    qToken++;
    clearTimeout(qTimer);
    qEl.classList.remove('show');
  }

  /* ---------- ciclo de animação ---------- */
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildOrbits();
    layoutPhotos();
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    drawOrbits(dt);
    updatePhotos(dt);
    raf = requestAnimationFrame(frame);
  }

  function paragraphs(el, text) {
    el.replaceChildren(...(text || '').split(/\n{2,}/).filter(Boolean).map(t => {
      const p = document.createElement('p');
      p.textContent = t;
      return p;
    }));
  }

  function build() {
    if (built) return;
    built = true;
    const v = CONTENT.vision || {};
    paragraphs(tlEl, v.textTopLeft);
    paragraphs(brEl, v.textBottomRight);
    buildPhotos();
    window.addEventListener('resize', () => { if (running) resize(); });
  }

  /* ---------- abrir e fechar ---------- */
  function open() {
    build();
    document.body.classList.add('in-vision');
    root.hidden = false;
    resize();
    running = true;
    last = performance.now();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(frame);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('open')));
    startQuestions();
  }

  function close() {
    root.classList.remove('open');
    stopQuestions();
    document.body.classList.remove('in-vision');
    setTimeout(() => {
      if (root.classList.contains('open')) return;
      root.hidden = true;
      running = false;
      cancelAnimationFrame(raf);
    }, 750);
  }

  return { open, close };
})();
