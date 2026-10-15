
const CONTENT = {
  scenario: {
    label: 'cenário 23',
    title: 'Cenário 23',
    kicker: 'Cenário principal',
    text:
      'Serviços legais permitem “corrigir” registos pessoais como fotos, comunicações ou históricos, criando um mercado de gestão de reputação retroativa. Discutir o passado exige provar que a versão do outro não foi alterada...' ,
  },

  variables: [
    {
      label: 'digital death',
      kicker: 'Variável',
      text:
        'A morte digital não é apenas uma morte de uma pessoa, mas é o desaparecimento de uma versão da sua identidade. Neste cenário somos capazes de pagar para apagarem momentos de queremos esquecer ou alterar alguma informação que não nos orgulhamos, e acabamos por tentar construir uma identidade que já não reconhece a pessoa que foi.\n\n' +
        'Mas ao podermos mudar o nosso passado não perdemos aquilo que realmente somos?',
      media: [],
      // NOVA PROPRIEDADE: My Vision específica desta variável
      visionBubble: {
        label: 'my vision',
        kicker: 'My Vision · Digital Death',
        title: 'My Vision — Digital Death',
        text:
          'A morte digital pode ser entendida como o desaparecimento de uma versão anterior de uma pessoa, mesmo quando essa pessoa continua viva. Se a identidade for constantemente reconstruída através de memórias ou registos, a mudança constante destes elementos altera a forma como a pessoa é reconhecida.\n\n' +
          'Esta possibilidade permite explorar uma contradição: queremos ter liberdade de mudar e alterar para deixarmos de ser quem fomos, mas o passado é aquilo que nos permite reconhecer quem somos através das nossos atos e escolhas.\n\n' +
          'O problema surge quando o desaparecimento dos vestígios deixa de ser uma escolha individual e passa a comprometer a memória e a limitação dos outros conhecerem a história.'
      },
      refs: [
        {
          title: 'The Memory Police — Yoko Ogawa',
          author: 'Yoko Ogawa',
          year: '',
          text:
            'Uma sociedade onde o próprio acto de esquecer é imposto. Na história, objectos desaparecem e as pessoas deixam progressivamente de se lembrar deles. A polícia encarrega-se de remover os vestígios desses objectos.\n\n' +
            'O que acontece a uma sociedade quando aquilo que aconteceu deixa de poder ser lembrado?\n\n' +
            '> “The struggle of man against power is the struggle of memory against forgetting.”\n\n' +
            'Esta formulação aparece na discussão do Booker Prize (podcast) sobre o romance, associando-o à ideia de que a luta contra o poder pode ser também uma luta para preservar a memória.\n\n' +
            'Se ninguém consegue encontrar provas de que algo aconteceu, isso torna o acontecido menos real?',
          media: [
            { type: 'image', src: 'media/capa memory police .jpg', caption: 'Capa de The Memory Police', half: true },
            { type: 'image', src: 'media/the book of priece.png', caption: 'The Booker Prize Podcast — Episode 15: Our October Book of the Month', half: true,
              link: 'https://thebookerprizes.com/the-booker-library/features/book-of-the-month-the-memory-police-by-yoko-ogawa-translated-by-stephen' }
          ],
          url: ''
        },
        {
          title: 'nijimu / “to seep into”',
          author: 'Nicole Wei, Echo Zhou, Mavis Zhang and Yokis Bai',
          year: '',
          text: 'Nijimu parte da ideia de que existem experiências que não precisamos de eliminar; precisamos de aprender a deixá-las transformar-se. O projecto propõe uma ferramenta especulativa para lidar com memórias e perdas que permanecem connosco. O utilizador narra uma experiencia, seleciona as palavras que considera significativas e trensforma o fragmento resultante numa forma tridimensional que pode manipular.\n\n' +
                '"to seep into", *Bleed through* em japonês: a qualidade precisa de como algo se dissolve sem desaparecer. É uma ferramenta especulativa de bem-estar da memória para perdas que não se configuram como crise, mas que não vão embora: uma amizade que terminou sem brigas, uma versão que se deixada para trás em uma cidade onde não mora mais, uma lembrança que se sente escapar e não se tem onde guardar.',
          media: [
            { type: 'image', src: 'media/nijimu .png', caption: 'modeling memories', half: true , link:'https://designawards.core77.com/speculative-design/143407/nijimu-to-seep-into'},
            { type: 'video', src: 'media/nijimu video.mp4', caption: 'apresentação nijimu' }
          ],
          url: ''
        }
      ]
    },
    {
      label: 'digital authenticity',
      kicker: 'Variável',
      text: 'A autenticidade digital diz respeito à possibilidade de compreender a origem de um artefacto digital, entender se esse foi alterado e perceber se podemos confiar nele. Neste cenário a questão deixa de ser apenas se uma informação é verdadeira ou falsa, passa também a ser também quem produziu? quantas alterações já sofreu? Uma fotografia pode ter sido alterada, uma memória pode ser imprecisa e um documento autêntico pode não contar a historia toda.',
      media: [],
      // NOVA PROPRIEDADE: My Vision específica desta variável
      visionBubble: {
        label: 'my vision',
        kicker: 'My Vision · Digital Authenticity',
        title: 'My Vision — Digital Authenticity',
        text:
          'A autenticidade digital é o ponto em que o cenário deixa de ser apenas uma questão de memória individual e passa a afetar a confiança entre pessoas. Ao negar um acontecimento, terá de ser necessário provar que não foi manipulado. Surge assim uma diferença entre legalidade, autenticidade e verdade. Um registo pode ter sido legalmente alterado, isso não significa que representa o que realmente aconteceu.\n\n' +
          'A questão crítica é saber se, num mundo em que tudo pode ser corrigido, a verdade continua acessível a todos, ou passa a depender da capacidade de a demonstrar (se que isso é realmente possível).'
      },
      refs: [
        { 
          title: 'The Daily Post-truth', 
          author: 'Abel Quental, Beatriz Pinta, Diogo Lourenço e Madalena Lopes, cordenado por António Nicolas, Luísa Ribas and Sofia Gonçalves.', 
          year: '', 
          text: 'The Daily Post-Truth é um jornal de distribuição gratuita focado nas tensões entre verdade e pós-verdade, ficção e realidade, resultante de um projeto conjunto entre o Departamento de Design de Comunicação da Faculdade de Belas-Artes da Universidade de Lisboa (FBAUL) e o Museu de Arte, Arquitetura e Tecnologia (maat).\n\n' +
                'O projeto é motivado por um interesse renovado na ficção particularmente no âmbito das práticas artísticas e do design enquanto um dos modos discursivos mais capazes de restaurar um sentido de realidade na era da pós-verdade. Ao explorar criativamente o jornal como um modelo editorial em crise, o *The Daily Post-Truth* utiliza a ficção como base para uma prática de design especulativa e crítica, que busca questionar os mecanismos de disseminação de desinformação na era da pós-verdade.', 
          media: [
             { type: 'image', src: 'media/the daily post-truth1.jpg', caption: 'The daily post-truth 1', half: true , link: 'https://www.belasartes.ulisboa.pt/en/the-daily-post-truth-ja-disponivel/' },
             { type: 'image', src: 'media/the daily post.truth2.jpeg', caption: 'The daily post-truth 2', half: true },
             { type: 'image', src: 'media/the daily post-truth3.jpeg', caption: 'The daily post-truth 3', half: true }
          ],
          url: '' 
        },
        { 
          title: 'Project Provenance', 
          author: 'Microsoft',
          year: '', 
          text: 'Os avanços na IA generativa estão acelerando a criação de conteúdo sintético altamente realista, tornando tênue a fronteira entre o que é real e o que é fabricado. À medida que esse conteúdo se dissemina pela web e pelo discurso cotidiano, a capacidade de compreender a origem da informação e como ela foi alterada nunca foi tão importante.\n\n' +
                'O Project Provenance concentra-se em um desafio crítico e pouco explorado: como as pessoas compreendem e utilizam indicadores sobre a origem e o histórico de conteúdos digitais. Colocamos a compreensão do usuário final no centro, explorando por meio de design centrado no ser humano e estudos empíricos como as informações de procedência podem se tornar mais acessíveis, significativas e úteis para a tomada de decisões em contextos do mundo real.\n\n' +
                'Ao unir inovação técnica e experiência humana, o Project Provenance busca fortalecer a confiança na mídia digital e capacitar as pessoas a avaliar melhor o conteúdo com o qual se deparam diariamente.' ,
          media:[
             { type: 'image', src: 'media/Project Provenance1.png', caption: 'Project Provenance1', half: true , link:'https://www.microsoft.com/en-us/research/project/project-provenance/'},
             { type: 'image', src: 'media/Project Provenance2.png', caption: 'Project Provenance2', half: true },
          ],
          url: '' 
        }
      ]
    },
    {
      label: 'digital privacy',
      kicker: 'Variável',
      text: 'Se temos o direito de controlar a nossa identidade digital, até que ponto temos também o direito de controlar a forma como os outros se lembram de nós? A privacidade digital está relacionada com o controlo sobre a recolha, utilização, conservação e divulgação dos nossos dados pessoais.',
      media: [],
      // NOVA PROPRIEDADE: My Vision específica desta variável
      visionBubble: {
        label: 'my vision',
        kicker: 'My Vision · Digital Privacy',
        title: 'My Vision — Digital Privacy',
        text:
          'Não devemos assumir que preservar todos os dados é sempre a melhor solução, os registros podem expor pessoas, perpetuar erros, revelar informações íntimas. O direito ao esquecimento existe justamente porque a conservação e a acessibilidade permanentes também podem ser prejudiciais.\n\n' +
          'A questão não é, portanto, defender que tudo deve ser conservado. É entender quem decide o que merece ser conservado, em que condições pode ser alterado e como se protege simultaneamente a privacidade individual e o direito dos outros de conhecer factos relevantes.'
      },
      refs: [
        { 
          title: 'Eternal Sunshine of the Spotless Mind', 
          author: 'Michel Gondry', 
          year: '', 
          text: 'Depois que um relacionamento termina, os protagonistas recorrem a um procedimento que permite eliminar memórias associadas um ao outro. Embora o filme trate de memória e não de privacidade digital, ele apresenta uma ligação entre o desejo de eliminar uma experiência dolorosa e a tentativa de controlar a própria história. A eliminação de uma memória não apaga necessariamente as consequências da experiência ou a influência que ela teve na identidade de uma pessoa.', 
          media:[
             { type: 'image', src: 'media/ESSE1.jpeg', caption: 'poster filme', half: true , link:'https://www.imdb.com/title/tt0338013/'},
             { type: 'image', src: 'media/ESSM2.jpeg', caption: 'Eternal Sunshine of the Spotless Mind', half: true },
             { type: 'image', src: 'media/ESSM3.jpg', caption: 'Eternal Sunshine of the Spotless Mind', half: true }
          ],
          url: '' 
        },
        { 
          title: 'The right to be forgotten', 
          author: 'Artigo 17 da GDPR e Viktoria Biki', 
          year: '',
          text: 'The right to be forgotten aparece no Artigo 17 da GDPR. Ele diz (O titular dos dados tem o direito de obter do colaborador o apagamento dos dados pessoais que lhe digam respeito sem demora injustificada, e o controlador tem obrigação de apagar os dados sem demora injustificadas),O direito de controlar os próprios dados perde o sentido se as pessoas não puderem agir quando deixam de consentir com o tratamento, quando existem erros significativos nos dados ou se acreditam que as informações estão sendo armazenadas de forma desnecessária. Nesses casos, o indivíduo pode solicitar o apagamento dos dados, no entanto, não se trata de um direito absoluto. Se o fosse, teriam razão os críticos que argumentam que o direito ao esquecimento não passa de uma reescrita da história, assim, o GDPR equilibra-se em uma linha tênue no que diz respeito ao apagamento de dados.\n\n' +
                '"The Right to Be Forgotten" (O Direito de Ser Esquecido), da designer de interação Viktoria Biki, é um projeto de design especulativo e um comentário crítico inspirado nas leis de privacidade de dados do GDPR da União Europeia. O projeto apresenta um dispositivo de hardware conceitual chamado "Boxfish", que utiliza a biomimética inspirada nas estratégias de defesa do peixe-cofre tropical para ajudar os usuários a camuflar dados, afugentar predadores digitais e eliminar ativamente informações pessoais de redes invasoras. Reconhecido nas comunidades de tecnologia e arte, o projeto evidencia a lacuna entre os direitos legais de exclusão e a realidade complexa de apagar rastros digitais.' , 
          media:[
             { type: 'image', src: 'media/the right to be forgoten1.webp', caption: 'BOXFISH', half: true , link:'https://www.bikiviki.com'},
             { type: 'image', src: 'media/The rignt to be forgoten2.webp', caption: 'cute but toxic', half: true },
             { type: 'image', src: 'media/the rigth to be forgoten 3.webp', caption: 'data predadores', half: true }
          ],
          url: '' 
        }
      ]
    }
  ],

  vision: {
    label: "my vision",
    textTopLeft:
      "Em vez de se procurar em corrigir as memórias deve se preocupar como aprender com elas, crescer nelas e procurar preservar. Num mundo cheio de ansiedade e preocupação com a nossa imagem devemos perceber como torna-la segura e única, porque uma coisa é certa as pessoas e as sociedades não evoluiam, não melhoraram se não conhecessem o seu passado, se não aprendessem com os seus erros.",
    textBottomRight:
      "Apesar deste ser um cenário ficcional hoje em dia temos algo semelhante que toca em algumas das questões aqui propostas, hoje em dia os livros têm valorizado cada vez mais mas não é porque as pessoas tem começado a ler mais mas sim porque os data centers aperceberam se que comprar livros ajuda a recolher melhor data sem terem que se preocupar com copyright e alguns destes datas center têm destruído coleções inteiras de livros e informações, perdemos o aceso a essa informações e ficamos dependentes de um computador que é capaz de manipular e “corrigir” a informação original.",
    questions: [
      "Se podemos alterar os vestígios do passado, podemos ainda provar aquilo que aconteceu?",
      "Se podemos alterar aquilo que conseguimos provar, podemos também alterar a narrativa que temos sobre nós próprios?",
      "Uma memória perfeita seria algo bom?",
      "Será que uma pessoa pode ser reduzida à versão editada da sua vida?",
      "Se ninguém consegue encontrar provas de que algo aconteceu, isso torna o acontecimento menos real?"
    ],
    images: [
      { src: 'media/vision1.png', alt: 'Foto 1' },
      { src: 'media/vision2.png', alt: 'Foto 2' },
      { src: 'media/vision3.png', alt: 'Foto 3' },
      { src: 'media/vision4.png', alt: 'Foto 4' },
      { src: 'media/vision5.png', alt: 'Foto 5' },
      { src: 'media/vision7.png', alt: 'Foto 6' },
      { src: 'media/vison6.png', alt: 'Foto 7' },
      { src: 'media/vison8.png', alt: 'Foto 8' }
    ]
  }
};

