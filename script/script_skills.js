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
    document.getElementById("id_skills_h2").textContent =
      "Mis Habilidades/Cualidades";
      document.getElementById("id_skill_01").textContent =
      "Conocimiento técnico: sólido conocimiento técnico de la mayor parte de los objetos ABAP de desarrollo y algunos componentes de SAP, especialmente en HCM submódulos OM, PA, PT y PY y su funcionalidad del sistema.";
      document.getElementById("id_skill_02").textContent =
      "Experiencia y expertise: la experiencia práctica en proyectos SAP realizados amplia mi base de conocimientos y me ha sido útil en proyectos subsiguientes. También he participado en la resolución de casos de la mesa de ayuda y actualizaciones de SAP.";
      document.getElementById("id_skill_03").textContent =
      "Habilidades de resolución de problemas: tengo habilidades sólidas para identificar y resolver problemas técnicos y funcionales en el sistema que estén en mi área de conocimiento. Esto lleva a realizar un análisis del problema para descartar procedimientos, luego podemos investigar y diagnosticar problemas y con ello ofrecer unas soluciones efectivas.";
      document.getElementById("id_skill_04").textContent =
      "Comunicación efectiva: trabajar en equipo con mis compañeros, usuarios finales y otros profesionales, me permite comunicarme de manera clara y efectiva, tanto verbalmente como por escrito, comprender el objetivo es esencial para transmitir información técnica y facilitar la comprensión mutua.";
      document.getElementById("id_skill_05").textContent =
      "Orientación al cliente: entender las necesidades y requisitos del cliente, para ofrecer soluciones adaptadas a sus objetivos empresariales, considero una gestión necesaria en mi rol como consultor. Establezco relaciones sólidas con los clientes y así brindar un excelente apoyo con mis conocimientos y expertise.";
      document.getElementById("id_skill_06").textContent =
      "Adaptabilidad y aprendizaje continuo: SAP está en constante evolución, con nuevas actualizaciones y tecnologías emergentes. Por ello dentro de mi empresa nos impulsan a capacitarnos constantemente. Aunque no es fácil aprender y aplicar la última tecnología intentamos conocerlas. Tengo total disposición de aprender continuamente y adaptarme a las nuevas tecnologías.";
      document.getElementById("id_skill_07").textContent =
      "Conocimiento general de SAP: como consultor ABAP, he tenido la oportunidad de desarrollar en diferentes módulos, me ha permitido tener un concepto general del funcionamiento del ERP. Como consultor HXM, conozco el proceso desde la creación de una posición, actualización de información, pago al colaborador y los reportes básicos a través de querys.";
      document.getElementById("id_goToHomePage").textContent =
      "Retornar a la pagina principal...";

  } else if (language === "en") {
    document.getElementById("id_skills_h2").textContent = "My Skills/Qualities";
    document.getElementById("id_skill_01").textContent =
    "Technical knowledge: Strong technical knowledge of most ABAP development objects and some SAP components, especially in HCM OM, PA, PT and PY sub-modules and their system functionality.";
    document.getElementById("id_skill_02").textContent =
    "Experience and expertise: Practical experience in completed SAP projects broadens my knowledge base and has been useful in subsequent projects. I have also been involved in resolving help desk cases and SAP updates.";
    document.getElementById("id_skill_03").textContent =
    "Troubleshooting skills: I have strong abilities to identify and resolve technical and functional issues in the system that are in my area of expertise. This leads to performing a problem analysis to rule out procedures, then we can investigate and diagnose issues and thereby offer effective solutions.";
    document.getElementById("id_skill_04").textContent =
    "Effective communication: working as a team with my colleagues, end users and other professionals, allows me to communicate clearly and effectively, both verbally and in writing, understanding the objective is essential to transmit technical information and facilitate mutual understanding.";
    document.getElementById("id_skill_05").textContent =
    "Customer orientation: understanding the needs and requirements of the client, to offer solutions adapted to their business objectives, I consider a necessary management in my role as a consultant. I establish solid relationships with clients and thus provide excellent support with my knowledge and expertise. ";
    document.getElementById("id_skill_06").textContent =
    "Adaptability and continuous learning: SAP is constantly evolving, with new updates and emerging technologies. For this reason, within my company we are encouraged to constantly train ourselves. Although it is not easy to learn and apply the latest technology, we try to learn about it. I am fully willing to learn continuously and adapt to new technologies.";
    document.getElementById("id_skill_07").textContent =
    "General knowledge of SAP: as an ABAP consultant, I have had the opportunity to develop in different modules, it has allowed me to have a general concept of how ERP works. As an HXM consultant, I know the process from creating a position, updating information, payment to the collaborator and the basic reports through queries.";
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
