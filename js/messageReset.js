export default class showMessage{
    constructor() {
        this.modalVisible = false;
        this.modal;
        //this.butSend = document.getElementById("bSend");
        //this.form =  document.getElementById("formReset");
        
        const myElement = document.querySelector('.shadow-host');
        this.shadow = myElement.attachShadow({mode: 'open'});

        this.shadow.innerHTML =  `
        <style>
            
            /* The Modal (background) */
            .modal {
                font-family: 'Fredoka', sans-serif;
                display: none; 
                position: fixed; 
                z-index: 1; 
                padding-top: 20vh; 
                left: 0;
                top: 0;
                width: 100%; 
                height: 100%; 
                overflow: auto; 
                background-color: rgba(0,0,0,0.4); 
                text-align: center;
            }

    
            /* Modal Content */
            .modal-content {
                
                position: relative;
                background-color: #fefefe;
                margin: auto;
                padding: 0;
                border: 1px solid #888;
                width: 50%;
                height: 50%;
                border-radius: 10px; 
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
                -webkit-animation-name: animatetop;
                -webkit-animation-duration: 0.4s;
                animation-name: animatetop;
                animation-duration: 0.4s
            }

            .modal-header {
                height: 10%;
                padding: 2px 16px;
                }

            .modal-body {
                padding: 2px 16px;
                margin: 20px 2px;
                font-size: 1rem;
                height: 50%;
            }

            button{
                font-family: 'Fredoka', sans-serif;
                border-radius: .5rem;
                background-color:#e2747e;
                box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .2);
                border: 1px;
                color: #fff;
                cursor: pointer;
                font-size: 1rem;
                height: 2rem;
                width: 10rem;
            }
            /* Add Animation */
            @-webkit-keyframes animatetop {
                from {top:-300px; opacity:0} 
                to {top:0; opacity:1}
            }
            @keyframes animatetop {
                from {top:-300px; opacity:0}
                to {top:0; opacity:1}
            }
            /* The Close Button */
            .close {
                color: black;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }

        </style>
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <h1>Exitoso</h1>
                    <p class="text"></p>
                </div>
                <div>
                    <button class="cerrar">Cerrar</button>
                <div>
            </div>
        </div>`
    
    
    }
     

    showModal(text = "Operación exitosa") {
        this.shadow.querySelector('.text').innerHTML = text;
        this.shadow.modalVisible = true;
        this.shadow.modal.style.display = 'block';
    }

    hideModal() {
        this.shadow.modalVisible = false;
        this.shadow.modal.style.display = 'none';
    }

    waitEvents() {
        this.shadow.modal = this.shadow.querySelector(".modal");
        //this.butSend.addEventListener('click', this.showModal.bind(this));
        /*this.form.addEventListener("click", function(event){
            event.preventDefault();
          })*/
        //this.querySelector("button").addEventListener('click', this.showModal.bind(this)); 
        this.shadow.querySelector(".close").addEventListener('click', this.hideModal.bind(this));
        this.shadow.querySelector(".cerrar").addEventListener('click', this.hideModal.bind(this));
    }

    /*diswaitEvents() {
        this.querySelector("button").removeEventListener('click', this.showModal);
        this.querySelector(".close").removeEventListener('click', this.hideModal);
        this.querySelector(".cerrar").removeEventListener('click', this.hideModal);
    }*/
    
}

