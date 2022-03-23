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
            "email" : elementos[1].value,
            "edad" : elementos[2].value,
            "telefono" : elementos[3].value,
            "universidad" : elementos[4].value,
            "especialidad" : elementos[5].value,
            "experiencia" : elementos[6].value,
            "tecnologias" : elementos[7].value,
            "idiomas" : elementos[8].value,
            "direccion" : elementos[9].value,
            "descripcionExperiencia" : elementos[10].value,
            "asignadoExamen": false
    }
    return aspirante;
}