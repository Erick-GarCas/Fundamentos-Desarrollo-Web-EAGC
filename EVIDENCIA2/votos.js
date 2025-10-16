function votar() {
    let votosHiram, votosAngel, votosOmar, votosNulos, total, opcion; // variables

    votosHiram = 0;
    votosAngel = 0;
    votosOmar = 0;
    votosNulos = 0;

    while (true) {
        opcion = prompt('Vota por tu candidato:\n1) Hiram\n2) Ángel\n3) Omar\n(Ingresa 0 para terminar)');

        opcion = parseInt(opcion, 10);

        if (opcion === 0) {
            break; // terminar votación
        }

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

    total = votosHiram + votosAngel + votosOmar + votosNulos;

    // Resolver empates entre los candidatos válidos antes de anunciar ganador
    function hayEmpate() {
        return (votosHiram === votosAngel && votosHiram > votosOmar) ||
            (votosHiram === votosOmar && votosHiram > votosAngel) ||
            (votosAngel === votosOmar && votosAngel > votosHiram);
    }

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

        opcion = prompt('Voto de desempate:\n1) Hiram\n2) Ángel\n3) Omar');
        opcion = parseInt(opcion, 10);
        if (opcion === 1) { votosHiram++; } else if (opcion === 2) { votosAngel++; } else if (opcion === 3) { votosOmar++; } else { votosNulos++; }

        total = votosHiram + votosAngel + votosOmar + votosNulos;
    }

    // Determinar ganador
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

    let porcentaje = 0;
    if (total > 0) {
        porcentaje = Math.floor((votosGanador / total) * 100);
    }

    let resumen = 'Resultados:\n' +
        'Hiram: ' + votosHiram + '\n' +
        'Ángel: ' + votosAngel + '\n' +
        'Omar: ' + votosOmar + '\n' +
        'Nulos: ' + votosNulos + '\n' +
        'Total votos: ' + total + '\n' +
        'Ganador: ' + (ganadorNombre || 'Sin ganador') + ' (' + porcentaje + '% aceptación)';

    alert(resumen);
}