/* ==========================================================
   CÓDIGO DE NAVEGAÇÃO E ANIMAÇÃO
   ========================================================== */
const stage       = document.getElementById('stage');
const linesSvg    = document.getElementById('lines');
const backBtn     = document.getElementById('back');
const footerRight = document.getElementById('footer-right');
const modal       = document.getElementById('modal');
const mClose      = document.getElementById('modal-close');
const mKicker     = document.getElementById('modal-kicker');
const mTitle      = document.getElementById('modal-title');
const mBody       = document.getElementById('modal-body');
const mLink       = document.getElementById('modal-link');
const mMedia      = document.getElementById('modal-media');
const panel       = modal.querySelector('.panel');
const lightbox    = document.getElementById('lightbox');
const lbImg       = document.getElementById('lightbox-img');

const SVGNS = 'http://www.w3.org/2000/svg';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SPEED = reduceMotion ? 8 : 30;
const TRANSITION_MS = 950;

let W, H, RC, RS, cx, cy;
let center = null;
let sats = [];
let view = 'main';
let busy = false;
let lastFocus = null;

function measure() {
  W = stage.clientWidth;
  H = stage.clientHeight;
  const m = Math.min(W, H);
  RC = Math.max(60, Math.min(130, m * 0.12));
  RS = RC * 0.72;
  cx = W / 2;
  cy = H / 2;
}

