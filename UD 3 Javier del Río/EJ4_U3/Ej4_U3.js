function operations() {
    var radio = document.getElementById("number").value
    document.write('El valor del radio del círculo es: ' + radio + ' cm' + '</br>');

    diametro = 2 * radio;
    document.write('El valor del diámetro del círculo es: ' + diametro + ' cm' + '</br>');

    perimetro = Math.round(2 * Math.PI * radio);
    document.write('El valor del perímetro del círculo es: ' + perimetro + ' cm' + '</br>');

    area = Math.round(Math.PI * Math.pow(radio, 2));
    document.write('El valor del área del círculo es: ' + area + ' cm2 </br>');

    area2 = Math.round(4 * Math.PI * Math.pow(radio, 2));
    document.write('El valor del área de la esfera es: ' + area2 + ' cm2' + '</br>');

    volumen = Math.round((4 / 3) * Math.PI * Math.pow(radio, 3));
    document.write('El valor del volumen de la esfera es: ' + volumen + ' cm3' + '</br>');

}