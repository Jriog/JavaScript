function NIF() {

    //this.event.preventDefault();
    //digitos = prompt("Introduce el nif");

    var digitos = document.getElementById("nif").value;

    var resto = digitos % 23;

    let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

    document.write('La letra es: ' + letra[resto] + ' y tu NIF completo es: ' + digitos + letra[resto]);

}

function NIE() {

    //this.event.preventDefault();
    //let nie = prompt("Introduce el nie");

    var nie = document.getElementById("nie").value;

    var letra2 = nie.charAt(0);
    var Cnie;

    if (letra2.toUpperCase() == 'X') {
        Cnie = nie.replace(/X/i, 0);
    } else if (letra2.toUpperCase() == 'Y') {
        Cnie = nie.replace(/Y/i, 1);
    } else if (letra2.toUpperCase() == 'Z') {
        Cnie = nie.replace(/Z/i, 2);
    }

    resto = Cnie % 23;

    let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

    document.write('La letra es: ' + letra[resto] + ' y tu NIE completo es: ' + nie + letra[resto]);
}