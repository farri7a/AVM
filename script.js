document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reserva-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const nombre = data.get("nombre");
    const telefono = data.get("telefono");
    const experiencia = data.get("experiencia");
    const fecha = data.get("fecha");
    const franja = data.get("franja");
    const pilotos = data.get("pilotos");
    const comentarios = data.get("comentarios") || "-";

    const msg = `
Nueva reserva desde la web:

Nombre: ${nombre}
Teléfono: ${telefono}
Experiencia: ${experiencia}
Día: ${fecha}
Horario: ${franja}
Cantidad de pilotos: ${pilotos}
Comentarios: ${comentarios}
`;

    const encoded = encodeURIComponent(msg);

    // TODO: reemplazar este número por el WhatsApp oficial del local
    const phone = "5492615153281";

    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, "_blank");
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
const reserveFloat = document.getElementById('reserveFloat');

function onScrollToggleReserve(){
  const y = window.scrollY || document.documentElement.scrollTop;
  // aparece después de ~120px de scroll
  if (y > 120) document.body.classList.add('show-reserve');
  else document.body.classList.remove('show-reserve');
}

window.addEventListener('scroll', onScrollToggleReserve, { passive: true });
onScrollToggleReserve();
function onScrollHideNav(){
  const y = window.scrollY || document.documentElement.scrollTop;
  if (y > 120) document.body.classList.add('hide-nav-on-scroll');
  else document.body.classList.remove('hide-nav-on-scroll');
}

window.addEventListener('scroll', onScrollHideNav, { passive: true });
onScrollHideNav();
