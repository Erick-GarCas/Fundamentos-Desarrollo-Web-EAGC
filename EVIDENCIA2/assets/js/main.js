// JS sencillo para utilidades de la página
// 1) Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}