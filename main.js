const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.underTheHood": "Bajo el capó",
    "nav.certifications": "Certificaciones",
    "home.profile": "Desarrollador Web apasionado por crear experiencias digitales funcionales y modernas.",
    "projects.title": "Proyectos",
    "contact.subtitle": "CONECTEMOS",
    "contact.title": "Contacto",
    "contact.desc": "Canales directos para colaboración, proyectos o consultas técnicas.",
    "hood.subtitle": "ARQUITECTURA & FILOSOFÍA",
    "hood.title": "Bajo el capó",
    "hood.desc": "Detalles técnicos, stack visual y principios de diseño que mueven este sitio web.",
    "hood.stackTitle": "Stack Técnico",
    "hood.stackDesc": "Construido con HTML5 semántico, CSS3 personalizado y Vanilla JavaScript para la interactividad y cambio de idioma, sin frameworks pesados.",
    "hood.deployTitle": "Despliegue",
    "hood.deployDesc": "Control de versiones con Git/GitHub y despliegue continuo (CI/CD) automatizado a través de Vercel.",
    "certs.subtitle": "CREDANCIALES & FORMACIÓN",
    "certs.title": "Certificaciones",
    "footer.rights": "© Todos los derechos reservados"
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.underTheHood": "Under the Hood",
    "nav.certifications": "Certifications",
    "home.profile": "Web Developer passionate about building functional and modern digital experiences.",
    "projects.title": "Projects",
    "contact.subtitle": "LET'S CONNECT",
    "contact.title": "Contact",
    "contact.desc": "Direct channels for collaboration, projects, or technical inquiries.",
    "hood.subtitle": "ARCHITECTURE & PHILOSOPHY",
    "hood.title": "Under the Hood",
    "hood.desc": "Technical details, visual stack, and design principles driving this website.",
    "hood.stackTitle": "Technical Stack",
    "hood.stackDesc": "Built with semantic HTML5, custom CSS3, and Vanilla JavaScript for interactivity and language switching, keeping it lightweight without heavy frameworks.",
    "hood.deployTitle": "Deployment",
    "hood.deployDesc": "Version control with Git/GitHub and automated continuous deployment (CI/CD) powered by Vercel.",
    "certs.subtitle": "CREDENTIALS & EDUCATION",
    "certs.title": "Certifications",
    "footer.rights": "© All rights reserved"
  }
};

let currentLang = 'es';

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  updateLanguage();
});

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}