/* =========================================================
   DIRECTED BY JPEG
   Main application
   - ES / EN
   - Dark / Light
   - Mobile navigation
   - Active navigation
   - Canvas background
   ========================================================= */


/* ================= TRANSLATIONS ================= */

const translations = {

  es: {

    brand: "DIRECTED BY JPEG",

    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_cert: "Certificaciones",
    nav_contact: "Contacto",
    nav_site: "Bajo el capó",

    hero_eyebrow: "EXPERIENCIAS DIGITALES · WEB · IA · SISTEMAS",
    hero_prefix: "DIRIGIDO POR",
    hero_tagline: "JPEG PORTAFOLIO • LABORATORIO & GARAJE",
    hero_intro: "Diseñando experiencias digitales, sistemas interactivos y productos que convierten ideas en soluciones funcionales.",
    hero_cta: "Explorar proyectos",
    scroll: "DESLIZA PARA EXPLORAR",

    projects_kicker: "TRABAJO SELECCIONADO",
    projects_title: "Proyectos",
    projects_desc: "Seis piezas digitales que muestran diferentes formas de construir, experimentar y resolver problemas.",

    badge_live: "DESPLIEGUE ACTIVO",
    badge_nonprofit: "PROYECTO SIN ÁNIMO DE LUCRO",

    prisma_kicker: "Exploración Profesional & Autodescubrimiento Interactivo",
    prisma_desc: "Experiencia interactiva de autoconocimiento y exploración profesional que busca patrones a través de decisiones indirectas, evidencia cruzada y evaluación adaptativa.",
    prisma_cap1: "EVALUACIÓN ADAPTATIVA",
    prisma_cap2: "MEDICIÓN INDIRECTA",
    prisma_cap3: "DISEÑO DE EXPERIENCIA",

    nexus_kicker: "Inteligencia Artificial & Sistemas Web Interactivos",
    nexus_desc: "Radar de inteligencia artificial, finanzas, herramientas web interactivas y recursos técnicos reunidos en una experiencia digital de arquitectura SPA.",
    nexus_cap1: "SISTEMAS INTERACTIVOS",
    nexus_cap2: "ARQUITECTURA SPA",
    nexus_cap3: "CONTENIDO CON IA",

    hack_kicker: "Experiencia de Aprendizaje & Educación Asistida por IA",
    hack_desc: "Plataforma educativa enfocada en mentoría personalizada, inglés práctico, ritmo de aprendizaje y herramientas de IA aplicadas al proceso.",
    hack_cap1: "DISEÑO EDUCATIVO",
    hack_cap2: "FLUJOS DE MENTORÍA",
    hack_cap3: "APRENDIZAJE ASISTIDO POR IA",

    vault_kicker: "Recursos de IA, Ingeniería de Prompts & Flujos de Trabajo",
    vault_desc: "Bóveda digital de recursos, manuales de ingeniería de prompts, optimización de flujos con IA y arquitecturas orientadas a la automatización.",
    vault_cap1: "INGENIERÍA DE PROMPTS",
    vault_cap2: "FLUJOS CON IA",
    vault_cap3: "ARQUITECTURA DIGITAL",

    cv_kicker: "Perfil Profesional & Portafolio Técnico",
    cv_desc: "Hoja de vida interactiva que reúne trayectoria, competencias, credenciales y proyectos clave en una experiencia web directa.",
    cv_cap1: "MARCA PERSONAL",
    cv_cap2: "INTERFAZ RESPONSIVA",
    cv_cap3: "NARRATIVA TÉCNICA",

    parish_kicker: "Proyecto Web Institucional · Accesibilidad & Comunidad",
    parish_desc: "Proyecto web institucional desarrollado para una parroquia en Bogotá. Es un trabajo independiente para una organización religiosa y no representa los valores, creencias ni identidad personal de DIRECTED BY JPEG.",
    parish_cap1: "DISEÑO ACCESIBLE",
    parish_cap2: "INTERFAZ MULTILINGÜE",
    parish_cap3: "INFORMACIÓN COMUNITARIA",

    cert_title: "Credenciales y Certificaciones",
    cert_desc: "Validación de competencias técnicas, cumplimiento normativo, desarrollo de software e inteligencia artificial.",

    cert_aml: "Cumplimiento y Delitos Financieros",
    cert_security: "Ciberseguridad e Infraestructura",
    cert_ai: "Inteligencia Artificial & Ética",
    cert_dev: "Desarrollo Web & Operaciones",

    aml1: "Marcos operativos y prevención de lavado de activos.",
    aml2: "Tipologías de trata y monitoreo transaccional.",

    sec1: "Criptografía y mitigación de riesgos digitales.",
    sec2: "Gestión estratégica de la seguridad de la información.",
    sec3: "Evaluación de vulnerabilidades y pruebas de penetración.",
    sec4: "Soporte técnico, sistemas operativos y redes.",
    sec5: "Protocolos de red y arquitectura web.",
    sec6: "Administración de infraestructura IT y servidores.",

    ai1: "Gobernanza, marcos operativos y ética algorítmica.",
    ai2: "Estrategia, capacidades y casos de uso en IA.",
    ai3: "Privacidad, sesgo de datos y responsabilidad algorítmica.",

    dev1: "Arquitectura HTML, CSS, JavaScript y principios de UI.",
    dev2: "Flujos de trabajo colaborativos y despliegues con Git.",
    dev3: "Resolución técnica, estándares de servicio y flujos de trabajo.",

    contact_kicker: "CONECTEMOS",
    contact_title: "Contacto",
    contact_desc: "Canales directos para colaboración, proyectos o consultas técnicas.",
    cv_contact: "Curriculum Vitae",

    human_title: "Hecho por un humano.",
    human_desc: "Este sitio fue creado por una persona y, como cualquier proyecto humano, puede tener algún error. Si encuentras algo que pueda mejorarse o se te ocurre una idea para la página, puedes escribirme por cualquiera de los canales de contacto de arriba.",

    hood_kicker: "ARQUITECTURA & FILOSOFÍA",
    hood_title: "Bajo el capó",
    hood_desc: "Detalles técnicos, stack visual y principios de diseño que mueven este sitio web.",

    arch_title: "Arquitectura",
    arch_desc: "HTML5 semántico, CSS moderno y JavaScript vanilla ligero sin librerías pesadas.",

    design_title: "Diseño Visual",
    design_desc: "Estética tecnológica con Manrope, Inter y detalles en Fira Code.",

    performance_title: "Rendimiento",
    performance_desc: "Canvas ligero, animaciones controladas y una estructura sin dependencias innecesarias.",

    i18n_title: "Internacionalización",
    i18n_desc: "Cambio dinámico entre español e inglés con preferencias guardadas localmente.",

    hood_question: "¿Cómo funciona este sitio web?",

    hood_p1: "Este portafolio ha sido concebido bajo la premisa de la sencillez estructural y la máxima eficiencia técnica. Opera como una experiencia web construida principalmente con tecnologías nativas, evitando dependencias innecesarias y manteniendo el control sobre la interfaz.",

    hood_p2: "El apartado visual utiliza un canvas de fondo para generar partículas y efectos dinámicos. La interfaz también permite alternar entre tema oscuro y claro, además de cambiar dinámicamente entre español e inglés sin recargar la página.",

    hood_p3: "Cada módulo está estructurado de forma responsiva para mantener una experiencia clara tanto en dispositivos pequeños como en pantallas de alta resolución. El sitio funciona como una vitrina de proyectos, pero también como un laboratorio donde experimentar con código, diseño y sistemas digitales.",

    rights: "TODOS LOS DERECHOS RESERVADOS"
  },


  en: {

    brand: "DIRECTED BY JPEG",

    nav_home: "Home",
    nav_projects: "Projects",
    nav_cert: "Certifications",
    nav_contact: "Contact",
    nav_site: "Under the Hood",

    hero_eyebrow: "DIGITAL EXPERIENCES · WEB · AI · SYSTEMS",
    hero_prefix: "DIRECTED BY",
    hero_tagline: "JPEG PORTFOLIO • LAB & GARAGE",
    hero_intro: "Designing digital experiences, interactive systems, and products that turn ideas into functional solutions.",
    hero_cta: "Explore projects",
    scroll: "SCROLL TO EXPLORE",

    projects_kicker: "SELECTED WORK",
    projects_title: "Projects",
    projects_desc: "Six digital pieces demonstrating different ways to build, experiment, and solve problems.",

    badge_live: "ACTIVE DEPLOYMENT",
    badge_nonprofit: "NON-PROFIT PROJECT",

    prisma_kicker: "Career Exploration & Interactive Self-Discovery",
    prisma_desc: "Interactive experience for self-knowledge and career exploration finding patterns through indirect choices, cross-evidence, and adaptive assessment.",
    prisma_cap1: "ADAPTIVE EVALUATION",
    prisma_cap2: "INDIRECT MEASUREMENT",
    prisma_cap3: "EXPERIENCE DESIGN",

    nexus_kicker: "Artificial Intelligence & Interactive Web Systems",
    nexus_desc: "Radar for artificial intelligence, finance, interactive web tools, and technical resources brought together in a SPA architecture experience.",
    nexus_cap1: "INTERACTIVE SYSTEMS",
    nexus_cap2: "SPA ARCHITECTURE",
    nexus_cap3: "AI CONTENT",

    hack_kicker: "Learning Experience & AI-Assisted Education",
    hack_desc: "Educational platform focused on personalized mentorship, practical English, learning pacing, and AI tools applied to education.",
    hack_cap1: "EDUCATIONAL DESIGN",
    hack_cap2: "MENTORSHIP FLOWS",
    hack_cap3: "AI-ASSISTED LEARNING",

    vault_kicker: "AI Resources, Prompt Engineering & Workflow Systems",
    vault_desc: "Digital vault for AI resources, prompt engineering guides, AI workflow optimization, and automation-oriented architectures.",
    vault_cap1: "PROMPT ENGINEERING",
    vault_cap2: "AI WORKFLOWS",
    vault_cap3: "DIGITAL ARCHITECTURE",

    cv_kicker: "Professional Profile & Technical Portfolio",
    cv_desc: "Interactive résumé bringing together experience, skills, credentials, and key projects in a direct web experience.",
    cv_cap1: "PERSONAL BRAND",
    cv_cap2: "RESPONSIVE INTERFACE",
    cv_cap3: "TECHNICAL STORYTELLING",

    parish_kicker: "Institutional Web Project · Accessibility & Community",
    parish_desc: "Institutional website developed for a parish in Bogotá. It is independent work for a religious organization and does not represent the values, beliefs, or personal identity of DIRECTED BY JPEG.",
    parish_cap1: "ACCESSIBLE DESIGN",
    parish_cap2: "MULTILINGUAL INTERFACE",
    parish_cap3: "COMMUNITY INFORMATION",

    cert_title: "Credentials & Certifications",
    cert_desc: "Validation of technical skills, compliance, software development, and artificial intelligence.",

    cert_aml: "Compliance & Financial Crime",
    cert_security: "Cybersecurity & Infrastructure",
    cert_ai: "Artificial Intelligence & Ethics",
    cert_dev: "Web Development & Operations",

    aml1: "Operational frameworks and anti-money laundering prevention.",
    aml2: "Human trafficking typologies and transaction monitoring.",

    sec1: "Cryptography and digital risk mitigation.",
    sec2: "Strategic information security management.",
    sec3: "Vulnerability assessment and penetration testing.",
    sec4: "Technical support, operating systems, and networking.",
    sec5: "Network protocols and web architecture.",
    sec6: "IT infrastructure and server administration.",

    ai1: "Governance, operational frameworks, and algorithmic ethics.",
    ai2: "AI strategy, capabilities, and use cases.",
    ai3: "Privacy, data bias, and algorithmic responsibility.",

    dev1: "HTML, CSS, JavaScript architecture and UI principles.",
    dev2: "Collaborative workflows and Git deployments.",
    dev3: "Technical resolution, service standards, and workflows.",

    contact_kicker: "LET'S CONNECT",
    contact_title: "Contact",
    contact_desc: "Direct channels for collaboration, projects, or technical inquiries.",
    cv_contact: "Curriculum Vitae",

    human_title: "Made by a human.",
    human_desc: "This site was created by a person and, like any human project, it may contain an occasional mistake. If you find something that could be improved or have an idea for the page, feel free to reach out through any of the contact channels above.",

    hood_kicker: "ARCHITECTURE & PHILOSOPHY",
    hood_title: "Under the Hood",
    hood_desc: "Technical details, visual stack, and design principles behind this website.",

    arch_title: "Architecture",
    arch_desc: "Semantic HTML5, modern CSS, and lightweight vanilla JavaScript without heavy libraries.",

    design_title: "Visual Design",
    design_desc: "Technology-focused aesthetics using Manrope, Inter, and Fira Code details.",

    performance_title: "Performance",
    performance_desc: "Lightweight canvas, controlled animations, and a structure without unnecessary dependencies.",

    i18n_title: "Internationalization",
    i18n_desc: "Dynamic Spanish/English switching with locally stored preferences.",

    hood_question: "How does this website work?",

    hood_p1: "This portfolio was conceived around structural simplicity and technical efficiency. It operates primarily with native web technologies, avoiding unnecessary dependencies while keeping direct control over the interface.",

    hood_p2: "The visual layer uses a background canvas to generate particles and dynamic effects. The interface can also switch between dark and light themes and dynamically change between Spanish and English without reloading the page.",

    hood_p3: "Each module is responsively structured to maintain a clear experience on both small devices and high-resolution screens. The site works as a project showcase, but also as a laboratory for experimenting with code, design, and digital systems.",

    rights: "ALL RIGHTS RESERVED"
  }
};


