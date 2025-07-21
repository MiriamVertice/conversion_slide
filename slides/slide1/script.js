const contenedor = document.getElementById("contenedor");
const dialog = document.getElementById("dialog");
const inst = document.getElementById("inst");

let ordenCorrecto = [
  "div_1",
  "div_2",
  "div_3",
  "div_4",
  "div_5",
  "div_6"
];

let selected = null;

// Añadir eventos a cada frase
document.querySelectorAll(".capa").forEach(div => {
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

function intercambiar(el1, el2) {
  const tmp = el1.cloneNode(true);
  const tmp2 = el2.cloneNode(true);

  el1.replaceWith(tmp2);
  el2.replaceWith(tmp);

  // Reasignar eventos
  document.querySelectorAll(".capa").forEach(div => {
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
}

function limpiarSeleccion() {
  document.querySelectorAll(".capa").forEach(el => el.classList.remove("selected"));
  selected = null;
}

document.getElementById("reint").addEventListener("click", () => {
  location.reload();
});

document.getElementById("comprobar").addEventListener("click", () => {
  const actuales = Array.from(contenedor.children).map(el => el.id);
  let correctas = actuales.filter((id, i) => id === ordenCorrecto[i]).length;

  dialog.textContent = `Correctas: ${correctas}/${ordenCorrecto.length}`;
  dialog.style.display = "block";
});
