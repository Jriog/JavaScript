window.addEventListener("load", inicio);


class Disco {
    constructor() {
        this.nombre = '';
        this.grupo = '';
        this.año = '';
        this.corriente = '';
        this.localizacion = 0;
        this.prestado = false;
        this.caratula = '';
    }

    cambiarLocalizacion(numeroEstanteria) {
        this.localizacion = numeroEstanteria;
    }

    cambiarPrestado(valorBoolean) {
        this.prestado = valorBoolean;
    }

    infoDisco() {
        let estaPrestado;
        if (this.prestado == false) {
            estaPrestado = 'no';
        } else if (this.prestado == true) {
            estaPrestado = 'sí';
        }

        alert(`Este disco es ${this.nombre}, de ${this.grupo}, del año ${this.año}. Pertenece a la corriente musical: ${this.corriente}. Se encuentra en la estantería número ${this.localizacion}, y ${estaPrestado} está prestado. Su carátula es ${this.caratula}`);

    }
}

let Discos = [];

Discos.push(new Disco());
Discos[0].nombre = 'Thriller';
Discos[0].grupo = 'Michael Jackson';
Discos[0].año = '1982'
Discos[0].corriente = 'Rock';
Discos[0].localizacion = 0;
Discos[0].caratula = `<img src="https://www.laguiago.com/wp-content/uploads/2021/03/Michael-Jackson-Trhiller-300x300.jpg" alt="Thriller" width="100" height="100">`

Discos.push(new Disco());
Discos[1].nombre = "The Dark Side of the Moon";
Discos[1].grupo = 'Pink Floyd';
Discos[1].año = '1973'
Discos[1].corriente = 'Punk';
Discos[1].localizacion = 0;
Discos[1].caratula = `<img src="https://www.laguiago.com/wp-content/uploads/2021/03/Pink-Floyd-300x267.jpg" alt="The Dark Side of the Moon" width="100" height="100">`

Discos.push(new Disco());
Discos[2].nombre = "El guardaespaldas";
Discos[2].grupo = 'Whitney Houston';
Discos[2].año = '1996'
Discos[2].corriente = 'Pop';
Discos[2].localizacion = 0;
Discos[2].caratula = `<img src="https://www.laguiago.com/wp-content/uploads/2021/03/El-Guardaespaldas-300x278.jpg" alt="El guardaespaldas" width="100" height="100">`

function inicio() {
    var form = document.createElement("form");
    form.setAttribute("onsubmit", "adddisco()");

    var br = document.createElement("br");

    //Crear label + input para el nombre del disco
    var labelND = document.createElement("label");
    var textonombre = document.createTextNode("Introduce el nombre del disco*: ");
    var nameD = document.createElement("input");
    nameD.setAttribute("type", "name");
    nameD.setAttribute("id", "nombred");
    nameD.setAttribute("class", "bordebase");

    //Crear label + input para el nombre del grupo
    var labelNG = document.createElement("label");
    var textogrupo = document.createTextNode("Introduce el nombre del grupo*: ");
    var nameG = document.createElement("input");
    nameG.setAttribute("type", "name");
    nameG.setAttribute("id", "nombreg");
    nameG.setAttribute("class", "bordebase");

    //Crear label + input para el año de salida
    var labelyear = document.createElement("label");
    var textoyear = document.createTextNode("Introduce el año de salida*: ");
    var year = document.createElement("input");
    year.setAttribute("type", "name");
    year.setAttribute("id", "año");
    year.setAttribute("class", "bordebase");

    //Crear label + input para la corriente musical
    var labelcorriente = document.createElement("label");
    var textocorriente = document.createTextNode("Introduce su corriente musical*: ");
    var corrientemusical = document.createElement("input");
    corrientemusical.setAttribute("type", "name");
    corrientemusical.setAttribute("id", "corriente");
    corrientemusical.setAttribute("class", "bordebase");

    //Crear label + input para la estantería
    var labelestanteria = document.createElement("label");
    var textoestanteria = document.createTextNode("Introduce el número de la estantería donde quieras guardarlo*:");
    var estanteria = document.createElement("input");
    estanteria.setAttribute("type", "name");
    estanteria.setAttribute("id", "estanteria");
    estanteria.setAttribute("class", "bordebase");

    //Crear label + input para saber si está prestado o no
    var labelprestado = document.createElement("label");
    var textoprestado = document.createTextNode("Introduce false si no está prestado, y true si está prestado*:");
    var prestado = document.createElement("input");
    prestado.setAttribute("type", "checkbox");
    prestado.setAttribute("id", "prestado");
    prestado.setAttribute("class", "bordebase");

    //Crear botón submit

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Enviar");

    //Insercción de los campos.
    labelND.appendChild(textonombre);
    form.appendChild(labelND);
    form.appendChild(nameD);
    form.appendChild(br.cloneNode());

    labelNG.appendChild(textogrupo);
    form.appendChild(labelNG);
    form.appendChild(nameG);
    form.appendChild(br.cloneNode());

    labelyear.appendChild(textoyear);
    form.appendChild(labelyear);
    form.appendChild(year);
    form.appendChild(br.cloneNode());

    labelcorriente.appendChild(textocorriente);
    form.appendChild(labelcorriente);
    form.appendChild(corrientemusical);
    form.appendChild(br.cloneNode());

    labelestanteria.appendChild(textoestanteria);
    form.appendChild(labelestanteria);
    form.appendChild(estanteria);
    form.appendChild(br.cloneNode());

    labelprestado.appendChild(textoprestado);
    form.appendChild(labelprestado);
    form.appendChild(prestado);
    form.appendChild(br.cloneNode());

    form.appendChild(submit);

    document.getElementsByTagName("body")[0].appendChild(form);

}

