const container = document.getElementById("container");
let viewRH = `
<section>
<div class="complete">
    <div> <h3>Exámenes</h3><a href="#" id="register"><div class="icon-button derecha"><i class="fa-solid fa-square-plus"></i></div></a></div>
    
    <table id="examenes">
        <thead>
            <tr>
                <th>Nombre del examen</th>
                <th>Tema</th>
                <th>Descripcion</th>
                <th>Fecha de creación</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
                      
        </tbody>
    </table>
    
</div>

</section>
<div id="m-register" class="modal-registered">
        <div class="modal">
            <h1>Agregar examen</h1>

            <h1 class="modal-title" id="mensajeModal"></h1>
			<br>
            <form id="formulario">
                <div class="divDatos">
                    <label for="nombre">*Nombre:</label><br>
                    <input id="nombre" type="text" name="nombre-aspirante" maxlength="100" minlength="1" onblur="validaElemento('nombre')" ><br>
                    <label id="errornombre" for="nombre" class="mensajeError"></label><br>
                </div>
                <div class="divDatos">
                    <label for="tema">*Tema:</label><br>
                    <select id="tema"></select>
                    <label id="errortema" for="tema" class="mensajeError"></label><br>
                </div>
                <div class="divDatos">
                    <label for="descripcion">*Descripción:</label><br>
                    <textarea id="descripcion" ></textarea>
                    <label id="errordescripcion" for="descripcion" class="mensajeError"></label><br>
                </div>    
                <br>
                <div></div>
                <div class="divButton">
                    <input id="resetButton" type="reset" value="Borrar información">
                </div>
            </form>
            <div class="divButton">
                <button onclick="guardarExamen()" class="accept">Guardar Datos</button>
                <button onclick="guardarExamen2()" class="accept">Guardar y agregar preguntas</button>
                <button id="close" class="close">Cancelar</button>
            </div>
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

    <div id="m-register3" class="modal-registered3">
        <div class="modal3">
            <h1 class="modal-title3" id="mensajeModal3"></h1>
            <div class="divButton">
                <button id="delete3">Aceptar</button>
                <button id="close3">Cancelar</button>
            </div>
        </div>
    </div>
`;

container.innerHTML = viewRH;

const register = document.getElementById("register");
const modal_registry = document.getElementById("m-register");
const close_modal_registry = document.getElementById("close");
const tema_select = document.getElementById("tema")
let indexModificar = -1;
/**
 * constante que contiene el HTMLElement del formulario.
 */
 const formulario = document.querySelector('#formulario');


register.addEventListener('click', () => {
    modal_registry.classList.add('show');
})

close_modal_registry.addEventListener('click', () => {
    modal_registry.classList.remove('show');
    location.reload();
})

const temas = getElementos("temas")

temas.forEach(tema => {
    let tema_add= document.createElement("option")
    console.log("tema_id="+tema.id_tema)
    tema_add.value= tema.id_tema   
    tema_add.innerHTML= tema.nombre
    tema_select.append(tema_add)
});


/**
 * Función que extrae los elementos del formulario, manda construir el objeto a guardar y 
 * ejecuta el modal con el mensaje que corresponde.
 * @returns 
 * @author Juan Carlos Perez
 */
 function guardarExamen(){
    try{
        //Extraemos los elementos del formulario en un arreglo.
        let maxid = document.createElement("input")
        let maxId_val= getMaxId(getElementos("examenes"),"id_examen")
        console.log("maxId_val="+maxId_val)
        maxid.value= maxId_val
        let elementos = [
            maxid,
            document.getElementById('nombre'),
            document.getElementById('tema'),
            document.getElementById('descripcion'),
            ""
        ];
        
        //Validamos que todos los elementos contengan información
        
        
        //Mandamos Construit al objeto del elemento.
        let examen = getExamen(elementos);
     
        //calculamos si se trata de modificar o captura inicial.
       let banderaEsModificacion = indexModificar === -1;

        //Validamos si se trata de una inserción o una modificación de datos.
        let respuesta = banderaEsModificacion? insertarElemento('examenes', examen, "id_examen"):
            modificaElemento('examenes', examen, examen.id_examen);
        console.log("respuesta="+respuesta)
        //Validamos los mensaje a mostrar en el modal.
        if(respuesta>0){

            window.location.reload(true)
        }else{
            document.getElementById('mensajeModal2').innerHTML = 'Este examen ya fue registrado.';
            document.getElementById('registered2').click();
            document.getElementById('close2').classList.add('no-reload');
            
        }
    }catch(error){
        console.error('Error al ingresar examen',error);
        document.getElementById('mensajeModal').innerHTML = 'No se ha ingresado la información';
    }
}

/**
 * Función que valida si los HTMLElement de un formulario se encuentran vacíos así mismo asigna el mensaje correspondiente.
 * @param {Array} elementos: Arreglo con los HTMLElement del formulario a validar.
 * @returns true si alguno esta vacío, false en otro caso.
 * @author Juan Carlos Perez Trejo
 */
 function validaVacios(elementos){
    let bandera = false;
    elementos.forEach(element => {
        if(element.value.toString().trim().length === 0){
            bandera = true;
            document.getElementById(('error'+element.id)).innerHTML = 'Campo obligatorio';
        }
    });
    return bandera;
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


function validaElemento(id){
    let elemento = document.getElementById(id);
    elemento.value = elemento.value.toString().trim();
    let elemMensaje = document.getElementById('error'+id);
    if(elemento.value.length == 0)
        elemMensaje.innerHTML = 'Campo obligatorio';
    else
        elemMensaje.innerHTML = '';
}

function llenarTabla(){
    const examenes = getElementos("examenes")
    const tabla = document.getElementById("examenes")
    examenes.forEach(examen => {
    console.log(examen)
    let examen_tr= tabla.insertRow() 
    let examen_nombre= examen_tr.insertCell(0)
    let examen_tema= examen_tr.insertCell(1)
    let examen_descripcion= examen_tr.insertCell(2)
    let examen_fecha= examen_tr.insertCell(3)
    let examen_acciones= examen_tr.insertCell(4)
    var f = new Date();
    examen_nombre.innerText= examen.nombre_examen
    examen_tema.innerText = examen.tema
    examen_descripcion.innerText = examen.descripcion
    examen_fecha.innerText = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()
    examen_acciones.innerHTML = '<div><i class="fa-solid fa-pen-to-square"></i></div><div><i class="fa-solid fa-trash-can"></i></div>'

});
}

llenarTabla()