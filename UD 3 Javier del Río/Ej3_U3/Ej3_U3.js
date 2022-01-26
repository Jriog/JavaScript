function operations() {
    var number = document.getElementById("number").value
    if (number == 1) {
        var x = prompt('dime la base');
        var y = prompt('dime la potencia');

        var result = Math.pow(x, y);
        document.write('El resultado de la potencia es: ' + result)
    } else if (number == 1) {
        var x = prompt('dime un número > 0');

        var result = Math.pow(x, 0.5);
        document.write('El resultado de la raíz es: ' + result)
    } else if (number == 3) {
        var x = prompt('dime un decimal');

        var result = Math.round(x);
        document.write('El resultado del redondeo es: ' + result)
    } else if (number == 4) {
        var x = prompt('dime un águnlo');

        var result = Math.atan(x);
        document.write('El resultado de la tangente es: ' + result + '</br>');
        var result1 = Math.sin(x);
        document.write('El resultado del seno es: ' + result1 + '</br>');
        var result2 = Math.atan(x);
        document.write('El resultado del coseno es: ' + result2 + '</br>');
    } else {
        document.write('Algo falla');
    }
}