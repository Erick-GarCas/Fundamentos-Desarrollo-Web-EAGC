// Estado global para saber si el modo oscuro está activo o no.
// false => modo claro; true => modo oscuro.
let modoOscuro = false;

// Activa o desactiva el modo oscuro alternando estilos en el <body>.
function modooscuro() {
    // Si actualmente NO está en modo oscuro, lo activamos.
    if (!modoOscuro) {
        // Colores de fondo y texto para el modo oscuro.
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        // Actualizamos el estado global.
        modoOscuro = true;
    } else {
        // Si ya estaba en modo oscuro, volvemos al modo claro.
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modoOscuro = false;
    }
}

// Resalta todas las preguntas (elementos con clase .pregunta) usando un color.
// Prioridad del color (de mayor a menor):
// 1) colorOverride (argumento de la función)
// 2) valor del input con id #txtColorPregunta (si existe)
// 3) valor del input con id #txtColor (si existe)
// 4) el color por defecto 'green'
function ResaltarPregunta(colorOverride) {
    // Obtenemos referencias a inputs opcionales (pueden no existir en la página).
    const colorInputPregunta = document.getElementById("txtColorPregunta");
    const colorInputGeneral = document.getElementById("txtColor");
    
    // Cadena de selección con operadores lógicos:
    // - OR lógico (||): devuelve el primer valor "truthy". Se usa para elegir el primer color disponible.
    // - AND lógico (&&): evalúa el segundo operando solo si el primero es "truthy". Aquí se usa para
    //   comprobar que el elemento existe antes de acceder a su .value (evita errores si es null).
    // Orden de prioridad aplicado:
    //   1) colorOverride (si viene un argumento válido)
    //   2) colorInputPregunta.value (solo si colorInputPregunta existe)
    //   3) colorInputGeneral.value (solo si colorInputGeneral existe)
    //   4) 'green' como valor por defecto
    const color = colorOverride
        || (colorInputPregunta && colorInputPregunta.value)
        || (colorInputGeneral && colorInputGeneral.value)
        || "green";

    const preguntas = document.getElementsByClassName("pregunta");
    for (let i = 0; i < preguntas.length; i++) {
        preguntas[i].style.color = color;
        preguntas[i].style.fontWeight = "bold";
    }
}

// Cambia el color de fondo de la página al valor del input #txtColor.
function cambiarColor() {
    let color = document.getElementById("txtColor").value;
    document.body.style.backgroundColor = color;
}