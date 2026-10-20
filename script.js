@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

:root{
  --ink:#002b49; --ink2:#00436f; --primary-yellow:#ffc72c; --sun:#ff9f1c; --yellow-deep:#8a6400;
  --bg:#f1f5fa; --bg-light:#e4ecf6; --surface:#fff; --text:#1b2a3b; --muted:#5a6b80; --line:#d8e1ed;
  --radius:16px; --shadow:0 2px 4px rgba(0,43,73,.06),0 12px 28px rgba(0,43,73,.10);
  --shadow-lg:0 18px 40px rgba(0,43,73,.22); --nav-h:60px;
}
[data-theme="dark"]{
  --yellow-deep:#ffc72c; --ink:#001a2d; --ink2:#00304f; --bg:#0b1626; --bg-light:#13243c; --surface:#122038;
  --text:#e8eef7; --muted:#9db0c8; --line:#25385a; --shadow:0 2px 4px rgba(0,0,0,.4),0 12px 28px rgba(0,0,0,.35);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:calc(var(--nav-h) + 20px)}
body{font-family:'Montserrat','Segoe UI',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.65;font-size:16px}
img{max-width:100%;display:block}
.container{width:min(1180px,100% - 2.5rem);margin-inline:auto}
:focus-visible{outline:3px solid var(--primary-yellow);outline-offset:2px}

/* ---------- Navegação ---------- */
#progresso{position:fixed;top:0;left:0;height:4px;width:0;background:linear-gradient(90deg,var(--primary-yellow),var(--sun));z-index:200}
.nav{position:sticky;top:0;z-index:100;height:var(--nav-h);background:rgba(0,43,73,.92);backdrop-filter:blur(10px)}
.nav .container{display:flex;align-items:center;justify-content:space-between;height:100%}
.nav-marca{font-weight:900;font-size:1.15rem;color:#fff;text-decoration:none;letter-spacing:.3px}
.nav-marca b{color:var(--primary-yellow)}
.nav-links{display:flex;gap:.3rem;align-items:center}
.nav-links a{color:#d6e2f0;text-decoration:none;padding:.5rem 1rem;border-radius:999px;font-weight:600;font-size:.88rem;transition:.2s}
.nav-links a:hover{color:#fff;background:rgba(255,255,255,.12)}
.nav-links a.ativo{color:var(--ink);background:var(--primary-yellow)}
.btn-tema,.btn-menu{background:rgba(255,255,255,.1);border:0;color:#fff;border-radius:50%;width:38px;height:38px;cursor:pointer;font-size:1rem;margin-left:.4rem}
.btn-menu{display:none}

/* ---------- Hero ---------- */
.header{position:relative;overflow:hidden;color:#fff;padding:5rem 0 6.5rem;
  background:radial-gradient(circle at 85% 20%,rgba(255,199,44,.35),transparent 38%),linear-gradient(135deg,var(--ink) 0%,var(--ink2) 100%)}
.header::before{content:"";position:absolute;right:-90px;top:-90px;width:380px;height:380px;border-radius:50%;
  background:radial-gradient(circle,#ffe08a 0%,var(--primary-yellow) 45%,var(--sun) 100%);opacity:.9;box-shadow:0 0 120px 40px rgba(255,199,44,.35)}
.header::after{content:"";position:absolute;left:0;right:0;bottom:0;height:22px;
  background:repeating-linear-gradient(90deg,var(--primary-yellow) 0 46px,transparent 46px 80px) center/100% 6px no-repeat,#00182a}
.header .container{position:relative;z-index:1}
.header h1{font-weight:900;font-size:clamp(2.2rem,6vw,4.2rem);line-height:1.02;max-width:12ch;letter-spacing:-1px}
.header p{margin-top:1rem;font-size:1.1rem;color:#cfdeee;max-width:46ch}
.stats{display:flex;gap:1rem;margin-top:2.2rem;flex-wrap:wrap}
.stats div{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:14px;padding:.9rem 1.3rem;backdrop-filter:blur(6px)}
.stats strong{display:block;font-weight:900;font-size:2rem;line-height:1;color:var(--primary-yellow)}
.stats span{font-size:.82rem;color:#d6e2f0}

main.container{padding:0 0 1rem;margin-top:-3.2rem;position:relative;z-index:2}
section h2{font-weight:800;font-size:1.9rem;color:var(--ink);margin-bottom:1.5rem;display:flex;align-items:center;gap:.8rem}
[data-theme="dark"] section h2{color:#fff}
section h2::before{content:"";width:8px;height:1.9rem;border-radius:4px;background:linear-gradient(var(--primary-yellow),var(--sun))}

/* ---------- Frota ---------- */
.frota-section{background:var(--surface);border-radius:24px;box-shadow:var(--shadow-lg);padding:2rem}
.frota-container{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:2rem;align-items:start}
.painel-foto{position:sticky;top:calc(var(--nav-h) + 20px);border-radius:20px;overflow:hidden;background:var(--ink);box-shadow:var(--shadow)}
.moldura-foto-onibus{aspect-ratio:16/10;overflow:hidden;position:relative}
.moldura-foto-onibus::after{content:"";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(transparent,rgba(0,26,45,.85))}
.moldura-foto-onibus img{width:100%;height:100%;object-fit:cover;transition:opacity .25s,transform .6s}
.painel-foto:hover .moldura-foto-onibus img{transform:scale(1.04)}
.moldura-foto-onibus img.trocando{opacity:0}
.info-destaque{padding:1.3rem 1.6rem 1.6rem;color:#dbe7f4;display:grid;grid-template-columns:1fr 1fr;gap:.2rem 1.2rem}
.info-destaque h3{grid-column:1/-1;font-weight:900;font-size:1.7rem;color:#fff;margin-bottom:.5rem}
.info-destaque h3 span{color:var(--primary-yellow)}
.info-destaque p{font-size:.88rem}
.info-destaque strong{display:block;font-size:.72rem;color:var(--primary-yellow);font-weight:700}

.busca-frota input{width:100%;padding:.9rem 1.2rem;margin-bottom:1rem;border:2px solid var(--line);border-radius:999px;background:var(--bg);color:var(--text);font:inherit;font-size:.92rem;transition:.2s}
.busca-frota input:focus{outline:0;border-color:var(--primary-yellow);box-shadow:0 0 0 4px rgba(255,199,44,.25)}
.lista-onibus{display:grid;gap:.7rem;max-height:560px;overflow-y:auto;padding:.2rem .5rem .2rem .2rem}
.card-onibus{display:flex;gap:1rem;align-items:center;background:var(--bg);border:2px solid transparent;border-radius:14px;padding:.8rem 1rem;cursor:pointer;transition:.2s}
.card-onibus:hover{background:var(--surface);box-shadow:var(--shadow);transform:translateY(-2px)}
.card-onibus.ativo{background:var(--surface);border-color:var(--primary-yellow);box-shadow:var(--shadow)}
.badge-prefixo{font-weight:900;font-size:1.25rem;min-width:84px;text-align:center;padding:.7rem .5rem;border-radius:12px;color:var(--ink);background:linear-gradient(135deg,var(--primary-yellow),var(--sun))}
.card-onibus.ativo .badge-prefixo{box-shadow:0 6px 14px rgba(255,159,28,.45)}
.dados-card p{font-size:.84rem;color:var(--muted);line-height:1.45}
.dados-card strong{color:var(--text);font-weight:700}
.vazio{padding:1.2rem;color:var(--muted);text-align:center}

/* ---------- Equipe ---------- */
.almoxarifado-section{margin-top:5rem;padding:3rem 2rem;border-radius:24px;background:linear-gradient(135deg,var(--ink),var(--ink2));color:#fff}
.almoxarifado-section h2{color:#fff}
.grid-equipe{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.3rem;margin-top:.5rem}
.card-integrante{background:var(--surface);color:var(--text);border-radius:20px;padding:1.8rem 1rem 1.4rem;text-align:center;transition:.25s;position:relative;overflow:hidden}
.card-integrante::before{content:"";position:absolute;inset:0 0 auto;height:64px;background:linear-gradient(135deg,var(--primary-yellow),var(--sun))}
.card-integrante:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
.moldura-equipe{position:relative;width:116px;height:116px;border-radius:50%;margin:0 auto .9rem;overflow:hidden;border:5px solid var(--surface);background:var(--bg-light);display:grid;place-items:center;box-shadow:var(--shadow)}
.moldura-equipe img{width:100%;height:100%;object-fit:cover}
.moldura-equipe .iniciais{font-weight:900;font-size:2rem;color:var(--ink2)}
.card-integrante h4{font-weight:800;font-size:1.05rem}
.funcao{display:inline-block;margin-top:.4rem;padding:.25rem .8rem;border-radius:999px;background:var(--bg-light);color:var(--muted);font-size:.78rem;font-weight:600}

/* ---------- História ---------- */
.historia-completa-section{margin-top:5rem;padding:5rem 0;background:var(--surface);position:relative}
.historia-completa-section::before{content:"";position:absolute;inset:0 0 auto;height:8px;background:repeating-linear-gradient(90deg,var(--primary-yellow) 0 46px,var(--ink) 46px 80px)}
.article-container{display:grid;grid-template-columns:250px minmax(0,1fr);gap:3.5rem;align-items:start}
.article-header{grid-column:1/-1;text-align:center;max-width:760px;margin:0 auto 1rem}
.article-title{font-weight:900;font-size:clamp(1.9rem,4.5vw,3rem);line-height:1.1;color:var(--ink)}
[data-theme="dark"] .article-title{color:#fff}
.article-subtitle{color:var(--muted);margin-top:1rem}
.sumario{position:sticky;top:calc(var(--nav-h) + 20px);background:var(--bg);border-radius:16px;padding:1.2rem .6rem;font-size:.84rem}
.sumario p{font-weight:800;padding:0 1rem .6rem;color:var(--ink)}
[data-theme="dark"] .sumario p{color:#fff}
.sumario a{display:block;padding:.5rem 1rem;color:var(--muted);text-decoration:none;border-radius:10px;font-weight:500;transition:.2s}
.sumario a:hover{background:var(--bg-light);color:var(--text)}
.sumario a.ativo{background:var(--primary-yellow);color:var(--ink);font-weight:700}
.article-content{max-width:72ch;font-size:1.02rem}
.article-content h3{font-weight:800;font-size:1.45rem;color:var(--ink);margin:2.4rem 0 .8rem;line-height:1.25}
[data-theme="dark"] .article-content h3{color:#fff}
.article-content h3.part-title{background:linear-gradient(135deg,var(--ink),var(--ink2));color:var(--primary-yellow);padding:1rem 1.4rem;border-radius:14px;font-size:1.05rem;margin-top:3.5rem;border-left:8px solid var(--primary-yellow)}
.article-content h4{font-weight:700;font-size:1.12rem;color:var(--ink2);margin:1.9rem 0 .5rem;padding-left:.9rem;border-left:4px solid var(--primary-yellow)}
[data-theme="dark"] .article-content h4{color:var(--primary-yellow)}
.article-content p,.article-content li{margin-bottom:1rem;color:var(--text)}
.article-content ul,.article-content ol{padding-left:1.5rem;margin-bottom:1.2rem}
.article-content li::marker{color:var(--sun);font-weight:800}
.article-image{margin:2.5rem 0}
.article-image img{width:100%;border-radius:18px;box-shadow:var(--shadow-lg)}
.article-image figcaption{font-size:.85rem;color:var(--muted);margin-top:.7rem;text-align:center}
.conclusao{background:linear-gradient(135deg,rgba(255,199,44,.18),rgba(255,159,28,.08));border-left:6px solid var(--primary-yellow);border-radius:0 18px 18px 0;padding:2rem;margin-top:3rem}
.conclusao h4{margin-top:0;border:0;padding:0;font-size:1.3rem}

.footer{margin-top:0;background:#00182a;color:#9db8d2;text-align:center;padding:2.5rem 1rem;font-size:.9rem;border-top:6px solid var(--primary-yellow)}
#topo{position:fixed;right:1.3rem;bottom:1.3rem;width:48px;height:48px;border-radius:50%;border:0;background:linear-gradient(135deg,var(--primary-yellow),var(--sun));color:var(--ink);font-size:1.3rem;font-weight:900;cursor:pointer;box-shadow:var(--shadow-lg);opacity:0;transform:translateY(10px);pointer-events:none;transition:.25s}
#topo.visivel{opacity:1;transform:none;pointer-events:auto}

@media (max-width:900px){
  .header{padding:3.5rem 0 5.5rem}.header::before{width:220px;height:220px;right:-70px;top:-60px}
  .frota-section{padding:1.2rem}
  .frota-container,.article-container{grid-template-columns:1fr}
  .painel-foto,.sumario{position:static}.sumario{display:none}
  .lista-onibus{max-height:none}
  .btn-menu{display:block}
  .nav-links{display:none;position:absolute;top:var(--nav-h);left:0;right:0;background:var(--ink);flex-direction:column;align-items:stretch;padding:.8rem 1rem}
  .nav-links.aberto{display:flex}
  .almoxarifado-section{padding:2rem 1.2rem}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}

/* ---------- História em tela cheia, em colunas ---------- */
.historia-completa-section .container{width:min(1500px,100% - 4rem)}
.article-container{display:block}
.article-title{display:block;text-align:center}
.article-title::before{display:none}
.sumario,.article-image{display:none}
.article-content{max-width:none;column-count:3;column-gap:3.5rem;column-rule:1px solid var(--line);font-size:1rem}
.article-content h3.part-title{column-span:all;margin:3rem 0 1.5rem}
.article-content h3,.article-content h4{break-after:avoid}
.article-content p,.article-content li{text-align:left;hyphens:auto}
.conclusao{column-span:all}
@media (max-width:1300px){.article-content{column-count:2}}
@media (max-width:800px){.article-content{column-count:1}.historia-completa-section .container{width:min(1500px,100% - 2rem)}}
