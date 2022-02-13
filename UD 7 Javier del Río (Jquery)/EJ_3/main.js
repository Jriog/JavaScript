window.addEventListener("load", inicio);
edificio = [];
index = 0;

function inicio() {
    document.getElementById("addEdificio").addEventListener("click", createEdificio);
    document.getElementById("edit").addEventListener("click", createEditEdificio);
    if (document.getElementById("editEdificio")) {
        document.getElementById("editEdificio").addEventListener("click", editEdificio);
    }
    document.getElementById("printEdificio").addEventListener("click", printEdificio)

}


function createEdificio() {
    var nombre = document.getElementById("edificio2").value;
    var calle = document.getElementById("calle").value;
    var numero = document.getElementById("numero").value;
    var codigo = document.getElementById("codigo").value;
    var puertas = document.getElementById("puertas").value;
    var plantas = document.getElementById("plantas").value;
    if (nombre == "" || calle == "" || numero == "" || codigo == "") {
        document.getElementById("errores").innerHTML = "debes rellenar todos los campos";
    } else {
        nombre = new Edificio(calle, numero, codigo);
        nombre.mensaje();
        nombre.agregarPlantasYPuertas(plantas, puertas);
        edificio[index] = nombre;
        edificio[index].nombre = document.getElementById("edificio2").value;
        index++;
        console.log(edificio);
    }
}

function createEditEdificio() {

    var br = document.createElement("br");

    var form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "submit.php");

    var textplanta = document.createTextNode(" Planta: ");
    var labelplanta = document.createElement("label");
    labelplanta.appendChild(textplanta);

    var planta = document.createElement("input");
    planta.setAttribute('type', "text");
    planta.setAttribute('name', "planta");
    planta.setAttribute('value', "planta");
    planta.setAttribute('id', "planta");

    var textpuerta = document.createTextNode(" Puerta: ");
    var labelpuerta = document.createElement("label");
    labelpuerta.appendChild(textpuerta);

    var puerta = document.createElement("input");
    puerta.setAttribute('type', "text");
    puerta.setAttribute('name', "puerta");
    puerta.setAttribute('value', "puerta");
    puerta.setAttribute('id', "puerta");

    var textpropietario = document.createTextNode(" Propietario: ");
    var labelpropietario = document.createElement("label");
    labelpropietario.appendChild(textpropietario);

    var propietario = document.createElement("input");
    propietario.setAttribute('type', "text");
    propietario.setAttribute('name', "propietario");
    propietario.setAttribute('value', "propietario");
    propietario.setAttribute('id', "propietario");


    var s = document.createElement("input");
    s.setAttribute('type', "button");
    s.setAttribute('value', "Submit");
    s.setAttribute('id', 'editEdificio');

    // RADIO

    edificio.forEach((edificioValue) => {
        var labelValue = document.createElement('label');
        labelValue.innerHTML = edificioValue.nombre;
        var inputValue = document.createElement('input');
        inputValue.type = "radio";
        inputValue.name = "edificio";
        inputValue.id = edificioValue.nombre;
        inputValue.value = edificioValue.nombre;

        form.appendChild(labelValue);
        inputValue.appendChild(br);
        form.appendChild(inputValue);
        form.appendChild(br);
    });
    form.appendChild(br);
    form.appendChild(labelplanta);
    form.appendChild(planta);
    form.appendChild(labelpuerta);
    form.appendChild(puerta);
    form.appendChild(labelpropietario);
    form.appendChild(propietario);
    s.appendChild(br);
    form.appendChild(s);
    form.appendChild(br);

    document.body.appendChild(form);
    document.getElementById("editEdificio").addEventListener("click", editEdificio);
}

function editEdificio() {


    var ele = document.getElementsByName('edificio');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {

            var puerta = document.getElementById("puerta").value;
            var planta = document.getElementById("planta").value;
            var propietario = document.getElementById("propietario").value;

            edificio[i].agregarPropietario(propietario, planta, puerta);
        }
    }
}


