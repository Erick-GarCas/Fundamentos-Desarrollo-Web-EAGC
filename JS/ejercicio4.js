function serie() {
    let i = 100;
    let texto;
    while (i != 0) {
        texto += i + "<br>";
        i--; //i=i-1
    }
    document.getElementById('area').innerHTML = texto;
}