function operations() {
    var name = document.getElementById("name").value;
    var ap1 = document.getElementById("ap1").value;
    var ap2 = document.getElementById("ap2").value;

    const allname = name + " " + ap1 + " " + ap2;
    const completename = name + ap1.replace(/ /g, "").trim() + ap2.replace(/ /g, "").trim();

    document.write('El nombre es: ' + name + ' su tamaño es de: ' + name.length + ' caracteres, en minúsculas sería: ' + name.toLowerCase() +
        ' y en mayúsculas: ' + name.toUpperCase() + ' <br>');

    document.write('El primer apellido es: ' + ap1 + ' su tamaño es de: ' + ap1.length + ' caracteres, en minúsculas sería: ' +
        ap1.toLowerCase() + ' y en mayúsculas: ' + ap1.toUpperCase() + '<br > ');

    document.write('El segundo apellido es: ' + ' su tamaño es de: ' + ap2.length + ' caracteres, en minúsculas sería: ' +
        ap2.toLowerCase() + ' y en mayúsculas: ' + ap2.toUpperCase() + '<br > ');

    document.write('El nombre completo es: ' + allname + ' su tamaño es de: ' + completename.length + ' caracteres, en minúsculas sería: ' +
        allname.toLowerCase() + ' y en mayúsculas: ' + allname.toUpperCase() + '<br>')

    document.write('La primnera propuesta de nombre es: ' + name.substr(0, 1).toLowerCase() + ap1.replace(/ /g, "").toLowerCase().trim() + ap2.substr(0, 1).toLowerCase() + '<br>');

    document.write('La segunda propuesta de nombre es: ' + name.substr(0, 3).toLowerCase() + ap1.replace(/ /g, "").toLowerCase().trim() + ap2.replace(/ /g, "").toLowerCase() + '<br>');

    arrayDeCadenas = allname.split(" ");
    document.write('Las cadenas son: ');
    for (var i = 0; i < arrayDeCadenas.length; i++) {
        document.write('<br>' + arrayDeCadenas[i]);
    }
}