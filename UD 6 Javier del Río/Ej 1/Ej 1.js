let tareas = ["Hacer Colada", "Preparar la cena", "Tirar la basura"];
let contador = 0
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("addTarea").addEventListener("click", addTarea);

    //Crear elemento
    ul = document.createElement("ul");

    //Añadir atributos
    ul.setAttribute("id", "list");

    var cont = document.getElementById("div1");
    cont.appendChild(ul);
    var Ulist = document.getElementById("list");

    for (let i = 0; i < tareas.length; i++) {
        var texto = document.createTextNode(tareas[i]);
        li = document.createElement("li");
        li.appendChild(texto);
        Ulist.appendChild(li);
    }

}

function addTarea() {

    li = document.createElement("li");
    //Crear texto
    var texto = document.createTextNode(document.getElementById("tareaInput").value);
    tareas.push(document.getElementById("tareaInput").value);

    li.appendChild(texto);

    var cont = document.getElementById("div1");
    cont.appendChild(ul);
    var Ulist = document.getElementById("list");
    Ulist.appendChild(li);


}