const icons = [
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M12 3v18M5 8h14M7 16h10" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />',
];

const mqaProjectsEs = [
  ["Mesa de ayuda MQA - Cierre proyectos", "Duracion: Actual  -  Industria: Varios  -  Rol: Soporte ABAP y HCM  -  Proyecto: N/A  -  Tipo: N/A"],
  ["Proquinal", "Duracion: Julio 2024 - mayo 2026  -  Industria: Petroquimico y Textil  -  Rol: Desarrollador ABAP Cloud S/4 HANA / Consultor SAP Integration Suite (CPI)  -  Proyecto: EASI  -  Tipo: Desarrollo y ajustes ABAP"],
  ["Albateq", "Duracion: Marzo 2024 - Junio 2024  -  Industria: Productora de alimentos  -  Rol: Desarrollador ABAP S/4 HANA / Consultor SAP CPI  -  Proyecto: Agesia  -  Tipo: Desarrollo y ajustes ABAP"],
  ["Ramo", "Duracion: Febrero 2024 - Marzo 2024  -  Industria: Productora de alimentos  -  Rol: Desarrollador ABAP S/4 HANA  -  Proyecto: N/A  -  Tipo: Implementacion SAP Concur"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duracion: Febrero 2023 - Enero 2024  -  Industria: Varios  -  Rol: Soporte ABAP y HCM  -  Proyecto: N/A  -  Tipo: Soporte y ajustes ABAP y HCM"],
  ["Granos y Cereales", "Duracion: Agosto 2022 - Enero 2023  -  Industria: Productora de alimentos  -  Rol: Desarrollador ABAP S/4 HANA - Consultor PT  -  Proyecto: Cronos  -  Tipo: Implementacion nomina"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duracion: Julio 2022 - Julio 2022  -  Industria: Varios  -  Rol: Soporte ABAP y HCM  -  Proyecto: N/A  -  Tipo: N/A"],
  ["Grupo Uribe", "Duracion: Enero 2020 - Junio 2022  -  Industria: Comercializadora  -  Rol: Desarrollador ABAP S/4 HANA  -  Proyecto: Indigo  -  Tipo: Implementacion SAP"],
  ["Mesa de ayuda MQA - Cierre proyectos", "Duracion: Enero 2020 - Abril 2020  -  Industria: Varios  -  Rol: Soporte ABAP y HCM  -  Proyecto: N/A  -  Tipo: N/A"],
  ["Constructora Jaramillo Mora", "Duracion: Enero 2019 - Diciembre 2019  -  Industria: Constructora  -  Rol: Desarrollador ABAP S/4 HANA  -  Proyecto: Constructora Jaramillo Mora  -  Tipo: Implementacion vertical de construccion"],
  ["Mesa de ayuda MQA", "Duracion: Junio 2018 - Diciembre 2018  -  Industria: Varios  -  Rol: ABAP y HCM  -  Proyecto: N/A  -  Tipo: N/A"],
  ["CO&TEX", "Duracion: Septiembre 2017 - Mayo 2018  -  Industria: Manufactura de ropa  -  Rol: Desarrollador ABAP/Consultor HXM ECC Version 6.8  -  Proyecto: Enlace  -  Tipo: Implementacion SAP"],
  ["Mesa de ayuda MQA", "Duracion: Junio 2017 - Agosto 2017  -  Industria: Varios  -  Rol: ABAP y HCM  -  Proyecto: N/A  -  Tipo: N/A"],
  ["TRIADA", "Duracion: Octubre 2016 - Mayo 2017  -  Industria: Construccion de vivienda  -  Rol: Desarrollador ABAP HXM ECC Version 6.4  -  Proyecto: TRIADA  -  Tipo: Implementacion SAP y vertical de construccion"],
  ["La Sante - Grupo Carval", "Duracion: Julio 2016 - Agosto 2016  -  Industria: Farmaceutica  -  Rol: ABAP HCM ECC Version 6.4  -  Proyecto: N/A  -  Tipo: Desarrollos y ajustes ABAP"],
  ["Texmoda - Peru", "Duracion: Diciembre 2015 - Julio 2016  -  Industria: Comercializadora  -  Rol: ABAP HCM / Implementacion modulo Gestion de tiempos de HCM ECC Version 6.4  -  Proyecto: N/A  -  Tipo: Implementacion del modulo PT y desarrollos ABAP"],
  ["Sempertex", "Duracion: Mayo 2013 - Septiembre 2013  -  Industria: Produccion de globos y comercializadora  -  Rol: ABAP / ERP ECC Version 6.4  -  Proyecto: Sempertex  -  Tipo: Implementacion SAP"],
  ["TRENACO", "Duracion: Mayo 2013  -  Industria: Compra y venta de carbon y petroleo  -  Rol: ABAP / ERP  -  Proyecto: N/A  -  Tipo: Levantamiento informacion"],
];

const actualisapProjectsEs = [
  ["CNR - Colombian Natural Resources", "Duracion: Noviembre 2012 hasta abril 2013  -  Industria: Minera  -  Rol: ABAP - ERP  -  Proyecto: CNR - Colombian Natural Resources  -  Tipo: Desarrollos y ajustes ABAP"],
  ["TERRANVM", "Duracion: Agosto 2012 hasta Noviembre 2012  -  Industria: Servicios inmobiliarios  -  Rol: ABAP HCM  -  Proyecto: N/A  -  Tipo: Desarrollos y ajustes ABAP"],
  ["Transportes Joalco S.A.", "Duracion: Agosto 2012 hasta Noviembre 2012  -  Industria: Transportes  -  Rol: ABAP HCM / ERP  -  Proyecto: Transportes Joalco S.A.  -  Tipo: Desarrollos y ajustes ABAP"],
];

const consultoriaProjectsEs = [
  ["Universidad CES", "Duracion: Marzo de 2012 hasta Agosto 2012  -  Industria: Educacion  -  Rol: ABAP  -  Proyecto: Universidad CES  -  Tipo: Desarrollos y ajustes ABAP"],
  ["Universidad de los Andes", "Duracion: Octubre de 2011 hasta Febrero 2012  -  Industria: Educacion  -  Rol: ABAP  -  Proyecto: Universidad de los Andes  -  Tipo: Desarrollos y ajustes ABAP"],
  ["PREBEL", "Duracion: Septiembre de 2011 hasta Octubre 2011  -  Industria: Comercializacion / Produccion  -  Rol: ABAP  -  Proyecto: N/A  -  Tipo: Desarrollos y ajustes ABAP"],
];

const netpartnersProjectsEs = [
  ["Ecopetrol", "Duracion: Julio de 2011 hasta Julio 2011  -  Industria: Petrolera  -  Rol: Consultor HCM/SAP - ABAP  -  Proyecto: N/A  -  Tipo: Ajustes ABAP"],
  ["Ingenio Incauca y Providencia", "Duracion: Enero de 2011 hasta Junio 2011  -  Industria: Produccion alcohol e ingenio azucarero  -  Rol: Consultor junior PY  -  Proyecto: N/A  -  Tipo: Implementacion de modulos OM PA CM PT SP"],
];

const tecnoProjectsEs = [
  ["COMFENALCO", "Duracion: Marzo de 2010 hasta Diciembre 2010  -  Industria: Servicios  -  Rol: Consultor PT desarrollador ABAP HCM - PT  -  Proyecto: Implementacion de modulo PT  -  Tipo: Implementacion de modulo PT"],
  ["INTERQUIM", "Duracion: Febrero de 2010 hasta Febrero de 2010  -  Industria: Industria quimica  -  Rol: Desarrollador ABAP HCM/SAP  -  Proyecto: Desarrollo de programas ABAP HCM  -  Tipo: Desarrollo de programas"],
  ["INTERQUIMEC", "Duracion: Enero de 2010 hasta Enero de 2010  -  Industria: Industria quimica  -  Rol: Consultor HCM/SAP  -  Proyecto: Soporte Salida en vivo  -  Tipo: Soporte"],
  ["ECOPETROL", "Duracion: Noviembre 2009 hasta Diciembre 2009  -  Industria: Petrolera  -  Rol: Consultor PT  -  Proyecto: Ajuste del sistema de Gestion de Tiempos  -  Tipo: Soporte"],
  ["GOODYEAR", "Duracion: Diciembre de 2008 hasta Septiembre 2009  -  Industria: Produccion de llantas  -  Rol: Consultor HCM/SAP PT e incentivos, desarrollador ABAP Para Incentivos  -  Proyecto: N/A  -  Tipo: Actualizacion"],
  ["ECOPETROL", "Duracion: Julio de 2008 hasta Noviembre 2008  -  Industria: Petrolera  -  Rol: Desarrollador ABAP HCM/SAP, consultor PT Y PA  -  Proyecto: N/A  -  Tipo: Soporte"],
  ["UNIDELCA", "Duracion: Julio de 2008  -  Industria: Casino  -  Rol: Consultor HCM/SAP  -  Proyecto: N/A  -  Tipo: Soporte"],
  ["Clinica Palermo", "Duracion: Mayo de 2008 hasta Junio 2008  -  Industria: Servicios Medicos  -  Rol: Consultor HCM/SAP  -  Proyecto: N/A  -  Tipo: Soporte"],
  ["Smurfit Carton de Colombia", "Duracion: Febrero de 2007 hasta Abril 2008  -  Industria: Produccion  -  Rol: Consultor/Desarrollador HCM  -  Proyecto: N/A  -  Tipo: Implementacion"],
  ["Conconcreto", "Duracion: Julio de 2006 hasta Diciembre 2006  -  Industria: Construccion  -  Rol: Consultor/Desarrollador HCM  -  Proyecto: N/A  -  Tipo: Implementacion"],
  ["Help desk SAP", "Duracion: Noviembre de 2005 al Junio 2006  -  Industria: Construccion  -  Rol: Consultor/Desarrollador HCM  -  Proyecto: N/A  -  Tipo: Soporte a clientes"],
];

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Trayectoria profesional",
    title: "Experiencia SAP",
    featured: "Etapas destacadas",
    viewDetail: "Ver detalle",
    home: "<- Inicio",
    focusTitle: "Foco del rol",
    projectsTitle: "Registros cronologicos del documento",
    tagsLabel: "Areas clave",
    experiences: [
      {
        company: "MQA Business Consultants",
        period: "Mayo 2013 - Actual",
        role: "Soporte, desarrollo ABAP, HCM/HXM, S/4HANA, ABAP Cloud e Integration Suite",
        summary: "Registros desde soporte MQA actual hasta proyectos 2013.",
        focus:
          "Etapa mas reciente, con soporte ABAP/HCM, desarrollos S/4HANA, ABAP Cloud, SAP Integration Suite/CPI, implementacion SAP Concur, PT, nomina y verticales de construccion. El orden de los registros respeta el documento fuente.",
        projects: mqaProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "ABAP Cloud", "S/4HANA", "SAP CPI", "HCM/HXM", "PT/PY"],
      },
      {
        company: "Actualisap Consultores SAS",
        period: "Agosto 2012 - Mayo 2013",
        role: "Consultor ABAP HCM / ERP",
        summary: "Mineria, servicios inmobiliarios y transporte.",
        focus:
          "Desarrollos y ajustes ABAP para clientes de mineria, servicios inmobiliarios y transporte, manteniendo el orden indicado en el archivo de experiencia.",
        projects: actualisapProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "ERP", "HCM", "Reportes", "Ajustes"],
      },
      {
        company: "Consultoria Organizacional",
        period: "Septiembre 2011 - Agosto 2012",
        role: "Consultor ABAP",
        summary: "Educacion, interfaces, formularios y desarrollos ABAP.",
        focus:
          "Desarrollos ABAP para instituciones educativas y companias de comercializacion/produccion, con formularios, cargas, interfaces y ajustes.",
        projects: consultoriaProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["ABAP", "Educacion", "Interfaces", "Formularios"],
      },
      {
        company: "Netpartners / HR Solutions",
        period: "Enero 2011 - Julio 2011",
        role: "Consultor HCM / SAP ABAP / PY",
        summary: "Soporte HCM, ajustes ABAP e implementacion PY.",
        focus:
          "Soporte y consultoria SAP HCM/ABAP, con participacion en ajustes ABAP e implementacion de modulos de HCM y nomina.",
        projects: netpartnersProjectsEs.map(([name, text]) => ({ name, text })),
        tags: ["SAP HCM", "ABAP", "PY", "PT", "Soporte"],
      },
      {
        company: "Tecnoinformatica Latinoamerica S.A.",
        period: "Noviembre 2005 - Diciembre 2010",
        role: "Consultor / Desarrollador HCM y ABAP",
        summary: "Implementaciones HCM, PT, soporte y desarrollos ABAP.",
        focus:
          "Etapa inicial SAP con implementacion de modulos HCM, gestion de tiempos, desarrollos ABAP HCM, soporte de salida en vivo y atencion a clientes.",
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
  home: "<- Home",
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
        <p>${experience.period}  -  ${experience.summary}</p>
      </span>
      <span class="arrow" aria-hidden="true">></span>
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
