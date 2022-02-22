$(document).ready(initialize);

async function initialize() {

  /* getUsersFetch();
  getUsersXhr(); */
  //getUsersJquery();
  await getUsersFetchAsynAwait();
  //await getUsersJqueryAsyncAwait();
  loadFilteredUsers();
  console.log(db)
  printUsers();
  search();
}

let db = [];
let filteredUsers = [];

let filtro = "name"
let category = "users";

let url = `https://jsonplaceholder.typicode.com/${category}`

const loadFilteredUsers = () => {
  filteredUsers = db.filter((user) => {

    return user[filtro].toLowerCase().includes($("#searcher").val().toLowerCase());

  });
};

//SEARCH
const search = () => {
  $("#searcher").keyup(function () {
    filteredUsers = db.filter((user) => {
      return user[filtro].toLowerCase().includes($(this).val().toLowerCase());
    });
    printUsers();
  });
};

//PRINT USERS:
const printUsers = () => {

  $("#users-container").empty();

  for (var u = 0; u < filteredUsers.length; u++) {
    let $table = $("<table>");
    $table.attr("class", `user-table`);
    $table.appendTo("#users-container");
    let $tbody = $table.append("<tbody />").children("tbody");

    Object.keys(filteredUsers[u]).forEach(key => {

      if (typeof filteredUsers[u][key] == "object") {
        return
      }

      let $tr = $tbody.append("<tr />").children("tr:last");
      $tr.html(`${filteredUsers[u][key]}`);

    });


    $table.hide();
  }

  $("div#users-container table").each(function (index) {
    $(this)
      .delay(100 * index)
      .fadeIn(100);
  });
};

//GET USERS FROM API USING JQUERY WITH ASYNC AWAIT
const getUsersJqueryAsyncAwait = async () => {
  try {
    const response = await $.getJSON(
      url
    );
    $.each(response, function (clave, valor) {
      db.push(valor);
    });
  } catch (err) {
    console.log(err);
  }
};

//GET USERS FROM API USING FETCH WITH ASYNC AWAIT
const getUsersFetchAsynAwait = async () => {
  try {
    const response = await fetch(url);
    const users = await response.json();
    users.map((user) => {
      db.push(user);
    });
    return users;
  } catch (err) {
    console.log(err);
  }
};

//GET USERS FROM API USING JQUERY
const getUsersJquery = () => {
  $.getJSON(url, function (respuesta) {
    $.each(respuesta, function (clave, valor) {
      db.push(valor);
    });
  });
};

//GET USERS FROM API USING XHR
const getUsersXhr = () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      users.map((user) => {
        db.push(user);
      });
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

//GET USERS FROM API USING FETCH
const getUsersFetch = () => {
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      users.map((user) => {
        db.push(user);
      });
    });
};
