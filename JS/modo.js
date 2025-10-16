function modooscuro() {
    let modoOscuro = false;

    if (!modoOscuro) {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "";
        modoOscuro = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modoOscuro = false;
    }
}