function operation() {

    var cadena = document.getElementById("cadena").value;
    arrayDeCadenas2 = cadena;
    arrayDeCadenas = cadena.split(" ");
    document.write('Las cadenas son: <br>');
    for (var i = 0; i < arrayDeCadenas.length; i++) {
        document.write(arrayDeCadenas[i] + '<br>');
    }
    document.write('</br>');
    for (var i = arrayDeCadenas2.indexOf("@") + 1; i <= arrayDeCadenas2.indexOf(" ", arrayDeCadenas2.indexOf("@")); i++) {
        document.write(arrayDeCadenas2[i]);
    }
}