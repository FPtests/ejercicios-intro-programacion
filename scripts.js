const datosEspacio = [
  "La luz del Sol tarda 8 minutos en llegar a la Tierra.",
  "Un año en Neptuno dura 165 años terrestres.",
  "Hay más de 100 mil millones de galaxias en el universo.",
  "El montaña más alta del sistema solar está en Marte: Olympus Mons.",
  "Saturno flotaría en el agua si existiera un océano suficientemente grande.",
  "La temperatura del espacio vacío es -270°C.",
  "En el centro de la Vía Láctea hay un agujero negro supermasivo.",
  "Las manchas solares son más frías que el resto del Sol.",
  "Europa (luna de Júpiter) podría tener océanos bajo su hielo.",
  "El universo tiene aproximadamente 13.8 mil millones de años.",
  "Puedes ver 10,000 millones de años en el pasado con el telescopio Hubble.",
  "La rotación de la Tierra se está desacelerando: cada siglo, el día se alarga 1.4 milisegundos."
];

document.getElementById("btn-curiosidad").addEventListener("click", function() {
  const datoAleatorio = datosEspacio[Math.floor(Math.random() * datosEspacio.length)];
  document.getElementById("dato-aleatorio").textContent = "💫 " + datoAleatorio;
});

const planetas = document.querySelectorAll(".planeta");
planetas.forEach(planeta => {
  planeta.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.08) rotate(2deg)";
  });
  planeta.addEventListener("mouseleave", function() {
    this.style.transform = "";
  });
});

function crearEstrellas() {
  for (let i = 0; i < 50; i++) {
    const estrella = document.createElement("div");
    estrella.className = "star";
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.top = Math.random() * 100 + "vh";
    estrella.style.animationDelay = Math.random() * 2 + "s";
    estrella.style.width = Math.random() * 3 + 1 + "px";
    estrella.style.height = estrella.style.width;
    document.body.appendChild(estrella);
  }
}

crearEstrellas();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});
