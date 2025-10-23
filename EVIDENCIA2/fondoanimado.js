// Alterna la animación del fondo agregando/quitando la clase 'pausado'
// en <body> y actualiza el texto del botón según el estado resultante.
function toggleAnimacion() {
        // Referencia al elemento <body>. Aquí se aplicará la clase 'pausado'.
        let cuerpo = document.body;

        // Obtenemos el botón que dispara la acción, por id 'btnAnim'.
        let btn = document.getElementById('btnAnim');

        // classList.toggle('pausado'):
        // - Si 'pausado' no estaba en el body, la agrega y devuelve true.
        // - Si ya estaba, la quita y devuelve false.
        let pausado = cuerpo.classList.toggle('pausado');

        // Operador ternario (condicional):
        // Si pausado === true => texto 'Reanudar animación'
        // Si pausado === false => texto 'Pausar animación'
        btn.textContent = pausado ? 'Reanudar animación' : 'Pausar animación';

        /*
            Nota sobre OR lógico (||) como fallback opcional:
            - Si quisiéramos asegurarnos de que siempre haya algún texto (por ejemplo,
                si por error se estableciera una cadena vacía), podríamos usar:

                        btn.textContent = (pausado ? 'Reanudar animación' : 'Pausar animación') || 'Pausar animación';

                El operador || devuelve el primer valor "truthy"; si la expresión de la izquierda
                fuese una cadena vacía (''), usaría 'Pausar animación' como respaldo.
            - No lo aplicamos aquí para no cambiar la lógica original; es solo una mejora posible.
        */
}