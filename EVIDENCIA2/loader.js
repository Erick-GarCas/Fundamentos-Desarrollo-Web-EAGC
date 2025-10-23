// Simula un proceso de carga mostrando un spinner y deshabilitando el botón
// durante un tiempo determinado; al terminar, muestra el resultado y restaura el botón.
function iniciarCarga() {
    // Referencias a los elementos de la UI: botón, spinner y contenedor del resultado.
    let btn = document.getElementById('btnCargar');
    let spinner = document.getElementById('spinner');
    let resultado = document.getElementById('resultado');

    // Restablecer estado previo: ocultamos el resultado por si quedó visible de antes.
    resultado.style.display = 'none';

    // Mostrar el spinner y deshabilitar el botón mientras "carga" para evitar múltiples clics.
    spinner.style.display = 'inline-block';
    btn.disabled = true;
    btn.textContent = 'Cargando...';

    // Simulación de carga: usamos setTimeout con 2500 ms (2.5 segundos).
    setTimeout(function() {
        // Al finalizar la "carga", ocultamos el spinner y mostramos el resultado.
        spinner.style.display = 'none';
        resultado.style.display = 'block';

        // Rehabilitamos el botón y restauramos su texto.
        btn.disabled = false;
        btn.textContent = 'Iniciar carga';
    }, 2500);

    /*
      Nota sobre OR lógico (||) como fallback opcional:
      - Si la duración viniera de un input del usuario (por ejemplo, ms = Number(input.value)),
        podríamos asegurar un valor por defecto si fuese 0, NaN o vacío:

            const ms = Number(input.value) || 2500; // usa 2500 si el valor es falsy
            setTimeout(callback, ms);

        El operador || devuelve el primer valor "truthy". Si Number(input.value) resulta en 0, NaN o undefined,
        se usaría 2500 como respaldo. No lo aplicamos aquí porque el valor es fijo y la lógica no cambia.
    */
}