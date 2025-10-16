function evaluacion() {
    const respuestas = { //uso de un array de objetos, aqui se agregan las respuestas correctas
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

    let puntaje = 0; //inicializo el puntaje en 0
    let totalPreguntas = 10; //cuento el total de preguntas, este depende de la cantidad de preguntas que haya en el formulario

    for (let pregunta in respuestas) { //recorro todas las preguntas
        let opciones = document.getElementsByName(pregunta); //obtengo las opciones de cada pregunta
        for (let i = 0; i < opciones.length; i++) { //recorro las opciones
            if (opciones[i].checked && opciones[i].value == respuestas[pregunta]) {
                //verifico si la opcion esta seleccionada
                puntaje++; //si la opcion es correcta, incremento el puntaje
            }
        }
    }
    // calcular la calificacion
    let calificacion = (puntaje / totalPreguntas) * 100; //calculo la calificacion en base al puntaje obtenido   
    alert("Tu calificación es: " + calificacion.toFixed(2)); //muestro la calificacion con 2 decimales
}