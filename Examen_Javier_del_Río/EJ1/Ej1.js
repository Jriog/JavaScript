function validarnombre() {
    let nombre = document.getElementById("nombre").value;
    let regnombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (regnombre.test(nombre) || (!isNaN(Number(nombre.value)) && 2 <= nombre.value.length <= 20)) {
        return true;
    } else {
        return false;
    }

}

function validarCorreo() {
    let correo = document.getElementById("correo").value;
    let regcorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regcorreo.test(correo)) {
        return true;
    } else {
        return false;
    }
}

function validarEdad() {
    let edad = document.getElementById("edad").value;
    if (0 <= edad <= 150) {
        return true;
    } else {
        return false;
    }
}

function validarFormulario() {
    this.event.preventDefault();
    if (validarnombre() == true && (validarCorreo() == true) && (validarEdad() == true)) {
        let ventana = window.open(["https://developer.mozilla.org/es/docs/Web/API/Window/open"], ["Ventana no redimensionable"], ["1000 x 1000, resizable = false"]);
        ventana.document.write("<br> <h3>Validación Correcta!!</h3>");
    } else if (validarnombre() == false) {
        document.getElementById("nombre").classList.add("mal");
        document.getElementById("nombre").focus();
        document.getElementById("textoañadido1").innerHTML = "El Nombre no puede ser vacío";
        document.getElementById("nombremal").innerHTML = "El nombre ha de contener entre 2 y 20 caracteres";

    } else if (validarEdad() == false) {
        document.getElementById("edad").classList.add("mal");
        document.getElementById("edad").focus();
        document.getElementById("textoañadido2").innerHTML = "La edad no puede ser vacía";
        document.getElementById("edadmal").innerHTML = "La edad  ha de estar entre 0 y 150 años";
    } else if (validarCorreo() == false) {
        document.getElementById("correo").classList.add("mal");
        document.getElementById("correo").focus();
        document.getElementById("textoañadido3").innerHTML = "El correo no puede ser vacío";
        document.getElementById("emailmal").innerHTML = "El correo no tiene el formato correcto";
    }

}