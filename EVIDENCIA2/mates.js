document.write("Función Math.abs() del número -10 es <mark>" + Math.abs(-10) + "</mark>, que devuelve el valor absoluto (positivo) del número." + "<br>");
document.write("<br>" + "Función Math.ceil() del número 3.1416 es <mark>" + Math.ceil(3.1416) + "</mark>, que realiza un redondeo hacia arriba." + "<br>");
document.write("<br>" + "Función Math.random() genera un número aleatorio: <mark>" + Math.random().toFixed(4) + "</mark>." + "<br>");

// Máximo y mínimo
document.write("<br>" + "Función Math.max() de (3, 7, -2, 10) es <mark>" + Math.max(3, 7, -2, 10) + "</mark>." + "<br>");
document.write("Función Math.min() de (3, 7, -2, 10) es <mark>" + Math.min(3, 7, -2, 10) + "</mark>." + "<br>");

// Verificar NaN
let valorNaN = parseFloat('abc');
document.write("<br>" + "Number.isNaN() sobre parseFloat('abc') es <mark>" + Number.isNaN(valorNaN) + "</mark>." + "<br>");

// toFixed
let pi = 3.1416;
document.write("<br>" + "toFixed(2) sobre 3.1416 es <mark>" + pi.toFixed(2) + "</mark>." + "<br>");

// Fecha y hora
let ahora = new Date();
document.write("<br>" + "Fecha y hora actuales con Date(): <mark>" + ahora.toLocaleString() + "</mark>." + "<br>");

// Longitud de cadena
let texto = "JavaScript";
document.write("<br>" + "Longitud de la cadena '" + texto + "' es <mark>" + texto.length + "</mark>." + "<br>");

// Mayúsculas y minúsculas
document.write("<br>" + "'" + texto + "' en mayúsculas: <mark>" + texto.toUpperCase() + "</mark>." + "<br>");
document.write("'" + texto + "' en minúsculas: <mark>" + texto.toLowerCase() + "</mark>." + "<br>");

// Math.floor
document.write("<br>" + "Función Math.floor() del número 7.99 es <mark>" + Math.floor(7.99) + "</mark>, que devuelve el entero inferior." + "<br>");