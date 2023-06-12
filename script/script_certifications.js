// Función para cambiar el idioma de la página

// Obtener el valor del parámetro de idioma de la URL
var urlParams = new URLSearchParams(window.location.search);
var lang = urlParams.get("lang");

const gvUrlParameters = new URL(location.href);
let gvIdiomaMp = gvUrlParameters.href;

if ((siFind = gvIdiomaMp.indexOf("?lang=en") >= 0)) {
  changeLanguage("en");
} else {
  changeLanguage("es");
}

function changeLanguage(language) {
  if (language === "es") {
    document.getElementById("id_certifications_h2").textContent =
      "Mis Certificaciones";
    document.getElementById("id_goToHomePage").textContent =
      "Retornar a la pagina principal...";
  } else if (language === "en") {
    document.getElementById("id_certifications_h2").textContent =
      "My certifications";
    document.getElementById("id_goToHomePage").textContent =
      "Return to the main page...";
  }
  document.getElementById("id_certifications_01").textContent =
    "SAP Certified Application Associate - SAP HCM with ERP 6.0 EhP7";
  document.getElementById("id_certifications_02").textContent =
    "SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50";
  document.getElementById("id_certifications_03").textContent =
    "SAP Certified Development Specialist - ABAP for SAP HANA 2.0";
  document.getElementById("id_certifications_04").textContent =
    "Scrum Master Professional Certificate – SMPC";
  document.getElementById("id_certifications_05").textContent =
    "C_TAW12_71 development associate - ABAP with SAP netweaver 7.02";
  document.getElementById("id_certifications_06").textContent =
    "Human resources - management & administration with MY SAP ERP 2005";
  document.getElementById("id_certifications_07").textContent =
    "Diplomado en logística de inventarios";
  document.getElementById("id_certifications_08").textContent =
    "Redes de alta velocidad";
}

function goToHomePage() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if ((siFind = lvIdiomaMp.indexOf("?lang=en") >= 0)) {
    window.location.href = "index.html?lang=en";
  } else {
    window.location.href = "index.html?lang=es";
  }
}
