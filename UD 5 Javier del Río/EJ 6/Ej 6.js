let contador = 0;
let intentos = 0;
let aciertos = 0;
let src;
let arraydeimagenes = ["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
    "https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg ",
    "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
    "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg ",
    "https://www.365imagenesbonitas.com/wp-content/uploads/2018/03/im%C3%A1genes-de-amor-para-mi-novio-buenas-noches.jpg ",
    "https://todoimagenes.co/wp-content/uploads/2020/05/ee2d07a545e6af3bdd9455c0d99b67b5-300x200.jpg ",
    "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
    "https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg ",
    "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
    "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg ",
    "https://www.365imagenesbonitas.com/wp-content/uploads/2018/03/im%C3%A1genes-de-amor-para-mi-novio-buenas-noches.jpg ",
    "https://todoimagenes.co/wp-content/uploads/2020/05/ee2d07a545e6af3bdd9455c0d99b67b5-300x200.jpg ",
];
let imagenesdescubiertas = [];
let imagenesBool = [false, false, false, false, false, false, false, false, false, false, false, false];
idsdescubiertos = [];
creartabla();
window.addEventListener("load", inicio);

function creartabla() {

    let id = 1;
    document.write("<table>");
    for (let i = 0; i < 3; i++) {
        document.write("<tr>");
        for (let j = 0; j < 4; j++) {
            document.write('<td><img src="https://p4.wallpaperbetter.com/wallpaper/587/612/934/blur-gaussian-gradient-wallpaper-preview.jpg" id="img' + id + '" alt="img' + id + '" width="150px" height="150px"></td>');
            id++;
        }
        document.write("</tr>");
    }
    document.write("<tr><th>Has acertado:</th><th id=aciertos>" + aciertos + "</th><th>veces, pero llevas: </th><th id=intentos>" + intentos + "</th><th>intentos</th></tr>");
    document.write("</table>");
}

function inicio() {
    //checkCookie();
    let imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", cambiarimagen);
    }
}


function cambiarimagen(e) {
    contador++;
    let id = e.target.id;
    idsdescubiertos[contador - 1] = id;
    let nid = id.substring(3);
    this.src = arraydeimagenes[nid - 1]
    imagenesdescubiertas[contador - 1] = this.src;
    if (contador % 2 == 0) {
        setTimeout("compararimagenes();", 2000);
    }
}

function compararimagenes() {
    intentos++;
    if (imagenesdescubiertas[contador - 2] == imagenesdescubiertas[contador - 1]) {
        aciertos++;
        imagenesBool[idsdescubiertos[contador - 2].substring(3) - 1] = true;
        imagenesBool[idsdescubiertos[contador - 1].substring(3) - 1] = true;

        document.getElementById("intentos").innerHTML = intentos;
        document.getElementById("aciertos").innerHTML = aciertos;

        for (let i = 0; i < idsdescubiertos.length; i++) {
            if (imagenesBool[idsdescubiertos[i].substring(3) - 1] == true)
                document.getElementById(idsdescubiertos[i]).classList.add('addfondo');
        }
    } else {
        for (let i = 0; i < idsdescubiertos.length; i++) {
            if (imagenesBool[idsdescubiertos[i].substring(3) - 1] == false) {
                var img2 = document.getElementById(idsdescubiertos[i]);
                img2.src = "https://p4.wallpaperbetter.com/wallpaper/587/612/934/blur-gaussian-gradient-wallpaper-preview.jpg";
            }
        }
        document.getElementById("intentos").innerHTML = intentos;
        document.getElementById("aciertos").innerHTML = aciertos;
    }
}