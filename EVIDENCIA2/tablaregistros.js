function serie() {
    // Número de registros a solicitar; cadena HTML de la tabla; y nombre por registro.
    let numeroregistros, grid, nombre;

    // Leemos el número de registros del input y lo convertimos a entero.
    numeroregistros = parseInt(document.getElementById('txtNumero').value, 10);

    // Validación: debe ser entero positivo y > 0.
    if (isNaN(numeroregistros) || numeroregistros <= 0) {
        alert('El número de registros debe ser un entero positivo y mayor a 0.');
        return;
    }

    // Construimos una tabla básica (sin CSS) usando atributos border/cellpadding/cellspacing.
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

    // Por cada registro, pedimos un nombre por prompt y generamos una fila.
    for (let i = 1; i <= numeroregistros; i++) {
        nombre = prompt('Ingrese un nombre de Empleado:');
        // Si el usuario cancela (null) o deja vacío ('' tras trim), usamos un placeholder.
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

    // Cerramos la tabla y la renderizamos en el área objetivo.
    grid += '</tbody></table>';
    document.getElementById('area').innerHTML = grid;
}

/*
  Nota sobre fallback con OR (||) en casos análogos:
  - Podríamos combinar la validación de nombre en una sola línea:
      const nombreSeguro = (prompt('Ingrese un nombre de Empleado:') || '').trim() || '[Nombre]';
    Explicación:
      - prompt(...) puede devolver null => null || '' => '' (falsy)
      - ''.trim() sigue siendo ''
      - '' || '[Nombre]' => usa el placeholder como respaldo.
  - Aquí se deja la lógica expandida por claridad.
*/