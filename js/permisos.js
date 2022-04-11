/**
 * Función que devuelve el username de la sesión.
 * @returns username de la sesión.
 */
function getUserName(){
    let typeUsers = document.cookie.split(' ');
    let userName = undefined;
    typeUsers.forEach(element => {
        let parts = element.split('=');
        if("UserName" == parts[0])
            userName = parts[1];
    });
    return userName;    
}

/**
 * Función que regresa el tipo de usuario de la sesión.
 * @returns tipo de usuario de la sesión.
 * @author Joel Alcantara
 */
function getTipoUsuario(){
    let typeUsers = document.cookie.split(' ');
    let tipoUs = document.cookie.split('=')[1];
    typeUsers.forEach(element => {
        let parts = element.split('=');
        if("TypeSession" == parts[0])
            tipoUs = parts[1];
    });
    return tipoUs;
}

/**
 * Función que valida si esta la sesión y si no redirecciona a el login
 * @author Joel Alcantara
 */
function validaSesion(){
    let typeUser = getTipoUsuario();
    if(typeUser === "RH" || typeUser == "EN" || typeUser  ===  "AS"){
        console.log(document.cookie.split('=')[1]);
        console.log("Mostrar NAV correspondiente");
    }else{
        location.href = "../html/Login/index.html";
    }
}

validaSesion();
        
    