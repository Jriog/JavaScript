window.onload = iniciar;

function getInput(inputId) {
    document.getElementById(inputId).value;
};


function validarInput(inputId) {
    let inputElement = document.getElementById(inputId);

    if (!inputElement.value.length) {
        return false;
    }

    if (inputId === "nombre") {
        if (inputElement.value.length < 2 || inputElement.value.length > 15) {
            return false;
        } else {
            return true;
        }
    }

    if (inputId === "email-tlf") {
        let reg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
            inputElement.value.match(reg) ||
            (!isNaN(Number(inputElement.value)) && inputElement.value.length === 9)
        ) {
            return true;
        } else {
            return false;
        }
    }

    if (inputId === "contraseña") {
        if (inputElement.value.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    if (inputId === "confirmar-contraseña") {
        if (inputElement.value !== getInput("contraseña")) {
            return false;
        } else {
            return true;
        }
    }
};

function validarForm(e) {
    if (
        validarInput("nombre") &&
        validarInput("email-tlf") &&
        validarInput("contraseña") &&
        validarInput("confirmar-contraseña")
    ) {
        localStorage.setItem("nombre", getInput("nombre"));
        localStorage.setItem("emailtlf", getInput("email-tlf"));
        return true;
    } else {
        e.preventDefault();
        return false;
    }
};


function mostarlocalinputs() {
    if (localStorage.getItem("nombre")) {
        document.getElementById("nombre").value = localStorage.getItem("nombre");
    }
    if (localStorage.getItem("emailtlf")) {
        document.getElementById("email-tlf").value = localStorage.getItem("emailtlf");
    }
    return;
}

function iniciar() {
    mostarlocalinputs();
    document
        .getElementById("submit-button")
        .addEventListener("click", validarForm, false);
}