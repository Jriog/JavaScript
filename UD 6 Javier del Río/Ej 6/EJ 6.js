window.addEventListener("load", counter);



function counter() {

    let totalparrafos = document.getElementsByTagName("p").length;
    console.log("La cantidad total de párrafos es: " + totalparrafos);

    let textoparrafon2 = document.getElementsByTagName("p")[1].textContent;
    console.log("El texto del segundo párrafo es: " + textoparrafon2);

    let totaltagsa = document.getElementsByTagName("a").length;
    console.log("La cantidad total de enlaces es: " + totaltagsa);

    let textoenlacen2 = document.getElementsByTagName("p")[0].textContent;

    console.log("El texto del primer enlace es: " + textoenlacen2.href);


    let penultimoenlace = totaltagsa - 2
    let textopenultimoenlace = document.getElementsByTagName("a")[penultimoenlace].textContent;
    console.log("El texto del penúltimo enlace es: " + textopenultimoenlace.href);


    let enlaceswiki_municipio = 0;
    for (let index = 0; index < totaltagsa; index++) {
        if (
            document.getElementsByTagName("a")[index].href ===
            "https://en.wikipedia.org/wiki/Municipio"
        ) {
            enlaceswiki_municipio++;
        }
    }
    console.log("El número de enlaces que apuntan a /wiki/Municipio es: " + enlaceswiki_municipio);

    let enlacesparrafo1 = 0;
    for (let index = 0; index < totaltagsa; index++) {
        if (
            document.getElementsByTagName("a")[index].parentElement ===
            document.getElementsByTagName("p")[0]
        ) {
            enlacesparrafo1++;
        }
    }
    console.log("El número de enlaces del primer párrafo: " + enlaceswiki_municipio);

    let añadirsrc = document.getElementById("addsrc");
    añadirsrc.addEventListener("click", addsrciframe);
    let estudiariframe = document.getElementById("estudiariframe");
    estudiariframe.addEventListener("click", leeriframe);
}

function addsrciframe() {
    let iframe = document.getElementById("iFrameExample");
    let srcinput = document.getElementById("input").value;

    let srcinput2 = srcinput.substr(srcinput.lastIndexOf("\\") + 1, srcinput.length);
    iframe.src = srcinput2;

}

function leeriframe() {


    let web = document.getElementById("iFrameExample").contentDocument;

    if (web != undefined) {
        alert("Vamos a estudiar el iframe");
        let totalparrafos = web.getElementsByTagName("p").length;
        console.log("Dentro del iframe la cantidad total de párrafos es: " + totalparrafos);

        let textoparrafon2 = web.getElementsByTagName("p")[1].textContent;
        console.log("Dentro del iframe el texto del segundo párrafo es: " + textoparrafon2);

        let totaltagsa = web.getElementsByTagName("a").length;
        console.log("Dentro del iframe la cantidad total de enlaces es: " + totaltagsa);

        let textoenlacen2 = web.getElementsByTagName("p")[0].textContent;

        console.log("Dentro del iframe el texto del primer enlace es: " + textoenlacen2.href);


        let penultimoenlace = totaltagsa - 2
        let textopenultimoenlace = web.getElementsByTagName("a")[penultimoenlace].textContent;
        console.log("Dentro del iframe el texto del penúltimo enlace es: " + textopenultimoenlace.href);


        let enlaceswiki_municipio = 0;
        for (let index = 0; index < totaltagsa; index++) {
            if (
                web.getElementsByTagName("a")[index].href ===
                "https://en.wikipedia.org/wiki/Municipio"
            ) {
                enlaceswiki_municipio++;
            }
        }
        console.log("Dentro del iframe el número de enlaces que apuntan a /wiki/Municipio es: " + enlaceswiki_municipio);

        let enlacesparrafo1 = 0;
        for (let index = 0; index < totaltagsa; index++) {
            if (
                web.getElementsByTagName("a")[index].parentElement ===
                web.getElementsByTagName("p")[0]
            ) {
                enlacesparrafo1++;
            }
        }
        console.log("Dentro del iframe el número de enlaces del primer párrafo: " + enlaceswiki_municipio);
    } else {
        alert("Web es nulo")
    }



}