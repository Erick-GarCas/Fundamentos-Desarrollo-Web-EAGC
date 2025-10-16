function ocultarMostrar() {
    var img = document.getElementById('imagen');
    var btn = document.getElementById('btnToggle');

    // Si no hay estilo inline previo, obtenemos el display computado
    var displayActual = img.style.display || window.getComputedStyle(img).display;

    if (displayActual !== 'none') {
        img.style.display = 'none';
        btn.textContent = 'Mostrar imagen';
    } else {
        img.style.display = 'block';
        btn.textContent = 'Ocultar imagen';
    }
}