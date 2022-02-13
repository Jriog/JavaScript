const API_URL = 'http://jsonplaceholder.typicode.com'



print()


function print() {
   const HTMLResponse = $("#app")
   fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((users) => {
         const tpl = users.map(user => `<li> ${user.name} ||${user.email} </li>`)
         HTMLResponse.html(`<ul>${tpl}</ul>`)
      })
}


$("#idPerson").keyup(function () {


   if($("#idPerson").val() == '') print()

   const HTMLResponse = $("#app")
   var idPerson = $("#idPerson").val()
   fetch(`${API_URL}/users?id=${idPerson}`)
      .then((response) => response.json())
      .then((users) => {
         const tpl = users.map(user => `<li> ${user.name} ||${user.email} </li>`)
         HTMLResponse.html(`<ul>${tpl}</ul>`)
      })

});