window.onload = iniciar;

let attemps = 0;

function setCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() * 2);
    let expiration = "expires = " + date.toUTCString();
    document.cookie = name + " = " + value; +
    ";" + expiration + ";path=/";
};

function esperarEnvio() {
    attemps++;
    setCookie("intentos", attemps);
    document.getElementById("intentos").innerHTML = `Attempts: ${attemps}`;
};

function validarInput(inputId, errorId) {
    let inputElement = document.getElementById(inputId);

    if (!inputElement.value.length) {
        document.getElementById(
            `${errorId}`
        ).innerHTML = `${inputId} campo requerido!`;
        return false;
    }

    if (inputId === "nombre") {
        if (inputElement.value.length < 2 || inputElement.value.length > 15) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputId} el campo debe tener entre 2 y 15 caracteres`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "apellidos") {
        if (inputElement.value.length < 2) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputId} mínimo 2 caracteres`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "edad") {
        if (isNaN(Number(inputElement.value)) || Number(inputElement.value) < 0 || Number(inputElement.value) > 105) {
            document.getElementById(`${errorId}`).innerHTML = `${inputId} el campo debe ser un número entre 0 y 105`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "telefono") {
        if (isNaN(Number(inputElement.value)) || inputElement.value.length !== 9) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputId} el campo debe tener 9 digitos`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "provincia") {
        if (inputElement.value === "0") {
            document.getElementById(`${errorId}`).innerHTML = `${inputId} campo obligatorio`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "fecha") {
        let reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(`${errorId}`).innerHTML = `${inputId} debe tener el formato: "17/11/2021"`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "hora") {
        let reg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm;
        if (!inputElement.value.match(reg)) {
            document.getElementById(`${errorId}`).innerHTML = `${inputId} debe tener el formato: "13:02"`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "email") {
        let reg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(`${errorId}`).innerHTML = `${inputElement.value} no es un email`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "nif") {
        let reg = /(^([0-9]{8,8}\-[A-Z])|^)$/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(`${errorId}`).innerHTML = `${inputElement.value} no es un DNI`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }
};

function validarCamposForm() {
    const compruebaNombre = validarInput("nombre", "name-error");
    const compruebaApellido = validarInput("apellidos", "apellido-error");
    const compruebaEdad = validarInput("edad", "edad-error");
    const comrpuebaDNI = validarInput("dni", "dni-error");
    const compruebaEmail = validarInput("email", "email-error");
    const compruebaCiudad = validarInput("provincia", "ciudad-error");
    const compruebaFecha = validarInput("fecha", "fecha-error");
    const compruebatlf = validarInput("telefono", "tlf-error");
    const compruebahora = validarInput("hora", "hora-error");

    if (compruebaNombre && compruebaApellido && compruebaEdad && comrpuebaDNI && compruebaEmail &&
        compruebaCiudad && compruebaFecha && compruebatlf && compruebahora) {

        return true;

    } else {
        return false;
    }
};


function validarFormulario(e) {
    esperarEnvio();
    if (
        validarCamposForm() &&
        confirm("Pulsa aceptar si deseas enviar el formulario")
    ) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
};

function ponerEnMayusculas(inputId) {
    let inputValue = document.getElementById(inputId).value;
    document.getElementById(inputId).value = inputValue.toUpperCase();
    return inputValue;
};

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validarFormulario, false);
}