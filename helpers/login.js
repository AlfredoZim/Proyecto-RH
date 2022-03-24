async function getVals(){
    return await fetch('http://localhost:3000/users',
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res => res.json()))
    .then(resData => { return resData})
    .catch(err => console.log(err))
  }



async function searchUser(user,pass){
  let resConsult = await getVals();

  let userAndPass = resConsult.find(e => e.userName === user)
 
  if(userAndPass != undefined){
    if(user === userAndPass.userName && pass === userAndPass.password){
      return ["Usuario logueado","../modales/index.html"];
    }else{
      return ["Datos de usuario erroneos", ""];
    }
  }else{
    return ["Usuario no encontrado",""];
  }
}




async function login() {
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
    result = await searchUser(usuario,password)
    alert(result[0]);
    window.location.href = result[1]; 
  }
}


