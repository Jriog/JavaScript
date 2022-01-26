function inputText() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var atrname = prompt("Dime el valor del atributo name");

    var inputtextname = document.createElement("input");
    inputtextname.setAttribute("type", "text");
    inputtextname.setAttribute("name", atrname);
    inputtextname.setAttribute("value", atrname);

    div.appendChild(inputtextname);
    div.appendChild(br);
}

function inputPassword() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var atrpass = prompt("Dime el valor del atributo name");

    var inputpassword = document.createElement("input");
    inputpassword.setAttribute("type", "password");
    inputpassword.setAttribute("name", atrpass);

    div.appendChild(inputpassword);
    div.appendChild(br);
}

function textArea() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var textarea = prompt("Dime el valor del atributo name");


    var inputtextarea = document.createElement("textarea");
    inputtextarea.setAttribute("name", textarea);
    inputtextarea.setAttribute("rows", 5);
    inputtextarea.setAttribute("cols", 40);

    div.appendChild(inputtextarea);
    div.appendChild(br);
}

function crearlabel() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var atrfor = prompt("Dime el valor del atributo for");


    label = document.createElement("label");
    label.setAttribute("for", atrfor);
    texto = document.createTextNode("Esto es un label")

    label.appendChild(texto);
    div.appendChild(label);
    div.appendChild(br);
}

function crearimg() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var src = prompt("Dime la ruta de la imagen");


    img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "Esto es una imagen")
    img.setAttribute("width", 100);
    img.setAttribute("height", 100);

    div.appendChild(img);
    div.appendChild(br);
}

function crearcheckbox() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var checkboxname = prompt("Dime el valor del atributo name");
    var checkboxvalue = prompt("Dime el valor del atributo value");

    var checboxtag = document.createElement("input");
    checboxtag.setAttribute("type", "checkbox");
    checboxtag.setAttribute("name", checkboxname);
    checboxtag.setAttribute("value", checkboxvalue);

    div.appendChild(checboxtag);
    div.appendChild(br);
}

function crearradio() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var rbuttonname = prompt("Dime el valor del atributo name");
    var rbuttonvalue = prompt("Dime el valor del atributo value");

    var rbutton = document.createElement("input");
    rbutton.setAttribute("type", "radio");
    rbutton.setAttribute("name", rbuttonname);
    rbutton.setAttribute("value", rbuttonvalue);

    div.appendChild(rbutton);
    div.appendChild(br);
}

function crearboton() {
    var br = document.createElement("br");
    let div = document.getElementById("div1");
    var buttonname = prompt("Dime el valor del atributo name");
    var buttonvalue = prompt("Dime el valor del atributo value");

    var button = document.createElement("button");
    button.setAttribute("name", buttonname);
    button.setAttribute("value", buttonvalue);

    div.appendChild(button);
    div.appendChild(br);
}