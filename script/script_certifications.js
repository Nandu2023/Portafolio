const icons = [
  '<path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4Z" /><path d="m9 12 2 2 4-5" />',
  '<path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h8M8 16h5" />',
  '<path d="M12 2v20M5 8h14M7 16h10" />',
  '<path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z" />',
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M20 6 9 17l-5-5" />',
];

const sapCertificationsEs = [
  {
    title: "Back-End Developer - ABAP Cloud",
    issuer: "SAP",
    place: "Medellin",
    date: "Julio 2025",
    summary: "Credencial SAP asociada a desarrollo back-end con ABAP Cloud.",
    focus:
      "Certificacion SAP Certified Associate - Back-End Developer - ABAP Cloud, alineada con desarrollo moderno, extensibilidad clean core y escenarios ABAP Cloud.",
    tags: ["SAP", "ABAP Cloud", "Back-End", "Clean core", "2025"],
  },
  {
    title: "ABAP for SAP HANA 2.0",
    issuer: "SAP",
    place: "Bogota",
    date: "Mayo 2021",
    summary: "Especializacion SAP para desarrollo ABAP sobre SAP HANA.",
    focus:
      "Certificacion SAP Certified Development Specialist - ABAP for SAP HANA 2.0, enfocada en capacidades de desarrollo ABAP optimizadas para SAP HANA.",
    tags: ["SAP HANA", "ABAP", "Development Specialist", "2021"],
  },
  {
    title: "SAP HCM with ERP 6.0 EhP7",
    issuer: "SAP",
    place: "Bogota",
    date: "Enero 2021",
    summary: "Certificacion funcional SAP HCM sobre ERP 6.0 EhP7.",
    focus:
      "Certificacion SAP Certified Application Associate - SAP HCM with ERP 6.0 EhP7, que respalda conocimiento funcional en procesos HCM dentro de SAP ERP.",
    tags: ["SAP HCM", "ERP 6.0", "Application Associate", "2021"],
  },
  {
    title: "ABAP with SAP NetWeaver 7.50",
    issuer: "SAP",
    place: "Bogota",
    date: "Julio 2020",
    summary: "Certificacion de desarrollo ABAP con SAP NetWeaver 7.50.",
    focus:
      "Certificacion SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50, orientada a fundamentos y practica de desarrollo ABAP.",
    tags: ["ABAP", "SAP NetWeaver", "Development Associate", "2020"],
  },
  {
    title: "ABAP with SAP NetWeaver 7.02",
    issuer: "SAP",
    place: "Bogota",
    date: "Diciembre 2013",
    summary: "Credencial C_TAW12_71 Development Associate.",
    focus:
      "Certificacion C_TAW12_71 Development Associate - ABAP with SAP NetWeaver 7.02, parte de la base tecnica historica en desarrollo SAP ABAP.",
    tags: ["C_TAW12_71", "ABAP", "SAP NetWeaver", "2013"],
  },
  {
    title: "Human Resources - mySAP ERP 2005",
    issuer: "SAP",
    place: "Bogota",
    date: "Junio 2008",
    summary: "Certificacion SAP de gestion y administracion de recursos humanos.",
    focus:
      "Certificacion Human Resources - Management & Administration with mySAP ERP 2005, soporte formal para la trayectoria funcional SAP HCM.",
    tags: ["SAP HR", "mySAP ERP", "HCM", "2008"],
  },
];

const otherCertificationsEs = [
  ["Integration Suite", "Logali", "Agosto 2024", "Certificado de aprovechamiento Integration Suite."],
  ["Tecnologias del ecosistema on-premise y cloud", "Logali", "Octubre 2023", "Seminario sobre tecnologias SAP on-premise y cloud."],
  ["Scrum Master", "Lihtsus Agile", "Febrero 2022", "Curso profesional de Scrum Master."],
  ["Scrum", "Platzi", "Enero 2022", "Curso profesional de Scrum."],
  ["Tecnicas efectivas de estudio", "Platzi", "Diciembre 2021", "Formacion en metodos de aprendizaje."],
  ["Gestion efectiva del tiempo", "Platzi", "Noviembre 2021", "Formacion en productividad personal."],
  ["Equipos de alto rendimiento", "Parra y asociados", "Villa de Leyva 2004", "Formacion en trabajo de equipos."],
  ["Relativity Designer", "Prounix Ltda.", "Bogota 2004", "Certificacion tecnica en Relativity Designer."],
];

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Formacion certificada",
    title: "Certificaciones profesionales",
    featured: "Certificaciones SAP",
    viewDetail: "Ver detalle",
    home: "<- Inicio",
    focusTitle: "Alcance de la certificacion",
    otherTitle: "Otras certificaciones",
    tagsLabel: "Areas clave",
    summarySap: "Certificaciones SAP principales",
    summaryOther: "Certificaciones y cursos complementarios",
    summaryLatest: "Certificacion mas reciente",
    certifications: sapCertificationsEs,
    otherCertifications: otherCertificationsEs.map(([title, issuer, date, summary]) => ({
      title,
      issuer,
      date,
      summary,
    })),
  },
};

