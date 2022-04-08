async function getVals(){
  const data = {
      "users": [
        {
          "id": 1,
          "userName": "J0vani",
          "password": "password123",
          "typeUs" : "RH"
        },
        {
          "id": 2,
          "userName": "joel",
          "password": "password",
          "typeUs" : "RH" 
        },
        {
          "userName": "Juan",
          "password": "juan",
          "id": 3,
          "typeUs" : "RH"
        },
        {
          "userName": "Alfredo",
          "password": "alfredo",
          "id": 4,
          "typeUs" : "RH"
        }
      ]
    }

  let userKey = JSON.parse(localStorage.getItem("userLog"));

  if(userKey){
    return userKey;
  }else{
    console.log("No estaba estaba")
    localStorage.setItem("userLog", JSON.stringify(data));
    userKey = JSON.parse(localStorage.getItem("userLog"));
  }
  return userKey;
}



async function searchUser(user,pass){
  let resConsult = await getVals();

  console.log(resConsult)
  let userAndPass = resConsult.users.find(e => e.userName === user)
  
  if(userAndPass != undefined){
    if(user === userAndPass.userName && pass === userAndPass.password){
      let loginDuration = new Date();
      loginDuration.setTime(loginDuration.getTime()+(1*60*60*1000));
      document.cookie = `TypeSession=${userAndPass.typeUs};` +loginDuration.toGMTString()+"; path=/";
      return ["Usuario logueado","../inicio.html"];
    }else{
        return ["Datos de usuario erroneos", ""];
    }
  }else{
    let aspirante = getElemento('aspirante','email',document.getElementById('user').value);
    if(aspirante!=undefined){
      if(aspirante["password"]==document.getElementById('pass').value){
        let loginDuration = new Date();
        loginDuration.setTime(loginDuration.getTime()+(1*60*60*1000));
        document.cookie = `TypeSession=${"AS"} UserName=${aspirante["email"]};` +loginDuration.toGMTString()+"; path=/";
        return ["Usuario logueado","../inicio.html"];
      }else
        return ["Password Incorrecto",""];
    }else{ 
      return ["Usuario no encontrado",""];
    }
  }
}




async function login() {
  console.log("Login")
  let usuario = document.getElementById('user').value;
  let password = document.getElementById('pass').value;
  let result;
  document.getElementById("formul").addEventListener("click", function(event){
    event.preventDefault();
  })

  if(!usuario){
    alert("No hay usuario");
    return false;
  }

  else if(!password){
    alert("No hay password");
    return false;
  }

  else {
    result = await searchUser(usuario,password);
    console.log("Results: " + result[1])
    alert(result[0]);
    window.location.href = result[1]; 
  }
}


