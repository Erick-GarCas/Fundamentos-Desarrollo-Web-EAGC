// Función que alterna (toggle) el tamaño de letra de un párrafo
// entre 16px y 24px cada vez que se invoca.
function cambiarTamano() {
        // Declaramos variables para el elemento <p> (parrafo) y su tamaño actual.
        let p, tamano;

        // Obtenemos del DOM el elemento con id="parrafo".
        p = document.getElementById('parrafo');

        // Leemos el tamaño de fuente en estilo en línea (inline style) del elemento.
        // Nota: si el tamaño no se ha establecido en estilo en línea, será cadena vacía ''.
        tamano = p.style.fontSize;

        /*
            Aquí usamos una condición compuesta:
                tamano === '' || tamano === '16px'

            Explicación del operador lógico OR (||):
            - El operador || evalúa de izquierda a derecha y devuelve true si
                cualquiera de las condiciones es verdadera.
            - En este caso, queremos considerar "estado base" cuando el tamaño
                aún no está establecido en estilo en línea (cadena vacía ''), o cuando
                ya está en 16px.
            - Si alguna de esas dos condiciones se cumple, cambiamos el tamaño a 24px.
            - De lo contrario (else), lo cambiamos a 16px.

            Por qué || es útil aquí:
            - Nos permite cubrir dos casos con una sola condición: "sin valor"
                o "valor base de 16px". Si cualquiera es cierto, hacemos el mismo
                comportamiento (subir a 24px). Equivalentemente, sin || necesitaríamos
                escribir dos if o un if con anidación.
        */
        if (tamano === '' || tamano === '16px') {
                // Si no hay tamaño definido en línea o es 16px, lo ponemos a 24px.
                p.style.fontSize = '24px';
        } else {
                // En cualquier otro caso (por ejemplo, 24px), lo devolvemos a 16px.
                p.style.fontSize = '16px';
        }
}