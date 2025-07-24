document.addEventListener("DOMContentLoaded", () => {
  const grande = document.getElementById("fotitogrande");
  const difuminado = document.getElementById("fondodifuminado");
  const cerrar = document.getElementById("cerrado");
  const chica = document.getElementById("fotitochica");

  function mostrar() {
    grande.style.display = "block";
    difuminado.style.display = "block";
  }

  function ocultar() {
    grande.style.display = "none";
    difuminado.style.display = "none";
  }

  chica.addEventListener("click", mostrar);
  cerrar.addEventListener("click", ocultar);
  grande.addEventListener("click", (e) => {
    if (e.target === grande) ocultar(); // cerrar al hacer clic fuera de la imagen
  });

  window.addEventListener("resize", () => {
    ocultar();
  });
});
