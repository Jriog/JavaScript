$(document).ready(inicio);
let colorSelected;

function inicio() {
  genera_tabla();
  //document.getElementsByClassName("color1")[0].addEventListener("click",trigger);
  $(".color1:eq(0)").click(trigger)
  //document.getElementsByClassName("color2")[0].addEventListener("click",trigger1);
  $(".color2:eq(0)").click(trigger1)
  //document.getElementsByClassName("color3")[0].addEventListener("click",trigger2);
  $(".color3:eq(0)").click(trigger2)
  //document.getElementsByClassName("color4")[0].addEventListener("click",trigger3);
  $(".color4:eq(0)").click(trigger3)
  // document.getElementsByClassName("color5")[0].addEventListener("click",trigger4);
  $(".color5:eq(0)").click(trigger4)
  //document.getElementsByClassName("color6")[0].addEventListener("click",trigger5);
  $(".color6:eq(0)").click(trigger5)
  //document.getElementById("zonadibujo").addEventListener("click",clickCell)
  //document.getElementsByTagName("table")[1].addEventListener("click",clickCell)
  clickCell();
  $(".tablerodibujo tr td").mouseover(paint)
}
function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = $("#zonadibujo");

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tblBody.setAttribute("class", "tablerodibujo")
  var added = 0;
  // Crea las celdas
  for (var i = 0; i < 30; i++) {

    // Crea las hileras de la tabla

    var hilera = document.createElement("tr");

    for (var j = 0; j < 30; j++) {
      if (i > 1) var added = 30;
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
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

function clickCell() {

  for (var row = 0; row < 29; row++) {
    for (var cell = 0; cell < 29; cell++) {
      document.getElementById(cell).addEventListener("click", pintar);
    }
  }

}


function trigger() {
  $(".color1:eq(0)").addClass("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 0) {
      $(`td:eq(${i})`).removeClass("seleccionado");
    }
  }
  colorSelected = $(".color1:eq(0)").css("background-color")
  document.getElementById("pincel").innerHTML = "Pincel Activado !"
}

function trigger1() {
  document.getElementsByClassName("color2")[0].classList.add("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 1) {
      document.getElementsByTagName("td")[i].classList.remove("seleccionado");
    }
  }
  colorSelected = $(".color2:eq(0)").css("background-color")
  document.getElementById("pincel").innerHTML = "Pincel Activado !"
}

function trigger2() {
  document.getElementsByClassName("color3")[0].classList.add("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 2) {
      document.getElementsByTagName("td")[i].classList.remove("seleccionado");
    }
  }
  colorSelected = $(".color3:eq(0)").css("background-color")
  document.getElementById("pincel").innerHTML = "Pincel Activado !"
}
function trigger3() {
  document.getElementsByClassName("color4")[0].classList.add("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 3) {
      document.getElementsByTagName("td")[i].classList.remove("seleccionado");
    }
  }
  colorSelected = $(".color4:eq(0)").css("background-color")
  document.getElementById("pincel").innerHTML = "Pincel Activado !"
}
function trigger4() {
  document.getElementsByClassName("color5")[0].classList.add("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 4) {
      document.getElementsByTagName("td")[i].classList.remove("seleccionado");
    }
  }
  colorSelected = $(".color5:eq(0)").css("background-color")
  document.getElementById("pincel").innerHTML = "Pincel Activado !"
}
function trigger5() {
  document.getElementsByClassName("color6")[0].classList.add("seleccionado");
  for (var i = 0; i < 6; i++) {
    if (i !== 5) {
      document.getElementsByTagName("td")[i].classList.remove("seleccionado");
    }
  }
  colorSelected = $(".color6:eq(0)").css("background-color")
  document.getElementById("pincel").innerHTML = "Pincel Desactivado !"
}

function pintar(selectionado) {
  for (var i = 0; i < 6; i++) {
    if (document.getElementsByTagName("td")[i].classList.contains("seleccionado")) {
      var name = document.getElementsByTagName("td")[i].classList[0];
      document.getElementById(9).style.backgroundColor = "red";
    }
  }
}

function paint() {


  $(this).css('background-color', colorSelected);


}