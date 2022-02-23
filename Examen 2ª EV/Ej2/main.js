let db = [];
let url;
let C_results = 10;
let contador = 0;

window.addEventListener("load", inicio);
function inicio() {

	url = `https://randomuser.me/api/?results=${C_results}&format=json`

	getUsersJquery();
	
	document.getElementById("ver").addEventListener("click", printUsers);
}

//PRINT USERS:
const printUsers = () => {

	$("#users-container").empty();

	C_results = document.getElementById("select").value;

	for (var u = 0; u < C_results; u++) {
		
		let $table = $("<table>");
		$table.attr("class", `user-table`);
		$table.appendTo("#users-container");
		let $tbody = $table.append("<tbody />").children("tbody");

		let $th = $tbody.append("<th />").children("th:last");
		$th.html(`${db[0][u].name.first}`);

		let $tr = $th.append("<tr />").children("tr:last");
		$tr.html(`${db[0][u].location.country}`);

		let $tr3 = $th.append("<tr />").children("tr:last");
		$tr3.html(`${db[0][u].email}`);

		let $tr4 = $th.append("<tr />").children("tr:last");

		var myImage = $('<img/>');
		myImage.attr('width', 75);
		myImage.attr('height', 75);
		myImage.attr('src', db[0][u].picture.large);

		$tr4.html(myImage);

		$table.hide();
	}

	$("div#users-container table").each(function (index) {
		$(this)
			.delay(100 * index)
			.fadeIn(100);
	});
};

//GET USERS FROM API USING JQUERY
const getUsersJquery = () => {
	$.getJSON(url, function (respuesta) {
		$.each(respuesta, function (clave, valor) {
			db.push(valor);
		});
	});
};