for (let hora1 = 9; hora1 < 22; hora1++) {
    for (let minutos = 0; minutos < 55; minutos += 5) {
        if (minutos < 10) {
            document.write("Son las: " + hora1 + ":0" + minutos + "<br>")
        } else {
            document.write("Son las: " + hora1 + ":" + minutos + "<br>")
        }
    }
    document.write("<br>")
}