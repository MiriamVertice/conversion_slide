$(document).ready(() => {
  const audio = $("#audio")[0];

  $(".plei").click(() => audio.play());
  $(".paus").click(() => audio.pause());
  $(".estop").click(() => {
    audio.pause();
    audio.currentTime = 0;
  });

  $("#dinamica, #self_assessment").hide();

  $("#despliega_dinamica").click(() => $("#dinamica").slideToggle());
  $("#despliega_test").click(() => $("#self_assessment").slideToggle());

  const totalCriterios = 13;
  let criterios = Array(totalCriterios).fill(0);

  // Genera las 13 filas
  const frases = [
    "I contribute to group goals.",
    "I contribute with ideas and experiences.",
    "I exchange resources and information.",
    "I seek quality work.",
    "I give clear explanations of contents.",
    "I identify all the key concepts of the topic.",
    "I seek extra information about the topic.",
    "I use specific and technical vocabulary on a professional level.",
    "I present arguments based on course readings.",
    "I perform assigned role with responsibility.",
    "I interact actively on discussion forums.",
    "I challenge others' contributions.",
    "I apply contents thoughtfully to my professional practice."
  ];

  frases.forEach((texto, i) => {
    $(".tabla").append(`
      <tr>
        <td>${texto}</td>
        <td><input type="radio" name="fila${i}" class="crit${i}" /></td>
        <td><input type="radio" name="fila${i}" class="crit${i}" /></td>
        <td><input type="radio" name="fila${i}" class="crit${i}" /></td>
      </tr>
    `);

    $(`.crit${i}`).on("click", () => {
      criterios[i] = 1;
      if (criterios.every((c) => c === 1)) {
        $("#dialog").html(`
          <p style='text-align:center'>¡Enhorabuena! Has completado la actividad.</p>
        `);
        $("#dialog").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: { effect: "bounce", duration: 800 },
          hide: { effect: "drop", duration: 500 }
        });
      }
    });
  });
});
