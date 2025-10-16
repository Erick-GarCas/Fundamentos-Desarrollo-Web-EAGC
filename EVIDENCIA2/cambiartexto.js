function cambiarTamano() {
    let p, tamano;
    p = document.getElementById('parrafo');
    tamano = p.style.fontSize;
    if (tamano === '' || tamano === '16px') {
        p.style.fontSize = '24px';
    } else {
        p.style.fontSize = '16px';
    }
}