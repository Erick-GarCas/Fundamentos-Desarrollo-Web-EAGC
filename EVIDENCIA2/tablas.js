function tabla() {
    // Leemos el número del input y lo convertimos a entero base 10.
    const num = parseInt(document.getElementById("txtNumero").value, 10);

    // Validación: si no es un número, mostramos un mensaje y salimos.
    // Esta es una tabla HTML básica sin CSS (usa border/cellpadding/cellspacing).
    if (isNaN(num)) {
        document.getElementById("resultado").innerHTML = "<p>Ingresa un número válido.</p>";
        return;
    }

    // Comenzamos a construir el HTML de la tabla como una cadena.
    let grid = '<br> <table border="1" cellpadding="6" cellspacing="0">' +
        '<thead>' +
        '<tr>' +
        '<th>#</th>' +
        '<th>Operación</th>' +
        '<th>Resultado</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

    // Generamos las 10 filas de la tabla de multiplicar.
    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        grid += '<tr>' +
            '<td>' + i + '</td>' +
            '<td>' + num + ' x ' + i + '</td>' +
            '<td>' + resultado + '</td>' +
            '</tr>';
    }

    // Cerramos la tabla y volcamos el HTML en el contenedor de resultado.
    grid += '</tbody></table>';
    document.getElementById("resultado").innerHTML = grid;
}

/*
  Nota: Para evitar concatenación manual de strings, se podría usar createElement/appendChild
  o plantillas literales (template literals) con backticks, pero aquí mantenemos el estilo original.
*/