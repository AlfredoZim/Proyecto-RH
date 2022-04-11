const container = document.getElementById("container");
let viewRH = `
<section style="display:block;">
<div class="complete">
    <div>Examen : </div>
    <div class="title" style="background: #0d3f4d;
    color: #fff;
    width: 100%;
    
    padding: 10px 10px;">Preguntas<div id="register" class="icon-button2 derecha" style="margin-top: -5px;"><i class="fa-solid fa-square-plus"></i></div></a></div></div>
    <div id="preguntas" style="display:block;width:100%;heigth: 100%;" >
        
    </div>
    
</div>

</section>
<div id="m-register" class="modal-registered">
        <div class="modal">
        <form>
            <div class="modal-title">
                <h1>Agregar pregunta</h1>

                <h1 class="modal-title" id="mensajeModal"></h1>
                <br>
            </div>
            <div class="modal-body">
                
                <div class="divDatos">
                    <label for="nombre">*Pregunta:</label><br>
                    <textarea id="pregunta" ></textarea><br>
                    <label id="errornombre" for="nombre" class="mensajeError"></label><br>
                </div>
                <div class="divDatos">
                    <div style="display:block;margin-right:50px;">
                        <div style="float-left"><label >Respuestas</label></div>
                        <div class="icon-button derecha" >
                            <i class="fa-solid fa-square-plus" id="agregar_resp"></i>
                        </div>
                    </div>
                    <div id="posibles-respuesas" style="clear: both; width: 100%;display:inline-block;">
                    </div>
                </div>
                               
                <br>
                <div></div>
                
            </div>
            <div class="divButton modal-buttons">
                <input id="resetButton" type="reset" value="Borrar información">
                <button onclick="agregarPregunta()" class="accept">Guardar</button>
                <button id="close" class="close">Cancelar</button>
            </div>
            </form>
        </div>
    </div>
    <div id="m-register2" class="modal-registered2">
    <div class="modal2">
        <h1 class="modal-title2" id="mensajeModal2"></h1>
        <div class="divButton">
            <button id="close2">Cerrar</button>
        </div>
    </div>
    </div>

    
`;

container.innerHTML = viewRH;

const register = document.getElementById("register");
const agregar_posible_resp = document.getElementById("agregar_resp");
const posiblesResp = document.getElementById("posibles-respuesas");
const modal_registry = document.getElementById("m-register");
const close_modal_registry = document.getElementById("close");
const reset = document.getElementById("resetButton");
let examen= getElemento("examenes", "id_examen", "1")
console.log(examen)
var examenes =[]
const preguntas = examen.preguntas
llenarTabla(preguntas)
var pregunta={
    
};
agregar_posible_resp.addEventListener('click', () => {
    let pos_resp= document.createElement("div")
    let radio_resp = document.createElement("input")
    let input_resp= document.createElement("input")
    let borrar_resp= document.createElement("div")
    radio_resp.setAttribute("type", "radio");
    radio_resp.classList.add("respuesta-radio")
    radio_resp.setAttribute("name","respuestaCorrecta")
    borrar_resp.innerHTML= '<i class="fa-solid fa-trash-can"></i>'
    borrar_resp.classList.add("icon-button")
    borrar_resp.classList.add("respuesta-borrar")
    borrar_resp.addEventListener('click',() => {
        var padre = borrar_resp.parentNode
        padre.remove()
    })
    input_resp.classList.add("form-element")
    input_resp.classList.add("respuesta-input")
    pos_resp.appendChild(radio_resp)
    pos_resp.appendChild(input_resp)
    pos_resp.appendChild(borrar_resp)
    pos_resp.classList.add("respuestas")
    posiblesResp.appendChild(pos_resp)
         
})

register.addEventListener('click', () => {
    modal_registry.classList.add('show');
})

close_modal_registry.addEventListener('click', () => {
    modal_registry.classList.remove('show');
    location.reload();
})

let posibles_resp =[]

function agregarPregunta(){
    try{
        
        
    }catch(error){
        console.error('Error al ingresar examen',error);
        document.getElementById('mensajeModal').innerHTML = 'No se ha ingresado la información';
    }
}

/**
 * Función que encuentra el ultimo id ingresado en la tabla requerida
 * @param {Array} elementos: Arreglo de elementos a donde buscar el max id.
 * @param {Array} id: identificador de la tabla.
 * @returns 1 si no se encuetra el arreglo o el arreglo esta vacio, o retorna el max id .
 * @author Juan Carlos Perez Trejo
 */
 function getMaxId(elementos,id){
    let maxId=Math.max(...elementos.map(element => element[id]))
    console.log("maxId=" +maxId)
    if(maxId == -Infinity){
        return 1;
    }else{
        return maxId+1
    }
}

function llenarTabla(preguntas){
    let div=document.getElementById("preguntas")
    preguntas.forEach(element => {
        console.log("pregunta="+element.pregunta)
        
        let divPregunta='<div style="display:block;width:100%;heigth: 100%;margin-bottom:10px;margin-top:10px;padding:10px 10px;"><div >'+element.pregunta+'</div>'
        let respuestas= '<div style="display: inline-block;width: 100%;">'
        element.posibles_respuestas.forEach(element1 => {
            respuestas +='<div style="display: inline-block;width: 50%;"><input type="checkbox" /> '+element1.posible_respuesta+' </div>'
        });
        respuestas +="</div>"
        divPregunta+=respuestas+'</div>'
        div.innerHTML += divPregunta
    });
}
