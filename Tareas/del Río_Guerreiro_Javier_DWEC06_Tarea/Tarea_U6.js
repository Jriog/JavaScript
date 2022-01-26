window.onload = initialize;

function initialize() {
    crearlienzo();
    funcionclickbase();
    pintarlienzo();
}

const crearlienzo = () => {
    let counterCell = 1;
    let table = document.createElement("table");
    table.setAttribute("id", "drawing-board");
    table.setAttribute("style", "border: 1px solid black;");
    document.getElementById("zonadibujo").appendChild(table);
    for (let h = 1; h <= 30; h++) {
        let tr = document.createElement("tr");
        tr.setAttribute("id", `tr-${h}`);
        tr.setAttribute("class", `tr-class`);
        document.getElementById("drawing-board").appendChild(tr);
        for (let w = 1; w <= 30; w++) {
            let td = document.createElement("td");
            td.setAttribute("id", `td-${counterCell}`);
            td.setAttribute("class", `td-class`);
            td.setAttribute("style", "border: 1px solid black; padding: 10px;");
            td.setAttribute("painterzone", "yes");
            document.getElementById(`tr-${h}`).appendChild(td);
            counterCell++;
        }
    }
};

let colorseleccionado;
let pincelactivado = false;

const funcionclickbase = () => {
    window.onclick = (e) => {
        let elementSelected = e.target;

        //SELECCIONAR EL COLOR:
        if (
            document.getElementsByTagName("td")[0] === elementSelected ||
            document.getElementsByTagName("td")[1] === elementSelected ||
            document.getElementsByTagName("td")[2] === elementSelected ||
            document.getElementsByTagName("td")[3] === elementSelected ||
            document.getElementsByTagName("td")[4] === elementSelected ||
            document.getElementsByTagName("td")[5] === elementSelected
        ) {
            for (let index = 0; index < 6; index++) {
                document.getElementsByTagName("td")[index].setAttribute("class", `color${index + 1}`);
            }
            colorseleccionado = elementSelected.getAttribute("class");

            elementSelected.setAttribute("class", `${elementSelected.getAttribute("class")} seleccionado`);
        }

        //ACTIVAR/DESACTIVAR PINCEL:
        if (
            elementSelected.getAttribute("id") === "drawing-board" ||
            elementSelected.getAttribute("class") === "tr-class" ||
            elementSelected.getAttribute("painterzone") === "yes"
        ) {
            if (!pincelactivado) {
                pincelactivado = true;
                document.getElementById("pincel").innerHTML = "<b>Pincel activado</b>";
            } else {
                pincelactivado = false;
                document.getElementById("pincel").innerHTML = "<b>Pincel desactivado</b>";
            }
        }
    };
};

const pintarlienzo = () => {
    window.onmouseover = (e) => {
        let elementSelected = e.target;
        if (elementSelected.getAttribute("painterzone") === "yes") {
            if (!pincelactivado || !colorseleccionado) {
                return;
            } else if (pincelactivado && colorseleccionado) {
                elementSelected.setAttribute("class", colorseleccionado);
            }
        }
    };
};