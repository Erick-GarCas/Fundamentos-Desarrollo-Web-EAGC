function convertidor() {
    let decimal, binario, resto; // seguir el estilo de variables

    decimal = parseInt(document.getElementById('txtDecimal').value, 10);
    binario = '';

    // División sucesiva entre 2 (sin usar toString(2))

    while (decimal > 0) {
        resto = decimal % 2; // obtener residuo (0 o 1)
        binario = resto + binario; // construir de derecha a izquierda
        decimal = Math.floor(decimal / 2); // reducir el número
    }

    document.getElementById('txtBinario').value = binario;
}