function intervalos(){
    const numero = Number(document.getElementById('numero').value);
    if (numero >= 0 && numero <= 12) {
        alert("eres un niño");
    } else if (numero >= 13 && numero <= 26) {
        alert("eres joven");
    }else if (numero >= 27 && numero <= 60) {
        alert("eres un adulto");
    }else if (numero > 60) {
        alert("eres un jubilado");
    }
}