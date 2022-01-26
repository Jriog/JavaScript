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