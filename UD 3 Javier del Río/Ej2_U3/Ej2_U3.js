function cumpledomingo() {
    var dd = (document.getElementById("day").value);
    var mm = (document.getElementById("month").value);
    var anos = '';

    for(let i=2021; i<=2100;i++){
        let fecha = i,mes,dia;
        
        if(new Date(fecha).getDay == 0){
            anos += i + ' - ';
        }

    }
    return document.getElementById("anos").innerHTML == anos;
}