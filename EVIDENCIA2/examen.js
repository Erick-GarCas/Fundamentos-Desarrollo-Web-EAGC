// Evalúa un examen de 10 preguntas de opción múltiple
// leyendo las opciones seleccionadas en el DOM y comparándolas
// con una clave de respuestas correctas.
function evaluacion() {
    // Objeto literal que mapea id de la pregunta => respuesta correcta.
    // Nota: no es un "array de objetos"; es un único objeto (diccionario).
    const respuestas = {
        p1: "b",
        p2: "c",
        p3: "b",
        p4: "a",
        p5: "b",
        p6: "b",
        p7: "a",
        p8: "a",
        p9: "b",
        p10: "b"
    };

    // Inicializamos el contador de aciertos en 0.
    let puntaje = 0;

    // Total de preguntas. Podría calcularse dinámicamente con Object.keys(respuestas).length,
    // pero se mantiene fijo para no cambiar la lógica original.
    let totalPreguntas = 10;

    // Recorremos cada clave (pregunta) definida en el objeto de respuestas.
    for (let pregunta in respuestas) {
        // Obtenemos todas las opciones (radios) con name = id de la pregunta (p1, p2, ...).
        // getElementsByName devuelve una NodeList (similar a un array) con esos elementos.
        let opciones = document.getElementsByName(pregunta);

        // Recorremos las opciones de la pregunta actual.
        for (let i = 0; i < opciones.length; i++) {
            // Verificamos dos condiciones:
            // 1) Que la opción esté seleccionada (checked === true).
            // 2) Que el valor de la opción coincida con la respuesta correcta.
            // Aquí se usa "=="; en general "===" sería más estricto si ambos son strings.
            if (opciones[i].checked && opciones[i].value == respuestas[pregunta]) {
                // Si es la opción correcta seleccionada, incrementamos el puntaje.
                puntaje++;
            }
        }
    }

    // Calculamos la calificación como porcentaje.
    let calificacion = (puntaje / totalPreguntas) * 100;

    // Mostramos la calificación con 2 decimales.
    alert("Tu calificación es: " + calificacion.toFixed(2));

    /*
      Notas y posibles mejoras (sin cambiar la lógica actual):
      - Cálculo dinámico del total: const total = Object.keys(respuestas).length;
      - Validar que cada pregunta tenga una respuesta seleccionada; si no, avisar.
      - Uso de OR (||) como fallback:
          Si se calculase dinámicamente el total y, por algún error, fuese 0,
          se podría evitar división por 0 con un valor por defecto:

              const total = Object.keys(respuestas).length || 1; // usa 1 si total es 0

        El operador lógico OR (||) devuelve el primer valor "truthy"; si el total fuese 0
        (valor "falsy"), usaría 1 como respaldo para evitar un error aritmético.
    */
}