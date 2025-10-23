// Alterna la visibilidad de una imagen y actualiza el texto del botón.
function ocultarMostrar() {
    var img = document.getElementById('imagen');
    var btn = document.getElementById('btnToggle');

    // Determinar el estado actual de 'display'. Si no hay estilo en línea definido
    // (img.style.display === ''), usamos el valor calculado por el navegador
    // con getComputedStyle(img).display.
    // Aquí se usa OR lógico (||) como fallback: toma el primer valor "truthy".
    var displayActual = img.style.display || window.getComputedStyle(img).display;

    if (displayActual !== 'none') {
        // Si actualmente se muestra, lo ocultamos y cambiamos el texto del botón.
        img.style.display = 'none';
        btn.textContent = 'Mostrar imagen';
    } else {
        // Si está oculto, lo mostramos y ajustamos el texto del botón.
        img.style.display = 'block';
        btn.textContent = 'Ocultar imagen';
    }
}

/*
  Nota: Otra forma de implementar el toggle sería usar clases CSS y classList.toggle,
  lo que separa la lógica (JS) del estilo (CSS). Aquí se mantiene la lógica original
  con estilos en línea para mayor simplicidad.
*/