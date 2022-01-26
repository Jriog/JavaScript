function muestraInformacion(elEvento) {
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;
    var t = "El ratón está en la posición: <br><br> Eje X: " + coordenadaX + " <br> Eje Y: " + coordenadaY
    document.getElementById("demo").innerHTML = t;
}
document.onmousemove = muestraInformacion;