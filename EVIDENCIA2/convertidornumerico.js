// Convierte un número decimal (entero no negativo) a su representación binaria
// usando divisiones sucesivas entre 2, sin usar Number.prototype.toString(2).
function convertidor() {
        // Declaramos variables siguiendo un estilo consistente.
        let decimal, binario, resto;

        // Leemos el valor del input con id='txtDecimal' y lo convertimos a entero base 10.
        // parseInt devuelve NaN si el contenido no es un número válido.
        decimal = parseInt(document.getElementById('txtDecimal').value, 10);

        // Inicializamos la cadena binaria vacía; iremos anteponiendo los restos (0 o 1).
        binario = '';

        // División sucesiva entre 2 (sin usar toString(2))
        // Idea: mientras decimal > 0, el bit menos significativo es decimal % 2.
        // Lo anteponemos a la cadena binaria y dividimos entero entre 2 para avanzar.
        while (decimal > 0) {
                // Resto de dividir por 2: 0 si es par, 1 si es impar.
                resto = decimal % 2;

                // Construimos la cadena de derecha a izquierda anteponiendo el resto.
                binario = resto + binario;

                // Reducimos el número tomando la parte entera de la división por 2.
                decimal = Math.floor(decimal / 2);
        }

        // Mostramos el resultado en el input con id='txtBinario'.
        document.getElementById('txtBinario').value = binario;

        /*
            Notas y consideraciones:
            - Caso decimal === 0: el while no se ejecuta y `binario` queda ''.
                Si se desea mostrar '0' explícitamente, podría usarse un fallback:

                        const salida = binario || '0'; // usa '0' si binario es '' (falsy)
                        document.getElementById('txtBinario').value = salida;

                Explicación del operador OR (||): devuelve el primer operando "truthy".
                Si `binario` es cadena vacía '', que es "falsy", se emplea '0'.

            - Validación de entrada: si parseInt produce NaN (entrada no válida),
                convendría avisar al usuario y no procesar. No se implementa aquí
                para no cambiar la lógica original, pero sería una mejora recomendable.

            - Alternativa con toString(2): (decimal >>> 0).toString(2) es más directo,
                pero aquí se ejemplifica el algoritmo manual de conversión.
        */
}