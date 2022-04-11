/**
 * Función que determina que tipo de objeto buscamos mappear y lo enlaza al correspondiente metodo de mapeo,
 * en caso de no colocar un tipo definido se devuelve null.
 * @param {*} tipo: tipo de objeto que buscamos generar del mapeo.
 * @param {*} elementos: elementos que se busca incorporar al objeto.
 * @returns null: si no se define que tipo de objeto queremos.
 * @author Joel Alcantara
 */
function getObject(tipo, elementos){
    try{
            switch(tipo){
            case "aspirante": return getAspirante(elementos);
            default : return null;
         }
    }catch(error){
        console.error('Error al hacer switcheo de tipo de objeto',error);
        return null;
    }
}

/**
 * Función que genera un objeto del tipo aspirante.
 * @param {HTMLElement} elementos: Arreglo de elementos de los cuales se obtendrá los valores para el objeto a generar. 
 * @returns Objeto tipo aspirante generado.
 * @author Joel Alcantara
 */
function getAspirante(elementos){
    let aspirante = {
        
            "nombre" : elementos[0].value,
            "paterno" : elementos[1].value,
            "materno" : elementos[2].value,
            "email" : elementos[3].value,
            "edad" : elementos[4].value,
            "telefono" : elementos[5].value,
            "universidad" : elementos[6].value,
            "especialidad" : elementos[7].value,
            "experiencia" : elementos[8].value,
            "tecnologias" : elementos[9].value,
            "idiomas" : elementos[10].value,
            "direccion" : elementos[11].value,
            "descripcionExperiencia" : elementos[12].value,
            "asignadoExamen": 0,
            "id_Examen": 0,
            "calificacionEntrevista" : 0,
            "calificacionExamen" : 0,
            "promedio" : 0,
            "notaEntrvistador" : '',
            "contratado" : false,
            "entrevistador" : "",
            "password" : (elementos[1].value + (Math.floor(elementos[4].value*(Math.random()*100))) + elementos[0].value).replace(/ /g, "")
    }
    return aspirante;
}

/**
 * Función que genera un objeto del tipo examen.
 * @param {HTMLElement} elementos: Arreglo de elementos de los cuales se obtendrá los valores para el objeto a generar. 
 * @returns Objeto tipo examen generado.
 * @author Juan Carlos Pérez Trejo
 */
 function getExamen(elementos){
    let examen = {
            "id_examen" : elementos[0].value,
            "nombre_examen" : elementos[1].value,
            "tema" : elementos[2].value,
            "descripcion" : elementos[3].value,
            "preguntas": elementos[4] 
        }
    return examen;
}

/**
 * Función que genera un objeto del tipo tema.
 * @param {HTMLElement} elementos: Arreglo de elementos de los cuales se obtendrá los valores para el objeto a generar. 
 * @returns Objeto tipo examen generado.
 * @author Juan Carlos Pérez Trejo
 */
 function getTemas(elementos){
    let examen = {
        
            "id_tema" : elementos[0].value,
            "tema" : elementos[1].value,
            
    }
    return examen;
}

/**
 * Función que genera un objeto del tipo pregunta.
 * @param {HTMLElement} elementos: Arreglo de elementos de los cuales se obtendrá los valores para el objeto a generar. 
 * @returns Objeto tipo examen generado.
 * @author Juan Carlos Pérez Trejo
 */
 function getPregunta(elementos){
    let pregunta = {
        
            "id_pregunta" : elementos[0].value,
            "tema" : elementos[1].value,
            "respuesta_correcta" : elementos[2],
            "posibles_respuestas" : elementos[3]
            
            
    }
    return pregunta;
}

/**
 * Función que genera un objeto del tipo posibleRespuesta.
 * @param {HTMLElement} elementos: Arreglo de elementos de los cuales se obtendrá los valores para el objeto a generar. 
 * @returns Objeto tipo examen generado.
 * @author Juan Carlos Pérez Trejo
 */
 function getPosibleRespuesta(elementos){
    let examen = {
        
            "id_posible_respuesta" : elementos[0].value,
            "posible_respuesta" : elementos[1].value
            
    }
    return examen;
}
