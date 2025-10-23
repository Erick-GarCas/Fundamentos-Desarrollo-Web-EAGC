function triangulo() {
    let lado1, lado2, lado3, tipo; // variables al estilo del resto

    // Obtener valores del formulario y convertir a número con decimales.
    lado1 = parseFloat(document.getElementById('lado1').value);
    lado2 = parseFloat(document.getElementById('lado2').value);
    lado3 = parseFloat(document.getElementById('lado3').value);

    // Validar que los lados sean positivos. Usamos OR (||): si cualquiera es <= 0, no es válido.
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Los lados deben ser mayores que cero.');
        return;
    }

    // Verificar la desigualdad del triángulo: cada lado debe ser menor a la suma de los otros dos.
    // Usamos AND (&&) para exigir que se cumplan simultáneamente las tres condiciones.
    // Se niega (!) el conjunto para disparar el mensaje si alguna falla.
    if (!(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1)) {
        alert('Los valores no forman un triángulo válido.');
        return;
    }

    // Determinar el tipo según sus lados.
    if (lado1 === lado2 && lado2 === lado3) {
        tipo = 'Equilátero'; // todos iguales
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        // OR (||): basta con que dos lados sean iguales para considerarlo isósceles.
        tipo = 'Isósceles'; // dos iguales
    } else {
        tipo = 'Escaleno'; // todos diferentes
    }

    // Mostrar el resultado.
    alert('El triángulo es: ' + tipo);
}

/*
  Notas:
  - En validaciones con OR (||) se dispara el error si cualquiera de las condiciones es cierta.
  - En verificaciones conjuntas con AND (&&) se requiere que todas sean verdaderas.
  - Para entradas vacías o no numéricas, parseFloat devuelve NaN; se podría validar con Number.isNaN.
*/