window.addEventListener("load", inicio);

function inicio() {
    countdown();
    const myTimeout = setTimeout(lista, 5000);
    lista();
}

function lista() {
    var inputs = document.getElementsByTagName("input");
    // Iterate over the form controls
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text") {
            // Update text input
            inputs[i].focus();
            break;
        }
    }
}



function countdown() {
    let cuenta = 5;
    document.getElementById('countdown').innerHTML = cuenta;
    if (cuenta == 0) {
        alert('Final');
    } else {
        cuenta -= 1;
        setTimeout("countdown()", 1000);
    }
}