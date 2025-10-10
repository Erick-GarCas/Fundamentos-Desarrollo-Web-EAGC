function eleccionOperacion() {
    let numero1 = parseFloat(document.getElementById("txtNumero1").value);
    let numero2 = parseFloat(document.getElementById("txtNumero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;

    if (operacion === "suma") {
        resultado = numero1 + numero2;
    } else if (operacion === "resta") {
        resultado = numero1 - numero2;
    } else if (operacion === "multiplicacion") {
        resultado = numero1 * numero2;
    } else if (operacion === "division") {
        resultado = numero1 / numero2;
    } else if (operacion === "modulo") {
        resultado = numero1 % numero2;
    } else {
        alert("Operación no válida");
        return;
    }

    alert("El resultado es: " + resultado);
}