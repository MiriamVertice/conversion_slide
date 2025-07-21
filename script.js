let selected = null;

const inst = document.getElementById("inst");
const capas = document.querySelectorAll(".capa");
const dialog = document.getElementById("dialog");
const container = document.getElementById("contenedor");

// Guardamos el orden correcto original
const ordenCorrecto = [
  "div_1",
  "div_2",
  "div_3",
  "div_4",
  "div_5",
  "div_6"
];

capas.forEach((div) => {
  div.addEventListener("click", () => {
    if (!selected) {
      selected = div;
      div.classList.add("selected");
      inst.textContent = "Pulse sobre otra opción para intercambiarla.";
    } else if (selected !== div) {
      intercambiar(selected, div);
      limpiarSeleccion();
      inst.textContent = "Pulse sobre una opción para seleccionarla.";
    }
  });
});

function intercambiar(div1, div2) {
  const clone1 = div1.cloneNode(true);
  const clone2 = div2.cloneNode(true);

  div1.replaceWith(clone2);
  div2.replaceWith(clone1);

  asignarEventos();
}

function asignarEventos() {
  document.querySelectorAll(".capa").forEach((div) => {
    div.onclick = () => {
      if (!selected) {
        selected = div;
        div.classList.add("selected");
        inst.textContent = "Pulse sobre otra opción para intercambiarla.";
      } else if (selected !== div) {
        intercambiar(selected, div);
        limpiarSeleccion();
        inst.textContent = "Pulse sobre una opción para seleccionarla.";
      }
    };
  });
}

function limpiarSeleccion() {
  document.querySelectorAll(".capa").forEach((el) => el.classList.remove("selected"));
  selected = null;
}

document.getElementById("reint").addEventListener("click", () => {
  location.reload();
});

document.getElementById("comprobar").addEventListener("click", () => {
  const actuales = Array.from(container.children).map((el) => el.id);
  let correctas = actuales.filter((id, index) => id === ordenCorrecto[index]).length;

  dialog.textContent = `Correctas: ${correctas}/6`;
  dialog.style.display = "block";
});
