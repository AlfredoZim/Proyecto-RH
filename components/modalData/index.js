export default class modalDatas {
    constructor(){
        this.bodyResult = document.getElementById("body");
        this.modal;
        this.modalVisible = false;

        const myElement = document.querySelector('.shadow-host');
        this.shadow = myElement.attachShadow({mode: 'open'});

        this.shadow.innerHTML = 
        `
        <style>

        .back{
            display: none;
            width: 100%;
            height: 100vh;
            background-color: #59595b75 ;
            margin: auto;
            padding: 0;
            left: 0;
            right: 0;
            top: 0;
            position: absolute;
        }

            .dataModal {
                background-color: white;
                width: 70%;
                max-height: 80%;
                position: absolute;
                margin: auto;
                padding: 0;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                border-radius: 5px;
                z-index: 5;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                overflow: auto;
            }

            .dataHeader{
                background: #0d3f4d;
                height;: 10%;
                padding: 1%;
                border-radius: 5px 5px 0 0;
                color: white;
            }

            .close{
                float: right;
                cursor: pointer;
            }

            .sectionDatas{
                padding: 0rem 1rem 1rem 1rem;
                width: 100%;
            }

            td{
                padding: 1rem 10px;
                width: 50%;
            }

            .buttonsSec{
                display: flex;
                justify-content: space-between;
                padding: 1rem;
            }

            .buttonsSec > button{
                
                border: none;
                color: white;
                border: 3px;
                cursor: pointer;
                padding: 10px;
            }
            
            @media (max-width: 578px){
                .dataModal{
                    width: 90%;
                }
            }

            @media (min-width: 768px) and (max-width: 992px){
                .dataModal{
                    height: 60%;
                }
            }

        </style>

        <div class="back">
            <div class="dataModal">
                <div class="dataHeader">
                    Resultados del aspirante
                    <span class="close">X</span>
                </div>
                <div> 
                    <table class = "sectionDatas">
                    </table>
                </div>
                <div class="buttonsSec">
                    <button id="aceptarAsp" style="background-color: #E65251">Aceptas aspirante</button>
                    <button id="eliminarAsp" style="background-color: #12C86E">Eliminar aspirante</button>
                    <button id="close" style="background-color: #146ebe">Ver más detalles</button>
                </div>
            </div>
        </div>
        `;

        this.modal = this.shadow.querySelector(".back");
        this.modal.querySelector('.close').addEventListener('click', this.hideModal.bind(this));
    }

    showModal(val){
        let datas = JSON.parse(localStorage.getItem('userExam'));
        let datasArr = Object.values(datas);
        let result = datasArr.find(element => element.email === val);

        this.modal.querySelector('.sectionDatas').innerHTML = 
        `
        <tr>
            <td>
                Nombre del aspirante:
            </td>
            <td>${result.nombre}</td>
        </tr>
        <tr>
            <td>
                Area a la que aplica:
            </td>
            <td>${result.area}</td>
        </tr>
        <tr>
            <td>
                Nombre de la vacante:
            </td>
            <td>${result.vacante}</td> 
        </tr>
        <tr>
            <td>
                Resultado del exámen:
            </td>
            <td>${result.examen}</td> 
        </tr>
        <tr>
            <td>
                Cantidad de respuestas correctas:
            </td>
            <td>${result.respuestasCorrectas}</td>
        </tr>
        <tr>
            <td>
                Notas del aspirante:
            </td>
            <td>${result.notas}</td>
        </tr>
        `;

        this.modalVisible = true;
        this.bodyResult.style.overflow = "hidden";    
        this.modal.style.display = "block";
    }

    hideModal(){
        this.modalVisible = false;
        this.modal.style.display = "none";
        this.bodyResult.style.overflow = "visible"; 
    }

}

