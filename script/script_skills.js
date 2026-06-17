const icons = [
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M12 3v18M5 8h14M7 16h10" />',
  '<path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />',
  '<path d="M3 12a9 9 0 1 0 3-6.7M3 4v6h6" />',
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
];

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Perfil profesional",
    title: "Mis habilidades y cualidades",
    featured: "Habilidades destacadas",
    viewDetail: "Ver detalle",
    home: "← Inicio",
    tagsLabel: "Areas clave",
    skills: [
      {
        title: "Conocimiento técnico",
        summary: "ABAP, objetos de desarrollo y componentes SAP HCM.",
        detailTitle: "Conocimiento técnico SAP",
        detail:
          "Sólido conocimiento técnico de la mayor parte de los objetos ABAP de desarrollo y algunos componentes de SAP, especialmente en HCM: submódulos OM, PA, PT y PY, junto con su funcionalidad dentro del sistema.",
        tags: ["ABAP", "SAP HCM", "OM / PA / PT / PY", "Soporte funcional"],
      },
      {
        title: "Experiencia y expertise",
        summary: "Participación en proyectos, soporte y actualizaciones SAP.",
        detailTitle: "Experiencia aplicada",
        detail:
          "La experiencia práctica en proyectos SAP realizados amplía mi base de conocimientos y ha sido útil en proyectos subsiguientes. También he participado en la resolución de casos de mesa de ayuda y actualizaciones de SAP.",
        tags: ["Proyectos SAP", "Mesa de ayuda", "Actualizaciones", "Mejora continua"],
      },
      {
        title: "Resolución de problemas",
        summary: "Análisis, diagnóstico y soluciones técnicas o funcionales.",
        detailTitle: "Análisis y diagnóstico",
        detail:
          "Cuento con habilidades sólidas para identificar y resolver problemas técnicos y funcionales dentro de mi área de conocimiento. El proceso inicia con el análisis del problema, continúa con la investigación y el diagnóstico, y termina con soluciones efectivas.",
        tags: ["Diagnóstico", "Análisis", "Soluciones", "Soporte"],
      },
      {
        title: "Comunicación efectiva",
        summary: "Claridad con equipos, usuarios finales y profesionales técnicos.",
        detailTitle: "Comunicación con equipos",
        detail:
          "Trabajar en equipo con compañeros, usuarios finales y otros profesionales me permite comunicarme de manera clara y efectiva, tanto verbalmente como por escrito. Comprender el objetivo es esencial para transmitir información técnica y facilitar la comprensión mutua.",
        tags: ["Trabajo en equipo", "Usuarios finales", "Claridad", "Documentación"],
      },
      {
        title: "Orientación al cliente",
        summary: "Soluciones alineadas a objetivos y necesidades del negocio.",
        detailTitle: "Acompañamiento al cliente",
        detail:
          "Entender las necesidades y requisitos del cliente permite ofrecer soluciones adaptadas a sus objetivos empresariales. Considero esta gestión necesaria en mi rol como consultor, estableciendo relaciones sólidas y brindando apoyo con conocimiento y experiencia.",
        tags: ["Cliente", "Negocio", "Relación", "Consultoría"],
      },
      {
        title: "Aprendizaje continuo",
        summary: "Adaptación a nuevas tecnologías, procesos y actualizaciones.",
        detailTitle: "Adaptabilidad y aprendizaje",
        detail:
          "SAP está en constante evolución, con nuevas actualizaciones y tecnologías emergentes. Tengo disposición para aprender continuamente, capacitarme y adaptarme a nuevas herramientas, procesos y necesidades del entorno.",
        tags: ["Adaptabilidad", "Capacitación", "Tecnología", "Evolución"],
      },
      {
        title: "Conocimiento general de SAP",
        summary: "Visión integral del ERP y procesos HXM de punta a punta.",
        detailTitle: "Visión funcional SAP",
        detail:
          "Como consultor ABAP he desarrollado en diferentes módulos, lo que me ha permitido construir un concepto general del funcionamiento del ERP. Como consultor HXM conozco el proceso desde la creación de una posición, actualización de información, pago al colaborador y reportes básicos a través de queries.",
        tags: ["ERP", "HXM", "Procesos", "Queries"],
      },
    ],
  },
  en: {
    htmlLang: "en",
    subtitle: "SAP ABAP / HXM Consultant",
    profileLabel: "Professional profile",
    title: "My skills and qualities",
    featured: "Featured skills",
    viewDetail: "View detail",
    home: "← Home",
    tagsLabel: "Key areas",
    skills: [
      {
        title: "Technical knowledge",
        summary: "ABAP, development objects, and SAP HCM components.",
        detailTitle: "SAP technical knowledge",
        detail:
          "Strong technical knowledge of most ABAP development objects and some SAP components, especially in HCM: OM, PA, PT, and PY submodules, together with their system functionality.",
        tags: ["ABAP", "SAP HCM", "OM / PA / PT / PY", "Functional support"],
      },
      {
        title: "Experience and expertise",
        summary: "Participation in projects, support, and SAP updates.",
        detailTitle: "Applied experience",
        detail:
          "Practical experience in completed SAP projects has broadened my knowledge base and has been useful in subsequent projects. I have also participated in help desk case resolution and SAP updates.",
        tags: ["SAP projects", "Help desk", "Updates", "Continuous improvement"],
      },
      {
        title: "Troubleshooting skills",
        summary: "Analysis, diagnosis, and technical or functional solutions.",
        detailTitle: "Analysis and diagnosis",
        detail:
          "I have strong abilities to identify and resolve technical and functional issues within my area of expertise. The process starts with problem analysis, continues with investigation and diagnosis, and ends with effective solutions.",
        tags: ["Diagnosis", "Analysis", "Solutions", "Support"],
      },
      {
        title: "Effective communication",
        summary: "Clarity with teams, end users, and technical professionals.",
        detailTitle: "Team communication",
        detail:
          "Working with colleagues, end users, and other professionals allows me to communicate clearly and effectively, both verbally and in writing. Understanding the objective is essential to transmit technical information and support mutual understanding.",
        tags: ["Teamwork", "End users", "Clarity", "Documentation"],
      },
      {
        title: "Customer orientation",
        summary: "Solutions aligned with business goals and user needs.",
        detailTitle: "Customer support",
        detail:
          "Understanding customer needs and requirements makes it possible to offer solutions adapted to business objectives. I consider this a necessary part of my consulting role, building strong customer relationships and providing support through knowledge and experience.",
        tags: ["Customer", "Business", "Relationship", "Consulting"],
      },
      {
        title: "Continuous learning",
        summary: "Adaptation to new technologies, processes, and updates.",
        detailTitle: "Adaptability and learning",
        detail:
          "SAP is constantly evolving, with new updates and emerging technologies. I am fully willing to keep learning, training, and adapting to new tools, processes, and business needs.",
        tags: ["Adaptability", "Training", "Technology", "Evolution"],
      },
      {
        title: "General SAP knowledge",
        summary: "Integrated ERP vision and end-to-end HXM processes.",
        detailTitle: "SAP functional vision",
        detail:
          "As an ABAP consultant, I have developed in different modules, which has allowed me to build a general understanding of ERP operations. As an HXM consultant, I know the process from position creation, information updates, employee payment, and basic reports through queries.",
        tags: ["ERP", "HXM", "Processes", "Queries"],
      },
    ],
  },
};