function fontFor(n) {
  const k = n.kind === 'center' ? 0.21 : n.kind === 'ref' ? 0.15 : 0.19;
  return Math.max(10, n.r * k);
}

function applySize(n) {
  n.el.style.width = n.el.style.height = n.r * 2 + 'px';
  n.el.style.fontSize = fontFor(n) + 'px';
}

function place(n) {
  n.el.style.transform = `translate(${n.x - n.r}px, ${n.y - n.r}px)`;
}

function createBubble(kind, label, r, data) {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = `bubble ${kind} hidden`;
  const span = document.createElement('span');
  span.textContent = label;
  el.appendChild(span);
  stage.appendChild(el);

  const n = { el, kind, r, scale: 1, x: cx, y: cy, vx: 0, vy: 0, line: null, fixed: false, data };
  el.addEventListener('click', () => onBubble(n));
  applySize(n);
  place(n);
  return n;
}

function addLine(n) {
  const l = document.createElementNS(SVGNS, 'line');
  l.setAttribute('class', 'link hidden');
  linesSvg.appendChild(l);
  n.line = l;
}

function fadeIn(n) {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    n.el.classList.remove('hidden');
    if (n.line) n.line.classList.remove('hidden');
  }));
}

function scatter(list) {
  const placed = [];
  list.forEach(n => {
    for (let i = 0; i < 200; i++) {
      n.x = n.r + Math.random() * (W - 2 * n.r);
      n.y = n.r + Math.random() * (H - 2 * n.r);
      const farFromCenter = Math.hypot(n.x - cx, n.y - cy) > RC + n.r + 20;
      const farFromOthers = placed.every(p => Math.hypot(n.x - p.x, n.y - p.y) > p.r + n.r + 10);
      if (farFromCenter && farFromOthers) break;
    }
    placed.push(n);
    const a = Math.random() * Math.PI * 2;
    const s = SPEED * (0.7 + Math.random() * 0.6);
    n.vx = Math.cos(a) * s;
    n.vy = Math.sin(a) * s;
    place(n);
  });
}

