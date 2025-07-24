let seleccionado = null;
let actual = 1;
let gastado = 0;
let aciertos = 0;

const preguntas = document.querySelectorAll("#preguntas > div");
const total = preguntas.length;

function shuffleElements(container) {
  const children = Array.from(container.children);
  children.sort(() => 0.5 - Math.random());
  children.forEach(child => container.appendChild(child));
}

function mostrarPregunta(n) {
  const preguntaEl = preguntas[n - 1];
  const preguntaTexto = preguntaEl.querySelector("[data-ref='pregunta']").textContent;
  document.getElementById("pregunta").textContent = `(${n}/${total}) ${preguntaTexto}`;

  const monitores = document.getElementById("monitores");
  monitores.innerHTML = "";

  preguntaEl.querySelectorAll("p[data-ref]:not([data-ref='pregunta'])").forEach(p => {
    const opcion = document.createElement("div");
    opcion.className = "opcionAtrapa";
    opcion.setAttribute("data-ref", p.getAttribute("data-ref"));

    const monitor = document.createElement("div");
    monitor.className = "monitor";
    monitor.innerHTML = `<p>${p.textContent}</p>`;

    const bandeja = document.createElement("div");
    bandeja.className = "bandeja";

    const a = document.createElement("a");
    a.href = "#";
    a.style.width = "90px";
    a.style.height = "60px";
    bandeja.appendChild(a);

    opcion.appendChild(monitor);
    opcion.appendChild(bandeja);
    monitores.appendChild(opcion);
  });

  shuffleElements(monitores);
  mostrarMonedas();
}

function mostrarMonedas() {
  const dinero = document.getElementById("dinero");
  dinero.innerHTML = "";
  for (let i = 0; i < total - gastado; i++) {
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="dinero" title="dinero">`;
    a.draggable = true;
    a.className = "palabra";
    a.addEventListener("dragstart", e => {
      seleccionado = a;
    });
    dinero.appendChild(a);
  }

  document.querySelectorAll(".bandeja").forEach(bandeja => {
    bandeja.ondragover = e => e.preventDefault();
    bandeja.ondrop = e => {
      e.preventDefault();
      if (seleccionado) {
        bandeja.innerHTML = "";
        const ref = bandeja.parentElement.getAttribute("data-ref");
        seleccionado.setAttribute("data-ref", ref);
        bandeja.appendChild(seleccionado);
        document.getElementById("comprobar").disabled = false;
      }
    };
  });
}

document.getElementById("comprobar").addEventListener("click", () => {
  document.querySelectorAll("#dinero a").forEach(a => a.draggable = false);

  const incorrectas = document.querySelectorAll("a[data-ref='incorrecta']");
  const correctas = document.querySelectorAll("a[data-ref='correcta']");

  gastado += incorrectas.length;
  aciertos += correctas.length;

  incorrectas.forEach(a => {
    a.closest(".opcionAtrapa").querySelector(".monitor").classList.add("red");
  });

  correctas.forEach(a => {
    a.closest(".opcionAtrapa").querySelector(".monitor").classList.add("green");
  });

  document.getElementById("comprobar").disabled = true;

  if (actual === total) {
    document.getElementById("pregunta").innerHTML = `Fin del ejercicio. <strong>Aciertos: ${aciertos}/${total}</strong>`;
  }

  document.getElementById("sig").disabled = actual >= total;
  document.getElementById("reint").disabled = false;
});

document.getElementById("sig").addEventListener("click", () => {
  if (actual < total) {
    actual++;
    mostrarPregunta(actual);
    document.getElementById("comprobar").disabled = true;
    document.getElementById("sig").disabled = true;
  }
});

document.getElementById("reint").addEventListener("click", () => {
  actual = 1;
  gastado = 0;
  aciertos = 0;
  document.getElementById("reint").disabled = true;
  mostrarPregunta(actual);
});

document.addEventListener("DOMContentLoaded", () => {
  mostrarPregunta(actual);
});