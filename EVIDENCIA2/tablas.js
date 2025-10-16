function tabla() {
    const num = parseInt(document.getElementById("txtNumero").value, 10);
    // Tabla HTML básica sin CSS: usa atributos border, cellpadding y cellspacing
    if (isNaN(num)) {
        document.getElementById("resultado").innerHTML = "<p>Ingresa un número válido.</p>";
        return;
    }
    let grid = '<br> <table border="1" cellpadding="6" cellspacing="0">' +
        '<thead>' +
        '<tr>' +
        '<th>#</th>' +
        '<th>Operación</th>' +
        '<th>Resultado</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        grid += '<tr>' +
            '<td>' + i + '</td>' +
            '<td>' + num + ' x ' + i + '</td>' +
            '<td>' + resultado + '</td>' +
            '</tr>';
    }

    grid += '</tbody></table>';
    document.getElementById("resultado").innerHTML = grid;
}