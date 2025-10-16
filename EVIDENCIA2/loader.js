function iniciarCarga() {
    var btn = document.getElementById('btnCargar');
    var spinner = document.getElementById('spinner');
    var resultado = document.getElementById('resultado');

    // Restablecer estado previo
    resultado.style.display = 'none';

    // Mostrar spinner y deshabilitar botón mientras "carga"
    spinner.style.display = 'inline-block';
    btn.disabled = true;
    btn.textContent = 'Cargando...';

    // Simulación de carga (2.5s)
    setTimeout(function() {
        spinner.style.display = 'none';
        resultado.style.display = 'block';
        btn.disabled = false;
        btn.textContent = 'Iniciar carga';
    }, 2500);
}