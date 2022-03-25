/**
 * Funcion que se encarga de insertar un elemento a la "tabla" que pasemos como parametro, en caso de que no exista
 * dicha tabla la genera e inserta el elemento.
 * @param {String} tabla: Nombre de la tabla donde se almacenara el elemento.
 * @param {Object} elemento: Elemento que se almacenará.
 * @param {String} id: Definimos en esta variable el nombre de la columna que sería nuestro id. 
 * @returns 0: si ya existe el elemento, 1: si se guardo correctamente. 
 * @author Joel Alcantara
 */
function insertarElemento(tabla, elemento, id){
    try{  
        let arrElems = JSON.parse( localStorage.getItem(tabla.toString()) ) || [];
        if(id != null){
            if(validaExistencia(arrElems, elemento, id))
                return 0;
        }
        arrElems.push(elemento);
        localStorage.setItem(tabla.toString(), JSON.stringify(arrElems));
        return 1;
    }catch(error){
        console.error('Error al ingresar elemento',error)
        throw error;
    }
}

/**
 * Función que valida si un elemento ya existe entre los ya guardados.
 * @param {Array Object} elementos: Elementos guardados.
 * @param {Object} elemento: Elemento a buscar.
 * @param {String} id: Cadena con nombre de la columna identificador.
 * @returns true: si ya existe, false: en otro caso.
 * @author Joel Alcantara
 */
function validaExistencia(elementos, elemento, id){
    let bandera = false;
    elementos.forEach(element => {
        if(element[id.toString()] === elemento[id.toString()]){
            bandera = true;
            return;
        }
    });
    return bandera;
}

/**
 * Función que elimina un elemento por el id.
 * @param {String} tabla: Nombre de la "tabla" donde se almacena los datos.
 * @param {Object} elemento: Elemento a eliminar.
 * @param {String} id: Nombre del identificador.
 * @returns 1: si se eliminó el elemento.
 * @author Joel Alcantara
 */
function eliminaElemento(tabla, elemento, id){
    try{
        let arrElems = getElementos(tabla);
        var newArray = arrElems.filter((item) => item[id] !== elemento);
        localStorage.removeItem(tabla.toString());
        localStorage.setItem(tabla.toString(), JSON.stringify(newArray));
        return 1;
    }catch(error){
        console.error('Error al eliminar elemento',error);
        throw error;
    }
}

/**
 * Función que elimina un elemento de la "tabla" por su indice o posición.
 * @param {String} tabla: Nombre de la "tabla" donde se eliminará el elemento.
 * @param {Number} indice: Posición del elemento a eliminar.
 * @returns 1: si el elemento fue eliminado.
 * @author Joel Alcantara
 */
function eliminaElementoPorIndice(tabla, indice){
    try{
        let elementos = getElementos(tabla);
        elementos.splice(indice,1);
        localStorage.removeItem(tabla.toString());
        localStorage.setItem(tabla.toString(), JSON.stringify(elementos));
        return 1;
    }catch(error){
        console.error('Error al eliminar elemento',error);
        throw error;
    }
}

/**
 * Función que obtiene los elementos de una "tabla".
 * @param {string} tabla: Nombre de la tabla de la que se busca obtener los elementos.
 * @returns {Array} Arreglo de elementos, en caso de no existir la tabla se regresa un arreglo vacío.
 * @author Joel Alcantara
 */
function getElementos(tabla){
    try{
        if(localStorage.getItem(tabla))
            return JSON.parse( localStorage.getItem(tabla) ) || []  ;
        return [];
    }catch(error){
        console.error('Error al obtener elementos',error);
        throw error;
    }
}

/**
 * Función que modifica un elemento por su indice, es decir reemplaza el elemento del indice que se pasa como
 * parametro por el elemento pasado como parametro.
 * @param {String} tabla: Nombre de la tabla a la que se modificará.
 * @param {Object} elemento: Objeto con el elemento a reemplazar.
 * @param {Number} index: Posición del elemento a reemplazar.
 * @returns 1 si se modificó el elemento, 0 en otro caso.
 */
function modificaElemento(tabla, elemento, index){
    try{
        let elementos = getElementos(tabla);
        elementos.splice(index,1, elemento);
        localStorage.removeItem(tabla.toString());
        localStorage.setItem(tabla.toString(), JSON.stringify(elementos));
        return 1;
    }catch(error){
        return 0;
    }
}