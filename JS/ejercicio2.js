function eleccionOperacion() {
    let numero1, numero2, resultado; /*obtener valores y asignar a las variables*/
    numero1 = parseFloat(document.getElementById("txtNumero1").value);
    numero2 = parseFloat(document.getElementById("txtNumero2").value);
    let operacion = document.getElementById("operacion").value;
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            resultado = numero1 / numero2;
            break;
        case "modulo":
            resultado = numero1 % numero2;
            break;
        default:
            alert("Operación no válida");
    }
    alert("El resultado es: " + resultado);
}