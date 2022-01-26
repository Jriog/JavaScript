function calculodias() {
    var f1 = fechahoy();
    var f2 = obetnerfecha();
    var aFecha1 = f1.split('/');
    var aFecha2 = f2.split('/');
    var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1], aFecha1[0]);
    var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1], aFecha2[0]);
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    document.write('Hay ' + dias + ' días de por medio ');
}

function fechahoy() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    return (today);
}

function obetnerfecha() {
    var dd = (document.getElementById("day").value);
    var mm = (document.getElementById("month").value);
    var yyyy = (document.getElementById("year").value);

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    return (today);
}