class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}
let clientes = new Array();
clientes[0] = new Cliente("Laura", "Santander", 50);
clientes[1] = new Cliente("Álvaro", "Castro", 50);
clientes[2] = new Cliente("Igor", "Castro", 60);
clientes[3] = new Cliente("Ivan", "Santander", 40);
clientes[4] = new Cliente("Mónica", "Zamora", 30);
clientes[5] = new Cliente("Javi", "Bilbao", 30);
clientes[6] = new Cliente("David", "Bilbao", 50);

function mostrarallclientes() {
    let listado = "<table> <tr><th>Nombre </th><th>Localidad </th><th>Cuota </th> </tr>";

    for (let i = 0; i < clientes.length; i++) {

        listado += "<tr><td>" + clientes[i].nombre + "</td><td>" + clientes[i].localidad + "</td><td>" + clientes[i].cuota + " </td></tr>";
    }
    listado += "</table>";
    document.write(listado);
}

function showprovincia() {
    this.event.preventDefault();
    let listado = "<table> <tr><th>Nombre </th><th>Localidad </th><th>Cuota </th> </tr>";
    let provincia = document.getElementById("provincia").value;

    for (let i = 0; i < clientes.length; i++) {
        if (provincia == clientes[i].localidad) {
            listado += "<tr><td>" + clientes[i].nombre + "</td><td>" + clientes[i].localidad + "</td><td>" + clientes[i].cuota + " </td></tr>";
        }

    }
    listado += "</table>";
    document.write(listado);
}

function showcuota() {
    this.event.preventDefault();
    let listado = "<table> <tr><th>Nombre </th><th>Localidad </th><th>Cuota </th> </tr>";
    let cuota = document.getElementById("cuota").value;

    for (let i = 0; i < clientes.length; i++) {
        if (cuota != clientes[i].cuota) {
            listado += "<tr><td>" + clientes[i].nombre + "</td><td>" + clientes[i].localidad + "</td><td>" + clientes[i].cuota + " </td></tr>";
        }

    }
    listado += "</table>";
    document.write(listado);
}