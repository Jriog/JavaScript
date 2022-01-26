function controlacceso() {

    let respuesta;

    do {
        let nombre = prompt('¿Cuál fue el primer presidente de la democracia española?');
        respuesta = nombre.toLocaleLowerCase().trim();
        if (respuesta === "adolfo") {
            alert('falta el apellido');
        } else if (respuesta === 'suarez') {
            alert('falta el nombre');
        } else if (respuesta !== 'adolfo suarez') {
            alert('repite porfavor');
        }
    } while (respuesta !== 'adolfo suarez');

    document.write('Acceso permitido');
}