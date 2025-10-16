let modoOscuro = false;

function modooscuro() {

    if (!modoOscuro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        modoOscuro = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modoOscuro = false;
    }
}

function ResaltarPregunta(colorOverride) {
    // Prioridad del color: argumento > input #txtColorPregunta > input #txtColor > 'green'
    const colorInputPregunta = document.getElementById("txtColorPregunta");
    const colorInputGeneral = document.getElementById("txtColor");
    const color = colorOverride || (colorInputPregunta && colorInputPregunta.value) || (colorInputGeneral && colorInputGeneral.value) || "green";

    const preguntas = document.getElementsByClassName("pregunta");
    for (let i = 0; i < preguntas.length; i++) {
        preguntas[i].style.color = color;
        preguntas[i].style.fontWeight = "bold";
    }
}

function cambiarColor() {
    let color = document.getElementById("txtColor").value;
    document.body.style.backgroundColor = color;
}