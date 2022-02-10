let contador = 0;
let intentos = 0;
let aciertos = 0;
let src;
let arraydeimagenes = ["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
	"https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg ",
	"https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
	"https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg ",
	"https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
	"https://todoimagenes.co/wp-content/uploads/2020/05/ee2d07a545e6af3bdd9455c0d99b67b5-300x200.jpg ",
	"https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
	"https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg ",
	"https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
	"https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg ",
	"https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
	"https://todoimagenes.co/wp-content/uploads/2020/05/ee2d07a545e6af3bdd9455c0d99b67b5-300x200.jpg ",
];
let imagenesdescubiertas = [];
let imagenesBool = [false, false, false, false, false, false, false, false, false, false, false, false];
idsdescubiertos = [];
creartabla();
$(document).ready(inicio);

function creartabla() {

	let id = 1;
	var htmlTabla = "<table>";

	for (let i = 0; i < 3; i++) {
		htmlTabla+="<tr>";
		for (let j = 0; j < 4; j++) {
			htmlTabla+=`<td><img src="https://i.pinimg.com/236x/f1/3f/b3/f13fb34cc03956b16ad356f8122b9621.jpg" id="img${id}" alt="img${id}" width="150px" height="150px"></td>`;
			id++;
		}
		htmlTabla+="</tr>";
	}
	htmlTabla+=`<tr><th>Has acertado:</th><th id=aciertos>${aciertos}</th><th>veces, pero llevas: </th><th id=intentos>${intentos}</th><th>intentos</th></tr>`;
	htmlTabla+="</table>";

	document.write(htmlTabla);
}

function inicio() {

	/*let imgs = document.getElementsByTagName("img");

	for (let i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener("click", cambiarimagen);
	}*/

	/*V2*/
	/*let imgs = document.getElementsByTagName("img");

	$.each(imgs, (indice) => {
		imgs[indice].click(cambiarimagen);
	})
	*/
	/*V3*/

	$("img").click(cambiarimagen)

}

function cambiarimagen(e) {
	contador++;
	let id = e.target.id;
	idsdescubiertos[contador - 1] = id;
	let N_id = id.substring(3);
	this.src = arraydeimagenes[N_id - 1]
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

		$("#intentos").html(intentos);
		$("#aciertos").html(aciertos);

		$.each(idsdescubiertos, (indice) => {
			if (imagenesBool[idsdescubiertos[indice].substring(3) - 1] == true)
				$(`#${idsdescubiertos[indice]}`).addClass('addfondo');
		})

	} else {

		$.each(idsdescubiertos, (indice) => {
			if (imagenesBool[idsdescubiertos[indice].substring(3) - 1] == false)
				$(`#${idsdescubiertos[indice]}`).attr("src", "https://i.pinimg.com/236x/f1/3f/b3/f13fb34cc03956b16ad356f8122b9621.jpg");
		})

		$("#intentos").html(intentos);
		$("#aciertos").html(aciertos);
	}
}