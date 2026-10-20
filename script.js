/ ===== Frota =====
const FOTO_PADRAO = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80';

function selecionarOnibus(prefixo, chassi, motor, montadora, foto) {
  const img = document.getElementById('foto-onibus-destaque');
  img.classList.add('trocando');
  setTimeout(() => {
    img.src = foto || FOTO_PADRAO;
    img.alt = 'Ônibus prefixo ' + prefixo;
    img.classList.remove('trocando');
  }, 200);
  document.getElementById('destaque-prefixo').textContent = prefixo;
  document.getElementById('destaque-montadora').textContent = montadora;
  document.getElementById('destaque-chassi').textContent = chassi;
  document.getElementById('destaque-motor').textContent = motor;

  document.querySelectorAll('.card-onibus').forEach(c => {
    c.classList.toggle('ativo', c.querySelector('.badge-prefixo').textContent.trim() === String(prefixo));
  });
  // No celular, leva a pessoa até a foto
  if (window.innerWidth <= 900) {
    document.querySelector('.painel-foto').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // IDs das seções para a navegação
  $('.header').id = 'home';
  $('.frota-section').id = 'frota';
  $('.almoxarifado-section').id = 'equipe';
  const historia = $('#historia-detalhada');

  // ----- Barra de progresso -----
  const progresso = document.createElement('div');
  progresso.id = 'progresso';
  document.body.prepend(progresso);

  // ----- Navegação fixa + tema -----
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('aria-label', 'Principal');
  nav.innerHTML = `
    <div class="container">
      <a class="nav-marca" href="#home">Cidade <b>Sol</b> · Pirajá</a>
      <div class="nav-links" id="nav-links">
        <a href="#home">Home</a>
        <a href="#historia-detalhada">História</a>
        <a href="#equipe">Equipe de Almoxarifado</a>
        <button class="btn-tema" id="btn-tema" aria-label="Alternar tema escuro">◐</button>
      </div>
      <button class="btn-menu" id="btn-menu" aria-label="Abrir menu" aria-expanded="false">☰</button>
    </div>`;
  document.body.prepend(nav);

  $('#btn-menu').addEventListener('click', e => {
    const aberto = $('#nav-links').classList.toggle('aberto');
    e.currentTarget.setAttribute('aria-expanded', aberto);
  });
  $$('#nav-links a').forEach(a => a.addEventListener('click', () => $('#nav-links').classList.remove('aberto')));

  const aplicarTema = t => {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('tema', t); } catch (e) {}
  };
  let salvo = null;
  try { salvo = localStorage.getItem('tema'); } catch (e) {}
  aplicarTema(salvo || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  $('#btn-tema').addEventListener('click', () =>
    aplicarTema(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  // ----- Números no cabeçalho (calculados do próprio HTML) -----
  const cards = $$('.card-onibus');
  const stats = document.createElement('div');
  stats.className = 'stats';
  stats.innerHTML = `
    <div><strong>${cards.length}</strong><span>ônibus na garagem</span></div>
    <div><strong>${$$('.card-integrante').length}</strong><span>no almoxarifado</span></div>
    <div><strong>1940</strong><span>origem da Cidade Sol</span></div>`;
  $('.header .container').appendChild(stats);

  // ----- Frota: acessibilidade por teclado + busca -----
  cards.forEach(c => {
    c.tabIndex = 0;
    c.setAttribute('role', 'button');
    c.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); }
    });
  });

  const lista = $('.lista-onibus');
  const busca = document.createElement('div');
  busca.className = 'busca-frota';
  busca.innerHTML = '<input type="search" placeholder="Buscar por prefixo, montadora ou chassi..." aria-label="Buscar ônibus">';
  lista.before(busca);
  const vazio = document.createElement('p');
  vazio.className = 'vazio';
  vazio.textContent = 'Nenhum ônibus encontrado. Tente outro prefixo ou montadora.';
  vazio.hidden = true;
  lista.appendChild(vazio);

  $('input', busca).addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    let achou = 0;
    cards.forEach(c => {
      const ok = c.textContent.toLowerCase().includes(q);
      c.hidden = !ok;
      if (ok) achou++;
    });
    vazio.hidden = achou > 0;
  });

  // ----- Imagens quebradas: foto da frota volta ao padrão; equipe vira iniciais -----
  $('#foto-onibus-destaque').addEventListener('error', function () {
    if (this.src !== FOTO_PADRAO) this.src = FOTO_PADRAO;
  });
  $$('.moldura-equipe img').forEach(img => {
    const trocar = () => {
      const nome = img.alt.trim().split(/\s+/);
      const ini = (nome[0][0] + (nome[1] ? nome[1][0] : '')).toUpperCase();
      img.parentElement.innerHTML = `<span class="iniciais" aria-label="${img.alt}">${ini}</span>`;
    };
    img.addEventListener('error', trocar);
    if (img.complete && img.naturalWidth === 0) trocar();
  });
  $$('.article-image img').forEach(img =>
    img.addEventListener('error', () => img.closest('figure').hidden = true));

  // ----- Sumário automático da história -----
  const partes = $$('.part-title', historia);
  const content = $('.article-content', historia);
  const sumario = document.createElement('aside');
  sumario.className = 'sumario';
  sumario.setAttribute('aria-label', 'Sumário');
  sumario.innerHTML = '<p>Nesta página</p>';
  partes.forEach((h, i) => {
    h.id = 'parte-' + (i + 1);
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace(/^PARTE\s+[IVX]+\s+—\s*/i, '').toLowerCase()
      .replace(/^./, c => c.toUpperCase());
    sumario.appendChild(a);
  });
  // sumário lateral removido (texto em tela cheia)

  // ----- Destaque do link ativo (nav + sumário) -----
  const ativar = (links, id) => links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + id));
  const navLinks = $$('#nav-links a[href^="#"]');
  const sumLinks = $$('a', sumario);
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      if (id.startsWith('parte-')) ativar(sumLinks, id); else ativar(navLinks, id === 'frota' ? 'home' : id);
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  [$('#home'), $('#frota'), $('#equipe'), historia, ...partes].forEach(el => io.observe(el));

  // ----- Rolagem: progresso + botão de topo -----
  const topo = document.createElement('button');
  topo.id = 'topo';
  topo.setAttribute('aria-label', 'Voltar ao topo');
  topo.textContent = '↑';
  topo.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(topo);

  const aoRolar = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progresso.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
    topo.classList.toggle('visivel', scrollY > 600);
  };
  addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();
});
