
class Modal extends HTMLElement {
    constructor() {
        super();
        this.open;
        this.modalVisible = false;
        this.modal;
        this.attachShadow({ mode: 'open' }); // shadow done open para ser modificado desde dom principal
        this.shadowRoot.innerHTML = `
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

        <button>Open Modal</button>
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <h1>Error al ingresar los datos</h1>
                    <slot><slot>
                </div>
                <div>
                    <button class="cerrar">Cerrar</button>
                <div>
            </div>
        </div>`
    }

     /*Función que se ejecuta al iniciar el componente
        con showModal se cambian los atributos para ser visible
        con hideModal se cambiar para ocultarse
     */

    connectedCallback() {
      
        this.modal = this.shadowRoot.querySelector(".modal");
        this.shadowRoot.querySelector("button").addEventListener('click', this.showModal.bind(this)); 
        this.shadowRoot.querySelector(".close").addEventListener('click', this.hideModal.bind(this));
        this.shadowRoot.querySelector(".cerrar").addEventListener('click', this.hideModal.bind(this));

    }
    disconnectedCallback() {
        this.shadowRoot.querySelector("button").removeEventListener('click', this.showModal);
        this.shadowRoot.querySelector(".close").removeEventListener('click', this.hideModal);
        this.shadowRoot.querySelector(".cerrar").removeEventListener('click', this.hideModal);
    }
    showModal() {
        this.modalVisible = true;
        this.modal.style.display = 'block';
    }
    hideModal() {
        this.modalVisible = false;
        this.modal.style.display = 'none';
    }

    
}
customElements.define('pp-modal',Modal);