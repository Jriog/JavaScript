let jugador = {
    fuerza: 1
};

function addFuerza() {
    this.event.preventDefault();
    jugador.fuerza++;
    alert("Fuerza incrementada en 1");
}

function showFuerza() {
    this.event.preventDefault();
    alert("Tu fuerza es " + jugador.fuerza);

}