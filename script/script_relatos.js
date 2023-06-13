document.getElementById("id_goToBlogPage").textContent =
  "Retornar a la pagina anterior...";

function goToBlogPage() {
  const lvUrlParameters = new URL(location.href);
  let lvIdiomaMp = lvUrlParameters.href;

  if ((siFind = lvIdiomaMp.indexOf("?lang=en") >= 0)) {
    window.location.href = "blog.html";
  } else {
    window.location.href = "blog.html";
  }
}
