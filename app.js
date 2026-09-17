(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const translations = {
    es: {
      nav_inicio:'Inicio', nav_projects:'Proyectos', nav_cert:'Certificaciones', nav_contact:'Contacto', nav_site:'Bajo el capó',
      hero_eyebrow:'EXPERIENCIAS DIGITALES · WEB · IA · SISTEMAS', hero_title_prefix:'DIRIGIDO POR', hero_tagline:'JPEG PORTAFOLIO • LABORATORIO & GARAJE', hero_intro:'Diseñando experiencias digitales, sistemas interactivos y productos que convierten ideas en soluciones funcionales.', hero_cta:'Explorar proyectos', scroll_text:'DESLIZA PARA EXPLORAR',
      projects_kicker:'TRABAJO SELECCIONADO', projects_title:'Proyectos', projects_desc:'Seis piezas digitales que muestran diferentes formas de construir, experimentar y resolver problemas.',
      badge_live:'DESPLIEGUE ACTIVO', badge_nonprofit:'PROYECTO SIN ÁNIMO DE LUCRO',
      kicker_prisma:'Exploración Profesional & Autodescubrimiento Interactivo', desc_prisma:'Experiencia interactiva de autoconocimiento y exploración profesional que busca patrones a través de decisiones indirectas, evidencia cruzada y evaluación adaptativa.', cap_prisma_1:'EVALUACIÓN ADAPTATIVA', cap_prisma_2:'MEDICIÓN INDIRECTA', cap_prisma_3:'DISEÑO DE EXPERIENCIA',
      kicker_nexus:'Inteligencia Artificial & Sistemas Web Interactivos', desc_nexus:'Radar de inteligencia artificial, finanzas, herramientas web interactivas y recursos técnicos reunidos en una experiencia digital de arquitectura SPA.', cap_nexus_1:'SISTEMAS INTERACTIVOS', cap_nexus_2:'ARQUITECTURA SPA', cap_nexus_3:'CONTENIDO CON IA',
      kicker_hack:'Experiencia de Aprendizaje & Educación Asistida por IA', desc_hack:'Plataforma educativa enfocada en mentoría personalizada, inglés práctico, ritmo de aprendizaje y herramientas de IA aplicadas al proceso.', cap_hack_1:'DISEÑO EDUCATIVO', cap_hack_2:'FLUJOS DE MENTORÍA', cap_hack_3:'APRENDIZAJE ASISTIDO POR IA',
      kicker_store:'Recursos de IA, Ingeniería de Prompts & Flujos de Trabajo', desc_store:'Bóveda digital de recursos, manuales de ingeniería de prompts, optimización de flujos con IA y arquitecturas orientadas a la automatización.', cap_store_1:'INGENIERÍA DE PROMPTS', cap_store_2:'FLUJOS CON IA', cap_store_3:'ARQUITECTURA DIGITAL',
      kicker_cv:'Perfil Profesional & Portafolio Técnico', desc_cv:'Hoja de vida interactiva que reúne trayectoria, competencias, credenciales y proyectos clave en una experiencia web directa.', cap_cv_1:'MARCA PERSONAL', cap_cv_2:'INTERFAZ RESPONSIVA', cap_cv_3:'NARRATIVA TÉCNICA',
      kicker_parroquia:'Proyecto Web Institucional · Accesibilidad & Comunidad', desc_parroquia:'Proyecto web institucional desarrollado para una parroquia en Bogotá. Es un trabajo independiente para una organización religiosa y no representa los valores, creencias ni identidad personal de DIRECTED BY JPEG.', cap_parish_1:'DISEÑO ACCESIBLE', cap_parish_2:'INTERFAZ MULTILINGÜE', cap_parish_3:'INFORMACIÓN COMUNITARIA',
      cert_main_title:'Credenciales y Certificaciones', cert_main_desc:'Validación de competencias técnicas, cumplimiento normativo, desarrollo de software e inteligencia artificial.', cat_title_aml:'◈ Cumplimiento y Delitos Financieros', cat_title_sec:'◇ Ciberseguridad e Infraestructura', cat_title_ai:'◎ Inteligencia Artificial & Ética', cat_title_dev:'≋ Desarrollo Web & Operaciones',
      desc_aml_1:'Marcos operativos y prevención de lavado de activos.', desc_aml_2:'Tipologías de trata y monitoreo transaccional.', desc_sec_1:'Criptografía y mitigación de riesgos digitales.', desc_sec_2:'Gestión estratégica de la seguridad de la información.', desc_sec_3:'Evaluación de vulnerabilidades y pruebas de penetración.', desc_sec_4:'Soporte técnico, sistemas operativos y redes.', desc_sec_5:'Protocolos de red y arquitectura web.', desc_sec_6:'Administración de infraestructura IT y servidores.', desc_ai_1:'Gobernanza, marcos operativos y ética algorítmica.', desc_ai_2:'Estrategia, capacidades y casos de uso en IA.', desc_ai_3:'Privacidad, sesgo de datos y responsabilidad algorítmica.', desc_dev_1:'Arquitectura HTML, CSS, JavaScript y principios de UI.', desc_dev_2:'Flujos de trabajo colaborativos y despliegues con Git.', desc_dev_3:'Resolución técnica, estándares de servicio y flujos de trabajo.',
      contact_kicker:'CONECTEMOS', contact_main_title:'Contacto', contact_main_desc:'Canales directos para colaboración, proyectos o consultas técnicas', human_contact_title:'Nota humana', human_contact_desc:'Esto lo hizo un humano. Eso significa que puede haber un bug, una idea rara o algo que se pueda mejorar. Si encuentras algo, escríbeme por cualquiera de los canales de arriba.',
      site_main_title:'Bajo el capó', site_main_desc:'Detalles técnicos, stack visual y principios de diseño que mueven este sitio web.', card_arch_title:'Arquitectura', card_arch_desc:'SPA en HTML5 semántico, CSS nativo moderno con variables personalizadas y JS vanilla ligero sin librerías pesadas.', card_design_title:'Diseño Visual', card_design_desc:'Estética dark mode por defecto con tipografía Manrope e Inter, detalles en Fira Code y acentos en degradados sutiles.', card_perf_title:'Rendimiento', card_perf_desc:'Optimización extrema de peso, carga instantánea, gráficos por Canvas interactivo y animaciones aceleradas por GPU.', card_i18n_title:'Internacionalización', card_i18n_desc:'Conmutador dinámico entre español e inglés con persistencia local de preferencia de idioma y tema visual.', hood_prose_title:'¿Cómo funciona este sitio web?', hood_prose_p1:'Este portafolio ha sido concebido bajo la premisa de la sencillez estructural y la máxima eficiencia técnica. A diferencia de las plataformas modernas infladas con dependencias complejas y frameworks de procesamiento pesado, este sitio opera como una Single Page Application (SPA) pura, impulsada exclusivamente por tecnologías web nativas.', hood_prose_p2:'El apartado visual se fundamenta en un canvas interactivo de fondo que renderiza de forma eficiente partículas y efectos dinámicos, mientras la interfaz soporta tema oscuro, modo claro y traducción dinámica sin recargar la página.', hood_prose_p3:'Cada módulo del portafolio está estructurado de manera responsiva para ofrecer legibilidad en pantallas pequeñas y monitores de alta resolución. Este sitio no es solo una vitrina de proyectos: es un garaje conceptual y un laboratorio de código vivo.', human_notice_title:'Nota sobre la autoría y producción', human_notice_desc:'Todas las aplicaciones, sistemas y conceptos presentados en este portafolio han sido concebidos, diseñados y desarrollados por Juan Pablo Espinel (DIRECTED BY JPEG), combinando lógica de ingeniería, diseño de experiencia de usuario y arquitectura de software.'
    },
    en: {
      nav_inicio:'Home', nav_projects:'Projects', nav_cert:'Certifications', nav_contact:'Contact', nav_site:'Under the Hood',
      hero_eyebrow:'DIGITAL EXPERIENCES · WEB · AI · SYSTEMS', hero_title_prefix:'DIRECTED BY', hero_tagline:'JPEG PORTFOLIO • LABORATORY & GARAGE', hero_intro:'Designing digital experiences, interactive systems, and products that turn ideas into functional solutions.', hero_cta:'Explore projects', scroll_text:'SCROLL TO EXPLORE',
      projects_kicker:'SELECTED WORK', projects_title:'Projects', projects_desc:'Six digital pieces showing different ways to build, experiment, and solve problems.',
      badge_live:'ACTIVE DEPLOYMENT', badge_nonprofit:'NON-PROFIT PROJECT',
      kicker_prisma:'Career Exploration & Interactive Self-Discovery', desc_prisma:'Interactive experience for self-knowledge and career exploration, finding patterns through indirect choices, cross-evidence, and adaptive assessment.', cap_prisma_1:'ADAPTIVE EVALUATION', cap_prisma_2:'INDIRECT MEASUREMENT', cap_prisma_3:'EXPERIENCE DESIGN',
      kicker_nexus:'AI Intelligence & Interactive Web Systems', desc_nexus:'Radar for artificial intelligence, finance, interactive web tools, and technical resources brought together in a SPA architecture experience.', cap_nexus_1:'INTERACTIVE SYSTEMS', cap_nexus_2:'SPA ARCHITECTURE', cap_nexus_3:'AI CONTENT',
      kicker_hack:'Learning Experience & AI-Assisted Education', desc_hack:'Educational platform focused on personalized mentorship, practical English, learning pacing, and AI tools applied to education.', cap_hack_1:'EDUCATIONAL DESIGN', cap_hack_2:'MENTORSHIP FLOWS', cap_hack_3:'AI-ASSISTED LEARNING',
      kicker_store:'AI Resources, Prompt Engineering & Workflow Systems', desc_store:'Digital vault for AI resources, prompt engineering guides, AI workflow optimization, and automation-oriented architectures.', cap_store_1:'PROMPT ENGINEERING', cap_store_2:'AI WORKFLOWS', cap_store_3:'DIGITAL ARCHITECTURE',
      kicker_cv:'Professional Profile & Technical Portfolio', desc_cv:'Interactive resume bringing together trajectory, skills, credentials, and key projects in a direct web experience.', cap_cv_1:'PERSONAL BRAND', cap_cv_2:'RESPONSIVE UI', cap_cv_3:'TECHNICAL STORYTELLING',
      kicker_parroquia:'Institutional Web Project · Accessibility & Community', desc_parroquia:'Institutional web project developed for a parish in Bogotá. Independent work for a religious organization; it does not represent the personal values, beliefs, or identity of DIRECTED BY JPEG.', cap_parish_1:'ACCESSIBLE DESIGN', cap_parish_2:'MULTILINGUAL UI', cap_parish_3:'COMMUNITY INFO',
      cert_main_title:'Credentials & Certifications', cert_main_desc:'Validation of technical skills, regulatory compliance, software development, and artificial intelligence.', cat_title_aml:'◈ Compliance & Financial Crime', cat_title_sec:'◇ Cybersecurity & Infrastructure', cat_title_ai:'◎ Artificial Intelligence & Ethics', cat_title_dev:'≋ Web Development & Operations',
      desc_aml_1:'Operational frameworks and anti-money laundering prevention.', desc_aml_2:'Human trafficking typologies and transactional monitoring.', desc_sec_1:'Cryptography and digital risk mitigation.', desc_sec_2:'Strategic management of information security.', desc_sec_3:'Vulnerability assessment and penetration testing.', desc_sec_4:'Technical support, operating systems, and networking.', desc_sec_5:'Network protocols and web architecture.', desc_sec_6:'IT infrastructure administration and server management.', desc_ai_1:'Governance, operational frameworks, and algorithmic ethics.', desc_ai_2:'Strategy, capabilities, and real-world AI use cases.', desc_ai_3:'Privacy, data bias, and algorithmic accountability.', desc_dev_1:'HTML, CSS, JavaScript architecture, and UI fundamentals.', desc_dev_2:'Collaborative workflows and deployment strategies with Git.', desc_dev_3:'Technical troubleshooting, service standards, and workflows.',
      contact_kicker:'LET\'S CONNECT', contact_main_title:'Contact', contact_main_desc:'Direct channels for collaboration, projects, or technical inquiries.', human_contact_title:'Human note', human_contact_desc:'A human made this. That means there may be a bug, a weird idea, or something that could be better. If you find one, reach out through any of the channels above.',
      site_main_title:'Under the Hood', site_main_desc:'Technical details, visual stack, and design principles powering this website.', card_arch_title:'Architecture', card_arch_desc:'Semantic HTML5 SPA, modern native CSS with custom properties, and lightweight vanilla JS without heavy libraries.', card_design_title:'Visual Design', card_design_desc:'Dark-mode aesthetic by default with Manrope and Inter typography, Fira Code details, and subtle gradient accents.', card_perf_title:'Performance', card_perf_desc:'Lean footprint, fast loading, interactive Canvas graphics, and GPU-accelerated animation.', card_i18n_title:'Internationalization', card_i18n_desc:'Dynamic English/Spanish switcher with local persistence for language and visual theme preferences.', hood_prose_title:'How does this site work?', hood_prose_p1:'This portfolio was conceived around structural simplicity and technical efficiency. Instead of heavy dependencies and processing frameworks, it runs as a pure Single Page Application powered by native web technologies.', hood_prose_p2:'The visual layer uses an interactive background canvas for lightweight particles and dynamic effects, while the interface supports dark mode, light mode, and dynamic translation without reloading the page.', hood_prose_p3:'Every portfolio module is responsively structured for readability on small screens and high-resolution monitors. This is not only a project showcase: it is a conceptual garage and a living code laboratory.', human_notice_title:'Authorship & Production Note', human_notice_desc:'All applications, systems, and concepts showcased in this portfolio were conceived, designed, and engineered by Juan Pablo Espinel (DIRECTED BY JPEG), combining engineering logic, user experience design, and software architecture.'
    }
  };

  const keyMap = {
    'nav-inicio':'nav_inicio','nav-projects':'nav_projects','nav-cert':'nav_cert','nav-contact':'nav_contact','nav-site':'nav_site',
    'hero-eyebrow':'hero_eyebrow','hero-title-prefix':'hero_title_prefix','hero-tagline':'hero_tagline','hero-intro':'hero_intro','hero-cta-text':'hero_cta','scroll-text':'scroll_text',
    'projects-kicker':'projects_kicker','projects-title':'projects_title','projects-desc':'projects_desc',
    'badge-prisma':'badge_live','badge-nexus':'badge_live','badge-hack':'badge_live','badge-store':'badge_live','badge-cv':'badge_live','badge-parroquia':'badge_nonprofit',
    'kicker-prisma':'kicker_prisma','desc-prisma':'desc_prisma','cap-prisma-1':'cap_prisma_1','cap-prisma-2':'cap_prisma_2','cap-prisma-3':'cap_prisma_3',
    'kicker-nexus':'kicker_nexus','desc-nexus':'desc_nexus','cap-nexus-1':'cap_nexus_1','cap-nexus-2':'cap_nexus_2','cap-nexus-3':'cap_nexus_3',
    'kicker-hack':'kicker_hack','desc-hack':'desc_hack','cap-hack-1':'cap_hack_1','cap-hack-2':'cap_hack_2','cap-hack-3':'cap_hack_3',
    'kicker-store':'kicker_store','desc-store':'desc_store','cap-store-1':'cap_store_1','cap-store-2':'cap_store_2','cap-store-3':'cap_store_3',
    'kicker-cv':'kicker_cv','desc-cv':'desc_cv','cap-cv-1':'cap_cv_1','cap-cv-2':'cap_cv_2','cap-cv-3':'cap_cv_3',
    'kicker-parroquia':'kicker_parroquia','desc-parroquia':'desc_parroquia','cap-parish-1':'cap_parish_1','cap-parish-2':'cap_parish_2','cap-parish-3':'cap_parish_3',
    'cert-main-title':'cert_main_title','cert-main-desc':'cert_main_desc','cat-title-aml':'cat_title_aml','cat-title-sec':'cat_title_sec','cat-title-ai':'cat_title_ai','cat-title-dev':'cat_title_dev',
    'desc-aml-1':'desc_aml_1','desc-aml-2':'desc_aml_2','desc-sec-1':'desc_sec_1','desc-sec-2':'desc_sec_2','desc-sec-3':'desc_sec_3','desc-sec-4':'desc_sec_4','desc-sec-5':'desc_sec_5','desc-sec-6':'desc_sec_6','desc-ai-1':'desc_ai_1','desc-ai-2':'desc_ai_2','desc-ai-3':'desc_ai_3','desc-dev-1':'desc_dev_1','desc-dev-2':'desc_dev_2','desc-dev-3':'desc_dev_3',
    'contact-main-title':'contact_main_title','contact-main-desc':'contact_main_desc','human-contact-title':'human_contact_title','human-contact-desc':'human_contact_desc',
    'site-main-title':'site_main_title','site-main-desc':'site_main_desc','card-arch-title':'card_arch_title','card-arch-desc':'card_arch_desc','card-design-title':'card_design_title','card-design-desc':'card_design_desc','card-perf-title':'card_perf_title','card-perf-desc':'card_perf_desc','card-i18n-title':'card_i18n_title','card-i18n-desc':'card_i18n_desc','hood-prose-title':'hood_prose_title','hood-prose-p1':'hood_prose_p1','hood-prose-p2':'hood_prose_p2','hood-prose-p3':'hood_prose_p3','human-notice-title':'human_notice_title','human-notice-desc':'human_notice_desc'
  };

  let lang = localStorage.getItem('jpeg_lang') || 'es';
  let theme = localStorage.getItem('jpeg_theme') || 'dark';

  function applyLanguage() {
    const t = translations[lang];
    document.documentElement.lang = lang;
    Object.entries(keyMap).forEach(([id,key]) => { const el = document.getElementById(id); if (el && t[key] !== undefined) el.textContent = t[key]; });
    $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (t[key] !== undefined) el.textContent = t[key]; });
    $('#lang-es')?.classList.toggle('lang-active', lang === 'es');
    $('#lang-en')?.classList.toggle('lang-active', lang === 'en');
    $('#lang-es')?.setAttribute('aria-pressed', String(lang === 'es'));
    $('#lang-en')?.setAttribute('aria-pressed', String(lang === 'en'));
    localStorage.setItem('jpeg_lang', lang);
  }

  function applyTheme() {
    document.body.classList.toggle('light-theme', theme === 'light');
    const icon = $('#theme-icon'); if (icon) icon.textContent = theme === 'light' ? '☼' : '◑';
    const btn = $('#theme-btn'); if (btn) btn.setAttribute('aria-label', theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro');
    localStorage.setItem('jpeg_theme', theme);
  }

  function toggleLanguage(){ lang = lang === 'es' ? 'en' : 'es'; applyLanguage(); }
  function toggleTheme(){ theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); }
  function toggleMobileMenu(force){ const nav=$('#mobile-nav'), btn=$('#mobile-menu-btn'); if(!nav||!btn)return; const open=typeof force==='boolean'?force:!nav.classList.contains('open'); nav.classList.toggle('open',open); btn.setAttribute('aria-expanded',String(open)); btn.textContent=open?'×':'≡'; }

  function setupNavigation(){
    $('#theme-btn')?.addEventListener('click', toggleTheme);
    $('#lang-btn')?.addEventListener('click', toggleLanguage);
    $('#mobile-menu-btn')?.addEventListener('click', ()=>toggleMobileMenu());
    $$('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>toggleMobileMenu(false)));
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') toggleMobileMenu(false); });
    window.addEventListener('resize',()=>{ if(window.innerWidth>860) toggleMobileMenu(false); }, {passive:true});
  }

  function setupActiveNav(){
    const links = $$('.main-nav a, .mobile-nav a');
    const sections = $$('main section[id], main div[id="certificaciones"]');
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{ if(entry.isIntersecting){ links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id)); } });
    }, {rootMargin:'-35% 0px -55% 0px',threshold:0});
    sections.forEach(s=>observer.observe(s));
  }

  function setupCanvas(){
    const canvas=$('#bg-canvas'); if(!canvas) return; const ctx=canvas.getContext('2d',{alpha:true}); let w=0,h=0,dpr=1,particles=[]; let raf=0;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    function resize(){ dpr=Math.min(window.devicePixelRatio||1,2); w=window.innerWidth; h=window.innerHeight; canvas.width=Math.floor(w*dpr); canvas.height=Math.floor(h*dpr); canvas.style.width=w+'px'; canvas.style.height=h+'px'; ctx.setTransform(dpr,0,0,dpr,0,0); const count=Math.min(90,Math.max(28,Math.floor(w*h/26000))); particles=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.2+.45,a:Math.random()*.35+.08})); }
    function frame(){ ctx.clearRect(0,0,w,h); ctx.fillStyle='rgba(139,92,246,.7)'; for(const p of particles){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.globalAlpha=p.a;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();} ctx.globalAlpha=1; raf=requestAnimationFrame(frame); }
    resize(); window.addEventListener('resize',resize,{passive:true}); if(!reduced.matches) frame(); reduced.addEventListener?.('change',()=>{cancelAnimationFrame(raf); if(!reduced.matches) frame();});
  }

  document.addEventListener('DOMContentLoaded',()=>{ applyTheme(); applyLanguage(); setupNavigation(); setupActiveNav(); setupCanvas(); });
})();
