function seleccion1(){
    var nombre = (document.getElementById('nombre').value);

    let seleccion = ["luisa", "maria", "carlota", "ana", "martina", "claudia"];
    nombre.toLowerCase();
    if (seleccion.indexOf(nombre) > 0) { //seleccion.includes(nombre)
        alert("Está en la selección")
    } else {
        alert("No está en la selección")
    }
}

function seleccion2(){
    var nombre = (document.getElementById('nombre').value);
    nombre.toLowerCase();

    if (nombre == "luisa") {
        alert("Está en la selección")
    } else if (nombre == "maria") {
        alert("Está en la selección")
    } else if (nombre == "carlota") {
        alert("Está en la selección")
    } else if (nombre == "ana") {
        alert("Está en la selección")
    } else if (nombre == "martina") {
        alert("Está en la selección")
    } else if (nombre == "claudia") {
        alert("Está en la selección")
    } else {
        alert("No está en la selección")
    }

}