let currentLanguage = getLanguage();
let activeSkillIndex = 0;

renderPage();

function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang") === "en" ? "en" : "es";
}

function renderPage() {
  const page = content[currentLanguage];

  document.documentElement.lang = page.htmlLang;
  document.title = page.title;
  document.getElementById("id_profile_subtitle").textContent = page.subtitle;
  document.getElementById("id_profile_label").textContent = page.profileLabel;
  document.getElementById("id_skills_h2").textContent = page.title;
  document.getElementById("id_featured_title").textContent = page.featured;
  document.getElementById("id_view_detail").textContent = page.viewDetail;
  document.getElementById("id_goToHomePage").textContent = page.home;
  document.getElementById("id_detail_tags").setAttribute("aria-label", page.tagsLabel);

  renderSkillCards(page);
  renderDetail(page.skills[activeSkillIndex]);
}

function renderSkillCards(page) {
  const grid = document.getElementById("id_skills_grid");
  grid.innerHTML = "";

  page.skills.forEach((skill, index) => {
    const card = document.createElement("button");
    card.className = `skill-card${index === activeSkillIndex ? " is-active" : ""}`;
    card.type = "button";
    card.setAttribute("aria-pressed", index === activeSkillIndex ? "true" : "false");
    card.innerHTML = `
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">${icons[index]}</svg>
      </span>
      <span>
        <h3>${skill.title}</h3>
        <p>${skill.summary}</p>
      </span>
      <span class="arrow" aria-hidden="true">›</span>
    `;

    card.addEventListener("click", () => {
      activeSkillIndex = index;
      renderSkillCards(page);
      renderDetail(skill);
      document.getElementById("id_skill_detail").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.appendChild(card);
  });
}

function renderDetail(skill) {
  const tags = document.getElementById("id_detail_tags");

  document.getElementById("id_detail_title").textContent = skill.title;
  document.getElementById("id_detail_subtitle").textContent = skill.detailTitle;
  document.getElementById("id_detail_text").textContent = skill.detail;

  tags.innerHTML = "";
  skill.tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    tags.appendChild(tag);
  });
}

function goToHomePage() {
  window.location.href = currentLanguage === "en" ? "index.html?lang=en" : "index.html?lang=es";
}
