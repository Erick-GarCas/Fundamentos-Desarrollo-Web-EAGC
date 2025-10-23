// Función principal que se llama cuando el usuario elige una operación
// en la interfaz (por ejemplo, al pulsar un botón "Calcular").
function eleccionOperacion() {
    // Declaramos variables para los dos números de entrada y el resultado.
    // Usamos let porque las variables se asignan más abajo.
    let numero1, numero2, resultado;

    // Obtenemos el valor del primer campo de texto del DOM y lo convertimos
    // a número de punto flotante con parseFloat. Si el campo está vacío
    // parseFloat devolverá NaN (que es un caso que no se maneja aquí).
    numero1 = parseFloat(document.getElementById("txtNumero1").value);

    // Hacemos lo mismo para el segundo número.
    numero2 = parseFloat(document.getElementById("txtNumero2").value);

    // Leemos la operación seleccionada (por ejemplo: "suma", "resta", ...)
    // desde un elemento <select> o similar con id="operacion".
    let operacion = document.getElementById("operacion").value;

    // Dependiendo del valor de `operacion` calculamos el resultado.
    // El switch hace coincidir la cadena y ejecuta la rama correspondiente.
    switch (operacion) {
        case "suma":
            // Suma: a + b
            resultado = numero1 + numero2;
            break;
        case "resta":
            // Resta: a - b
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            // Multiplicación: a * b
            resultado = numero1 * numero2;
            break;
        case "division":
            // División: a / b. Si numero2 es 0, el resultado será Infinity o -Infinity
            // para números, o NaN si los operandos son NaN.
            resultado = numero1 / numero2;
            break;
        case "modulo":
            // Módulo: resto de la división entera (a % b)
            resultado = numero1 % numero2;
            break;
        default:
            // Si la operación no coincide con ninguno de los casos anteriores
            // mostramos una alerta y salimos de la función. Esto evita intentar
            // usar `resultado` sin valor.
            alert("Operación no válida");
            return; // terminamos la ejecución de la función
    }

    // Objeto que mapea la clave (operación) a una cadena legible para el usuario.
    // Por ejemplo, 'multiplicacion' => 'multiplicación' (con tilde).
    const nombreOperacion = {
        suma: "suma",
        resta: "resta",
        multiplicacion: "multiplicación",
        division: "división",
        modulo: "módulo"
    }[operacion] || operacion;

    /*
      Explicación del uso de || (OR lógico) en la línea anterior:

      - Primero se accede a la propiedad del objeto usando [operacion].
        Si `operacion` coincide con una clave del objeto, por ejemplo
        'suma', el resultado será la cadena correspondiente ('suma').

      - Si `operacion` no existe como clave en el objeto, la expresión
        { ... }[operacion] devolverá undefined.

      - El operador lógico OR (||) devuelve el primer operando que sea
        "truthy"; si el primer operando es falsy (como undefined), entonces
        devuelve el segundo operando. Aquí se usa como un "fallback" o
        valor por defecto: si no hay mapeo en el objeto, se usa simplemente
        el valor de `operacion` tal cual.

      - Ejemplo: si operacion === 'suma' => { ... }['suma'] === 'suma' =>
        nombreOperacion = 'suma'. Si operacion === 'otra' =>
        { ... }['otra'] === undefined => nombreOperacion = operacion ('otra').

      Es una forma breve de proveer un valor por defecto sin usar
      una sentencia if/else.
    */

    // Finalmente mostramos el resultado en una alerta al usuario.
    // Concatenamos las partes en una sola cadena.
    alert("La " + nombreOperacion + " del número " + numero1 + " y número " + numero2 + " es " + resultado);
}