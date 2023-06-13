/* 
Lo que se busca es conocer el idioma en que esta el usuario visualizando, para ello se analiza la URL
href: "file:///C:/Users/HRP%202023/Dropbox/SAP/Platzi/Desarrollo%20WEB/Portafolio/skills.html?lang=en" 

Si el final tiene el string ?lang=en, esta en ingles, de lo contrario sera en español (asi no tenga el ?lang=es )
*/
const gvUrlParameters = new URL(location.href);
let gvIdiomaMp = gvUrlParameters.href;

if ((siFind = gvIdiomaMp.indexOf("?lang=en") >= 0)) {
  changeLanguage("en");
} else {
  changeLanguage("es");
}

function changeLanguage(language) {
  document.documentElement.lang = language;

  if (language === "es") {
    document.getElementById("id_h3_position_mp").textContent =
      "Consultor SAP ABAP S/4HANA - Consultor HXM (Human Experience Management)";

    document.getElementById("id_h3_skills_mp").textContent =
      "Habilidades/Cualidades";
    document.getElementById("id_button_skills_mp").textContent =
      "Conocer mas...";
    document.getElementById("id_h3_overview_mp").textContent =
      "Apasionado del desarrollo ABAP S/4HANA y la consultoría SAP en HXM. Con 17+ años de experiencia, soy experto en análisis, desarrollo de proyectos y resolución de casos. Me destaco por dejar huella en clientes y superar expectativas. Busco constantemente mejorar y marcar la diferencia en el campo SAP. ¡Permíteme ayudarte a alcanzar tus metas en desarrollo ABAP S/4HANA y consultoría SAP - HXM!";
    document.getElementById("id_h3_experience_mp").textContent =
      "Experiencia SAP";
    document.getElementById("id_button_experience_mp").textContent =
      "Conocer mas...";
    document.getElementById("id_h3_certifications_mp").textContent =
      "Certificaciones SAP";
    document.getElementById("id_button_certifications_mp").textContent =
      "Conocer mas...";
    document.getElementById("id_h3_experience_no_sap_mp").textContent =
      "Experiencia no SAP";
    document.getElementById("id_button_experience_no_sap_mp").textContent =
      "Conocer mas...";
    document.getElementById("id_h3_education_mp").textContent = "Formación";
    document.getElementById("id_button_education_mp").textContent =
      "Conocer mas...";
    document.getElementById("id_h3_contact_mp").textContent = "Contacto";
    document.getElementById("id_p_contact_mp").textContent =
      "No dudes en contactarme para discutir oportunidades o para obtener más información.";
    document.getElementById("id_p_tele_mp").textContent =
      "Teléfono +57 ver en linkedin";
    document.getElementById("id_p_skills_mp").textContent =
      "Conocimiento técnico de SAP, Experiencia en implementación y soporte, Habilidades de comunicación, Orientación al cliente, Ingles nivel B1";
    document.getElementById("id_p_experience_mp").textContent =
      "Con 17+ años de Experiencia en SAP en implementaciones y soporte a base instalada";
    document.getElementById("id_p_certifications_mp").textContent =
      "SAP HCM with ERP 6.0 EhP7, ABAP with SAP NetWeaver 7.50, ABAP for SAP HANA 2.0, Scrum Master Professional Certificate";
    document.getElementById("id_p_experience_no_sap_mp").textContent =
      "Analista de sistemas y programador en COBOL sobre UNIX, Analista programador de sistemas en COBOL sobre UNIX, Auxiliar de sistemas";
    document.getElementById("id_p_education_mp").textContent =
      "Ingeniero de sistemas, cursos tecnicos SAP, SCRUM, Equipos de alto rendimiento";
    document.getElementById("id_h3_links_recomended").textContent = "Links recomendados";

  } else if (language === "en") {
    document.getElementById("id_h3_position_mp").textContent =
      "SAP ABAP S/4HANA Consultant - HXM Consultant (Human Experience Management)";
    document.getElementById("id_h3_skills_mp").textContent = "Skills/Qualities";
    document.getElementById("id_button_skills_mp").textContent = "Know more...";
    document.getElementById("id_h3_overview_mp").textContent =
      "Passionate about ABAP S/4HANA development and SAP consulting in HXM. With 17+ years of experience, I am an expert in analysis, project development and case resolution. I stand out for leaving a mark on clients and exceeding expectations. I am constantly looking to improve and make a difference in the SAP field. Let me help you achieve your goals in ABAP S/4HANA development and SAP - HXM consulting!";
    document.getElementById("id_h3_experience_mp").textContent =
      "Experience SAP";
    document.getElementById("id_button_experience_mp").textContent =
      "Know more...";
    document.getElementById("id_h3_certifications_mp").textContent =
      "SAP Certifications";
    document.getElementById("id_button_certifications_mp").textContent =
      "Know more...";
    document.getElementById("id_h3_experience_no_sap_mp").textContent =
      "Non-SAP experience";
    document.getElementById("id_button_experience_no_sap_mp").textContent =
      "Know more...";
    document.getElementById("id_h3_education_mp").textContent = "Education";
    document.getElementById("id_button_education_mp").textContent =
      "Know more...";
    document.getElementById("id_h3_contact_mp").textContent = "Contact";
    document.getElementById("id_p_contact_mp").textContent =
      "Feel free to contact me to discuss any opportunities and get more information.";
    document.getElementById("id_p_tele_mp").textContent =
      "Telephone +57 see at linkedin";
    document.getElementById("id_p_skills_mp").textContent =
      "SAP technical knowledge, Implementation and support experience, Communication skills, Customer focus, English level B1";
    document.getElementById("id_p_experience_mp").textContent =
      "With 17+ years of experience in SAP in implementations and support to installed base";
    document.getElementById("id_p_certifications_mp").textContent =
      "SAP HCM with ERP 6.0 EhP7, ABAP with SAP NetWeaver 7.50, ABAP for SAP HANA 2.0, Scrum Master Professional Certificate";
    document.getElementById("id_p_experience_no_sap_mp").textContent =
      "Systems Analyst and Programmer in COBOL on UNIX, Systems Analyst Programmer in COBOL on UNIX, Systems Assistant";
    document.getElementById("id_p_education_mp").textContent =
      "Systems engineer, SAP technical courses, SCRUM, High performance teams";
    document.getElementById("id_h3_links_recomended").textContent = "Recommended links";
  }
}

