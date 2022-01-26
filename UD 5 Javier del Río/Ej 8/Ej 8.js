window.onload = inicio;

//VALIDATION FUNCTIONS:
const validateInput = (id_input, errorId) => {
    let inputElement = document.getElementById(id_input);

    if (!inputElement.value.length) {
        document.getElementById(
            `${errorId}`
        ).innerHTML = `${id_input} campo obligatorio!`;
        return false;
    }
};

const validateRadioButton = (
    Nombre_boton,
    ID_preg_falsa,
    ID_preg_correcta,
    pId
) => {
    const rbs = document.querySelectorAll(`input[name=${Nombre_boton}]`);
    let valorselec;
    for (const rb of rbs) {
        if (rb.checked) {
            valorselec = rb.value;
            break;
        }
    }
    if (!valorselec) {

        document.getElementById(`${pId}`).classList.add("parrafo-red");
        document.getElementById(
            `${ID_preg_falsa}`
        ).innerHTML = ` Debes responder!`;
        addResultToTable("No has respondido");
        return false;

    } else if (valorselec === "true") {

        document.getElementById(`${pId}`).classList.remove("paragraph-red");
        document.getElementById(`${ID_preg_correcta}`).innerHTML = ` O`;
        addResultToTable("O");
        return true;

    } else if (valorselec === "false") {

        document.getElementById(`${pId}`).classList.remove("paragraph-red");
        document.getElementById(`${ID_preg_falsa}`).innerHTML = ` X`;
        addResultToTable("X");
        return false;

    }
};

const addResultToTable = (result) => {
    let ol = document.querySelector("ol");
    let li = document.createElement("li");
    let text = document.createTextNode(result);
    let iDiv = document.createElement("textoli");
    iDiv.appendChild(text);
    li.appendChild(iDiv);
    ol.appendChild(li);
};

const validarcampos = () => {
    let checkAnswer;
    let result = true;
    for (let index = 1; index <= 10; index++) {
        checkAnswer = validateRadioButton(
            `P${index}`,
            `P${index}-false`,
            `P${index}-true`,
            `P${index}-title`
        );
        if (checkAnswer === false) {
            result = false;
        }
    }

    return result;
};

function comprobarformulario(e) {
    if (validarcampos()) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function inicio() {
    document
        .getElementById("enviar")
        .addEventListener("click", comprobarformulario, false);
}