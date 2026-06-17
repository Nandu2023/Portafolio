const icons = [
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M12 3v18M5 8h14M7 16h10" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />',
];

const mqaProjectsEs = [
  ["Mesa de ayuda MQA - Cierre proyectos", "Duraci\u00f3n: Actual \u00b7 Industria: Varios \u00b7 Rol: Soporte ABAP y HCM \u00b7 Proyecto: N/A \u00b7 Tipo: N/A"],
  ["Proquinal", "Duraci\u00f3n: Julio 2024 - mayo 2026 \u00b7 Industria: Petroqu\u00edmico y Textil \u00b7 Rol: Desarrollador ABAP Cloud S/4 HANA / Consultor SAP Integration Suite (CPI) \u00b7 Proyecto: EASI \u00b7 Tipo: Desarrollo y ajustes ABAP"],
  ["Albateq", "Duraci\u00f3n: Marzo 2024 - Junio 2024 \u00b7 Industria: Productora de alimentos \u00b7 Rol: Desarrollador ABAP S/4 HANA / Consultor SAP CPI \u00b7 Proyecto: Agesia \u00b7 Tipo: Desarrollo y ajustes ABAP"],
  ["Ramo", "Duraci\u00f3n: Febrero 2024 - Marzo 2024 \u00b7 Industria: Productora de alimentos \u00b7 Rol: Desarrollador ABAP S/4 HANA \u00b7 Proyecto: N/A \u00b7 Tipo: Implementaci\u00f3n SAP Concur"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duraci\u00f3n: Febrero 2023 - Enero 2024 \u00b7 Industria: Varios \u00b7 Rol: Soporte ABAP y HCM \u00b7 Proyecto: N/A \u00b7 Tipo: Soporte y ajustes ABAP y HCM"],
  ["Granos y Cereales", "Duraci\u00f3n: Agosto 2022 - Enero 2023 \u00b7 Industria: Productora de alimentos \u00b7 Rol: Desarrollador ABAP S/4 HANA - Consultor PT \u00b7 Proyecto: Cronos \u00b7 Tipo: Implementaci\u00f3n n\u00f3mina"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duraci\u00f3n: Julio 2022 - Julio 2022 \u00b7 Industria: Varios \u00b7 Rol: Soporte ABAP y HCM \u00b7 Proyecto: N/A \u00b7 Tipo: N/A"],
  ["Grupo Uribe", "Duraci\u00f3n: Enero 2020 - Junio 2022 \u00b7 Industria: Comercializadora \u00b7 Rol: Desarrollador ABAP S/4 HANA \u00b7 Proyecto: Indigo \u00b7 Tipo: Implementaci\u00f3n SAP"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duraci\u00f3n: Enero 2020 - Abril 2020 \u00b7 Industria: Varios \u00b7 Rol: Soporte ABAP y HCM \u00b7 Proyecto: N/A \u00b7 Tipo: N/A"],
  ["Constructora Jaramillo Mora", "Duraci\u00f3n: Enero 2019 - Diciembre 2019 \u00b7 Industria: Constructora \u00b7 Rol: Desarrollador ABAP S/4 HANA \u00b7 Proyecto: Constructora Jaramillo Mora \u00b7 Tipo: Implementaci\u00f3n vertical de construcci\u00f3n"],
  ["Mesa de ayuda MQA", "Duraci\u00f3n: Junio 2018 - Diciembre 2018 \u00b7 Industria: Varios \u00b7 Rol: ABAP y HCM \u00b7 Proyecto: N/A \u00b7 Tipo: N/A"],
  ["CO&TEX", "Duraci\u00f3n: Septiembre 2017 - Mayo 2018 \u00b7 Industria: Manufactura de ropa \u00b7 Rol: Desarrollador ABAP/Consultor HXM ECC Versi\u00f3n 6.8 \u00b7 Proyecto: Enlace \u00b7 Tipo: Implementaci\u00f3n SAP"],
  ["Mesa de ayuda MQA", "Duraci\u00f3n: Junio 2017 - Agosto 2017 \u00b7 Industria: Varios \u00b7 Rol: ABAP y HCM \u00b7 Proyecto: N/A \u00b7 Tipo: N/A"],
  ["TRIADA", "Duraci\u00f3n: Octubre 2016 - Mayo 2017 \u00b7 Industria: Construcci\u00f3n de vivienda \u00b7 Rol: Desarrollador ABAP HXM ECC Versi\u00f3n 6.4 \u00b7 Proyecto: TRIADA \u00b7 Tipo: Implementaci\u00f3n SAP y vertical de construcci\u00f3n"],
  ["La Sant\u00e9 - Grupo Carval", "Duraci\u00f3n: Julio 2016 - Agosto 2016 \u00b7 Industria: Farmac\u00e9utica \u00b7 Rol: ABAP HCM ECC Versi\u00f3n 6.4 \u00b7 Proyecto: N/A \u00b7 Tipo: Desarrollos y ajustes ABAP"],
  ["Texmoda - Per\u00fa", "Duraci\u00f3n: Diciembre 2015 - Julio 2016 \u00b7 Industria: Comercializadora \u00b7 Rol: ABAP HCM / Implementaci\u00f3n m\u00f3dulo Gesti\u00f3n de tiempos de HCM ECC Versi\u00f3n 6.4 \u00b7 Proyecto: N/A \u00b7 Tipo: Implementaci\u00f3n del m\u00f3dulo PT y desarrollos ABAP"],
  ["Sempertex", "Duraci\u00f3n: Mayo 2013 - Septiembre 2013 \u00b7 Industria: Producci\u00f3n de globos y comercializadora \u00b7 Rol: ABAP / ERP ECC Versi\u00f3n 6.4 \u00b7 Proyecto: Sempertex \u00b7 Tipo: Implementaci\u00f3n SAP"],
  ["TRENACO", "Duraci\u00f3n: Mayo 2013 \u00b7 Industria: Compra y venta de carb\u00f3n y petr\u00f3leo \u00b7 Rol: ABAP / ERP \u00b7 Proyecto: N/A \u00b7 Tipo: Levantamiento informaci\u00f3n"],
];

const actualisapProjectsEs = [
  ["CNR - Colombian Natural Resources", "Duraci\u00f3n: Noviembre 2012 hasta abril 2013 \u00b7 Industria: Minera \u00b7 Rol: ABAP - ERP \u00b7 Proyecto: CNR - Colombian Natural Resources \u00b7 Tipo: Desarrollos y ajustes ABAP"],
  ["TERRANVM", "Duraci\u00f3n: Agosto 2012 hasta Noviembre 2012 \u00b7 Industria: Servicios inmobiliarios \u00b7 Rol: ABAP HCM \u00b7 Proyecto: N/A \u00b7 Tipo: Desarrollos y ajustes ABAP"],
  ["Transportes Joalco S.A.", "Duraci\u00f3n: Agosto 2012 hasta Noviembre 2012 \u00b7 Industria: Transportes \u00b7 Rol: ABAP HCM / ERP \u00b7 Proyecto: Transportes Joalco S.A. \u00b7 Tipo: Desarrollos y ajustes ABAP"],
];

const consultoriaProjectsEs = [
  ["Universidad CES", "Duraci\u00f3n: Marzo de 2012 hasta Agosto 2012 \u00b7 Industria: Educaci\u00f3n \u00b7 Rol: ABAP \u00b7 Proyecto: Universidad CES \u00b7 Tipo: Desarrollos y ajustes ABAP"],
  ["Universidad de los Andes", "Duraci\u00f3n: Octubre de 2011 hasta Febrero 2012 \u00b7 Industria: Educaci\u00f3n \u00b7 Rol: ABAP \u00b7 Proyecto: Universidad de los Andes \u00b7 Tipo: Desarrollos y ajustes ABAP"],
  ["PREBEL", "Duraci\u00f3n: Septiembre de 2011 hasta Octubre 2011 \u00b7 Industria: Comercializaci\u00f3n / Producci\u00f3n \u00b7 Rol: ABAP \u00b7 Proyecto: N/A \u00b7 Tipo: Desarrollos y ajustes ABAP"],
];

const netpartnersProjectsEs = [
  ["Ecopetrol", "Duraci\u00f3n: Julio de 2011 hasta Julio 2011 \u00b7 Industria: Petrolera \u00b7 Rol: Consultor HCM/SAP - ABAP \u00b7 Proyecto: N/A \u00b7 Tipo: Ajustes ABAP"],
  ["Ingenio Incauca y Providencia", "Duraci\u00f3n: Enero de 2011 hasta Junio 2011 \u00b7 Industria: Producci\u00f3n alcohol e ingenio azucarero \u00b7 Rol: Consultor junior PY \u00b7 Proyecto: N/A \u00b7 Tipo: Implementaci\u00f3n de m\u00f3dulos OM PA CM PT SP"],
];

const tecnoProjectsEs = [
  ["COMFENALCO", "Duraci\u00f3n: Marzo de 2010 hasta Diciembre 2010 \u00b7 Industria: Servicios \u00b7 Rol: Consultor PT desarrollador ABAP HCM - PT \u00b7 Proyecto: Implementaci\u00f3n de m\u00f3dulo PT \u00b7 Tipo: Implementaci\u00f3n de m\u00f3dulo PT"],
  ["INTERQUIM", "Duraci\u00f3n: Febrero de 2010 hasta Febrero de 2010 \u00b7 Industria: Industria qu\u00edmica \u00b7 Rol: Desarrollador ABAP HCM/SAP \u00b7 Proyecto: Desarrollo de programas ABAP HCM \u00b7 Tipo: Desarrollo de programas"],
  ["INTERQUIMEC", "Duraci\u00f3n: Enero de 2010 hasta Enero de 2010 \u00b7 Industria: Industria qu\u00edmica \u00b7 Rol: Consultor HCM/SAP \u00b7 Proyecto: Soporte Salida en vivo \u00b7 Tipo: Soporte"],
  ["ECOPETROL", "Duraci\u00f3n: Noviembre 2009 hasta Diciembre 2009 \u00b7 Industria: Petrolera \u00b7 Rol: Consultor PT \u00b7 Proyecto: Ajuste del sistema de Gesti\u00f3n de Tiempos \u00b7 Tipo: Soporte"],
  ["GOODYEAR", "Duraci\u00f3n: Diciembre de 2008 hasta Septiembre 2009 \u00b7 Industria: Producci\u00f3n de llantas \u00b7 Rol: Consultor HCM/SAP PT e incentivos, desarrollador ABAP Para Incentivos \u00b7 Proyecto: N/A \u00b7 Tipo: Actualizaci\u00f3n"],
  ["ECOPETROL", "Duraci\u00f3n: Julio de 2008 hasta Noviembre 2008 \u00b7 Industria: Petrolera \u00b7 Rol: Desarrollador ABAP HCM/SAP, consultor PT Y PA \u00b7 Proyecto: N/A \u00b7 Tipo: Soporte"],
  ["UNIDELCA", "Duraci\u00f3n: Julio de 2008 \u00b7 Industria: Casino \u00b7 Rol: Consultor HCM/SAP \u00b7 Proyecto: N/A \u00b7 Tipo: Soporte"],
  ["Cl\u00ednica Palermo", "Duraci\u00f3n: Mayo de 2008 hasta Junio 2008 \u00b7 Industria: Servicios M\u00e9dicos \u00b7 Rol: Consultor HCM/SAP \u00b7 Proyecto: N/A \u00b7 Tipo: Soporte"],
  ["Smurfit Cart\u00f3n de Colombia", "Duraci\u00f3n: Febrero de 2007 hasta Abril 2008 \u00b7 Industria: Producci\u00f3n \u00b7 Rol: Consultor/Desarrollador HCM \u00b7 Proyecto: N/A \u00b7 Tipo: Implementaci\u00f3n"],
  ["Conconcreto", "Duraci\u00f3n: Julio de 2006 hasta Diciembre 2006 \u00b7 Industria: Construcci\u00f3n \u00b7 Rol: Consultor/Desarrollador HCM \u00b7 Proyecto: N/A \u00b7 Tipo: Implementaci\u00f3n"],
  ["Help desk SAP", "Duraci\u00f3n: Noviembre de 2005 al Junio 2006 \u00b7 Industria: Construcci\u00f3n \u00b7 Rol: Consultor/Desarrollador HCM \u00b7 Proyecto: N/A \u00b7 Tipo: Soporte a clientes"],
];

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Trayectoria profesional",
    title: "Experiencia SAP",
    featured: "Etapas destacadas",
    viewDetail: "Ver detalle",
    home: "\u2190 Inicio",
    focusTitle: "Foco del rol",
    projectsTitle: "Registros cronol\u00f3gicos del documento",
    tagsLabel: "Areas clave",
    experiences: [
      {
        company: "MQA Business Consultants",
        period: "Mayo 2013 - Actual",
        role: "Soporte, desarrollo ABAP, HCM/HXM, S/4HANA, ABAP Cloud e Integration Suite",
        summary: "Registros desde soporte MQA actual hasta proyectos 2013.",
        focus:
          "Etapa m\u00e1s reciente, con soporte ABAP/HCM, desarrollos S/4HANA, ABAP Cloud, SAP Integration Suite/CPI, implementaci\u00f3n SAP Concur, PT, n\u00f3mina y verticales de construcci\u00f3n. El orden de los registros respeta el documento fuente.",
        projects: mqaProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "ABAP Cloud", "S/4HANA", "SAP CPI", "HCM/HXM", "PT/PY"],
      },
      {
        company: "Actualisap Consultores SAS",
        period: "Agosto 2012 - Mayo 2013",
        role: "Consultor ABAP HCM / ERP",
        summary: "Miner\u00eda, servicios inmobiliarios y transporte.",
        focus:
          "Desarrollos y ajustes ABAP para clientes de miner\u00eda, servicios inmobiliarios y transporte, manteniendo el orden indicado en el archivo de experiencia.",
        projects: actualisapProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "ERP", "HCM", "Reportes", "Ajustes"],
      },
      {
        company: "Consultor\u00eda Organizacional",
        period: "Septiembre 2011 - Agosto 2012",
        role: "Consultor ABAP",
        summary: "Educaci\u00f3n, interfaces, formularios y desarrollos ABAP.",
        focus:
          "Desarrollos ABAP para instituciones educativas y compa\u00f1\u00edas de comercializaci\u00f3n/producci\u00f3n, con formularios, cargas, interfaces y ajustes.",
        projects: consultoriaProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "Educaci\u00f3n", "Interfaces", "Formularios"],
      },
      {
        company: "Netpartners / HR Solutions",
        period: "Enero 2011 - Julio 2011",
        role: "Consultor HCM / SAP ABAP / PY",
        summary: "Soporte HCM, ajustes ABAP e implementaci\u00f3n PY.",
        focus:
          "Soporte y consultor\u00eda SAP HCM/ABAP, con participaci\u00f3n en ajustes ABAP e implementaci\u00f3n de m\u00f3dulos de HCM y n\u00f3mina.",
        projects: netpartnersProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["SAP HCM", "ABAP", "PY", "PT", "Soporte"],
      },
      {
        company: "Tecnoinform\u00e1tica Latinoam\u00e9rica S.A.",
        period: "Noviembre 2005 - Diciembre 2010",
        role: "Consultor / Desarrollador HCM y ABAP",
        summary: "Implementaciones HCM, PT, soporte y desarrollos ABAP.",
        focus:
          "Etapa inicial SAP con implementaci\u00f3n de m\u00f3dulos HCM, gesti\u00f3n de tiempos, desarrollos ABAP HCM, soporte de salida en vivo y atenci\u00f3n a clientes.",
        projects: tecnoProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["SAP HCM", "PT", "PA", "PY", "ABAP", "Soporte"],
      },
    ],
  },
};

