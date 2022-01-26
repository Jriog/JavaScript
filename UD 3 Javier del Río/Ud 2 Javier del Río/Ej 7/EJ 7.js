function controlacceso(){
    var nombre = (document.getElementById('nombre').value);
    if((nombre == 'adolfo')||(nombre == 'Adolfo')){
        document.write("Has superado el acceso");
    }else{
        
        document.write("No has superado el acceso");
    }
}