window.onload = initialize;

function validarInput(inputId, errorId) {
    let inputElement = document.getElementById(inputId);

    if (!inputElement.value.length) {
        document.getElementById(`${errorId}`).innerHTML = `${inputId} es un campo obligatorio!`;
        return false;
    }
    if (inputId === "Ncuenta") {
        let reg = /[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputElement.value} no es un número de cuenta válido`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = ``;
            return true;
        }
    }

    if (inputId === "empleo") {
        let reg = /[A-Z]{2}[^a-zA-Z]{1}[0-9]{4}/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputId} debe ser del formato de: "WW$1234"`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = '';
            return true;
        }
    }
    if (inputId === "fecha") {
        let reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(`${errorId}`).innerHTML = `${inputId} debe ser del formato de: "17/11/2021"`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = '';
            return true;
        }
    }


    if (inputId === "direccion") {
        let reg = /[A-Z]{2-3}_[a-z]*:[0-9]{4}/;
        if (!inputElement.value.match(reg)) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputId} debe ser del formato de: "NM_Madrid:1234"`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = '';
            return true;
        }
    }

    if (inputId === "peso") {
        if (
            isNaN(Number(inputElement.value)) ||
            Number(inputElement.value) < 100 ||
            Number(inputElement.value) > 5000
        ) {
            document.getElementById(
                `${errorId}`
            ).innerHTML = `${inputId} debe ser un número entre: 100 y 5000`;
            return false;
        } else {
            document.getElementById(`${errorId}`).innerHTML = '';
            return true;
        }
    }


};

const validarCampos = () => {
    if (
        validarInput("fecha", "fecha-error") &&
        validarInput("empleo", "empleo-error") &&
        validarInput("direccion", "direccion-error") &&
        validarInput("peso", "peso-error") &&
        validarInput("Ncuenta", "Ncuenta-error")
    ) {
        return true;
    } else {
        return false;
    }
};
//--------------------------------------------------

function validarFormulario(e) {
    if (validarCampos()) {
        document.getElementById(`intentos`).innerHTML = `OK`;
        return true;
    } else {
        document.getElementById(`errores`).innerHTML = `ERROR`;
        e.preventDefault();
        return false;
    }
}

function initialize() {
    document
        .getElementById("enviar")
        .addEventListener("click", validarFormulario, false);
}