function langChange(language) {
  if (language === "es") {
    window.location.href = "index.html";
  } else {
    window.location.href = "index.html?lang=en";
  }
}

function skillLanguage() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if (
    (siFind = lvIdiomaMp.indexOf("?lang=en") >= 0) ||
    document.documentElement.lang === "en"
  ) {
    window.location.href = "./skills.html?lang=en";
  } else {
    window.location.href = "./skills.html?lang=es";
  }
}

function certifications() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if (
    (siFind = lvIdiomaMp.indexOf("?lang=en") >= 0) ||
    document.documentElement.lang === "en"
  ) {
    window.location.href = "./certifications.html?lang=en";
  } else {
    window.location.href = "./certifications.html?lang=es";
  }
}

function experience() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if (
    (siFind = lvIdiomaMp.indexOf("?lang=en") >= 0) ||
    document.documentElement.lang === "en"
  ) {
    window.location.href = "./experience.html?lang=en";
  } else {
    window.location.href = "./experience.html?lang=es";
  }
}

function experience_no_sap() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if (
    (siFind = lvIdiomaMp.indexOf("?lang=en") >= 0) ||
    document.documentElement.lang === "en"
  ) {
    window.location.href = "./experience_no_sap.html?lang=en";
  } else {
    window.location.href = "./experience_no_sap.html?lang=es";
  }
}

function education() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if (
    (siFind = lvIdiomaMp.indexOf("?lang=en") >= 0) ||
    document.documentElement.lang === "en"
  ) {
    window.location.href = "./education.html?lang=en";
  } else {
    window.location.href = "./education.html?lang=es";
  }
}

function blog() {
  window.location.href = "./blog.html?lang=es";
  
}