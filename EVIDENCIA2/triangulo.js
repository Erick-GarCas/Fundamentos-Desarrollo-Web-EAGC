function triangulo() {
    let lado1, lado2, lado3, tipo; // seguir el patrón de variables como en otros ejercicios

    // Obtener valores del formulario y convertir a número con decimales
    lado1 = parseFloat(document.getElementById('lado1').value);
    lado2 = parseFloat(document.getElementById('lado2').value);
    lado3 = parseFloat(document.getElementById('lado3').value);

    // Validar que los lados sean números positivos
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Los lados deben ser mayores que cero.');
        return;
    }

    // Verificar desigualdad del triángulo (existencia)
    if (!(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1)) {
        alert('Los valores no forman un triángulo válido.');
        return;
    }

    // Determinar el tipo según sus lados
    if (lado1 === lado2 && lado2 === lado3) {
        tipo = 'Equilátero'; // todos iguales
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tipo = 'Isósceles'; // dos iguales
    } else {
        tipo = 'Escaleno'; // todos diferentes
    }

    // Mensajes en consola y alerta, siguiendo el estilo del resto de ejercicios
    alert('El triángulo es: ' + tipo);
}