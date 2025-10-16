function serie() {
    let numeroregistros = document.getElementById('txtNumero').value;
    let grid = '<table class="table table-hover">' +
        '<thead class="thead-dark">' +
        '<tr>' +
        '<th>Id</th>' +
        '<th>Nombre</th>' +
        '<th></th>' +
        '<th></th>' +
        '</tr>' +
        '</thead>';

    for (let i = 1; i <= numeroregistros; i++) {
        nombre = prompt('Ingrese un nombre de Empleado:');
        grid += '<tr>' +
            '<td>' + i + '</td>' +
            '<td>' +
            nombre +
            '</td>' +
            '<td>' +
            '<button type="button" class="btn btn-warning">EDITAR</button>' +
            '</td>' +
            '<td>' +
            '<button type="button" class="btn btn-danger">ELIMINAR</button>' +
            '</td>' +
            '</tr>';
    }
    grid += '</table>';
    document.getElementById('area').innerHTML = grid;
}