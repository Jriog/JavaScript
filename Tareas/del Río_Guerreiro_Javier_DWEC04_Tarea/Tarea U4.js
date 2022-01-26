class Edificio {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = new Array();
    }
    agregarPlantasYPuertas(numplantasAñadir, numpuertasAñadir) {

        let totalplantas = this.plantas.length;
        let inicio;
        if (totalplantas <= 0)
            inicio = 0;
        else
            inicio = totalplantas;

        for (let i = inicio; i < totalplantas + numplantasAñadir; i++) {
            this.plantas[i] = new Array(numpuertasAñadir);
            for (let j = 0; j < numpuertasAñadir; j++)
                this.plantas[i][j] = "";
        };

    }
    modificarNumero(numero) {
        this.numero = numero;
    }
    modificarCalle(calle) {
        this.calle = calle;
    }
    modificarCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
    imprimeCalle() {
        return (this.calle);
    }
    imprimeNumero() {
        return (this.numero);
    }
    imprimeCodigoPostal() {
        return (this.codigoPostal);
    }
    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta][puerta] = nombre;
    }

    imprimePlantas() {
        document.write("Listado de propietarios del edificio: " + this.calle + " número " + this.numero + ":<br><br>");
        for (let plantaRecorrer = 0; plantaRecorrer < this.plantas.length; plantaRecorrer++) {
            for (let puertaRecorrer = 0; puertaRecorrer < this.plantas[plantaRecorrer].length; puertaRecorrer++) {
                document.write("Propietario del piso: " + (puertaRecorrer + 1) + " ,de la planta: " + (plantaRecorrer + 1) + " ,es: " + this.plantas[plantaRecorrer][puertaRecorrer] + "<br>");
            }
        }

        document.write("<br>");
    }

}

let edificioA = new Edificio("Ribeira", "5", "15002");
document.write("Creado edificio en la calle " + edificioA.calle + " numero: " + edificioA.numero + " y CP: " + edificioA.codigoPostal + "<br>");
let edificioB = new Edificio("Touriña", "2", "15002");
document.write("Creado edificio en la calle " + edificioB.calle + " numero: " + edificioB.numero + " y CP: " + edificioB.codigoPostal + "<br>");
let edificioC = new Edificio("Galatea", "3", "15002");
document.write("Creado edificio en la calle " + edificioC.calle + " numero: " + edificioC.numero + " y CP: " + edificioC.codigoPostal + "<br><br><br>");

document.write("El codigo postal del edificio A es: " + edificioA.imprimeCodigoPostal() + "<br>");
document.write("La calle del edificio C se llama: " + edificioC.imprimeCalle() + "<br>");
document.write("El edificio B está situado en la calle: " + edificioB.imprimeCalle() + " número: " + edificioC.imprimeNumero() + "<br><br><br>");

edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 0, 0);
edificioA.agregarPropietario("Luisa Martinez", 0, 1);
edificioA.agregarPropietario("Marta Castellón", 0, 2);
edificioA.agregarPropietario("Antonio Pereria", 1, 1);
edificioA.imprimePlantas();
edificioA.agregarPlantasYPuertas(1, 3);
edificioA.agregarPropietario("Pedro Meijide", 2, 1);
edificioA.imprimePlantas();