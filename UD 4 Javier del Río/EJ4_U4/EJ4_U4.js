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

	arrayDiscos.push(new Disco());
	Discos[2].nombre = "El guardaespaldas";
	Discos[2].grupo = 'Whitney Houston';
	Discos[2].año = '1996'
	Discos[2].corriente = 'Pop';
	Discos[2].localizacion = 0;
	Discos[2].caratula = `<img src="https://www.laguiago.com/wp-content/uploads/2021/03/El-Guardaespaldas-300x278.jpg" alt="El guardaespaldas" width="100" height="100">`

	function MostrarOpciones(idOpciones) {
	    let elDiv = document.getElementById(idOpciones);
	    if (elDiv.style.display === 'block') {
	        elDiv.style.display = 'none';
	    } else {
	        elDiv.style.display = 'block';
	    }
	}

	function funcionNumeroDiscos() {
	    alert(`El número de discos guardados en el array es de: ${Discos.length}`)
	}

	function mostrarPorOrden() {

	    document.write(`<table border=2>`);
	    let listado = "<table> <tr><th>Nombre </th><th>Grupo </th><th>Año </th><th>Corriente </th><th>Estantería </th><th>Prestado </th><th>Prestado </th> </tr>";
	    for (let i = 0; i < Discos.length; i++) {

	        listado += "<tr><td>" + Discos[i].nombre + "</td><td>" + Discos[i].grupo + "</td><td>" + Discos[i].anho + " </td><td>" + Discos[i].corriente + " </td><td>" + Discos[i].localizacion + " </td><td>" + Discos[i].prestado + " </td><td>" + Discos[i].caratula + " </td></tr>";
	    }
	    listado += "</table>";
	    document.write(listado);
	}

	function addprincipio() {
	    let elNombre = prompt(`Introduce el nombre del disco: `);
	    let elGrupo = prompt(`Introduce el nombre del grupo: `);
	    let elAño = prompt(`Introduce el año de salida: `);
	    let laCorriente = prompt(`Introduce su corriente musical: `);
	    let laLocalizacion = prompt(`Introduce el número de la estantería donde quieras guardarlo: `);
	    let booleanPrestado = prompt(`Introduce false si no está prestado, y true si está prestado `);

	    let nuevoDisco = new Disco();
	    Discos[0].nombre = elNombre;
	    Discos[0].grupo = elGrupo;
	    Discos[0].año = elAño;
	    Discos[0].corriente = laCorriente;
	    Discos[0].localizacion = laLocalizacion;
	    Discos[0].prestado = booleanPrestado;

	    if (nuevoDisco != null) {
	        Discos.unshift(nuevoDisco);
	        alert('Has añadido un disco correctamente');
	    }
	}

	function addfinal() {
	    let elNombre = prompt(`Introduce el nombre del disco: `);
	    let elGrupo = prompt(`Introduce el nombre del grupo: `);
	    let elAño = prompt(`Introduce el año de salida: `);
	    let laCorriente = prompt(`Introduce su corriente musical: `);
	    let laLocalizacion = prompt(`Introduce el número de la estantería donde quieras guardarlo: `);
	    let booleanPrestado = prompt(`Introduce false si no está prestado, y true si está prestado `);

	    let nuevoDisco = new Disco();

	    if (nuevoDisco != null) {
	        Discos.push(nuevoDisco);

	        let posicion = Discos.length - 1
	        Discos[posicion].nombre = elNombre;
	        Discos[posicion].grupo = elGrupo;
	        Discos[posicion].año = elAño;
	        Discos[posicion].corriente = laCorriente;
	        Discos[posicion].localizacion = laLocalizacion;
	        Discos[posicion].prestado = booleanPrestado;

	        alert('Nuevo disco añadido correctamente');
	    }
	}

	function borrarPrincipio() {
	    let elDiscoBorrado = Discos.shift();
	    alert(`Se ha borrado: ${elDiscoBorrado.nombre}`);
	}

	function borrarFinal() {
	    let elDiscoBorrado = Discos.pop();
	    alert(`Se ha borrado: ${elDiscoBorrado.nombre}`);
	}

	function consultarPorPosicion() {
	    let laPosicion = prompt('Introduzca la posición del elemento que quiera consultar, dentro del array:');
	    alert(`El disco colocado en la posición ${laPosicion} del array es: ${Discos[laPosicion].nombre}`);
	}

	function consultarPorNombre() {
	    let elNombre = prompt('Introduzca el nombre del país, y le diremos su posición en el array:');

	    let indexDisco = Discos.findIndex(Disco => Disco.nombre == elNombre);

	    alert(`La posición en el array de ${elNombre}, es: ${indexDisco}`);
	}

	function mostrarDiscosOrdenAlfb() {
	    let listadoDiscos = "<table><tr><th>Nombre</th><th>Grupo</th><th>Año de Publicacion</th><th>tipo</th><th>Localización</th><th>Prestado</th><th>Caratula</th></tr>";
	    discos.sort(function(a, b) {
	        if (a.nombre > b.nombre) {
	            return 1;
	        }
	        if (a.nombre < b.nombre) {
	            return -1;
	        }
	        return 0;
	    });
	    discos.forEach(disco => {
	        listadoDiscos += `<tr><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.anoPubli}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td><img src="${disco.caratula}"/></td></tr>`;
	    });
	    document.getElementById("p").innerHTML = listadoDiscos + `</table>`;
	}