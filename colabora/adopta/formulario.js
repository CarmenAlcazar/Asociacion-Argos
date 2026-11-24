const paso1 = document.getElementById('paso1');
const paso2 = document.getElementById('paso2');
const paso3 = document.getElementById('paso3'); 
const paso4 = document.getElementById('paso4'); 
const paso5 = document.getElementById('paso5');

const btnAnterior2 = document.getElementById('anterior2');
const btnAnterior3 = document.getElementById('anterior3');
const btnAnterior4 = document.getElementById('anterior4');
const btnAnterior5 = document.getElementById('anterior5');

paso1.classList.add('activo');

paso1.addEventListener('submit',(e)=>{
    e.preventDefault();
    paso1.classList.remove("activo");
    paso2.classList.add("activo");
})



paso2.addEventListener("submit", (e) => {
    e.preventDefault();
  paso2.classList.remove("activo");
  paso3.classList.add("activo");
});

btnAnterior2.addEventListener("click", (e) => {
  e.preventDefault();
  paso2.classList.remove("activo");
  paso1.classList.add("activo");
});


paso3.addEventListener("submit", (e) => {
  e.preventDefault();
  paso3.classList.remove("activo");
  paso4.classList.add("activo");
});
btnAnterior3.addEventListener("click", (e) => {
  e.preventDefault();
  paso3.classList.remove("activo");
  paso2.classList.add("activo");
});

paso4.addEventListener("submit", (e) => {
  e.preventDefault();
  paso4.classList.remove("activo");
  paso5.classList.add("activo");
});
btnAnterior4.addEventListener("click", (e) => {
  e.preventDefault();
  paso4.classList.remove("activo");
  paso3.classList.add("activo");
});

paso5.addEventListener("submit", (e) => {
  e.preventDefault();

  const alerta = document.createElement("div");
  alerta.classList.add(
    "alert",
    "alert-success",
    "alerta-flotante",
    "text-center",
    "fw-bold",
  );
  alerta.setAttribute("role", "alert");
  alerta.textContent =
    "¡Solicitud enviada! Nos pondremos en contacto contigo muy pronto 🐾";
  document.body.append(alerta);

  setTimeout(() => {
    alerta.remove();
    document.querySelectorAll("form").forEach((form) => form.reset());
    paso5.classList.remove("activo");
    paso1.classList.add("activo");
  }, 3000);
});
btnAnterior5.addEventListener("click", () => {
  paso5.classList.remove("activo");
  paso4.classList.add("activo");
});
