$(document).ready(inicio);
let colorSelected;
let estadopincel = false;

function inicio() {
	genera_tabla();
	seleccionarColor()
	A_D_Pincel();
	pintar()
}

function pintar() {

	$("table#tablero_dibujo td").mouseover(function () {
		if (!estadopincel) {
		  return;
		}
		$(this).removeClass($(this).attr("class"));
		$(this).addClass(colorSelected);
	  });

}

function seleccionarColor() {
	$("table:first td").click(function () {
		if ($(this).attr("id") === "pincel") {
		  return;
		}
		$("table:first td").removeClass("seleccionado");
		colorSelected = $(this).attr("class");
		$(this).addClass("seleccionado");
	  });
}


function A_D_Pincel() {
	$("table#tablero_dibujo").click(function () {
		if (!estadopincel) {
			estadopincel = true;
			$("#pincel").html("<b>Pincel Activado</b>");
		} else {
			estadopincel = false;
			$("#pincel").html("<b>Pincel desactivado</b>");
		}
	});
}

function genera_tabla() {

	let $tabla = $("<table>");
	$tabla.attr("id", `tablero_dibujo`);
	$tabla.attr("style", `border: 1px solid black;`);
	let $tbody = $tabla.append("<tbody />").children("tbody");

	for (let h = 1; h <= 30; h++) {
		let $tr = $tbody.append("<tr />").children("tr:last");

		for (let w = 1; w <= 30; w++) {
			let $td = $tr.append("<td/>").children("td");
			$td.attr("style", `border: 1px solid black; padding: 10px;`);
		}
	}
	$tabla.appendTo("#zonadibujo");

}