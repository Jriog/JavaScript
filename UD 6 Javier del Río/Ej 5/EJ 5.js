function crearparrafo() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");

    parrafo = document.createElement("p");

    textarea = document.getElementById("areatexto").value;

    if (textarea) {
        texto = document.createTextNode(textarea);
        parrafo.appendChild(texto);
    } else {
        alert("Area de texto vacía");
    }
    parrafo.appendChild(br);
    document.body.appendChild(parrafo);


}