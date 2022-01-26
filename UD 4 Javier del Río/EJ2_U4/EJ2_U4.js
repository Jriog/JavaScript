function mostrardnis() {

    var letra = document.getElementById("letra").value;
    let arraydeletra = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let dnis = [];
    for (let i = 1; i <= 999; i++) {
        if (arraydeletra[i % 23] == letra) {
            dnis.push(i + arraydeletra[i % 23]);
        }
    }
    document.write(dnis);
}