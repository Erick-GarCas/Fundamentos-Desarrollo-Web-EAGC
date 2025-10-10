function tabla() {
    const num = parseInt(document.getElementById("txtNumero").value, 10);
    let lista = "<ul>";

    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        lista += "<li>" + num + " x " + i + " = " + resultado + "</li>";
    }

    lista += "</ul>";
    document.getElementById("resultado").innerHTML = lista;
}