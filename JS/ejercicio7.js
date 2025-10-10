function registros() {
    let numeroregistros = document.getElementById('txtNumero').value;
    let grid = '<table class="table table-hover">' +
        '<tr>' +
        '<th>Id</th>' +
        '<th>Nombre</th>' +
        '<th>Acciones</th>' +
        '</tr>';

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

}