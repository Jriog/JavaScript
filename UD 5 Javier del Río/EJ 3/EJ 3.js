function mostrardnis() {
    this.event.preventDefault();
    var dni = document.getElementById("dni").value;
    let arraydeletra = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var letra = arraydeletra[dni % 23];
    document.getElementById("campoletra").innerHTML = letra;

}