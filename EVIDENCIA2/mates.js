// Demostración de funciones comunes de Math, Number, Date y String en JavaScript.
// Se escriben resultados directamente en el documento usando document.write().

// Math.abs: devuelve el valor absoluto (positivo) de un número.
document.write("Función Math.abs() del número -10 es <mark>" + Math.abs(-10) + "</mark>, que devuelve el valor absoluto (positivo) del número." + "<br>");

// Math.ceil: redondea hacia arriba al entero más próximo.
document.write("<br>" + "Función Math.ceil() del número 3.1416 es <mark>" + Math.ceil(3.1416) + "</mark>, que realiza un redondeo hacia arriba." + "<br>");

// Math.random: devuelve un número pseudoaleatorio en [0, 1).
// toFixed(4) formatea el número con 4 decimales (como string).
document.write("<br>" + "Función Math.random() genera un número aleatorio: <mark>" + Math.random().toFixed(4) + "</mark>." + "<br>");

// Máximo y mínimo
// Math.max y Math.min devuelven el mayor y el menor de los argumentos.
document.write("<br>" + "Función Math.max() de (3, 7, -2, 10) es <mark>" + Math.max(3, 7, -2, 10) + "</mark>." + "<br>");
document.write("Función Math.min() de (3, 7, -2, 10) es <mark>" + Math.min(3, 7, -2, 10) + "</mark>." + "<br>");

// Verificar NaN
// parseFloat('abc') devuelve NaN (Not-a-Number). Number.isNaN verifica estrictamente NaN.
let valorNaN = parseFloat('abc');
document.write("<br>" + "Number.isNaN() sobre parseFloat('abc') es <mark>" + Number.isNaN(valorNaN) + "</mark>." + "<br>");

// toFixed
// toFixed(2) redondea y formatea un número a 2 decimales, devolviendo un string.
let pi = 3.1416;
document.write("<br>" + "toFixed(2) sobre 3.1416 es <mark>" + pi.toFixed(2) + "</mark>." + "<br>");

// Fecha y hora
// new Date() obtiene la fecha/hora actual; toLocaleString formatea según la configuración regional.
let ahora = new Date();
document.write("<br>" + "Fecha y hora actuales con Date(): <mark>" + ahora.toLocaleString() + "</mark>." + "<br>");

// Longitud de cadena
// .length devuelve la cantidad de caracteres de una cadena.
let texto = "JavaScript";
document.write("<br>" + "Longitud de la cadena '" + texto + "' es <mark>" + texto.length + "</mark>." + "<br>");

// Mayúsculas y minúsculas
// toUpperCase y toLowerCase convierten todo el texto a mayúsculas/minúsculas.
document.write("<br>" + "'" + texto + "' en mayúsculas: <mark>" + texto.toUpperCase() + "</mark>." + "<br>");
document.write("'" + texto + "' en minúsculas: <mark>" + texto.toLowerCase() + "</mark>." + "<br>");

// Math.floor
// Math.floor redondea hacia abajo al entero inferior.
document.write("<br>" + "Función Math.floor() del número 7.99 es <mark>" + Math.floor(7.99) + "</mark>, que devuelve el entero inferior." + "<br>");

/*
	Nota sobre el operador lógico OR (||) como fallback (aplicable en casos análogos):
	- Si en lugar de constantes obtuviéramos valores del DOM (por ejemplo, un input de texto),
		podríamos querer usar un valor por defecto cuando el input esté vacío (''):

				const valor = document.getElementById('miInput').value || 'valor por defecto';

		El operador || devuelve el primer valor "truthy"; si .value es '' (falsy), usa el valor por defecto.
	- Para números provenientes de texto, conviene convertir primero y luego aplicar fallback:

				const n = Number(document.getElementById('num').value);
				const nSeguro = n || 0; // usa 0 si n resulta 0/NaN/'' (cuidado si 0 es válido y no quieres sustituirlo)

		Si 0 es un valor válido que NO deseas sustituir, es preferible el operador de fusión nula (??):

				const nSeguro = (Number(document.getElementById('num').value)) ?? 0; // solo reemplaza null/undefined
*/