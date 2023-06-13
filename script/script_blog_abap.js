document.getElementById("id_goToBlogPage").textContent =
  "Retornar a la pagina anterior...";

var x = document.documentElement.innerHTML.split(/\r\n|\r|\n/).length;
console.log(x);

function goToBlogPage() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if ((siFind = lvIdiomaMp.indexOf("?lang=en") >= 0)) {
    window.location.href = "blog.html";
  } else {
    window.location.href = "blog.html";
  }
}

window.addEventListener("scroll", function () {
  var seccion1 = document.getElementById("seccion1");
  var seccion2 = document.getElementById("seccion2");
  // Verifica si el usuario se acerca a la primera sección
  if (isElementInViewport(seccion1)) {
    // Carga el contenido de la primera sección utilizando AJAX o innerHTML
  }
  // Verifica si el usuario se acerca a la segunda sección
  if (isElementInViewport(seccion2)) {
    // Carga el contenido de la segunda sección utilizando AJAX o innerHTML
  }
  // Repite el proceso para las demás secciones
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight;
}
