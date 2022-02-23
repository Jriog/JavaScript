let db = [];
let url;
let C_results = 10;

window.addEventListener("load", inicio);
function inicio() {

	url = `https://randomuser.me/api/?results=${C_results}&format=json`
	getUsersXhr();
	document.getElementById("ver").addEventListener("click", printUsers);
}

//PRINT USERS:
const printUsers = () => {

	C_results = document.getElementById("select").value;
	let container = document.getElementById("users-container");

	for (var u = 0; u < C_results; u++) {

		let table = document.createElement("table");
		table.setAttribute("class", `user-table`);

		let tbody = document.createElement("tbody");

		let name = document.createElement("tr");
		let textname = document.createTextNode(db[u].name.first);
		name.appendChild(textname)

		let country = document.createElement("tr");
		let textcountry = document.createTextNode(db[u].country);
		country.appendChild(textcountry)

		let email = document.createElement("tr");
		let textemail = document.createTextNode(db[u].email);
		email.appendChild(textemail)

		let img = document.createElement("img");
		img.setAttribute("src", db[u].picture.large);
		img.setAttribute("width", "50px");
		img.setAttribute("height", "50px");


		tbody.appendChild(name);
		tbody.appendChild(country);
		tbody.appendChild(email);
		tbody.appendChild(img);

		table.appendChild(tbody);
		container.appendChild(table);
	}
	container.appendChild(document.createTextNode("-----------Nuevo registro------------"))
};

//GET USERS FROM API USING XHR
const getUsersXhr = () => {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let users = JSON.parse(this.responseText);
			users.results.map((user) => {
				db.push(user);
			});
		}
	};
	xhr.open("GET", url, true);
	xhr.send();
};

