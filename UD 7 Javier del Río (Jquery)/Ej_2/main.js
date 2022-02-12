$(document).ready(inicio);
let colorSelected;
let arrayclassnames = ["color1", "color2", "color4", "color3", "color5", "color6"]
let Ncolor = 0;
let pincelactivado = false;
let elementselected = "";

function inicio() {

	genera_tabla();
	$("body").click( function (event) {
		var clasename = event.target.className;
		console.log("🚀 ~ file: main.js ~ line 12 ~ $ ~ clasename", clasename)
		Ncolor = clasename.substr(5, 6);
		console.log("🚀 ~ file: main.js ~ line 13 ~ $ ~ Ncolor", Ncolor)

		elementselected = `.${clasename}:eq(0)`;
        	
		$(elementselected).click(colorize)
	});

	$(".tablerodibujo tr td").mouseover(pintar)
}

function pintar() {

	$(this).css('background-color', colorSelected);

}

function colorize() {
	$(elementselected).addClass("seleccionado");
	for (var i = 0; i < arrayclassnames.length; i++) {
		if (i !== Ncolor) {
			$(`td:eq(${i})`).removeClass("seleccionado");
		}
	}
	colorSelected = $(elementselected).css("background-color");

	if (!pincelactivado) {
		pincelactivado = true;
		$("#pincel").html = "<b>Pincel activado</b>";
	} else {
		pincelactivado = false;
		$("#pincel").html = "<b>Pincel desactivado</b>";
	}
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