function printEdificio() {

    var form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "submit.php");


    var select = document.createElement("select");
    select.name = "selectEdificio";
    select.id = "selectEdificio"

    for (const val of edificio) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.nombre;
        option.id = val.nombre;
        select.appendChild(option);
    }

    var label = document.createElement("label");
    label.innerHTML = "Escoger edificio "
    label.htmlFor = "edificio";

    // INPUT
    var s = document.createElement("input");
    s.setAttribute('type', "button");
    s.setAttribute('value', "Mostrar");
    s.setAttribute('id', 'mostrarEdificio');

    form.appendChild(label);
    form.appendChild(select);
    form.appendChild(s);
    document.body.appendChild(form);
    document.getElementById("mostrarEdificio").addEventListener("click", imprimir);
}

function imprimir() {

    var seleccionado = document.getElementById("selectEdificio");

    var index = seleccionado.options[seleccionado.selectedIndex].index

    edificio[index].imprimePlantas(index);
}

class Edificio {
    constructor(calle, numero, codigo) {
        this.calle = calle;
        this.numero = numero;
        this.codigo = codigo;
        this.planta = [];
    }

    agregarPlantasYPuertas(numplantas, puertas) {

        for (let numeroPlanta = 0; numeroPlanta < numplantas; numeroPlanta++) {
            this.planta[numeroPlanta] = [];
            for (let numeroPuerta = 0; numeroPuerta < puertas; numeroPuerta++) {
                this.planta[numeroPlanta][numeroPuerta] = 'NINGUNO';
            }
        }
    }

    // Se le pasa el nuevo número del edificio para que lo actualice.
    modificarNumero(numero) {
        this.numero = numero;
    }

    // Se le pasa el nuevo nombre de la calle para que lo actualice.
    modificarCalle(calle) {
        this.calle = calle;
    }

    // Se le pasa el nuevo número de código postal del edificio.
    modificarCodigoPostal(codigo) {
        this.codigo = codigo;
    }

    // Devuelve el nombre de la calle del edificio.
    imprimeCalle(nombreEdificio) {
        document.write(`El nombre de la calle de edificio ${nombreEdificio} es: ${this.calle}<br>`);
    }

    // Devuelve el número del edificio.
    imprimeNumero(nombreEdificio) {
        document.write(`El edificio ${nombreEdificio} esta situado en la calle ${this.calle} numero ${this.numero} <br>`);
    }

    // Devuelve el código postal del edificio.
    imprimeCodigoPostal(nombreEdificio) {
        document.write(`El codigo postal del edificio ${nombreEdificio} es ${this.codigo}  <br>`);
    }

    // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
    agregarPropietario(nombre, planta, puerta) {
        this.planta[planta][puerta] = nombre;
        var puerta2 = parseInt(puerta);
        var rellano = parseInt(planta);

        document.getElementById("mensajes").innerHTML = `${nombre} es ahora el dueño de la puerta ${puerta2} de la planta ${rellano}   `
    }

    // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
    imprimePlantas(selecionado) {
        var plantas_totales = document.getElementById("plantas").value;

        var html = "<table border='1|1' style='background-color:rgba(226, 183, 26, 1)'>";

        for (let index = 0; index < edificio[selecionado].planta.length; index++) {


            html += "<tr>";
            html += `<th border='1px solid black' style='background-color:rgba(221, 221, 221, 1)'> Piso ${index + 1}</th>`;

            for (var i = 0; i < plantas_totales; i++) {
                html += "<td width=30px border='1px solid black'><b>" + edificio[selecionado].planta[i][index] + "</b></td>";
            }

            html += "</tr>";


        }

        html += "</table>";
        document.getElementById("dvTable").innerHTML = html;

    }
    mensaje() {
        document.getElementById("mensajes").innerHTML = `
            Construido nuevo edificio en calle: ${this.calle}
            Nº: ${this.numero}
            CP: ${this.codigo} <br>`
    }
    ubicacion(nombreEdificio) {
        document.write(`
            El Edificio ${nombreEdificio}
            esta situado en ${this.calle}
            numero ${this.numero} <br>`);
    }
}