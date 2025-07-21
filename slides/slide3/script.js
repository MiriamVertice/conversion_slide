document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playBtn = document.querySelector(".plei");
  const pauseBtn = document.querySelector(".paus");
  const stopBtn = document.querySelector(".estop");
  const dinamicaBtn = document.getElementById("despliega_dinamica");
  const dinamicaDiv = document.getElementById("dinamica");
  const testBtn = document.getElementById("despliega_test");
  const testDiv = document.getElementById("self_assessment");
  const dialog = document.getElementById("dialog");

  const totalCriterios = 13;
  const criteriosSeleccionados = new Set();

  // Mostrar/ocultar secciones
  dinamicaBtn.addEventListener("click", () => {
    dinamicaDiv.classList.toggle("oculto");
  });

  testBtn.addEventListener("click", () => {
    testDiv.classList.toggle("oculto");
  });

  // Audio
  playBtn.addEventListener("click", () => {
    audio.play();
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
  });

  // Generar filas dinámicamente
  const frases = [
    "I contribute to group goals.",
    "I contribute with ideas and experiences.",
    "I exchange resources and information.",
    "I seek quality work.",
    "I give clear explanations of contents.",
    "I identify all the key concepts of the topic.",
    "I seek extra information about the topic.",
    "I use specific and technical vocabulary on a professional level.",
    "I present arguments based on the course readings and tasks.",
    "I perform assigned role with responsibility.",
    "I interact actively on discussion forums.",
    "I challenge others contributions.",
    "I apply contents thoughtfully to my professional practice."
  ];

  const tabla = document.querySelector(".tabla");

  frases.forEach((texto, i) => {
    const fila = document.createElement("tr");
    const clase = `criteria${i + 1}`;
    fila.innerHTML = `
      <td>${texto}</td>
      <td><input type="radio" name="fila${i + 1}" class="${clase}"></td>
      <td><input type="radio" name="fila${i + 1}" class="${clase}"></td>
      <td><input type="radio" name="fila${i + 1}" class="${clase}"></td>
    `;
    tabla.appendChild(fila);

    // Añadir eventos
    fila.querySelectorAll(`input[name="fila${i + 1}"]`).forEach((radio) => {
      radio.addEventListener("change", () => {
        criteriosSeleccionados.add(clase);

        if (criteriosSeleccionados.size === totalCriterios) {
          dialog.textContent = "¡Enhorabuena! Has completado esta actividad.";
          dialog.classList.add("visible");
          setTimeout(() => {
            dialog.classList.remove("visible");
          }, 3000);
        }
      });
    });
  });
});
