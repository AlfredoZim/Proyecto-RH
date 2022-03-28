import showMessage from './messageReset.js';
const modal = new showMessage();
modal.waitEvents();
let regexEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function resetForm() {
    let email = document.getElementById("emailUser").value;
    document.getElementById("formReset").addEventListener("click", function(event){
        event.preventDefault();
    })
    
    if(email.match(regexEmail)){
        modal.showModal(`Tu contraseña fue enviada a ${email} `);
    }else{
        alert("Ingresa un correo electronico valido")
    }

}

