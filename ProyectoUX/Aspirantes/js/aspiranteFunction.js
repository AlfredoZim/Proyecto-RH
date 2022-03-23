/**
 * constante que contiene el HTMLElement del formulario.
 */
const formulario = document.querySelector('#formulario');

//Indice que determina el indice del elemento que se esta modificando.
let indexModificar = -1;

/**
 * Función que extrae los elementos del formulario, manda construir el objeto a guardar y 
 * ejecuta el modal con el mensaje que corresponde.
 * @returns 
 * @author Joel Alcantara
 */
function guardarAspirante(){
    try{
        //Extraemos los elementos del formulario en un arreglo.
        let elementos = [document.getElementById('nombre'),
            document.getElementById('email'),
            document.getElementById('edad'),
            document.getElementById('telefono'),
            document.getElementById('universidad'),
            document.getElementById('especialidad'),
            document.getElementById('experiencia'),
            document.getElementById('tecnologias'),
            document.getElementById('idiomas'),
            document.getElementById('direccion'),
            document.getElementById('descripcionExperiencia')
        ];

        //Validamos que todos los elementos contengan información
        if(validaVacios(elementos)){
            document.getElementById('mensajeModal').innerHTML = 'Todos los datos son requeridos.';
            return;
        }

        //calculamos si se trata de modificar o captura inicial.
        let banderaEsModificacion = indexModificar === -1;

        //Mandamos Construit al objeto del elemento.
        let aspirante = getAspirante(elementos);

        //Validamos si se trata de una inserción o una modificación de datos.
        let respuesta = banderaEsModificacion? insertarElemento('aspirante', aspirante, 'email'):
            modificaElemento('aspirante', aspirante, indexModificar);

        //Validamos los mensaje a mostrar en el modal.
        if(respuesta>0){
            document.getElementById('mensajeModal').innerHTML = 'Información ' + (banderaEsModificacion? 'guardada':'modificada')+' exitosamente.';
            document.getElementById('resetButton').click();
        }else
            document.getElementById('mensajeModal').innerHTML = 'Este aspirante ya se encuentra registrado.';
    }catch(error){
        console.error('Error al ingresar aspirante',error);
        document.getElementById('mensajeModal').innerHTML = 'No se ha ingresado la información';
    }
}

/**
 * Función que valida si los HTMLElement de un formulario se encuentran vacíos así mismo asigna el mensaje correspondiente.
 * @param {Array} elementos: Arreglo con los HTMLElement del formulario a validar.
 * @returns true si alguno esta vacío, false en otro caso.
 * @author Joel Alcantara
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
 * Función que valida si un elemento en particular se encuentra por su id, contiene elemento o esta vacío.
 * @param {String} id: Id del HTMLElement a validar.
 * @author Joel Alcantara
 */
function validaElemento(id){
    let elemento = document.getElementById(id);
    elemento.value = elemento.value.toString().trim();
    let elemMensaje = document.getElementById('error'+id);
    if(elemento.value.length == 0)
        elemMensaje.innerHTML = 'Campo obligatorio';
    else
        elemMensaje.innerHTML = '';
}

/**
 * Función que valida y llena los elementos del formulacio en caso de que se trate de una modificación.
 * @author Joel Alcantara
 */
function llenaModificar(){
    indexModificar = localStorage.getItem('deboModificar') || -1;
    if(indexModificar > -1){
        let elementos = getElementos('aspirante');
        let seleccionado = elementos[indexModificar];
        document.getElementById('nombre').value = seleccionado['nombre'];
        document.getElementById('email').value = seleccionado['email'];
        document.getElementById('edad').value = seleccionado['edad'];
        document.getElementById('telefono').value = seleccionado['telefono'];
        document.getElementById('universidad').value = seleccionado['universidad'];
        document.getElementById('especialidad').value = seleccionado['especialidad'];
        document.getElementById('experiencia').value = seleccionado['experiencia'];
        document.getElementById('tecnologias').value = seleccionado['tecnologias'];
        document.getElementById('idiomas').value = seleccionado['idiomas'];
        document.getElementById('direccion').value = seleccionado['direccion'];
        document.getElementById('descripcionExperiencia').value = seleccionado['descripcionExperiencia'];
        localStorage.removeItem('deboModificar');
        console.log(indexModificar);
    }else
        document.getElementById('resetButton').click();
}

//Ejecutamos el metodo que llena los elementos cuando se trata de una modificación.
llenaModificar();

