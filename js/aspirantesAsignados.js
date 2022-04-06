/**
 * Elementos para la creación de la tabla.
 * @author Joel Alcantara
 */
 let divTable = document.createElement('div');
 let table = document.createElement('table');
 let thead = document.createElement('thead');
 let tbody = document.createElement('tbody');
 
 divTable.classList.add('divTabla')
 
 divTable.appendChild(table);
 table.appendChild(thead);
 table.appendChild(tbody);
 
 
 document.getElementById('body').appendChild(divTable);


let userName = sessionStorage.getItem('userName');
 
 /**
 * Variable que obtiene y guarda los elementos aspirantes que se encuentran registrados.
 * @author Joel Alcantara
 */
let elementos = getElementosByParam('aspirante', 'entrevistador', userName);

let ancho = screen.width<=500;

let elementoEvaluar;

/**
 * Variable que define los títulos que se mostrarán en la tabla.
 * @author Joel Alcantara
 */
 let titulos = ["","Nombre Completo",  "Calificación Entrevista", "Calificación Examen", "Calificación General", "Asignación de Examen", "Acciones"];
 if(ancho)
     titulos.splice(2,3);
 /**
  * Función que se encarga de construir el elemento HTML de la tabla.
  * @author Joel Alcantara
  */
 function llenaTabla(){
     let row_1 = document.createElement('tr');
     titulos.forEach((element, index)=> {
         let heading_1 = document.createElement('th');
         heading_1.innerHTML = element.toString();
         row_1.appendChild(heading_1);
     });
     thead.appendChild(row_1);
 
     //Validamos que haya elementos, si no los hay se muestra en un reglon completamente sin registros.
     if(elementos.length === 0){
         let row_2 = document.createElement('tr');
         row_2.classList.add('tr-inpar');
         let row_2_data_1 = document.createElement('td');
         row_2_data_1.colSpan = titulos.length;
         row_2_data_1.innerHTML = 'Sin Asignaciones';
         row_2.appendChild(row_2_data_1);
         tbody.appendChild(row_2);
     }else{
         //si existen elementos genera el contenido de los elementos por renglon.
         elementos.forEach((element, index)=> {
             let row_2 = document.createElement('tr');
             row_2.id = ('tr-element-'+index);
             row_2.classList.add((index%2==0? 'tr-par': 'tr-inpar'));
             
             let row_2_data_0 = document.createElement('td');
             
             let row_img = document.createElement('i');
             //row_img.src = "../../img/expantion.png"
             row_img.classList.add('fa-solid');
             row_img.classList.add('fa-angle-down');
             row_img.classList.add('a-expantion');
             row_2_data_0.id = ("tabla-element-"+index);
             row_img.id = 'a-expantion-id-'+index;
             row_2_data_0.appendChild(row_img);
 
             let row_2_data_1 = document.createElement('td');
             row_2_data_1.innerHTML = element['nombre'] + " " + element['paterno'] + " " + element['materno'];
             let row_2_data_2;
             let row_2_data_3;
             let row_2_data_7;
             let row_2_data_5;
             let row_2_data_6;
             if(!ancho){
                 row_2_data_5 = document.createElement('td');
                 row_2_data_5.innerHTML = element['calificacionEntrevista'];
                 row_2_data_6 = document.createElement('td');
                 row_2_data_6.innerHTML = element['calificacionExamen'];
                 row_2_data_3 = document.createElement('td');
                 row_2_data_3.innerHTML = element['promedio'];
             }
             row_2_data_7 = document.createElement('td');
             row_2_data_7.innerHTML = element['asignadoExamen']==1? "Asignado":element['asignadoExamen']==2? "Realizado":"Sin Asignación";
             
             
             let row_2_data_8 = document.createElement('td');
             let row_imgMod = document.createElement('i');
             let row_a_mod = document.createElement('a');
             row_imgMod.classList.add('fa-solid');
             row_imgMod.classList.add('fa-pen-to-square');
             row_imgMod.classList.add('a-modified');
             row_imgMod.id = ("button-img-"+index);
 
             row_a_mod.appendChild(row_imgMod);

             row_2_data_8.appendChild(row_a_mod);
             
                     
             row_2.appendChild(row_2_data_0);
             row_2.appendChild(row_2_data_1);
             if(!ancho){
                 row_2.appendChild(row_2_data_5);
                 row_2.appendChild(row_2_data_6);
                 row_2.appendChild(row_2_data_3);
             }
             row_2.appendChild(row_2_data_7);
             row_2.appendChild(row_2_data_8);
             tbody.appendChild(row_2);
 
         });
     }
 }
 
 /**
  * Funcion que se encarga de dejar todos los posibles eventos de click en escucha para la expansión de datos de la tabla
  * y con esto se encarga de identificar que reglon fue el seleccionado así como expandir y mostrar los datos.
  * @author Joel Alcantara
  */
 function showAllData(){
     try{
         document.querySelectorAll(".a-expantion").forEach(el => {
             try{
                 el.addEventListener("click", e => {
                     let id = e.target.getAttribute("id");
                     let indexTocado = id.toString().substring(id.lastIndexOf('-')+1);
 
                     let element_to_expand = document.getElementById('tr-element-'+indexTocado);
                     let id_name = (element_to_expand.id.toString().concat('-expand'));
                     let element_exist = document.getElementById(id_name);
 
                     if(element_exist==null){
                         let row_2 = document.createElement('tr');
                         row_2.classList.add('tr-par');
                         row_2.id = ('tr-element-'+indexTocado+'-expand');
                         let row_2_data_1 = document.createElement('td');
                         row_2_data_1.colSpan = titulos.length;
                         row_2_data_1.innerHTML = completaDatos(indexTocado);
                         row_2.appendChild(row_2_data_1);
 
                         element_to_expand.insertAdjacentElement('afterend',row_2);
                     }else{
                         element_exist.remove();
                     }
                 });
             }catch(error){
 
             }
         });
     }catch(error){
 
     }
 }
 
 /**
  * Funcion que se encarga de mostrar todos los datos que no se muestrar por columna, agrupandolos y generandolos para la expansión.
  * @param {*} index: Indice del elemento que se va a mostrar
  * @returns HTML code con los elementos a mostrar.
  * @author Joel Alcantara
  */
 function completaDatos(index){
     let elemento = elementos[index];
     let ancho = screen.width <= 500;
     let bajarInfo = ancho? `
        <label>Calificacion Entrevista: `+ elemento['calificacionEntrevista']+`</label><br>
        <label>Calificacion Examen: `+ elemento['calificacionExamen']+`</label><br> 
        <label>Calificacion General: `+ elemento['promedio']+`</label><br>`
         :``;
     return `<div class = "datosRow">` + bajarInfo + `
        <label>Correo: `+ elemento['email']+`</label><br>
        <label>Tecnologías: `+ elemento['tecnologias']+`</label><br>
        <label>Años Experiencia: `+ elemento['experiencia']+`</label><br>
        <label>Edad: `+ elemento['edad']+`</label><br>
        <label>Telefono: `+ elemento['telefono']+`</label><br>
        <label>Universidad: `+ elemento['universidad']+`</label><br>
        <label>Especialidad: `+ elemento['especialidad']+`</label><br>
        <label>Idiomas: `+ elemento['idiomas']+`</label><br>
        <label>Direccion: `+ elemento['direccion']+`</label><br>
        <label>Descripción de Experiencia: `+ elemento['descripcionExperiencia']+`</label><br>
        <label>Notas Entrevistador: `+ elemento['notaEntrvistador']+`</label><br>
        <label>Contratado: `+ (elemento['contratado']? `SI`:`NO`)+`</label><br>
     </div>`;
 }

 /**
  * Funcion que valida que no existan errores para poder guardar los cambios.
  */
 function validaVacios(){
    let elementos = ['evaluacionEntrevista', 'notas'];
    let bandera = true;
    elementos.forEach(el => {
        if(validaElemento(el)){
            bandera = false;
        }
    });
    return bandera;
 }

 /**
 * Funcion que se encarga de dejar todos los posibles eventos de click en escucha para los elementos 
 * de modificación.
 * @author Joel Alcantara
 */
