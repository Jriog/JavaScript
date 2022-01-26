inicializar();
class Persona {
    constructor() {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    añadirPersona() {
        for (let j = 0; j < 3; j++)
            this.Persona[j] = "";

    }
    getNombre() {
        return this.nombre === nombre;
    }
    getEdad() {
        return this.edad === edad;
    }
    getCorreo() {
        return this.correo === correo;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
}

let personas = [];

function añadirPersona() {
    let persona1 = new Persona();
    persona1.nombre = document.getElementById("nombre").value;
    persona1.correo = document.getElementById("correo").value;
    persona1.edad = document.getElementById("edad").value;
    añadirPersonas(persona1);
    //mostrarPersona();

}

function añadirPersonas(persona1) {
    personas.push(persona1);
    personas.forEach(persona1 => {
        console.log(persona1);
    });

}

function mostrarPersona() {
    console.log(`Nombre = ${Persona.nombre}, 
        Correo = ${Persona.correo}, 
        Edad = ${Persona.edad}`);
}

function inicializar() {
    let usuario;
    if (localStorage.getItem("usuario") != "") {
        alert(`Bienvenido de nuevo: ${usuario}`)
    } else {
        usuario = window.prompt("Dime tu nombre : ", "");
        localStorage.setItem("usuario", usuario);
    }

}

function validarnombre() {

    let regnombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (regnombre.test(Persona.nombre) || (!isNaN(Number(Persona.nombre)) && 2 <= Persona.nombre.value.length <= 20)) {
        return true;
    } else {
        return false;
    }

}

function validarCorreo() {

    let regcorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regcorreo.test(Persona.correo)) {
        return true;
    } else {
        return false;
    }
}

function validarEdad() {

    if (0 <= Persona.edad <= 150) {
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
        document.getElementById("textoañadido1").innerHTML = "El Nombre no puede ser vacío";
        document.getElementById("nombremal").innerHTML = "El nombre ha de contener entre 2 y 20 caracteres";

    } else if (validarEdad() == false) {
        inputElement.classList.add("mal");
        document.getElementById("textoañadido2").innerHTML = "La edad no puede ser vacía";
        document.getElementById("edadmal").innerHTML = "La edad  ha de estar entre 0 y 150 años";
    } else if (validarCorreo() == false) {
        inputElement.classList.add("mal");
        document.getElementById("textoañadido3").innerHTML = "El correo no puede ser vacío";
        document.getElementById("emailmal").innerHTML = "El correo no tiene el formato correcto";
    }

}