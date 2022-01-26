let paises = [" Albania", " Alemania", " Andorra", " Austria", " Bélgica",
    " Bielorrusia", " Bosnia", " Bulgaria", " Ciudad del Vaticano",
    " Croacia", " Dinamarca", " Eslovaquia", " Eslovenia", " España", " Estonia",
    " Finlandia", " Francia", " Georgia", " Gibraltar", " Grecia",
    " Hungría", "Irlanda", " Islandia", " Italia", " KosovoNota",
    " Letonia", "Liechtenstein", " Lituania", " Luxemburgo",
    " Macedonia del Norte", " Malta", " Moldavia", " Noruega", " Países Bajos",
    " Polonia", " Portugal", " Reino Unido", " Escocia",
    " Gales", " Inglaterra", " Irlanda del Norte", " República Checa",
    " Rumania", " Rusia", " San Marino", " Serbia",
    " Suecia", " Suiza", " Ucrania "
];

function numeropaises(paises) {
    this.event.preventDefault();
    document.write("El número de países es: " + paises.length);
}

function ordenpaises(paises) {
    this.event.preventDefault();
    document.write("<button onclick='muestrapaises(paises)'>Mostar países por orden</button> </br>");
    document.write("<br><button onclick='muestrapaisesinv(paises)'>Mostar países por orden inverso </button> </br>");
    document.write("<br><button onclick='muestrapaisesalf(paises)'>Mostar países por orden alfabético</button> </br>");
}

function muestrapaises(paises) {
    this.event.preventDefault();
    document.write("<br>" +
        paises + "<br>");
}

function muestrapaisesinv(paises) {
    this.event.preventDefault();
    paises.reverse();
    document.write("<br>" + paises + "<br>");
}

function muestrapaisesalf(paises) {
    this.event.preventDefault();
    paises.sort();
    document.write("<br>" + paises + "<br>");
}

function addpais(paises) {
    this.event.preventDefault();
    document.write("<form onsubmit = addpaisinicio(paises)>");
    document.write("<br><label> Introduce el país que quieras añadir al principio: </label>");
    document.write("<input id=paisinicio type=name/> <br>");
    document.write("<br><input type= submit value = Añadir><br>");
    document.write("</form>");
    document.write("<form onsubmit = addpaisfinal(paises)>");
    document.write("<br><label> Introduce el país que quieras añadir al final: </label>");
    document.write("<input id=paisfinal type=name> <br>");
    document.write("<br><input type= submit value = Añadir><br>");
    document.write("</form>");
}

function addpaisinicio(paises) {
    this.event.preventDefault();
    let pais = document.getElementById("paisinicio").value;
    paises.unshift(pais);
    document.write("<br>" + paises + "<br>");

}

function addpaisfinal(paises) {
    this.event.preventDefault();
    let pais = document.getElementById("paisfinal").value;
    paises.push(pais);
    document.write("<br>" + paises + "<br>");
}

function deletepais(paises) {
    this.event.preventDefault();
    document.write("<button onclick='muestrapaises(paises)'>Mostar países</button> </br>");
    document.write("<br><button onclick='deletepaisinicio(paises)'>Eliminar el primer país </button> </br>");
    document.write("<br><button onclick='deletepaisfinal(paises)'>Eliminar el último país </button> </br>");
}

function deletepaisinicio(paises) {
    this.event.preventDefault();
    document.write("<br> Estos son los países que hay antes de eliminar: " + paises + "<br>");
    document.write("<br> He elimindo el siguiente país:" + paises.shift() + "<br> El resto son:" + paises + "<br>");

}

function deletepaisfinal(paises) {
    this.event.preventDefault();
    document.write("<br> Estos son los países que hay antes de eliminar: " + paises + "<br>");
    document.write("<br> He elimindo el siguiente país:" + paises.pop() + "<br> El resto son:" + paises + "<br>");
}

function showpais(paises) {
    this.event.preventDefault();
    document.write("<form onsubmit = showpospais(paises)>");
    document.write("<br><label> Introduce la posición que quieras ver: </label>");
    document.write("<input id=position type=number/> <br>");
    document.write("<br><input type= submit value = Buscar><br>");
    document.write("</form>");
    document.write("<form onsubmit = showpaispos(paises)>");
    document.write("<br><label> Introduce el país que quieres encontrar: </label>");
    document.write("<input id=pais type=name/> <br>");
    document.write("<br><input type= submit value= Buscar><br>");
    document.write("</form>");
}

function showpospais(paises) {

    this.event.preventDefault();
    let posicion = document.getElementById("position").value;
    document.write("<br>" + paises[posicion - 1] + "<br>");

}

function showpaispos(paises) {
    this.event.preventDefault();
    let pais = " " + document.getElementById("pais").value;
    let newpais = paises.indexOf(pais);
    document.write("<br>" + newpais + "<br>");
}