function buildMain() {
  view = 'main';
  center = createBubble('center', CONTENT.scenario.label, RC, CONTENT.scenario);
  center.x = cx; center.y = cy;
  place(center);

  const items = CONTENT.vision
    ? [...CONTENT.variables, Object.assign({ isVision: true }, CONTENT.vision)]
    : CONTENT.variables;
  sats = items.map(v => {
    const n = createBubble('variable', v.label, RS, v);
    if (v.isVision) n.el.classList.add('vision-bubble');
    addLine(n);
    return n;
  });
  scatter(sats);

  [center, ...sats].forEach(fadeIn);
  updateChrome();
}

// CONSTRUÇÃO ATUALIZADA DAS REFERÊNCIAS COM A BOLA "MY VISION"
function buildRefs(v) {
  sats = [];

  // Se existir a propriedade visionBubble na variável, cria a bola "my vision"
  if (v.visionBubble) {
    const visionNode = createBubble('ref', v.visionBubble.label, RS * 0.95, {
      isInnerVision: true,
      ...v.visionBubble
    });
    visionNode.el.classList.add('vision-bubble');
    addLine(visionNode);
    sats.push(visionNode);
  }

  // Adiciona as referências da variável
  v.refs.forEach(ref => {
    const len = Math.min(ref.title.length, 60);
    const scale = 0.95 + (len / 60) * 0.35;
    const n = createBubble('ref', ref.title, RS * scale, ref);
    n.scale = scale;
    addLine(n);
    sats.push(n);
  });

  scatter(sats);
  sats.forEach(fadeIn);
}

