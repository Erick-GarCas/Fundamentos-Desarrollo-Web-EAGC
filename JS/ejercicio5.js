function serie() {
    let bandera = 0;
    while (bandera == 0) {
        let numero = parseInt(prompt("Ingrese un número:"));
        if (numero == 0) {
            bandera = 1; //bandera encendida termina
            document.write("Fin de la serie");
        } else {
            bandera = 0; //bandera apagada sigue
        }
    }
}