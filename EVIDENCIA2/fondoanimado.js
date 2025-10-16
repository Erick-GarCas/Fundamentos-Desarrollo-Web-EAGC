function toggleAnimacion() {
    var cuerpo = document.body;
    var btn = document.getElementById('btnAnim');
    var pausado = cuerpo.classList.toggle('pausado');
    btn.textContent = pausado ? 'Reanudar animación' : 'Pausar animación';
}