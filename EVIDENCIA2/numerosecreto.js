function jugar() {
    let numeroAleatorio, intentos, numeroUsuario; // seguir patrón de variables

    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // 1..100
    intentos = 5;

    for (let i = 1; i <= intentos; i++) {
        numeroUsuario = parseInt(prompt('Intento ' + i + ' de ' + intentos + '. Ingresa un número entero entre 1 y 100:'), 10);

        if (isNaN(numeroUsuario)) {
            alert('Debes ingresar un número válido.');
            // no contamos este intento inválido: restamos i y continuamos
            i = i - 1;
            continue;
        }

        if (numeroUsuario === numeroAleatorio) {
            alert('Felicidades, lo lograste');
            return;
        }

        let intentosRestantes = intentos - i;
        if (numeroUsuario < numeroAleatorio) {
            alert('El número secreto es mayor al número ingresado, te queda ' + intentosRestantes + ' intento(s)');
        } else {
            alert('El número secreto es menor al número ingresado, te queda ' + intentosRestantes + ' intento(s)');
        }
    }

    alert('Suerte para la próxima, el número secreto es ' + numeroAleatorio);
}