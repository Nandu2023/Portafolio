const icons = [
  '<path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-7" />',
  '<path d="M4 7h16M4 12h16M4 17h10" />',
  '<path d="M12 3v18M5 8h14M7 16h10" />',
  '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />',
  '<path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />',
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
    projectsTitle: "Proyectos y aportes representativos",
    tagsLabel: "Areas clave",
    experiences: [
      {
        company: "MQA Business Consultants",
        period: "Mayo 2013 - Actual",
        role: "Consultor SAP ABAP / HCM / HXM",
        summary: "Proyectos SAP, mesa de ayuda, desarrollos ABAP y soporte HCM.",
        focus:
          "Participación en proyectos de implementación, soporte y evolución de soluciones SAP para clientes de diferentes industrias, con énfasis en ABAP, HCM, gestión de tiempos, nómina, integraciones y ajustes funcionales.",
        projects: [
          {
            name: "Granos y Cereales",
            text:
              "Desarrollos y ajustes ABAP S/4HANA, BADI contable, prima de antigüedad, ampliación de infotipo 0050 e integraciones de marcaciones a nómina.",
          },
          {
            name: "Grupo Uribe",
            text:
              "Volantes de pago, certificado laboral, integraciones con CAR, formatos MM, reportes MM/PP, interfaces proxy y reportes FI.",
          },
          {
            name: "CO&TEX / TEXMODA",
            text:
              "Implementación de PA y PT, reglas de tiempos, festivos, absentismos, presencias, suplencias, horas extras, vacaciones y reportes de nómina.",
          },
          {
            name: "Constructora Jaramillo Mora / Triada",
            text:
              "Ajustes ABAP para PS, control presupuestal, Easy Cost Planning, órdenes de cambio, APU, planeación de recursos y reportes ALV.",
          },
        ],
        tags: ["ABAP", "S/4HANA", "SAP HCM", "PT / PY", "Integraciones"],
      },
      {
        company: "Actualisap Consultores SAS",
        period: "Agosto 2012 - Mayo 2013",
        role: "Consultor ABAP HCM / ERP",
        summary: "Desarrollos de nómina, reportes HCM e integración contable.",
        focus:
          "Desarrollo y ajuste de soluciones ABAP HCM para procesos de nómina, prenómina, reportes laborales, dispersión bancaria e integración nómina-contabilidad.",
        projects: [
          {
            name: "Terranvm",
            text:
              "Volantes de pago, reportes de prenómina, dispersión de nómina, comparativo devengos vs. deducciones y extracción de datos para SuccessFactors.",
          },
          {
            name: "Transportes Joalco S.A.",
            text:
              "Certificados laborales, hoja de vida, prima de antigüedad, transferencia bancaria, BADI de integración contable y ajustes para SD/MM/PM.",
          },
        ],
        tags: ["ABAP HCM", "Nómina", "Reportes", "BADI", "SuccessFactors"],
      },
      {
        company: "Consultoría Organizacional",
        period: "Septiembre 2011 - Agosto 2012",
        role: "Consultor ABAP",
        summary: "Desarrollos ABAP para educación, contratación e interfaces.",
        focus:
          "Construcción de desarrollos ABAP para instituciones educativas y compañías de producción, incluyendo formularios, cargas, contratos, interfaces y ajustes de reportes.",
        projects: [
          {
            name: "Universidad CES",
            text:
              "Comprobantes de pago, liquidación de prestaciones en HRFORMS, programas de cargue HCM, contratos laborales y formularios tributarios.",
          },
          {
            name: "Universidad de los Andes",
            text:
              "Adobe Forms, infotipo 0416, batch input, interfaces de contratación y reingreso, web services, proxy PI, tablas, vistas y ampliaciones.",
          },
          {
            name: "Prebel",
            text:
              "Interfaz para cargue de archivos planos a nómina y ajustes de smartforms para colilla de pago.",
          },
        ],
        tags: ["ABAP", "HRFORMS", "Adobe Forms", "PI", "Interfaces"],
      },
      {
        company: "Netpartners / HR Solutions",
        period: "Enero 2011 - Julio 2011",
        role: "Consultor HCM / ABAP / PY",
        summary: "Soporte SAP HCM, gestión de tiempos y configuración PY.",
        focus:
          "Soporte a requerimientos SAP HCM y participación en procesos de nómina, especificaciones funcionales, configuración básica y acompañamiento a usuarios.",
        projects: [
          {
            name: "Ecopetrol",
            text:
              "Solución de requerimientos SAP en gestión de tiempos, gestión de personal, queries y ABAP.",
          },
          {
            name: "Ingenio Incauca y Providencia",
            text:
              "BBP de cálculo de nómina, especificaciones funcionales, configuración de divisor 30, absentismos, conceptos de cálculo, esquemas y reglas estándar.",
          },
        ],
        tags: ["SAP HCM", "PY", "PT", "ABAP", "Soporte"],
      },
      {
        company: "Tecnoinformática Latinoamérica S.A.",
        period: "Noviembre 2005 - Diciembre 2010",
        role: "Consultor HCM / SAP ABAP",
        summary: "Implementaciones HCM, gestión de tiempos, nómina y soporte.",
        focus:
          "Implementación y soporte de módulos HCM con participación en PT, PA, PY, reportes ABAP, capacitación a usuarios y estabilización de procesos productivos.",
        projects: [
          {
            name: "Comfenalco",
            text:
              "Implementación del módulo PT para múltiples unidades de negocio, planes de horario, calendarios de festivos, evaluación de tiempos y planificación de turnos.",
          },
          {
            name: "Goodyear",
            text:
              "Implementación de PT, definición de horarios, contingentes, módulo de incentivos personalizado, cargue de datos y capacitación a usuarios líderes.",
          },
          {
            name: "Smurfit Cartón de Colombia / Conconcreto",
            text:
              "Implementaciones OM, PA, CM, PT y SP, reportes estándar, contratos, planillas de pago, comprobantes, PDFs y envíos por correo.",
          },
          {
            name: "Help Desk SAP",
            text:
              "Soporte a usuarios en PA, OM, PT, PY y ABAP para clientes como Henkel, Petrobras, Propilco, Cámara de Comercio de Bogotá, Holcim y universidades.",
          },
        ],
        tags: ["SAP HCM", "PT", "PA", "PY", "ABAP", "Soporte"],
      },
    ],
  },
  en: {
    htmlLang: "en",
    subtitle: "SAP ABAP / HXM Consultant",
    profileLabel: "Professional journey",
    title: "SAP Experience",
    featured: "Featured stages",
    viewDetail: "View detail",
    home: "← Home",
    focusTitle: "Role focus",
    projectsTitle: "Representative projects and contributions",
    tagsLabel: "Key areas",
    experiences: [
      {
        company: "MQA Business Consultants",
        period: "May 2013 - Present",
        role: "SAP ABAP / HCM / HXM Consultant",
        summary: "SAP projects, help desk, ABAP development, and HCM support.",
        focus:
          "Participation in SAP implementation, support, and solution improvement projects for clients across industries, focused on ABAP, HCM, time management, payroll, integrations, and functional adjustments.",
        projects: [
          {
            name: "Granos y Cereales",
            text:
              "ABAP S/4HANA developments and adjustments, accounting BADI, seniority bonus, infotype 0050 extension, and time-clock integrations into payroll.",
          },
          {
            name: "Grupo Uribe",
            text:
              "Payslips, employment certificates, CAR integrations, MM formats, MM/PP reports, proxy interfaces, and FI reports.",
          },
          {
            name: "CO&TEX / TEXMODA",
            text:
              "PA and PT implementation, time rules, holidays, absences, attendances, substitutions, overtime, vacations, and payroll reports.",
          },
          {
            name: "Constructora Jaramillo Mora / Triada",
            text:
              "ABAP adjustments for PS, budget control, Easy Cost Planning, change orders, APU, resource planning, and ALV reports.",
          },
        ],
        tags: ["ABAP", "S/4HANA", "SAP HCM", "PT / PY", "Integrations"],
      },
      {
        company: "Actualisap Consultores SAS",
        period: "August 2012 - May 2013",
        role: "ABAP HCM / ERP Consultant",
        summary: "Payroll developments, HCM reports, and accounting integration.",
        focus:
          "Development and adjustment of ABAP HCM solutions for payroll, pre-payroll, labor reports, bank dispersion, and payroll-accounting integration.",
        projects: [
          {
            name: "Terranvm",
            text:
              "Payslips, pre-payroll reports, payroll dispersion, earnings vs. deductions comparison, and SuccessFactors data extraction.",
          },
          {
            name: "Transportes Joalco S.A.",
            text:
              "Employment certificates, resume report, seniority bonus, bank transfer, accounting integration BADI, and SD/MM/PM adjustments.",
          },
        ],
        tags: ["ABAP HCM", "Payroll", "Reports", "BADI", "SuccessFactors"],
      },
      {
        company: "Consultoría Organizacional",
        period: "September 2011 - August 2012",
        role: "ABAP Consultant",
        summary: "ABAP developments for education, hiring, and interfaces.",
        focus:
          "ABAP developments for education institutions and production companies, including forms, data loads, employment contracts, interfaces, and report adjustments.",
        projects: [
          {
            name: "Universidad CES",
            text:
              "Payslips, severance settlement in HRFORMS, HCM upload programs, employment contracts, and tax forms.",
          },
          {
            name: "Universidad de los Andes",
            text:
              "Adobe Forms, infotype 0416, batch input, hiring and re-entry interfaces, web services, PI proxy, tables, views, and enhancements.",
          },
          {
            name: "Prebel",
            text:
              "Interface for payroll flat-file uploads and smartform adjustments for payslips.",
          },
        ],
        tags: ["ABAP", "HRFORMS", "Adobe Forms", "PI", "Interfaces"],
      },
      {
        company: "Netpartners / HR Solutions",
        period: "January 2011 - July 2011",
        role: "HCM / ABAP / PY Consultant",
        summary: "SAP HCM support, time management, and PY configuration.",
        focus:
          "Support for SAP HCM requirements and participation in payroll processes, functional specifications, basic configuration, and user support.",
        projects: [
          {
            name: "Ecopetrol",
            text:
              "SAP requirements support in time management, personnel management, queries, and ABAP.",
          },
          {
            name: "Ingenio Incauca y Providencia",
            text:
              "Payroll calculation BBP, functional specifications, divisor 30 configuration, absences, calculation concepts, schemas, and standard rules.",
          },
        ],
        tags: ["SAP HCM", "PY", "PT", "ABAP", "Support"],
      },
      {
        company: "Tecnoinformática Latinoamérica S.A.",
        period: "November 2005 - December 2010",
        role: "HCM / SAP ABAP Consultant",
        summary: "HCM implementations, time management, payroll, and support.",
        focus:
          "Implementation and support of HCM modules with participation in PT, PA, PY, ABAP reports, user training, and stabilization of production processes.",
        projects: [
          {
            name: "Comfenalco",
            text:
              "PT implementation for multiple business units, work schedules, holiday calendars, time evaluation, and shift planning.",
          },
          {
            name: "Goodyear",
            text:
              "PT implementation, work schedule definition, quotas, custom incentives module, data uploads, and key-user training.",
          },
          {
            name: "Smurfit Cartón de Colombia / Conconcreto",
            text:
              "OM, PA, CM, PT, and SP implementations, standard reports, contracts, payment sheets, payslips, PDFs, and email delivery.",
          },
          {
            name: "SAP Help Desk",
            text:
              "User support in PA, OM, PT, PY, and ABAP for clients such as Henkel, Petrobras, Propilco, Bogotá Chamber of Commerce, Holcim, and universities.",
          },
        ],
        tags: ["SAP HCM", "PT", "PA", "PY", "ABAP", "Support"],
      },
    ],
  },
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
