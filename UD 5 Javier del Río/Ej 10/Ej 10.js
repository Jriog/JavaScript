window.onload = initialize;
let a;
let b;
class Client {
    constructor(dni, pasaporte, cumpleaños, securityKey) {
        this.dni = dni;
        this.pasaporte = pasaporte;
        this.cumpleaños = cumpleaños;
        this.recordar = false;
        this.securityKey = securityKey;
    }

    getDocumento(documento) {
        return this.documento === documento;
    }

    getCumpleaños(cumpleaños) {
        return this.cumpleaños === cumpleaños;
    }

    checkSecurityKey(securityKey) {
        return this.securityKey === securityKey;
    }

    setDocument(dni) {
        this.dni = dni;
    }

    setPasaporte(pasaporte) {
        this.pasaporte = pasaporte;
    }

    setCumpleaños(cumpleaños) {
        this.cumpleaños = cumpleaños;
    }

    setSecurityKey(securityKey) {
        this.securityKey = securityKey;
    }

    setRecordar(recordar) {
        this.recordar = recordar;
        if (recordar) {
            localStorage.setItem("recordar-ing", true);
            localStorage.setItem("dni-ing", this.dni);
            localStorage.setItem("cumpleaños-ing", this.cumpleaños);
            localStorage.setItem("security-key-ing", this.securityKey);
        } else {
            localStorage.removeItem("recordar-ing");
            localStorage.removeItem("dni-ing");
            localStorage.removeItem("cumpleaños-ing");
        }
    }
}

const client1 = new Client("12345678-X", "AA000000", "01/01/1991", "012345");
const client2 = new Client("87654321-Y", "BB000000", "02/02/1992", "987654");

let db = [client1, client2];

function getSeleccionado(radioName) {
    const rbs = document.querySelectorAll(`input[name=${radioName}]`);
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    return selectedValue;
};

function getCliente() {
    const radioValue = getSeleccionado("documento");
    let inputDNI = document.getElementById("dni-input");
    let inputFecha = document.getElementById("fecha-input");
    let foundClient;

    if (radioValue === "dni") {
        foundClient = db.find((client) => {
            return client.dni === inputDNI.value && client.cumpleaños === inputFecha.value;
        });
        localStorage.setItem("ingDni", foundClient.dni);
    } else if (radioValue === "pasaporte") {
        foundClient = db.find((client) => {
            return client.pasaporte === inputDNI.value &&
                client.cumpleaños === inputFecha.value;
        });
        localStorage.setItem("ingCumpleaños", foundClient.pasaporte);
    }

    if (foundClient) {
        guardarClienteLocalStorage(foundClient);
        if (document.getElementById('recordar').checked) {
            mostrarLocalstorageEnInputs();
        }
    }

    return foundClient;
};

function guardarClienteLocalStorage(client) {
    localStorage.setItem("ingCumpleaños", client.cumpleaños);
    localStorage.setItem("ingSecurityKey", client.securityKey);
}

function mostrarLocalstorageEnInputs() {
    if (localStorage.getItem("ingDni")) {
        document.getElementById("dni-input").value = localStorage.getItem("ingDni");
    }
    if (localStorage.getItem("ingCumpleaños")) {
        document.getElementById("dni-input").value = localStorage.getItem("ingCumpleaños");
    }
    if (localStorage.getItem("ingCumpleaños")) {
        document.getElementById("date-input").value = localStorage.getItem("ingCumpleaños");
    }

    return;
}

function validarFormulario(e) {
    const cliente = getCliente();
    if (cliente) {
        createSecurityKeyForm();
        return true;
    } else {
        e.preventDefault();
        alert("wrong credentials!");
        return false;
    }
};

function createSecurityKeyForm() {

    document.write("<form name='formulario2' id='formulario2'>");
    document.write("<p id='security-key-p'>Completa las posiciones que faltan de tu clave de seguridad:</p><br>")

    for (let i = 1; i <= 6; i++) {

        document.write(`<input name="input-${i}" type="password" id="input-${i}" maxlength="1"/>`);


    }

    document.write("<br>");

    var arraynumeros = numeroAleatorio();
    var arraynuminputs = numeroAleatorio2();
    console.log(arraynumeros);
    for (let i = 0; i < arraynumeros.length; i++) {
        a = arraynumeros[i];
        b = arraynuminputs[i];
        document.write(`<button id="button-${a}" onclick="rellenarinputs(${a,b})">${a}</button>`);

    }

    document.write("</form>");
}

function rellenarinputs(a, b) {

    alert(`A vale: ${a} B vale: ${b}`);

    //let input = document.getElementById(`input-${b}`);
    //input.value = a;

}

function numeroAleatorio() {
    let numberforkey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var i, j, k;
    for (i = numberforkey.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = numberforkey[i - 1];
        numberforkey[i - 1] = numberforkey[j];
        numberforkey[j] = k;
    }

    return numberforkey;
}

function numeroAleatorio2() {
    let numberforinput = [1, 2, 3, 4, 5, 6];
    var i, j, k;
    for (i = numberforinput.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = numberforinput[i - 1];
        numberforinput[i - 1] = numberforinput[j];
        numberforinput[j] = k;
    }

    return numberforinput;
}

function initialize() {
    document
        .getElementById("enviar")
        .addEventListener("click", validarFormulario, false);
}