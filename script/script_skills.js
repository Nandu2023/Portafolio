const icons = [
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M12 3v18M5 8h14M7 16h10" />',
  '<path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />',
  '<path d="M3 12a9 9 0 1 0 3-6.7M3 4v6h6" />',
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
  '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />',
  '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />',
  '<path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" />',
  '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />',
  '<path d="M20 6 9 17l-5-5" />',
];

const profileDetail =
  "Desarrollador ABAP Cloud S/4HANA y Consultor SAP HXM/ABAP HXM, con m\u00e1s de 18 a\u00f1os de experiencia en el dise\u00f1o, desarrollo, implementaci\u00f3n y optimizaci\u00f3n de soluciones SAP. Cuenta con s\u00f3lida trayectoria en programaci\u00f3n ABAP, migraciones hacia S/4HANA, Integration Suite (CPI), desarrollo de CDS Views, servicios OData y procesos asociados al desarrollo ABAP y consultor\u00eda funcional del m\u00f3dulo SAP HCM/HXM. Se caracteriza por formaci\u00f3n continua en tecnolog\u00edas SAP, desarrollo moderno e inteligencia artificial aplicada al trabajo t\u00e9cnico. Utiliza asistentes de IA como apoyo para acelerar el an\u00e1lisis, mejorar la documentaci\u00f3n, validar alternativas de soluci\u00f3n y aumentar la calidad y eficiencia de los desarrollos, manteniendo criterio t\u00e9cnico y responsabilidad profesional sobre los entregables. Su enfoque combina calidad t\u00e9cnica, innovaci\u00f3n, mejora continua y generaci\u00f3n de valor para el cliente.";

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Perfil profesional",
    title: "Mis habilidades y cualidades",
    featured: "Habilidades destacadas",
    viewDetail: "Ver detalle",
    home: "<- Inicio",
    tagsLabel: "Areas clave",
    skills: [
      {
        title: "Perfil SAP moderno",
        summary: "ABAP Cloud, S/4HANA, HXM, CPI, OData e IA aplicada.",
        detailTitle: "Perfil profesional",
        detail: profileDetail,
        tags: ["ABAP Cloud", "S/4HANA", "SAP HXM", "CPI", "IA aplicada"],
      },
      {
        title: "ABAP ECC y S/4HANA",
        summary: "Desarrollo y mantenimiento de programas ABAP.",
        detailTitle: "Desarrollo ABAP",
        detail:
          "Desarrollo y mantenimiento de programas ABAP en SAP ECC y SAP S/4HANA, con enfoque en estabilidad, calidad t\u00e9cnica y adaptaci\u00f3n a necesidades del negocio.",
        tags: ["ABAP", "SAP ECC", "S/4HANA", "Mantenimiento"],
      },
      {
        title: "ABAP Cloud",
        summary: "Buenas pr\u00e1cticas orientadas a clean core.",
        detailTitle: "ABAP Cloud y clean core",
        detail:
          "Desarrollo ABAP Cloud y adopci\u00f3n de buenas pr\u00e1cticas orientadas a clean core para construir soluciones m\u00e1s sostenibles, limpias y alineadas con la evoluci\u00f3n de SAP.",
        tags: ["ABAP Cloud", "Clean core", "Buenas pr\u00e1cticas"],
      },
      {
        title: "CDS Views y OData",
        summary: "Modelos de datos y servicios para integraciones externas.",
        detailTitle: "CDS Views y servicios OData",
        detail:
          "Creaci\u00f3n de CDS Views y servicios OData para integraciones externas, exposici\u00f3n de datos y construcci\u00f3n de componentes reutilizables dentro del ecosistema SAP.",
        tags: ["CDS Views", "OData", "Integraciones", "Servicios"],
      },
      {
        title: "SAP Integration Suite",
        summary: "Integraci\u00f3n de sistemas mediante CPI.",
        detailTitle: "Integration Suite (CPI)",
        detail:
          "Integraci\u00f3n de sistemas con SAP mediante SAP Integration Suite (CPI), conectando procesos, aplicaciones y fuentes externas con criterios de trazabilidad y confiabilidad.",
        tags: ["SAP CPI", "Integration Suite", "Integraci\u00f3n"],
      },
      {
        title: "SAP HCM y HXM",
        summary: "Procesos PA, PT y PY con visi\u00f3n funcional.",
        detailTitle: "Consultor\u00eda SAP HCM/HXM",
        detail:
          "Experiencia en SAP HCM y SAP HXM, especialmente en procesos PA, PT y PY, combinando conocimiento funcional con capacidad t\u00e9cnica ABAP.",
        tags: ["SAP HCM", "SAP HXM", "PA", "PT", "PY"],
      },
      {
        title: "Optimizaci\u00f3n ABAP",
        summary: "Rendimiento y mejora t\u00e9cnica de programas.",
        detailTitle: "Optimizaci\u00f3n de rendimiento",
        detail:
          "Optimizaci\u00f3n de rendimiento y mejora t\u00e9cnica de programas ABAP para elevar eficiencia, mantenibilidad y respuesta de las soluciones desarrolladas.",
        tags: ["Performance", "Optimizaci\u00f3n", "Calidad t\u00e9cnica"],
      },
      {
        title: "IA aplicada",
        summary: "An\u00e1lisis, documentaci\u00f3n, validaci\u00f3n y productividad.",
        detailTitle: "Uso estrat\u00e9gico de IA",
        detail:
          "Uso estrat\u00e9gico de asistentes de IA para an\u00e1lisis, documentaci\u00f3n, validaci\u00f3n t\u00e9cnica y productividad, manteniendo criterio profesional sobre cada entregable.",
        tags: ["IA", "An\u00e1lisis", "Documentaci\u00f3n", "Productividad"],
      },
      {
        title: "Requerimientos",
        summary: "An\u00e1lisis y documentaci\u00f3n funcional y t\u00e9cnica.",
        detailTitle: "An\u00e1lisis de requerimientos",
        detail:
          "An\u00e1lisis y documentaci\u00f3n de requerimientos funcionales y t\u00e9cnicos, con capacidad para traducir necesidades del negocio en soluciones SAP claras y ejecutables.",
        tags: ["Requerimientos", "An\u00e1lisis", "Documentaci\u00f3n"],
      },
      {
        title: "Soluciones SAP",
        summary: "Dise\u00f1o de soluciones personalizadas y aceleradores.",
        detailTitle: "Dise\u00f1o de soluciones",
        detail:
          "Dise\u00f1o de soluciones personalizadas y aceleradores para procesos SAP, buscando eficiencia operativa, reutilizaci\u00f3n y generaci\u00f3n de valor para el cliente.",
        tags: ["Soluciones", "Aceleradores", "Procesos SAP"],
      },
      {
        title: "Colaboraci\u00f3n y soporte",
        summary: "Trabajo con equipos, usuarios clave y usuarios finales.",
        detailTitle: "Colaboraci\u00f3n efectiva",
        detail:
          "Colaboraci\u00f3n efectiva con equipos funcionales, t\u00e9cnicos y usuarios clave, junto con capacitaci\u00f3n y soporte a usuarios finales y equipos de desarrollo.",
        tags: ["Colaboraci\u00f3n", "Soporte", "Capacitaci\u00f3n", "Usuarios"],
      },
      {
        title: "Mejora continua",
        summary: "Calidad del servicio e innovaci\u00f3n tecnol\u00f3gica.",
        detailTitle: "Calidad e innovaci\u00f3n",
        detail:
          "Compromiso con la mejora continua, la calidad del servicio y la innovaci\u00f3n tecnol\u00f3gica, con orientaci\u00f3n a resultados y generaci\u00f3n de valor.",
        tags: ["Mejora continua", "Calidad", "Innovaci\u00f3n", "Resultados"],
      },
    ],
  },
};

content.en = {
  ...content.es,
  htmlLang: "en",
  subtitle: "SAP ABAP / HXM Consultant",
  profileLabel: "Professional profile",
  title: "My skills and qualities",
  featured: "Featured skills",
  viewDetail: "View detail",
  home: "<- Home",
  tagsLabel: "Key areas",
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
        <svg viewBox="0 0 24 24">${icons[index % icons.length]}</svg>
      </span>
      <span>
        <h3>${skill.title}</h3>
        <p>${skill.summary}</p>
      </span>
      <span class="arrow" aria-hidden="true">></span>
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