content.en = {
  ...content.es,
  htmlLang: "en",
  subtitle: "SAP ABAP / HXM Consultant",
  profileLabel: "Professional journey",
  title: "SAP Experience",
  featured: "Featured stages",
  viewDetail: "View detail",
  home: "\u2190 Home",
  focusTitle: "Role focus",
  projectsTitle: "Chronological records from the source document",
  tagsLabel: "Key areas",
};

let currentLanguage = getLanguage();
let activeExperienceIndex = 0;

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
  document.getElementById("id_experience_h2").textContent = page.title;
  document.getElementById("id_featured_title").textContent = page.featured;
  document.getElementById("id_view_detail").textContent = page.viewDetail;
  document.getElementById("id_goToHomePage").textContent = page.home;
  document.getElementById("id_detail_focus_title").textContent = page.focusTitle;
  document.getElementById("id_projects_title").textContent = page.projectsTitle;
  document.getElementById("id_detail_tags").setAttribute("aria-label", page.tagsLabel);

  renderExperienceCards(page);
  renderDetail(page.experiences[activeExperienceIndex]);
}

function renderExperienceCards(page) {
  const grid = document.getElementById("id_experience_grid");
  grid.innerHTML = "";

  page.experiences.forEach((experience, index) => {
    const card = document.createElement("button");
    card.className = `experience-card${index === activeExperienceIndex ? " is-active" : ""}`;
    card.type = "button";
    card.setAttribute("aria-pressed", index === activeExperienceIndex ? "true" : "false");
    card.innerHTML = `
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">${icons[index]}</svg>
      </span>
      <span>
        <h3>${experience.company}</h3>
        <p>${experience.period} \u00b7 ${experience.summary}</p>
      </span>
      <span class="arrow" aria-hidden="true">\u203a</span>
    `;

    card.addEventListener("click", () => {
      activeExperienceIndex = index;
      renderExperienceCards(page);
      renderDetail(experience);
      document.getElementById("id_experience_detail").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.appendChild(card);
  });
}

function renderDetail(experience) {
  const projects = document.getElementById("id_projects_list");
  const tags = document.getElementById("id_detail_tags");

  document.getElementById("id_detail_period").textContent = experience.period;
  document.getElementById("id_detail_company").textContent = experience.company;
  document.getElementById("id_detail_role").textContent = experience.role;
  document.getElementById("id_detail_focus").textContent = experience.focus;

  projects.innerHTML = "";
  experience.projects.forEach((project) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${project.name}</strong><span>${project.text}</span>`;
    projects.appendChild(item);
  });

  tags.innerHTML = "";
  experience.tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    tags.appendChild(tag);
  });
}

function goToHomePage() {
  window.location.href = currentLanguage === "en" ? "index.html?lang=en" : "index.html?lang=es";
}
