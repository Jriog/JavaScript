$(document).ready(inicio);
let colorSelected;
let arrayclases = ["color1", "color2", "color4", "color3", "color5", "color6"]


function inicio() {

	genera_tabla();
	$("body").click((event) => {
		var clasename = event.target.className;
		var clase = clasename.substr(0, 6);
		$(`.${clase}:eq(0)`).click(() => {
			$(`.${clase}:eq(0)`).addClass("seleccionado");
			for (var i = 0; i < 6; i++) {
				if (i !== 0) {
					$(`td:eq(${i})`).removeClass("seleccionado");
				}
			}
			colorSelected = $(`.${clase}:eq(0)`).css("background-color")
			$("pincel").html("Pincel Activado !");
		})
	});

	$(".tablerodibujo tr td").mouseover(paint)
}
function genera_tabla() {

	var tabla = document.createElement("table");
	var tblBody = document.createElement("tbody");
	tblBody.setAttribute("class", "tablerodibujo")
	var totalfilas = 0;

	for (var i = 0; i < 30; i++) {

		// Crea las filas de la tabla

		var fila = document.createElement("tr");

		for (var j = 0; j < 30; j++) {
			if (i > 1) var totalfilas = 30;

			var celda = document.createElement("td");
			celda.setAttribute("id", totalfilas);
			fila.appendChild(celda);
			totalfilas++;
		}

		// agrega la fila al final de la tabla (al final del elemento tblbody)
		tblBody.appendChild(fila);
	}
	// posiciona el <tbody> debajo del elemento <table>
	tabla.appendChild(tblBody);
	// appends <table> into <body>
	$("#zonadibujo").append(tabla);

	// modifica el atributo "border" de la tabla y lo fija a "2";
	tabla.setAttribute("border", "2");
}

function pintar(selectionado) {
	for (var i = 0; i < 6; i++) {
		if (document.getElementsByTagName("td")[i].classList.contains("seleccionado")) {
			var name = $(`td:eq(${i})`).classList[0];
			$("#9").css('background-color', "red");
		}
	}
}

function paint() {

	$(this).css('background-color', colorSelected);

}