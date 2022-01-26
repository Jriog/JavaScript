function multiplicacionconfor() {

    let a = 7;

    for (let i = 0; i <= 10; i++) {
        //document.write(a + "*" + i + "=" + (a * i) + "<br>");
        document.write(`${a}  *  ${i}  =  ${7 * i} <br>`);
    }

}

function sumarwhile() {

    let a = 8;
    let i = 0;
    while (i <= 10) {
        document.write(`${a} + ${i} = ${a + i} <br>`);
        i++;
    }

}

function divisiondowhile() {

    let a = 9;
    let i = 0;
    do {
        document.write(`${a} / ${i} = ${a / i} <br>`);
        i++;
    }
    while (i <= 10);
}

function operacionesdebits() {

    document.write("<br> 125 / 85 = " + (125 >>> 3));
    document.write("<br> 40 * 4 = " + (40 << 2));
    document.write("<br> 25 / 2 = " + (25 >> 1));
    document.write("<br> 10 * 16 = " + (10 << 4));

}