const paginas = document.querySelectorAll(".pagina");
const enlaces = document.querySelectorAll(".page-link[data-pagina]");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();

    paginas.forEach((p) => p.classList.remove("activo"));
    document.getElementById(enlace.dataset.pagina).classList.add("activo");

    enlaces.forEach((l) => l.parentElement.classList.remove("active"));
    enlace.parentElement.classList.add("active");
  });
});
