function ventana() {
    let ventana = window.open(["https://developer.mozilla.org/es/docs/Web/API/Window/open"], ["Ventana no redimensionable"], ["1000 x 1000, resizable = false"]);

    ventana.document.write("<br> <h3>Ejemplo de Ventana Nueva</h3>");
    ventana.document.write("<br> URL: " + window.location)
    ventana.document.write("<br> El protocolo es: " + location.protocol)
    ventana.document.write("<br> Nombre y versión del navegador: " + navigator.userAgent);
    ventana.document.write("<br> Java Enabled: " + navigator.javaEnabled());
    ventana.document.write("<br> <iframe id= inlineFrameExample title = Inline Frame Example width = 800 height = 600 src = https://es.wikipedia.org/wiki/Wikipedia:Portada/> </iframe > ");

    document.write("<h1>TAREA DWEC03</h1>");
    document.write("<form onsubmit = operations()>");
    document.write("<br><label for = numero> Introduce tu nombre y apellidos: </label>");
    document.write("<input id=name type=name/> <br>");
    document.write("<br> <label for = numero> Introduce el día de tu nacimiento: </label>");
    document.write("<input id=Bday type=Bday/> <br>");
    document.write("<br> <label for = numero> Introduce el mes de tu nacimiento: </label>");
    document.write("<input id=BM type=BM/> <br>");
    document.write("<br> <label for = numero> Introduce el año de tu nacimiento: </label>");
    document.write("<input id=BY type=BY/> <br>");
    document.write("<br><input type= submit value = Mostrar operaciones/><br>");
    document.write("</form>");
}

function operations() {

    this.event.preventDefault();

    let name = document.getElementById("name").value;
    let Bday = document.getElementById("Bday").value;
    let BM = document.getElementById("BM").value;
    let BY = document.getElementById("BY").value;

    document.write("<br> Buenos dias: " + name.split(' ')[0]);
    document.write("<br> El nombre es: " + name);
    document.write("<br> La primera letra A está en la posición: " + name.indexOf("a"));
    document.write("<br> La última letra A está en la posición: " + name.lastIndexOf("a"));
    document.write("<br> Tu nombre menos las 3 primeras letras es: " + name.substring(3, -1));
    document.write("<br> Tu nombre en mayúsculas es: " + name.toUpperCase());
    document.write("<br> Tu edad es: " + calcularEdad(Bday, BM, BY) + " años");
    document.write("<br> Naciste un feliz: " + Bday + " del " + BM + " del año " + BY);
    document.write("<br> El coseno de 180 es: " + Math.cos(180).toFixed(2));
    document.write("<br> El número mayor de (34, 67, 23, 75, 35, 19) es: " + Math.max(34, 67, 23, 75, 35, 19));
    document.write("<br> Ejemplo de número al azar: " + aleatorio(0, 100000000000));

}

function calcularEdad(Bday, BM, BY) {
    fecha_hoy = new Date();
    año_actual = fecha_hoy.getFullYear();
    mes_actual = fecha_hoy.getMonth();
    dia_actual = fecha_hoy.getDate();
    edad = año_actual - BY;

    if (mes_actual < (BM - 1)) {
        edad--;
    }
    if (((BM - 1) == mes_actual) && (dia_actual < Bday)) {
        edad--;
    }
    return edad;
}

function aleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}