const API_URL = 'http://jsonplaceholder.typicode.com';
const Resources = "albums";
const HTMLResponse = $("#app")
print();

function print() {


	fetch(`${API_URL}/${Resources}`)
		.then((response) => response.json())
		.then((datos) => {
			const tpl = datos.map(dato => `<p> ${dato.id} - ${dato.title} </p>`)
			HTMLResponse.html(`${tpl} <br>`)
		})
}

$("#id").keyup(function () {

	if ($("#id").val() == '') print()

	var id = $("#id").val()
	fetch(`${API_URL}/${Resources}?id=${id}`)
		.then((response) => response.json())
		.then((datos) => {
			const tpl = datos.map(dato => `<p>${dato.id} - ${dato.title}</p>`)
			HTMLResponse.html(`${tpl}`)
		})

});