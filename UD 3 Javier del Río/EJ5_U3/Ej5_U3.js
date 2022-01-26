function operations() {
    var n = document.getElementById("number").value;
    const t = Number.parseInt(n);
    document.write('El número ' + n + ' exponencial ' + Math.exp(t) + '</br>');
    document.write('El número ' + n + ' con 4 decimales es: ' + Number.parseFloat(n).toFixed(4) + '</br>');
    document.write('El número ' + n + ' en binario es: ' + t.toString(2) + '</br>');
    document.write('El número ' + n + ' en octal es: ' + t.toString(8) + '</br>');
    document.write('El número ' + n + ' en hexadecimal es: 0x' + t.toString(16) + '</br>');

}