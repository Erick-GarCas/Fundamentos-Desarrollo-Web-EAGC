// Función que cambia el color de fondo (background) de la página
// al color indicado en un campo de texto con id="txtColor".
function cambiarColor() {
        // Declaramos la variable que almacenará el valor de color introducido.
        let color; // ejemplo de seguir un estilo consistente para variables

        // Obtenemos el valor del input con id='txtColor'. Puede ser un nombre CSS
        // (por ejemplo, 'red', 'blue'), un código hexadecimal ('#ff0000'), rgb(), etc.
        color = document.getElementById('txtColor').value;

        // Asignamos el color al estilo en línea del <body>.
        // Si el valor no es un color válido, el navegador simplemente no aplicará el cambio.
        document.body.style.backgroundColor = color;

        /*
            Nota sobre el operador lógico OR (||) como fallback opcional:
            - Si quisiéramos usar un color por defecto cuando el input esté vacío
                o devuelva una cadena "falsy" (''), podríamos escribir:

                        const colorSeguro = color || 'white';
                        document.body.style.backgroundColor = colorSeguro;

            - El operador || devuelve el primer valor "truthy". Si `color` es '' (cadena vacía),
                que es "falsy", se usaría 'white'. Si `color` tiene un valor no vacío, se usa tal cual.
            - No lo aplicamos aquí para no cambiar la lógica original; solo es una mejora posible.

            Alternativa con fusión nula (??):
            - Si solo queremos cubrir null/undefined y permitir '', usaríamos:

                        const colorConNulo = color ?? 'white';
        */
}