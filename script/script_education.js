const icons = [
  '<path d="M4 19.5V5a2 2 0 0 1 2-2h11v18H6a2 2 0 0 1-2-1.5Z" /><path d="M8 7h6M8 11h5M8 15h4" />',
  '<path d="M12 15 8.5 17l1-4-3-2.7 4-.3L12 6l1.5 4 4 .3-3 2.7 1 4Z" /><path d="M5 21h14" />',
  '<path d="M7 4h10v4H7z" /><path d="M5 8h14v12H5z" /><path d="M9 12h6M9 16h6" />',
];

const content = {
  es: {
    htmlLang: "es",
    subtitle: "Consultor SAP ABAP / HXM",
    profileLabel: "Trayectoria acad\u00e9mica",
    title: "Formaci\u00f3n y certificaciones",
    intro:
      "Una vista actualizada de la formaci\u00f3n profesional, certificaciones SAP y estudios complementarios que respaldan la pr\u00e1ctica t\u00e9cnica en ABAP, HCM/HXM, integraci\u00f3n, agilidad y aprendizaje continuo.",
    sectionsTitle: "Secciones",
    viewDetail: "Ver detalle",
    home: "<- Inicio",
    countSuffix: "registros",
    sections: [
      {
        title: "FORMACI\u00d3N PROFESIONAL",
        summary: "Base acad\u00e9mica en ingenier\u00eda de sistemas.",
        items: [
          {
            title: "Ingeniero de Sistemas",
            issuer: "Universidad Aut\u00f3noma de Colombia",
            place: "Bogot\u00e1",
            date: "Noviembre 1999",
            year: "1999",
          },
        ],
      },
      {
        title: "FORMACION SAP",
        summary: "Certificaciones SAP oficiales y formaci\u00f3n especializada.",
        items: [
          {
            title: "SAP Certified Associate - Back-End Developer - ABAP Cloud",
            issuer: "SAP",
            place: "Medell\u00edn",
            date: "Julio 2025",
            year: "2025",
          },
          {
            title: "Certificaci\u00f3n SAP Certified Development Specialist - ABAP for SAP HANA 2.0",
            issuer: "SAP",
            place: "Bogot\u00e1",
            date: "Mayo 2021",
            year: "2021",
          },
          {
            title: "Certificaci\u00f3n SAP Certified Application Associate - SAP HCM with ERP 6.0 EHP7",
            issuer: "SAP",
            place: "Bogot\u00e1",
            date: "Enero 2021",
            year: "2021",
          },
          {
            title: "Certificaci\u00f3n SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50",
            issuer: "SAP",
            place: "Bogot\u00e1",
            date: "Julio 2020",
            year: "2020",
          },
          {
            title: "Certificaci\u00f3n C_TAW12_71 Development Associate - ABAP with SAP NetWeaver 7.02",
            issuer: "SAP",
            place: "Bogot\u00e1",
            date: "Diciembre 2013",
            year: "2013",
          },
          {
            title: "Certificaci\u00f3n Human Resources - Management & Administration with mySAP ERP 2005",
            issuer: "SAP",
            place: "Bogot\u00e1",
            date: "Junio 2008",
            year: "2008",
          },
        ],
      },
      {
        title: "OTROS ESTUDIOS",
        summary: "Cursos y certificaciones complementarias.",
        items: [
          {
            title: "Certificado aprovechamiento Integration Suite",
            issuer: "Logali",
            date: "Agosto 2024",
            year: "2024",
          },
          {
            title: "Seminario tecnolog\u00edas del ecosistema on-premise y cloud",
            issuer: "Logali",
            date: "Octubre 2023",
            year: "2023",
          },
          {
            title: "Curso profesional de Scrum Master",
            issuer: "Lihtsus Agile",
            date: "Febrero 2022",
            year: "2022",
          },
          {
            title: "Curso profesional de Scrum",
            issuer: "Platzi",
            date: "Enero 2022",
            year: "2022",
          },
          {
            title: "T\u00e9cnicas efectivas de estudio",
            issuer: "Platzi",
            date: "Diciembre 2021",
            year: "2021",
          },
          {
            title: "Gesti\u00f3n efectiva del tiempo",
            issuer: "Platzi",
            date: "Noviembre 2021",
            year: "2021",
          },
          {
            title: "Equipos de alto rendimiento",
            issuer: "Parra y asociados",
            place: "Villa de Leyva",
            date: "2004",
            year: "2004",
          },
          {
            title: "Relativity Designer",
            issuer: "Prounix Ltda.",
            place: "Bogot\u00e1",
            date: "2004",
            year: "2004",
          },
        ],
      },
    ],
  },
};

content.en = {
  ...content.es,
  htmlLang: "en",
  subtitle: "SAP ABAP / HXM Consultant",
  profileLabel: "Academic path",
  title: "Education and certifications",
  intro:
    "An updated view of professional education, SAP certifications, and complementary studies supporting technical work in ABAP, HCM/HXM, integration, agility, and continuous learning.",
  sectionsTitle: "Sections",
  viewDetail: "View detail",
  home: "<- Home",
  countSuffix: "records",
};

let currentLanguage = getLanguage();
let activeSectionIndex = 1;

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
  document.getElementById("id_education_h2").textContent = page.title;
  document.getElementById("id_education_intro").textContent = page.intro;
  document.getElementById("id_sections_title").textContent = page.sectionsTitle;
  document.getElementById("id_view_detail").textContent = page.viewDetail;
  document.getElementById("id_goToHomePage").textContent = page.home;

  renderSectionCards(page);
  renderDetail(page.sections[activeSectionIndex], page);
}

function renderSectionCards(page) {
  const grid = document.getElementById("id_section_grid");
  grid.innerHTML = "";

  page.sections.forEach((section, index) => {
    const card = document.createElement("button");
    card.className = `section-card${index === activeSectionIndex ? " is-active" : ""}`;
    card.type = "button";
    card.setAttribute("aria-pressed", index === activeSectionIndex ? "true" : "false");
    card.innerHTML = `
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">${icons[index % icons.length]}</svg>
      </span>
      <span>
        <h3>${section.title}</h3>
        <p>${section.summary}</p>
      </span>
      <span class="arrow" aria-hidden="true">></span>
    `;

    card.addEventListener("click", () => {
      activeSectionIndex = index;
      renderSectionCards(page);
      renderDetail(section, page);
      document
        .getElementById("id_education_detail")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.appendChild(card);
  });
}

function renderDetail(section, page) {
  const detailItems = document.getElementById("id_detail_items");

  document.getElementById("id_detail_title").textContent = section.title;
  document.getElementById("id_detail_count").textContent = `${section.items.length} ${page.countSuffix}`;

  detailItems.innerHTML = "";
  section.items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "education-item";
    article.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${buildDescription(item)}</p>
        <div class="meta">
          <span>${item.issuer}</span>
          ${item.place ? `<span>${item.place}</span>` : ""}
          <span>${item.date}</span>
        </div>
      </div>
      <span class="year">${item.year}</span>
    `;
    detailItems.appendChild(article);
  });
}

function buildDescription(item) {
  const place = item.place ? `${item.place}. ` : "";
  return `${item.issuer}. ${place}${item.date}.`;
}

function goToHomePage() {
  window.location.href = currentLanguage === "en" ? "index.html?lang=en" : "index.html?lang=es";
}