/* ================= STATE ================= */

let currentLanguage =
  localStorage.getItem("jpeg-language") || "es";

let currentTheme =
  localStorage.getItem("jpeg-theme") || "dark";


/* ================= DOM ================= */

const body = document.body;
const html = document.documentElement;

const themeButton = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

const languageButton = document.getElementById("lang-btn");

const mobileButton =
  document.getElementById("mobile-menu-btn");

const mobileNav =
  document.getElementById("mobile-nav");


/* ================= LANGUAGE ================= */

function applyLanguage(language) {

  currentLanguage = language;

  const dictionary = translations[language];

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }

  });

  html.lang = language;

  document.getElementById("lang-es")
    .classList.toggle("lang-active", language === "es");

  document.getElementById("lang-en")
    .classList.toggle("lang-active", language === "en");

  localStorage.setItem("jpeg-language", language);
}


function toggleLanguage() {

  const nextLanguage =
    currentLanguage === "es" ? "en" : "es";

  applyLanguage(nextLanguage);
}


/* ================= THEME ================= */

function applyTheme(theme) {

  currentTheme = theme;

  body.classList.toggle(
    "light-theme",
    theme === "light"
  );

  themeIcon.textContent =
    theme === "light" ? "☼" : "◐";

  themeButton.setAttribute(
    "aria-label",
    theme === "light"
      ? "Activar modo oscuro"
      : "Activar modo claro"
  );

  localStorage.setItem("jpeg-theme", theme);
}


