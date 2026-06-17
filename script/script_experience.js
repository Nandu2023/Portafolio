const icons = [
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M12 3v18M5 8h14M7 16h10" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />',
];

const mqaProjectsEs = [
  ["Mesa de ayuda MQA - Cierre proyectos", "Duración: Actual · Industria: Varios · Rol: Soporte ABAP y HCM · Proyecto: N/A · Tipo: N/A"],
  ["Proquinal", "Duración: Julio 2024 - mayo 2026 · Industria: Petroquímico y Textil · Rol: Desarrollador ABAP Cloud S/4 HANA / Consultor SAP Integration Suite (CPI) · Proyecto: EASI · Tipo: Desarrollo y ajustes ABAP"],
  ["Albateq", "Duración: Marzo 2024 - Junio 2024 · Industria: Productora de alimentos · Rol: Desarrollador ABAP S/4 HANA / Consultor SAP CPI · Proyecto: Agesia · Tipo: Desarrollo y ajustes ABAP"],
  ["Ramo", "Duración: Febrero 2024 - Marzo 2024 · Industria: Productora de alimentos · Rol: Desarrollador ABAP S/4 HANA · Proyecto: N/A · Tipo: Implementación SAP Concur"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duración: Febrero 2023 - Enero 2024 · Industria: Varios · Rol: Soporte ABAP y HCM · Proyecto: N/A · Tipo: Soporte y ajustes ABAP y HCM"],
  ["Granos y Cereales", "Duración: Agosto 2022 - Enero 2023 · Industria: Productora de alimentos · Rol: Desarrollador ABAP S/4 HANA - Consultor PT · Proyecto: Cronos · Tipo: Implementación nómina"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duración: Julio 2022 - Julio 2022 · Industria: Varios · Rol: Soporte ABAP y HCM · Proyecto: N/A · Tipo: N/A"],
  ["Grupo Uribe", "Duración: Enero 2020 - Junio 2022 · Industria: Comercializadora · Rol: Desarrollador ABAP S/4 HANA · Proyecto: Indigo · Tipo: Implementación SAP"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duración: Enero 2020 - Abril 2020 · Industria: Varios · Rol: Soporte ABAP y HCM · Proyecto: N/A · Tipo: N/A"],
  ["Constructora Jaramillo Mora", "Duración: Enero 2019 - Diciembre 2019 · Industria: Constructora · Rol: Desarrollador ABAP S/4 HANA · Proyecto: Constructora Jaramillo Mora · Tipo: Implementación vertical de construcción"],
  ["Mesa de ayuda MQA", "Duración: Junio 2018 - Diciembre 2018 · Industria: Varios · Rol: ABAP y HCM · Proyecto: N/A · Tipo: N/A"],
  ["CO&TEX", "Duración: Septiembre 2017 - Mayo 2018 · Industria: Manufactura de ropa · Rol: Desarrollador ABAP/Consultor HXM ECC Versión 6.8 · Proyecto: Enlace · Tipo: Implementación SAP"],
  ["Mesa de ayuda MQA", "Duración: Junio 2017 - Agosto 2017 · Industria: Varios · Rol: ABAP y HCM · Proyecto: N/A · Tipo: N/A"],
  ["TRIADA", "Duración: Octubre 2016 - Mayo 2017 · Industria: Construcción de vivienda · Rol: Desarrollador ABAP HXM ECC Versión 6.4 · Proyecto: TRIADA · Tipo: Implementación SAP y vertical de construcción"],
  ["La Santé - Grupo Carval", "Duración: Julio 2016 - Agosto 2016 · Industria: Farmacéutica · Rol: ABAP HCM ECC Versión 6.4 · Proyecto: N/A · Tipo: Desarrollos y ajustes ABAP"],
  ["Texmoda - Perú", "Duración: Diciembre 2015 - Julio 2016 · Industria: Comercializadora · Rol: ABAP HCM / Implementación módulo Gestión de tiempos de HCM ECC Versión 6.4 · Proyecto: N/A · Tipo: Implementación del módulo PT y desarrollos ABAP"],
  ["Sempertex", "Duración: Mayo 2013 - Septiembre 2013 · Industria: Producción de globos y comercializadora · Rol: ABAP / ERP ECC Versión 6.4 · Proyecto: Sempertex · Tipo: Implementación SAP"],
  ["TRENACO", "Duración: Mayo 2013 · Industria: Compra y venta de carbón y petróleo · Rol: ABAP / ERP · Proyecto: N/A · Tipo: Levantamiento información"],
];

const actualisapProjectsEs = [
  ["CNR - Colombian Natural Resources", "Duración: Noviembre 2012 hasta abril 2013 · Industria: Minera · Rol: ABAP - ERP · Proyecto: CNR - Colombian Natural Resources · Tipo: Desarrollos y ajustes ABAP"],
  ["TERRANVM", "Duración: Agosto 2012 hasta Noviembre 2012 · Industria: Servicios inmobiliarios · Rol: ABAP HCM · Proyecto: N/A · Tipo: Desarrollos y ajustes ABAP"],
  ["Transportes Joalco S.A.", "Duración: Agosto 2012 hasta Noviembre 2012 · Industria: Transportes · Rol: ABAP HCM / ERP · Proyecto: Transportes Joalco S.A. · Tipo: Desarrollos y ajustes ABAP"],
];

const consultoriaProjectsEs = [
  ["Universidad CES", "Duración: Marzo de 2012 hasta Agosto 2012 · Industria: Educación · Rol: ABAP · Proyecto: Universidad CES · Tipo: Desarrollos y ajustes ABAP"],
  ["Universidad de los Andes", "Duración: Octubre de 2011 hasta Febrero 2012 · Industria: Educación · Rol: ABAP · Proyecto: Universidad de los Andes · Tipo: Desarrollos y ajustes ABAP"],
  ["PREBEL", "Duración: Septiembre de 2011 hasta Octubre 2011 · Industria: Comercialización / Producción · Rol: ABAP · Proyecto: N/A · Tipo: Desarrollos y ajustes ABAP"],
];

const netpartnersProjectsEs = [
  ["Ecopetrol", "Duración: Julio de 2011 hasta Julio 2011 · Industria: Petrolera · Rol: Consultor HCM/SAP - ABAP · Proyecto: N/A · Tipo: Ajustes ABAP"],
  ["Ingenio Incauca y Providencia", "Duración: Enero de 2011 hasta Junio 2011 · Industria: Producción alcohol e ingenio azucarero · Rol: Consultor junior PY · Proyecto: N/A · Tipo: Implementación de módulos OM PA CM PT SP"],
];

const tecnoProjectsEs = [
  ["COMFENALCO", "Duración: Marzo de 2010 hasta Diciembre 2010 · Industria: Servicios · Rol: Consultor PT desarrollador ABAP HCM - PT · Proyecto: Implementación de módulo PT · Tipo: Implementación de módulo PT"],
  ["INTERQUIM", "Duración: Febrero de 2010 hasta Febrero de 2010 · Industria: Industria química · Rol: Desarrollador ABAP HCM/SAP · Proyecto: Desarrollo de programas ABAP HCM · Tipo: Desarrollo de programas"],
  ["INTERQUIMEC", "Duración: Enero de 2010 hasta Enero de 2010 · Industria: Industria química · Rol: Consultor HCM/SAP · Proyecto: Soporte Salida en vivo · Tipo: Soporte"],
  ["ECOPETROL", "Duración: Noviembre 2009 hasta Diciembre 2009 · Industria: Petrolera · Rol: Consultor PT · Proyecto: Ajuste del sistema de Gestión de Tiempos · Tipo: Soporte"],
  ["GOODYEAR", "Duración: Diciembre de 2008 hasta Septiembre 2009 · Industria: Producción de llantas · Rol: Consultor HCM/SAP PT e incentivos, desarrollador ABAP Para Incentivos · Proyecto: N/A · Tipo: Actualización"],
  ["ECOPETROL", "Duración: Julio de 2008 hasta Noviembre 2008 · Industria: Petrolera · Rol: Desarrollador ABAP HCM/SAP, consultor PT Y PA · Proyecto: N/A · Tipo: Soporte"],
  ["UNIDELCA", "Duración: Julio de 2008 · Industria: Casino · Rol: Consultor HCM/SAP · Proyecto: N/A · Tipo: Soporte"],
  ["Clínica Palermo", "Duración: Mayo de 2008 hasta Junio 2008 · Industria: Servicios Médicos · Rol: Consultor HCM/SAP · Proyecto: N/A · Tipo: Soporte"],
  ["Smurfit Cartón de Colombia", "Duración: Febrero de 2007 hasta Abril 2008 · Industria: Producción · Rol: Consultor/Desarrollador HCM · Proyecto: N/A · Tipo: Implementación"],
  ["Conconcreto", "Duración: Julio de 2006 hasta Diciembre 2006 · Industria: Construcción · Rol: Consultor/Desarrollador HCM · Proyecto: N/A · Tipo: Implementación"],
  ["Help desk SAP", "Duración: Noviembre de 2005 al Junio 2006 · Industria: Construcción · Rol: Consultor/Desarrollador HCM · Proyecto: N/A · Tipo: Soporte a clientes"],
];

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Trayectoria profesional",
    title: "Experiencia SAP",
    featured: "Etapas destacadas",
    viewDetail: "Ver detalle",
    home: "← Inicio",
    focusTitle: "Foco del rol",
    projectsTitle: "Registros cronológicos del documento",
    tagsLabel: "Areas clave",
    experiences: [
      {
        company: "MQA Business Consultants",
        period: "Mayo 2013 - Actual",
        role: "Soporte, desarrollo ABAP, HCM/HXM, S/4HANA, ABAP Cloud e Integration Suite",
        summary: "Registros desde soporte MQA actual hasta proyectos 2013.",
        focus:
          "Etapa más reciente, con soporte ABAP/HCM, desarrollos S/4HANA, ABAP Cloud, SAP Integration Suite/CPI, implementación SAP Concur, PT, nómina y verticales de construcción. El orden de los registros respeta el documento fuente.",
        projects: mqaProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "ABAP Cloud", "S/4HANA", "SAP CPI", "HCM/HXM", "PT/PY"],
      },
      {
        company: "Actualisap Consultores SAS",
        period: "Agosto 2012 - Mayo 2013",
        role: "Consultor ABAP HCM / ERP",
        summary: "Minería, servicios inmobiliarios y transporte.",
        focus:
          "Desarrollos y ajustes ABAP para clientes de minería, servicios inmobiliarios y transporte, manteniendo el orden indicado en el archivo de experiencia.",
        projects: actualisapProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "ERP", "HCM", "Reportes", "Ajustes"],
      },
      {
        company: "Consultoría Organizacional",
        period: "Septiembre 2011 - Agosto 2012",
        role: "Consultor ABAP",
        summary: "Educación, interfaces, formularios y desarrollos ABAP.",
        focus:
          "Desarrollos ABAP para instituciones educativas y compañías de comercialización/producción, con formularios, cargas, interfaces y ajustes.",
        projects: consultoriaProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "Educación", "Interfaces", "Formularios"],
      },
      {
        company: "Netpartners / HR Solutions",
        period: "Enero 2011 - Julio 2011",
        role: "Consultor HCM / SAP ABAP / PY",
        summary: "Soporte HCM, ajustes ABAP e implementación PY.",
        focus:
          "Soporte y consultoría SAP HCM/ABAP, con participación en ajustes ABAP e implementación de módulos de HCM y nómina.",
        projects: netpartnersProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["SAP HCM", "ABAP", "PY", "PT", "Soporte"],
      },
      {
        company: "Tecnoinformática Latinoamérica S.A.",
        period: "Noviembre 2005 - Diciembre 2010",
        role: "Consultor / Desarrollador HCM y ABAP",
        summary: "Implementaciones HCM, PT, soporte y desarrollos ABAP.",
        focus:
          "Etapa inicial SAP con implementación de módulos HCM, gestión de tiempos, desarrollos ABAP HCM, soporte de salida en vivo y atención a clientes.",
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
  home: "← Home",
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
        <p>${experience.period} · ${experience.summary}</p>
      </span>
      <span class="arrow" aria-hidden="true">›</span>
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
