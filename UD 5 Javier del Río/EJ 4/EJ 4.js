let numeros = [36, 45, 33, 26, 17];
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("titulo").addEventListener("mouseover", ordenaparicion);
    document.getElementById("titulo").addEventListener("mouseout", ordenmenormayor);
}

function ordenaparicion() {
    document.getElementById("titulo").innerHTML = "Ver orden de aparición";
    document.getElementById("campo").innerHTML = numeros;
}

function ordenmenormayor() {
    let numeros2 = numeros.slice();
    numeros2.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("titulo").innerHTML = "Orden de menor a mayor";
    document.getElementById("campo").innerHTML = numeros2;


}