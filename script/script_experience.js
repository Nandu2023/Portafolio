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
    document.getElementById("id_experience_h2").textContent =
      "Experiencia SAP";
    document.getElementById("id_goToHomePage").textContent =
      "Retornar a la pagina principal...";
  } else if (language === "en") {
    document.getElementById("id_experience_h2").textContent =
      "Experience SAP";
    document.getElementById("id_goToHomePage").textContent =
      "Return to the main page...";
  }

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
