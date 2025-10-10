function serie() {
    let bandera = 0;
    let sumaPar = 0;
    let sumaImpar = 0;
    while (bandera == 0) {
        let numero = parseInt(prompt("Ingrese un número:"));

        if (numero % 2 == 0) {
            sumaPar += numero;
        } else {
            //es impar
            sumaImpar += numero;
        }

        if (numero == 0) {
            bandera = 1; //bandera encendida termina
        } else {
            bandera = 0; //bandera apagada sigue
        }
    }
    document.write("La suma de los números pares es: " + sumaPar + "<br>" + ' Y la suma de Impares es de: ' + sumaImpar + "<br>");
}