function updateChrome() {
  backBtn.hidden = view === 'main';
  const where = view === 'vision' ? CONTENT.vision.label : (center && center.data.label);
  footerRight.textContent = view === 'main'
    ? 'Pesquisa cenário 23'
    : `Pesquisa cenário 23 · ${where}`;
}

function onBubble(n) {
  if (busy) return;

  // Clicar na bola My Vision Principal (Ecrã Preto)
  if (n.data && n.data.isVision) return openVision();

  if (n.kind === 'variable') return showVariable(n);

  if (n.kind === 'center') {
    const d = n.data;
    return openModal({ kicker: d.kicker, title: d.title || d.label, text: d.text, media: d.media });
  }

  // Clicar na bola My Vision interna da Variável ou numa Referência -> Abre a Janela/Modal
  const r = n.data;
  openModal({
    kicker: r.isInnerVision ? r.kicker : [r.author, r.year].filter(Boolean).join(' · '),
    title: r.title,
    text: r.text,
    media: r.media,
    url: r.url
  });
}

function openVision() {
  if (typeof Vision === 'undefined') return;
  view = 'vision';
  updateChrome();
  Vision.open();
}

function showVariable(n) {
  busy = true;
  const v = n.data;
  const others = [center, ...sats.filter(s => s !== n)];

  others.forEach(o => o.el.classList.add('hidden'));
  sats.forEach(s => s.line && s.line.classList.add('hidden'));

  n.fixed = true;
  n.el.classList.add('moving');
  n.el.classList.remove('variable');
  n.el.classList.add('center');
  n.kind = 'center';
  n.r = RC; n.x = cx; n.y = cy;
  applySize(n);
  place(n);

  setTimeout(() => {
    others.forEach(o => o.el.remove());
    sats.forEach(s => s.line && s.line.remove());
    n.el.classList.remove('moving');
    n.fixed = false;
    center = n;
    sats = [];
    view = 'variable';
    buildRefs(v);
    updateChrome();
    busy = false;
  }, TRANSITION_MS);
}