function toggleTheme() {

  applyTheme(
    currentTheme === "dark"
      ? "light"
      : "dark"
  );
}


/* ================= MOBILE MENU ================= */

function toggleMobileMenu(force) {

  const open =
    typeof force === "boolean"
      ? force
      : !mobileNav.classList.contains("open");

  mobileNav.classList.toggle("open", open);

  mobileButton.setAttribute(
    "aria-expanded",
    String(open)
  );

  mobileButton.textContent =
    open ? "×" : "☰";
}


function closeMobileMenu() {
  toggleMobileMenu(false);
}


/* ================= NAVIGATION ================= */

const allNavLinks =
  document.querySelectorAll(
    ".main-nav .nav-btn, .mobile-nav .nav-btn"
  );


allNavLinks.forEach(link => {

  link.addEventListener("click", () => {

    const target = link.getAttribute("href");

    allNavLinks.forEach(item => {
      item.classList.toggle(
        "active",
        item.getAttribute("href") === target
      );
    });

    closeMobileMenu();

  });

});


/* ================= ACTIVE SECTION ================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const id =
          "#" + entry.target.id;

        allNavLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") === id
          );

        });

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );


sections.forEach(section => {
  observer.observe(section);
});


/* ================= CANVAS ================= */

const canvas =
  document.getElementById("bg-canvas");

