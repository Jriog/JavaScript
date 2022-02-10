$(document).ready(inicio);
let colorSelected;

function inicio() {
  genera_tabla();

  $(".color1:eq(0)").click(trigger)

  $(".color2:eq(0)").click(trigger1)
  $(".color3:eq(0)").click(trigger2)
  $(".color4:eq(0)").click(trigger3)
  $(".color5:eq(0)").click(trigger4)
  $(".color6:eq(0)").click(trigger5)
  
  $(".tablerodibujo tr td").mouseover(paint)
}
function genera_tabla() {

  var body = $("#zonadibujo");

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tblBody.setAttribute("class", "tablerodibujo")
  var added = 0;

  for (var i = 0; i < 30; i++) {

    // Crea las hileras de la tabla

    var hilera = document.createElement("tr");

    for (var j = 0; j < 30; j++) {
      if (i > 1) var added = 30;
      
      var celda = document.createElement("td");
      celda.setAttribute("id", added);
      hilera.appendChild(celda);
      added++;
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.append(tabla);

  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}

function trigger() {
  $(".color1:eq(0)").addClass("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 0) {
      $(`td:eq(${i})`).removeClass("seleccionado");
    }
  }
  colorSelected = $(".color1:eq(0)").css("background-color")
  $("pincel").html("Pincel Activado !");
}

function trigger1() {
    $(".color2:eq(0)").addClass("seleccionado");
    for (var i = 0; i < 6; i++) {
      if (i !== 1) {
        $(`td:eq(${i})`).removeClass("seleccionado");
      }
    }
    colorSelected = $(".color2:eq(0)").css("background-color")
    $("pincel").html("Pincel Activado !");
}

function trigger2() {
    $(".color3:eq(0)").addClass("seleccionado");
    for (var i = 0; i < 6; i++) {
      if (i !== 2) {
        $(`td:eq(${i})`).removeClass("seleccionado");
      }
    }
    colorSelected = $(".color3:eq(0)").css("background-color")
    $("pincel").html("Pincel Activado !");
}
function trigger3() {
    $(".color4:eq(0)").addClass("seleccionado");
    for (var i = 0; i < 6; i++) {
      if (i !== 3) {
        $(`td:eq(${i})`).removeClass("seleccionado");
      }
    }
    colorSelected = $(".color4:eq(0)").css("background-color")
    $("pincel").html("Pincel Activado !");
}
function trigger4() {
    $(".color5:eq(0)").addClass("seleccionado");
    for (var i = 0; i < 6; i++) {
      if (i !== 4) {
        $(`td:eq(${i})`).removeClass("seleccionado");
      }
    }
    colorSelected = $(".color5:eq(0)").css("background-color")
    $("pincel").html("Pincel Activado !");
}
function trigger5() {
    $(".color6:eq(0)").addClass("seleccionado");
    for (var i = 0; i < 6; i++) {
      if (i !== 5) {
        $(`td:eq(${i})`).removeClass("seleccionado");
      }
    }
    colorSelected = $(".color6:eq(0)").css("background-color")
    $("pincel").html("Pincel Activado !");
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