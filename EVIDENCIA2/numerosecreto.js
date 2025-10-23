// Juego del número secreto: el usuario tiene 5 intentos para adivinar
// un número entero aleatorio entre 1 y 100.
function jugar() {
    // Declaración de variables siguiendo un patrón consistente.
    let numeroAleatorio, intentos, numeroUsuario;

    // Generamos un número entero en el rango 1..100.
    // Math.random() genera [0,1); multiplicamos por 100 => [0,100)
    // Math.floor(...) => [0,99]; al sumar 1 => [1,100]
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // 1..100

    // Número máximo de intentos permitidos.
    intentos = 5;

    // Bucle de intentos: i empieza en 1 y llega hasta `intentos` (incluido).
    for (let i = 1; i <= intentos; i++) {
        // Solicitamos un número entero con prompt y lo convertimos en base 10.
        numeroUsuario = parseInt(
            prompt('Intento ' + i + ' de ' + intentos + '. Ingresa un número entero entre 1 y 100:'),
            10
        );

        // Si la entrada no es un número (NaN), avisamos y no contamos este intento.
        if (isNaN(numeroUsuario)) {
            alert('Debes ingresar un número válido.');
            // Restamos 1 a i para compensar (no consumir intento) y seguimos.
            i = i - 1;
            continue;
        }

        // Comprobamos si adivinó exactamente el número secreto.
        if (numeroUsuario === numeroAleatorio) {
            alert('Felicidades, lo lograste');
            return; // Terminamos el juego.
        }

        // Calculamos intentos restantes y damos una pista (mayor/menor).
        let intentosRestantes = intentos - i;
        if (numeroUsuario < numeroAleatorio) {
            alert('El número secreto es mayor al número ingresado, te queda ' + intentosRestantes + ' intento(s)');
        } else {
            alert('El número secreto es menor al número ingresado, te queda ' + intentosRestantes + ' intento(s)');
        }
    }

    // Si se agotaron los intentos, revelamos el número.
    alert('Suerte para la próxima, el número secreto es ' + numeroAleatorio);
}

/*
  Notas y mejoras opcionales (sin cambiar la lógica actual):
  - Manejo de cancelación del prompt: si el usuario presiona Cancelar, prompt devuelve null,
    y parseInt(null, 10) es NaN; ya se maneja con isNaN, pero podrías detectar cancelación
    explícitamente (if (entrada === null) ...) para salir del juego.

  - Validación de rango: se podría avisar si el número no está en 1..100.

  - Uso de OR (||) como fallback: si la cantidad de intentos viniera de un input,
    podríamos asegurar un valor por defecto: const max = Number(input.value) || 5;
    El operador || devolverá 5 si Number(input.value) es 0, NaN, '' o undefined (valores "falsy").
*/