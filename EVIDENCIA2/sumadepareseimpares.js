// Lee números ingresados por el usuario y suma por separado pares e impares.
// El bucle termina cuando el usuario ingresa 0 (sentinela).
function serie() {
    let bandera = 0;      // 0 => continuar; 1 => terminar
    let sumaPar = 0;      // acumulador para números pares
    let sumaImpar = 0;    // acumulador para números impares

    // Mientras la bandera sea 0, seguimos pidiendo números.
    while (bandera == 0) {
        let numero = parseInt(prompt("Ingrese un número:"));

        // Determinamos paridad usando el operador módulo (%).
        // número % 2 === 0 => número par; de lo contrario, impar.
        if (numero % 2 == 0) {
            sumaPar += numero;
        } else {
            // Es impar
            sumaImpar += numero;
        }

        // Condición de término: si el número es 0, encendemos la bandera (terminar).
        // En caso contrario, mantenemos la bandera apagada (seguir).
        if (numero == 0) {
            bandera = 1; // bandera encendida => termina el bucle
        } else {
            bandera = 0; // bandera apagada => continua el bucle
        }
    }

    // Mostramos los resultados en el documento.
    document.write(
        "La suma de los números pares es: " + sumaPar + "<br>" +
        ' Y la suma de Impares es de: ' + sumaImpar + "<br>"
    );
}

/*
  Notas y mejoras opcionales:
  - Manejo de entradas no numéricas: parseInt puede devolver NaN si el usuario
    ingresa texto; podría validarse con Number.isNaN(numero) antes de sumar.
  - El 0 se suma a pares (no afecta la suma). La lógica actual lo permite, está bien.
  - Se podrían usar === en lugar de == para comparaciones estrictas.
  - Fallback con OR (||) en casos análogos: si los números vinieran de inputs de texto,
    podrías hacer const n = Number(input.value) || 0 para asegurar un número, teniendo en cuenta
    que 0 es "falsy" y podría ser sustituido por el fallback si no es deseado (en ese caso, usar ??).
*/