content.en = {
  ...content.es,
  htmlLang: "en",
  subtitle: "SAP ABAP / HXM Consultant",
  profileLabel: "Certified learning",
  title: "Professional certifications",
  featured: "SAP certifications",
  viewDetail: "View detail",
  home: "<- Home",
  focusTitle: "Certification scope",
  otherTitle: "Other certifications",
  tagsLabel: "Key areas",
  summarySap: "Main SAP certifications",
  summaryOther: "Complementary certifications and courses",
  summaryLatest: "Most recent certification",
};

let currentLanguage = getLanguage();
let activeCertificationIndex = 0;

renderPage();

function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang") === "en" ? "en" : "es";
}

function renderPage() {
  const page = content[currentLanguage];
  const latestYear = page.certifications[0].date.replace(/.*\s/, "");

  document.documentElement.lang = page.htmlLang;
  document.title = page.title;
  document.getElementById("id_profile_subtitle").textContent = page.subtitle;
  document.getElementById("id_profile_label").textContent = page.profileLabel;
  document.getElementById("id_certifications_h1").textContent = page.title;
  document.getElementById("id_featured_title").textContent = page.featured;
  document.getElementById("id_view_detail").textContent = page.viewDetail;
  document.getElementById("id_goToHomePage").textContent = page.home;
  document.getElementById("id_detail_focus_title").textContent = page.focusTitle;
  document.getElementById("id_other_title").textContent = page.otherTitle;
  document.getElementById("id_detail_tags").setAttribute("aria-label", page.tagsLabel);
  document.getElementById("id_summary_sap_number").textContent = page.certifications.length;
  document.getElementById("id_summary_sap_label").textContent = page.summarySap;
  document.getElementById("id_summary_other_number").textContent = page.otherCertifications.length;
  document.getElementById("id_summary_other_label").textContent = page.summaryOther;
  document.getElementById("id_summary_latest_number").textContent = latestYear;
  document.getElementById("id_summary_latest_label").textContent = page.summaryLatest;

  renderCertificationCards(page);
  renderOtherCertifications(page);
  renderDetail(page.certifications[activeCertificationIndex]);
}

function renderCertificationCards(page) {
  const grid = document.getElementById("id_certifications_grid");
  grid.innerHTML = "";

  page.certifications.forEach((certification, index) => {
    const card = document.createElement("button");
    card.className = `certification-card${index === activeCertificationIndex ? " is-active" : ""}`;
    card.type = "button";
    card.setAttribute("aria-pressed", index === activeCertificationIndex ? "true" : "false");
    card.innerHTML = `
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">${icons[index % icons.length]}</svg>
      </span>
      <span>
        <h3>${certification.title}</h3>
        <p>${certification.issuer} - ${certification.place} - ${certification.date}</p>
      </span>
      <span class="arrow" aria-hidden="true">></span>
    `;

    card.addEventListener("click", () => {
      activeCertificationIndex = index;
      renderCertificationCards(page);
      renderDetail(certification);
      document.getElementById("id_certification_detail").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.appendChild(card);
  });
}

function renderOtherCertifications(page) {
  const grid = document.getElementById("id_other_grid");
  grid.innerHTML = "";

  page.otherCertifications.forEach((certification, index) => {
    const item = document.createElement("article");
    item.className = "other-item";
    item.innerHTML = `
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">${icons[(index + 2) % icons.length]}</svg>
      </span>
      <span>
        <h3>${certification.title}</h3>
        <p>${certification.issuer} - ${certification.date}. ${certification.summary}</p>
      </span>
    `;

    grid.appendChild(item);
  });
}

function renderDetail(certification) {
  const tags = document.getElementById("id_detail_tags");

  document.getElementById("id_detail_meta").textContent = `${certification.place} - ${certification.date}`;
  document.getElementById("id_detail_title").textContent = certification.title;
  document.getElementById("id_detail_issuer").textContent = certification.issuer;
  document.getElementById("id_detail_focus").textContent = certification.focus;

  tags.innerHTML = "";
  certification.tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    tags.appendChild(tag);
  });
}

function goToHomePage() {
  window.location.href = currentLanguage === "en" ? "index.html?lang=en" : "index.html?lang=es";
}