const ctx =
  canvas.getContext("2d");

let width = 0;
let height = 0;

let particles = [];

let animationFrame = null;

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


class Particle {

  constructor() {
    this.reset(true);
  }

  reset(randomPosition = false) {

    this.x =
      randomPosition
        ? Math.random() * width
        : Math.random() < .5
          ? -10
          : width + 10;

    this.y =
      Math.random() * height;

    this.vx =
      (Math.random() - .5) * .25;

    this.vy =
      (Math.random() - .5) * .25;

    this.radius =
      Math.random() * 1.3 + .4;

    this.alpha =
      Math.random() * .4 + .08;
  }


  update() {

    this.x += this.vx;
    this.y += this.vy;

    if (
      this.x < -20 ||
      this.x > width + 20 ||
      this.y < -20 ||
      this.y > height + 20
    ) {
      this.reset();
    }
  }


  draw() {

    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    );

    const light =
      body.classList.contains("light-theme");

    ctx.fillStyle =
      light
        ? `rgba(109,40,217,${this.alpha * .45})`
        : `rgba(139,92,246,${this.alpha})`;

    ctx.fill();
  }
}


function resizeCanvas() {

  const ratio =
    Math.min(
      window.devicePixelRatio || 1,
      1.5
    );

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width =
    width * ratio;

  canvas.height =
    height * ratio;

  canvas.style.width =
    width + "px";

  canvas.style.height =
    height + "px";

  ctx.setTransform(
    ratio,
    0,
    0,
    ratio,
    0,
    0
  );

  const amount =
    Math.min(
      90,
      Math.max(
        25,
        Math.floor(
          width * height / 24000
        )
      )
    );

  particles =
    Array.from(
      { length: amount },
      () => new Particle()
    );
}


function animateCanvas() {

  ctx.clearRect(
    0,
    0,
    width,
    height
  );

  particles.forEach(particle => {

    particle.update();
    particle.draw();

  });

  animationFrame =
    requestAnimationFrame(
      animateCanvas
    );
}


function stopCanvas() {

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

}


function startCanvas() {

  if (
    reducedMotion.matches ||
    document.hidden
  ) {
    return;
  }

  if (!animationFrame) {
    animateCanvas();
  }

}


/* ================= EVENTS ================= */

themeButton.addEventListener(
  "click",
  toggleTheme
);

languageButton.addEventListener(
  "click",
  toggleLanguage
);

mobileButton.addEventListener(
  "click",
  () => toggleMobileMenu()
);

window.addEventListener(
  "resize",
  resizeCanvas
);

document.addEventListener(
  "visibilitychange",
  () => {

    if (document.hidden) {
      stopCanvas();
    } else {
      startCanvas();
    }

  }
);

reducedMotion.addEventListener(
  "change",
  () => {

    stopCanvas();

    if (!reducedMotion.matches) {
      startCanvas();
    }

  }
);


/* ================= INITIALIZE ================= */

applyLanguage(currentLanguage);

applyTheme(currentTheme);

resizeCanvas();

startCanvas();