function serie() {
    let numeroregistros, grid, nombre; // variables al estilo de los demás ejercicios

    numeroregistros = parseInt(document.getElementById('txtNumero').value, 10);

    if (isNaN(numeroregistros) || numeroregistros <= 0) {
        alert('El número de registros debe ser un entero positivo y mayor a 0.');
        return;
    }

    // Tabla básica como en ejercicio3 (sin CSS): border/cellpadding/cellspacing
    grid = '<br> <table border="1" cellpadding="6" cellspacing="0">' +
        '<thead>' +
        '<tr>' +
        '<th>Id</th>' +
        '<th>Nombre</th>' +
        '<th>Editar</th>' +
        '<th>Eliminar</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

    for (let i = 1; i <= numeroregistros; i++) {
        nombre = prompt('Ingrese un nombre de Empleado:');
        if (nombre === null || nombre.trim() === '') {
            nombre = '[Nombre]';
        }
        grid += '<tr>' +
            '<td>' + i + '</td>' +
            '<td>' + nombre + '</td>' +
            '<td><button type="button">Editar</button></td>' +
            '<td><button type="button">Eliminar</button></td>' +
            '</tr>';
    }

    grid += '</tbody></table>';
    document.getElementById('area').innerHTML = grid;
}