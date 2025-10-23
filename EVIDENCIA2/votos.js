// Sistema de votación simple para tres candidatos con manejo de empates.
function votar() {
    // Contadores de votos por candidato y nulos; variables auxiliares.
    let votosHiram, votosAngel, votosOmar, votosNulos, total, opcion;

    // Inicializamos contadores en cero.
    votosHiram = 0;
    votosAngel = 0;
    votosOmar = 0;
    votosNulos = 0;

    // Bucle de votación: continúa hasta que se ingrese 0.
    while (true) {
        // Solicitamos voto; 1..3 candidatos, 0 termina.
        opcion = prompt('Vota por tu candidato:\n1) Hiram\n2) Ángel\n3) Omar\n(Ingresa 0 para terminar)');

        // Convertimos a entero en base 10.
        opcion = parseInt(opcion, 10);

        // 0 => finalizar votación.
        if (opcion === 0) {
            break; // terminar votación
        }

        // Sumamos al candidato correspondiente; cualquier otro valor => voto nulo.
        if (opcion === 1) {
            votosHiram++;
        } else if (opcion === 2) {
            votosAngel++;
        } else if (opcion === 3) {
            votosOmar++;
        } else {
            votosNulos++;
        }
    }

    // Total de votos (incluye nulos).
    total = votosHiram + votosAngel + votosOmar + votosNulos;

    // Función auxiliar para detectar empates entre candidatos válidos.
    function hayEmpate() {
        // Hay empate si dos candidatos tienen el mismo máximo y superan al tercero.
        return (votosHiram === votosAngel && votosHiram > votosOmar) ||
               (votosHiram === votosOmar   && votosHiram > votosAngel) ||
               (votosAngel === votosOmar  && votosAngel > votosHiram);
    }

    // Mientras haya empate, pedimos votos de desempate (no se permite 0 para terminar aquí).
    while (hayEmpate()) {
        let mensajeEmpate = '';
        if (votosHiram === votosAngel && votosHiram > votosOmar) {
            mensajeEmpate = 'Empate entre los candidatos Hiram y Ángel';
        } else if (votosHiram === votosOmar && votosHiram > votosAngel) {
            mensajeEmpate = 'Empate entre los candidatos Hiram y Omar';
        } else if (votosAngel === votosOmar && votosAngel > votosHiram) {
            mensajeEmpate = 'Empate entre los candidatos Ángel y Omar';
        }
        alert(mensajeEmpate + '. Ingrese un voto adicional para desempatar.');

        // Solicitar voto de desempate; si es inválido, cuenta como nulo.
        opcion = prompt('Voto de desempate:\n1) Hiram\n2) Ángel\n3) Omar');
        opcion = parseInt(opcion, 10);
        if (opcion === 1) { votosHiram++; }
        else if (opcion === 2) { votosAngel++; }
        else if (opcion === 3) { votosOmar++; }
        else { votosNulos++; }

        // Recalcular total por claridad (aunque no cambia el máximo entre válidos).
        total = votosHiram + votosAngel + votosOmar + votosNulos;
    }

    // Determinar ganador entre los tres candidatos válidos.
    let ganadorNombre = '';
    let votosGanador = 0;
    if (votosHiram >= votosAngel && votosHiram >= votosOmar) {
        ganadorNombre = 'Hiram';
        votosGanador = votosHiram;
    }
    if (votosAngel > votosGanador) {
        ganadorNombre = 'Ángel';
        votosGanador = votosAngel;
    }
    if (votosOmar > votosGanador) {
        ganadorNombre = 'Omar';
        votosGanador = votosOmar;
    }

    // Porcentaje de aceptación del ganador (entero, piso).
    let porcentaje = 0;
    if (total > 0) {
        porcentaje = Math.floor((votosGanador / total) * 100);
    }

    // Resumen de resultados. Uso de OR (||) como fallback:
    // si por algún motivo no hubiera ganadorNombre (cadena vacía), se mostrará 'Sin ganador'.
    let resumen = 'Resultados:\n' +
        'Hiram: ' + votosHiram + '\n' +
        'Ángel: ' + votosAngel + '\n' +
        'Omar: ' + votosOmar + '\n' +
        'Nulos: ' + votosNulos + '\n' +
        'Total votos: ' + total + '\n' +
        'Ganador: ' + (ganadorNombre || 'Sin ganador') + ' (' + porcentaje + '% aceptación)';

    alert(resumen);
}