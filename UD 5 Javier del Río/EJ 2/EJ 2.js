mostrarbotones();

function mostrarbotones() {
    document.write('<button onclick="base()"> Comenzar saludos </button>');
    document.write('<button onclick="pararsaludos()"> Parar saludos </button>');
}

var interval;

function base() {

    interval = setInterval(muestrasaludos(), 3000);

}

function muestrasaludos() {
    alert("hola!");
}

function pararsaludos() {
    clearInterval(interval);
    alert("Saludos parados");
}