function adddisco() {
    this.event.preventDefault();
    let Nombre = document.getElementById('nombred').value;
    let Grupo = document.getElementById('nombreg').value;
    let Año = document.getElementById('año').value;
    let Corriente = document.getElementById('corriente').value;
    let Localizacion = document.getElementById('estanteria').value;
    let Prestado = document.getElementById('prestado').value;

    let nuevoDisco = new Disco();

    let Vnombre = false;
    let Vgrupo = false;
    let Vaño = false;
    let Vlocalizacion = false;

    if ((Nombre.length >= 20) || (Nombre.length == 0)) {
        document.getElementById("nombred").classList.remove('bordebase');
        document.getElementById("nombred").classList.add('bordemal');
        //alert('El nombre tiene que tener como máximo 20 caracteres');
        Vnombre = false;
    } else {
        Discos[3].nombre = Nombre;
        Vnombre = true;
    }
    if ((Grupo.length >= 20) || (Grupo.length == 0)) {
        document.getElementById("nombreg").classList.remove('bordebase');
        document.getElementById("nombreg").classList.add('bordemal');
        //alert('El grupo tiene que tener como máximo 20 caracteres');
        Vgrupo = false;
    } else {
        Discos[3].grupo = Grupo;
        Vgrupo = true;
    }

    if ((Año.toString().length != 4) || (Año.length == 0)) {
        document.getElementById("año").classList.remove('bordebase');
        document.getElementById("año").classList.add('bordemal');

        Vaño = false;
    } else {
        Discos[3].año = Año;
        Vaño = true;
    }

    if (((isNaN(Localizacion) == true) || (Localizacion.length == 0))) {
        document.getElementById("estanteria").classList.remove('bordebase');
        document.getElementById("estanteria").classList.add('bordemal');
        Vlocalizacion = false;
    } else {
        Discos[3].localizacion = Localizacion;
        Vlocalizacion = true;
    }

    Discos[3].corriente = Corriente;
    Discos[3].prestado = Prestado;

    if ((nuevoDisco != null) && (Vnombre == true) && (Vgrupo == true) && (Vlocalizacion == true) && (Vaño == true)) {
        Discos.unshift(nuevoDisco);
        alert('Has añadido un disco correctamente');
    } else {
        alert('Has añadido mal algún campo');
    }

    document.write(`<table border=2>`);
    let listado = "<table> <tr><th>Nombre </th><th>Grupo </th><th>Año </th><th>Corriente </th><th>Estantería </th><th>Prestado </th><th>Prestado </th> </tr>";
    for (let i = 0; i < Discos.length; i++) {

        listado += "<tr><td>" + Discos[i].nombre + "</td><td>" + Discos[i].grupo + "</td><td>" + Discos[i].anho + " </td><td>" + Discos[i].corriente + " </td><td>" + Discos[i].localizacion + " </td><td>" + Discos[i].prestado + " </td><td>" + Discos[i].caratula + " </td></tr>";
    }
    listado += "</table>";
    document.write(listado);
}