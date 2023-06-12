document.getElementById("id_goToHomePage").textContent =
"Retornar a la pagina principal...";

document.getElementById('class_slider').removeAttribute('src');

function goToHomePage() {
    const lvUrlParameters = new URL(location.href);
    let lvIdiomaMp = lvUrlParameters.href;
  
    if ((siFind = lvIdiomaMp.indexOf("?lang=en") >= 0)) {
      window.location.href = "index.html?lang=en";
    } else {
      window.location.href = "index.html?lang=es";
    }
  }