function listenModChoosed(){
    try{
        document.querySelectorAll(".a-modified").forEach(el => {
            try{
                el.addEventListener("click", e => {
                    let id = e.target.getAttribute("id");
                    let index = id.toString().substring(id.lastIndexOf('-')+1);
                    document.getElementById('registered').click();
                    elementoEvaluar = elementos[index];
                    llenaDatosEvaluar();
                });
            }catch(error){

            }
        });
    }catch(error){

    }
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
    if(elemento.value.length == 0){
        elemMensaje.innerHTML = 'Campo obligatorio';
        return true;
    }else{
        switch(id){
            case 'evaluacionEntrevista' : if(parseInt(elemento.value)>=0&&parseInt(elemento.value)<=10){
                    elemMensaje.innerHTML = '';
                    return false;
                }else
                    elemMensaje.innerHTML = 'Evaluación debe ser entre 0 y 10';
                return true;
                break;
            default: '';
        }
        return false;
    }
}

function llenaDatosEvaluar(){
    document.getElementById("nombre").innerHTML = 
        "Nombre del Aspirante: " + elementoEvaluar["nombre"] + ' ' + elementoEvaluar["paterno"] + 
        ' ' + elementoEvaluar["materno"];
    document.getElementById("edad").innerHTML = "Edad: " + elementoEvaluar["edad"];
    document.getElementById("tecnologias").innerHTML = "Tecnologías que conoce: " + elementoEvaluar["tecnologias"];
    document.getElementById("experiencia").innerHTML = "Experiencia profesional: " + elementoEvaluar["experiencia"];
    document.getElementById("asignacion").innerHTML = "Estatus de Examen: " + (elementoEvaluar['asignadoExamen']==1? "Asignado":elementoEvaluar['asignadoExamen']==2? "Realizado":"Sin Asignación");
    document.getElementById("examen").innerHTML = "Evaluación de Examen Aplicado: " + elementoEvaluar["calificacionExamen"];
}
 
 /**
  * Se realiza la ejecución de las funciones.
  */
 llenaTabla();
 showAllData();
 listenModChoosed();