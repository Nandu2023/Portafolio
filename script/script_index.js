const urlParameters = new URL(location.href);
const currentLanguage = urlParameters.href.includes("?lang=en") ? "en" : "es";

const copy = {
  es: {
    search: "Buscar experiencia, SAP, ABAP, certificaciones...",
    categoriesTitle: "Explora mi perfil por categorías",
    overview:
      "Apasionado del desarrollo ABAP Cloud S/4HANA apoyado de asistentes de IA y la consultoría SAP en HXM. Con 18+ años de experiencia, soy experto en análisis, desarrollo de proyectos y resolución de casos. Me destaco por dejar huella en clientes y superar expectativas. Busco constantemente mejorar y marcar la diferencia en el campo SAP.",
    position: "Consultor SAP ABAP S/4HANA - HXM",
    more: "Conocer mas...",
    skillsTitle: "Habilidades",
    skills:
      "Conocimiento técnico SAP, comunicación, orientación al cliente e inglés B1.",
    experienceTitle: "Experiencia SAP",
    experience:
      "Implementaciones, soporte a base instalada, análisis y resolución de casos.",
    certificationsTitle: "Certificaciones",
    certifications: "SAP HCM, ABAP NetWeaver, ABAP for HANA y Scrum Master.",
    educationTitle: "Formación",
    education:
      "Ingeniería de sistemas, cursos técnicos SAP y equipos de alto rendimiento.",
    contactTitle: "Contacto",
    contact:
      "Email, LinkedIn y disponibilidad para conversar sobre oportunidades.",
    panelSkillsText:
      "Resumen de capacidades principales para proyectos SAP y soporte especializado.",
    featuredTitle: "Registros destacados de experiencia",
    featuredAll: "Ver todos",
    recordHxmTitle: "Consultoría SAP HXM",
    recordHxmText:
      "Participación en proyectos de implementación y soporte para procesos de talento humano.",
    recordAbapTitle: "Desarrollo ABAP",
    recordAbapText:
      "Análisis, desarrollo y mantenimiento de soluciones ABAP para ambientes SAP.",
    recordCertTitle: "Certificaciones SAP",
    recordCertText:
      "Credenciales técnicas y funcionales para SAP HCM, ABAP y SAP HANA.",
    recordNonSapTitle: "Experiencia no SAP",
    recordNonSapText:
      "Base previa como analista y programador COBOL sobre UNIX y soporte de sistemas.",
    detailTitle: "Ficha profesional",
    profileLabel: "Perfil",
    profileText:
      "Consultor orientado a resultados, soporte especializado y mejora continua.",
    specialtyLabel: "Especialidad",
    specialtyText:
      "ABAP S/4HANA, HXM/HCM, análisis técnico, desarrollos y resolución de incidentes.",
    experienceLabel: "Experiencia",
    experienceText:
      "20+ años en proyectos SAP, implementaciones y soporte a base instalada.",
    contactLabel: "Contacto",
    phone: "Teléfono +57 ver en LinkedIn",
    newsTitle: "Noticias ABAP/AI",
    newsText:
      "Aqui se encuentran las noticias mas recientes de la Tecnologia, orientadas a AI, ABAP y Learning.",
  },
  en: {
    search: "Search experience, SAP, ABAP, certifications...",
    categoriesTitle: "Explore my profile by category",
    overview:
      "Passionate about ABAP Cloud S/4HANA development supported by AI assistants and SAP HXM consulting. With 20+ years of experience, I am an expert in analysis, project development and case resolution. I stand out for leaving a mark on clients and exceeding expectations. I constantly seek to improve and make a difference in the SAP field.",
    position: "SAP ABAP S/4HANA Consultant - HXM",
    more: "Know more...",
    skillsTitle: "Skills",
    skills:
      "SAP technical knowledge, communication, customer orientation and English B1.",
    experienceTitle: "SAP Experience",
    experience:
      "Implementations, installed-base support, analysis and case resolution.",
    certificationsTitle: "SAP Certifications",
    certifications: "SAP HCM, ABAP NetWeaver, ABAP for HANA and Scrum Master.",
    educationTitle: "Education",
    education:
      "Systems engineering, SAP technical courses and high-performance teams.",
    contactTitle: "Contact",
    contact:
      "Email, LinkedIn and availability to discuss opportunities.",
    panelSkillsText:
      "Summary of key capabilities for SAP projects and specialized support.",
    featuredTitle: "Featured experience records",
    featuredAll: "View all",
    recordHxmTitle: "SAP HXM Consulting",
    recordHxmText:
      "Participation in implementation and support projects for human talent processes.",
    recordAbapTitle: "ABAP Development",
    recordAbapText:
      "Analysis, development and maintenance of ABAP solutions for SAP environments.",
    recordCertTitle: "SAP Certifications",
    recordCertText:
      "Technical and functional credentials for SAP HCM, ABAP and SAP HANA.",
    recordNonSapTitle: "Non-SAP Experience",
    recordNonSapText:
      "Previous background as a COBOL on UNIX analyst/programmer and systems support.",
    detailTitle: "Professional profile",
    profileLabel: "Profile",
    profileText:
      "Results-oriented consultant focused on specialized support and continuous improvement.",
    specialtyLabel: "Specialty",
    specialtyText:
      "ABAP S/4HANA, HXM/HCM, technical analysis, developments and incident resolution.",
    experienceLabel: "Experience",
    experienceText:
      "20+ years in SAP projects, implementations and installed-base support.",
    contactLabel: "Contact",
    phone: "Telephone +57 see on LinkedIn",
    newsTitle: "ABAP/AI News",
    newsText:
      "Here you can find the latest technology news focused on AI, ABAP and Learning.",
  },
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function changeLanguage(language) {
  const text = copy[language] || copy.es;
  document.documentElement.lang = language;

  document.getElementById("spanishFlag")?.classList.toggle("active", language === "es");
  document.getElementById("englishFlag")?.classList.toggle("active", language === "en");

  const search = document.getElementById("id_search_mp");
  if (search) {
    search.value = text.search;
  }

  setText("id_categories_title", text.categoriesTitle);
  setText("id_h3_overview_mp", text.overview);
  setText("id_h3_position_mp", text.position);
  setText("id_h3_skills_mp", text.skillsTitle);
  setText("id_p_skills_mp", text.skills);
  setText("id_button_skills_mp", text.more);
  setText("id_h3_experience_mp", text.experienceTitle);
  setText("id_p_experience_mp", text.experience);
  setText("id_button_experience_mp", text.more);
  setText("id_h3_certifications_mp", text.certificationsTitle);
  setText("id_p_certifications_mp", text.certifications);
  setText("id_button_certifications_mp", text.more);
  setText("id_h3_education_mp", text.educationTitle);
  setText("id_p_education_mp", text.education);
  setText("id_button_education_mp", text.more);
  setText("id_h3_contact_mp", text.contactTitle);
  setText("id_p_contact_mp", text.contact);
  setText("id_button_contact_mp", text.more);
  setText("id_panel_skills_title", text.skillsTitle);
  setText("id_panel_skills_text", text.panelSkillsText);
  setText("id_featured_title", text.featuredTitle);
  setText("id_featured_all", text.featuredAll);
  const featuredAll = document.getElementById("id_featured_all");
  if (featuredAll) {
    featuredAll.href = "./blog.html" + (language === "en" ? "?lang=en" : "?lang=es");
  }
  setText("id_record_hxm_title", text.recordHxmTitle);
  setText("id_record_hxm_text", text.recordHxmText);
  setText("id_record_abap_title", text.recordAbapTitle);
  setText("id_record_abap_text", text.recordAbapText);
  setText("id_record_cert_title", text.recordCertTitle);
  setText("id_record_cert_text", text.recordCertText);
  setText("id_record_non_sap_title", text.recordNonSapTitle);
  setText("id_record_non_sap_text", text.recordNonSapText);
  setText("id_detail_title", text.detailTitle);
  setText("id_detail_profile_label", text.profileLabel);
  setText("id_detail_profile_text", text.profileText);
  setText("id_detail_specialty_label", text.specialtyLabel);
  setText("id_detail_specialty_text", text.specialtyText);
  setText("id_detail_experience_label", text.experienceLabel);
  setText("id_detail_experience_text", text.experienceText);
  setText("id_detail_contact_label", text.contactLabel);
  setText("id_p_tele_mp", text.phone);
  setText("id_news_title", text.newsTitle);
  setText("id_news_text", text.newsText);
}

function langChange(language) {
  if (language === "es") {
    window.location.href = "index.html";
  } else {
    window.location.href = "index.html?lang=en";
  }
}

function languageSuffix() {
  return document.documentElement.lang === "en" ? "?lang=en" : "?lang=es";
}

function skillLanguage() {
  window.location.href = "./skills.html" + languageSuffix();
}

function certifications() {
  window.location.href = "./certifications.html" + languageSuffix();
}

function experience() {
  window.location.href = "./experience.html" + languageSuffix();
}

function experience_no_sap() {
  window.location.href = "./experience_no_sap.html" + languageSuffix();
}

function education() {
  window.location.href = "./education.html" + languageSuffix();
}

function contactFocus() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function blog() {
  window.location.href = "./blog.html" + languageSuffix();
}

changeLanguage(currentLanguage);