function goBack() {
  if (view === 'vision') {
    Vision.close();
    view = 'main';
    updateChrome();
    return;
  }
  if (busy || view === 'main') return;
  busy = true;
  const all = [center, ...sats];
  all.forEach(o => {
    o.el.classList.add('hidden');
    if (o.line) o.line.classList.add('hidden');
  });
  setTimeout(() => {
    all.forEach(o => { o.el.remove(); if (o.line) o.line.remove(); });
    center = null; sats = [];
    buildMain();
    busy = false;
  }, 700);
}

const VIDEO_FILE = /\.(mp4|webm|mov|m4v|ogv)(\?.*)?$/i;

function embedUrl(u) {
  let m = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (m) return 'https://www.youtube-nocookie.com/embed/' + m[1];
  m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return 'https://player.vimeo.com/video/' + m[1];
  return null;
}

function mediaFigure(item) {
  const fig = document.createElement('figure');
  fig.className = 'media-item' + (item.half ? ' half' : '');
  const src = item.src || item.url || '';
  const embed = embedUrl(src);
  let el;

  if (item.type === 'video' || embed || VIDEO_FILE.test(src)) {
    el = document.createElement('div');
    el.className = 'video-box';
    if (embed) {
      const f = document.createElement('iframe');
      f.src = embed;
      f.title = item.caption || 'Vídeo';
      f.loading = 'lazy';
      f.allowFullscreen = true;
      f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen';
      el.appendChild(f);
    } else {
      const v = document.createElement('video');
      v.src = src;
      v.controls = true;
      v.playsInline = true;
      v.preload = 'metadata';
      if (item.poster) v.poster = item.poster;
      el.appendChild(v);
    }
  } else {
    const img = new Image();
    img.src = src;
    img.alt = item.alt || item.caption || '';
    img.loading = 'lazy';
    if (item.link) {
      img.classList.add('has-link');
      img.addEventListener('click', () => window.open(item.link, '_blank', 'noopener'));
    } else {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    }
    img.addEventListener('error', () => {
      const note = document.createElement('div');
      note.className = 'missing-note';
      note.textContent = 'Imagem não encontrada: ' + src;
      img.replaceWith(note);
    });
    el = img;
  }

  fig.appendChild(el);
  if (item.caption) {
    const cap = document.createElement('figcaption');
    if (item.link) {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = item.caption + ' ↗';
      cap.appendChild(a);
    } else {
      cap.textContent = item.caption;
    }
    fig.appendChild(cap);
  }
  return fig;
}

function textBlock(t) {
  if (t.startsWith('> ')) {
    const q = document.createElement('blockquote');
    q.textContent = t.slice(2);
    return q;
  }
  const p = document.createElement('p');
  p.textContent = t;
  return p;
}

function openModal(c) {
  lastFocus = document.activeElement;
  mKicker.textContent = c.kicker || '';
  mTitle.textContent = c.title || '';
  mBody.replaceChildren(...(c.text || '').split(/\n{2,}/).filter(Boolean).map(textBlock));

  const media = c.media || [];
  mMedia.replaceChildren(...media.map(mediaFigure));
  panel.classList.toggle('has-media', media.length > 0);

  if (c.url) { mLink.href = c.url; mLink.hidden = false; } else { mLink.hidden = true; }
  panel.scrollTop = 0;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  mClose.focus();
}

function closeModal() {
  closeLightbox();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => { if (!modal.classList.contains('open')) mMedia.replaceChildren(); }, 300);
  if (lastFocus) lastFocus.focus();
}

function openLightbox(src, alt) {
  lbImg.style.width = lbImg.style.height = '';
  lbImg.onload = () => {
    const k = Math.min(window.innerWidth * 0.9 / lbImg.naturalWidth,
                       window.innerHeight * 0.88 / lbImg.naturalHeight, 3);
    lbImg.style.width = Math.round(lbImg.naturalWidth * k) + 'px';
    lbImg.style.height = Math.round(lbImg.naturalHeight * k) + 'px';
  };
  lbImg.src = src;
  lbImg.alt = alt || '';
  lightbox.hidden = false;
}

function closeLightbox() {
  lbImg.onload = null;
  lightbox.hidden = true;
  lbImg.removeAttribute('src');
}

mClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!lightbox.hidden) closeLightbox();
  else if (modal.classList.contains('open')) closeModal();
  else if (view === 'vision') goBack();
});
backBtn.addEventListener('click', goBack);

function bounceOffStatic(s, c) {
  const dx = s.x - c.x, dy = s.y - c.y;
  const d = Math.hypot(dx, dy) || 0.001;
  const min = s.r + c.r + 4;
  if (d < min) {
    const nx = dx / d, ny = dy / d;
    s.x = c.x + nx * min;
    s.y = c.y + ny * min;
    const dot = s.vx * nx + s.vy * ny;
    if (dot < 0) { s.vx -= 2 * dot * nx; s.vy -= 2 * dot * ny; }
  }
}

function step(dt) {
  if (!center) return;
  const live = sats.filter(s => !s.fixed);

  live.forEach(s => {
    s.x += s.vx * dt;
    s.y += s.vy * dt;

    if (s.x < s.r)          { s.x = s.r;     s.vx =  Math.abs(s.vx); }
    else if (s.x > W - s.r) { s.x = W - s.r; s.vx = -Math.abs(s.vx); }
    if (s.y < s.r)          { s.y = s.r;     s.vy =  Math.abs(s.vy); }
    else if (s.y > H - s.r) { s.y = H - s.r; s.vy = -Math.abs(s.vy); }

    bounceOffStatic(s, center);
  });

  for (let i = 0; i < live.length; i++) {
    for (let j = i + 1; j < live.length; j++) {
      const a = live[i], b = live[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 0.001;
      const min = a.r + b.r + 4;
      if (d < min) {
        const nx = dx / d, ny = dy / d;
        const push = (min - d) / 2;
        a.x -= nx * push; a.y -= ny * push;
        b.x += nx * push; b.y += ny * push;
        const rel = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
        if (rel > 0) {
          a.vx -= rel * nx; a.vy -= rel * ny;
          b.vx += rel * nx; b.vy += rel * ny;
        }
      }
    }
  }

  live.forEach(place);

  sats.forEach(s => {
    if (!s.line) return;
    const dx = s.x - center.x, dy = s.y - center.y;
    const d = Math.hypot(dx, dy) || 1;
    const ux = dx / d, uy = dy / d;
    s.line.setAttribute('x1', center.x + ux * center.r);
    s.line.setAttribute('y1', center.y + uy * center.r);
    s.line.setAttribute('x2', s.x - ux * s.r);
    s.line.setAttribute('y2', s.y - uy * s.r);
  });
}

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  step(dt);
  requestAnimationFrame(frame);
}

window.addEventListener('resize', () => {
  measure();
  if (!center) return;
  center.r = RC; center.x = cx; center.y = cy;
  applySize(center); place(center);
  sats.forEach(s => {
    s.r = RS * (s.scale || 1);
    s.x = Math.min(Math.max(s.x, s.r), W - s.r);
    s.y = Math.min(Math.max(s.y, s.r), H - s.r);
    applySize(s); place(s);
  });
});

measure();
buildMain();
requestAnimationFrame(frame);
