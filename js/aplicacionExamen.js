let pregunta;
let posibles_respuestas;
let listaPreguntas = getElementos('examenJava');
let aciertos;
const numeroPreguntas = 10;
let numeroPregunta = 0;
let sobreElemento = true;

/**
 * Funcion que obtiene el elemento por id-
 * @param {String} id: Nomber del elemento a recuperar. 
 * @returns 
 * @author Joel Alcantara
 */
function select_id(id) {
    return document.getElementById(id);
}
  
/**
 * Funcion que obtiene el estilo de un elemento
 * @param {String} id: Nomber del elemento a recuperar. 
 * @returns 
 * @author Joel Alcantara
 */
function style(id) {
    return select_id(id).style;
}

/**
 * Funcion que obtiene una pregunta dentro del listado de preguntas
 * @param {Number} n: Posicion de la pregunta. 
 * @returns 
 * @author Joel Alcantara
 */
function escogerPregunta(n) {
    pregunta = listaPreguntas[n];
    select_id("categoria").innerHTML = pregunta.categoria;
    select_id("pregunta").innerHTML = pregunta.pregunta;
    select_id("imagen").setAttribute("src", pregunta.imagen);

    desordenarRespuestas(pregunta);
}

/**
 * Función que deordenas las respuestas incorrectas y la correcta.
 * @param {Object} pregunta: Pregunta con sus respuestas 
 * @author Joel Alcantara
 */
function desordenarRespuestas(pregunta) {
    posibles_respuestas = [
      pregunta.respuesta,
      pregunta.incorrecta1,
      pregunta.incorrecta2,
      pregunta.incorrecta3,
    ];
    posibles_respuestas.sort(() => Math.random() - 0.5);
  
    select_id("btn1").innerHTML = posibles_respuestas[0];
    select_id("btn2").innerHTML = posibles_respuestas[1];
    select_id("btn3").innerHTML = posibles_respuestas[2];
    select_id("btn4").innerHTML = posibles_respuestas[3];

    if (pregunta.imagen) {
        select_id("imagen").setAttribute("src", pregunta.imagen);
        style("imagen").height = "300px";
        style("imagen").width = "100%";
      } else {
        style("imagen").height = "0px";
        style("imagen").width = "0px";
        setTimeout(() => {
          select_id("imagen").setAttribute("src", "");
        }, 500);
      }
}

/**
 * Funcion que inicializa los valores del examen, así como determinar que el aspirante quien esta
 * realizando la evaluazión ya no podrá volver a realizarla.
 * @author Joel Alcantara
 */
function iniciarExamen(){
    aciertos = 0;
    numeroPregunta = 0;
    actualizaAspiranteEvaluaciones();
    siguientePregunta();
    inicializaListenTeclado();
    inicializaListenMouse();
}

/**
 * Función que carga los botones y reglas que se mostrarán en el modal al usuario a realizar el examen.
 * @author Joel Alcantara
 */
function cargaBotonesReglasExamen(){
    let modalElement = select_id('modalExamen');
    if(permitirHacerExamen()){
        modalElement.innerHTML = `<h1 class="modal-title" id="mensajeModal">Reglas del Examen</h1>
        <br>
        <p>1.- Lee detenidamente las siguientes Reglas y Recomendaciones.</p>
        <p>2.- Durante esta evaluación, no podrás hacer uso del teclado de tu computadora, 
            en caso de usar cualquier tecla, se dará por mala la pregunta y se continuará a la siguiente.</p>
            
        <p>3.- Las preguntas del Examen aparecerán dentro de un rectangulo en color naranja, una vez iniciado
            el examen, el apuntador de tu ratón no podrá salir de dicha area, en caso de hacerlo, 
            se dará por mala la pregunta y se continuará a la siguiente.</p>
        <p>4.- El examen tiene una duración de 15 minutos.</p>
            <br>
        <h1 class="modal-title" id="mensajeModal">Recomendaciones</h1>
        <br>
        <p>1.- Lee detenidamente las Reglas y Recomendaciones.</p>
        <p>2.- Encontrarte e un lugar comodo, sin elementos distractores.</p>
        <p>3.- Prepará tu area de trabajo, esto con el fin de no llegar a cometer por error alguna accion
            que propicie a romper alguna de las reglas anteriores.</p>
        <p>4.- Utilizar computadora para realizar la evaluación.</p> 
        <br>
        <h1 class="modal-title" id="mensajeModal">¡Exito y buena suerte!</h1> 
        <br>`;
        let botonIniciar = document.createElement("button");
        botonIniciar.id = "close";
        botonIniciar.innerHTML = "Iniciar";
        modalElement.appendChild(botonIniciar);

        let aDespues = document.createElement('a');
        let botonDespues = document.createElement('button');

        aDespues.href = "../html/inicio.html";
        botonDespues.id = "close2";
        botonDespues.innerHTML = "Despues";
        aDespues.appendChild(botonDespues);

        modalElement.appendChild(aDespues);
        ponerEscuchaBotonIniciarExamen();
    }else{
        modalElement.innerHTML = `<br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <h1 class="modal-title" id="mensajeModal">Ya has presentado tu evaluación</h1>
        <br><br>`;
        let aDespues = document.createElement('a');
        let botonDespues = document.createElement('button');

        aDespues.href = "../html/inicio.html";
        botonDespues.id = "close2";
        botonDespues.innerHTML = "Salir";
        aDespues.appendChild(botonDespues);

        modalElement.appendChild(aDespues);
    }
}

/**
 * Función que determina si el aspirante a ingresar ya ha presentado una evaluazión
 * @returns true si no puede hacerlo false caso contrario.
 * @author Joel Alcantara
 */
function permitirHacerExamen(){
    let elemento = getElemento('aspirante', 'email', getUserName());
    
    console.log(elemento);
    if(elemento["asignadoExamen"] <= 1)
        return true;
    return false;
}

/**
 * Función que selecciona y calcula siguiente pregunta
 * @author Joel Alcantara
 */
function siguientePregunta(){
    let numerosEscogidos = [];
    let numSiguientePregunta = getNumeroSigPregunta(numerosEscogidos);
    
    select_id('cardinalPregunta').innerHTML = ('Pregunta ' + (numeroPregunta+1) + ' de ' + numeroPreguntas);
    escogerPregunta(numSiguientePregunta);
}

/**
 * Función que valida no se repitan las preguntas.
 * @param {Number} escogidos: numeros ya escogidos 
 * @returns 
 * @author Joel Alcantara
 */
function getNumeroSigPregunta(escogidos){
    let nuevo;
    do {
        nuevo = Math.floor(Math.random()*listaPreguntas.length);
    }while(escogidos.includes(nuevo));
    escogidos.push(nuevo);
    return nuevo;
}

/**
 * Función que selecciona la respuesta de una pregunta
 * @param {*} id 
 * @author Joel Alcantara
 */
function selecciona_respuesta(id){
    if(id===-1){
        siguientePregunta();
    }else{
        let acerto = posibles_respuestas[id] == pregunta.respuesta;
        if(acerto)
            aciertos++;
    }
    numeroPregunta++;
    if(numeroPregunta<numeroPreguntas){
        siguientePregunta();
    }
    if(numeroPregunta===numeroPreguntas)
        finalizaEvaluacion();
}

/**
 * Función que hace los calculos y seteo de valores al finalizar el examen
 * @author Joel Alcantara
 */
function finalizaEvaluacion(){
    actualizaAspiranteEvaluaciones();
    preparaModalFinalExamen();
    select_id('registered').click();
}

/**
 * Función que despliega el modal al final del examen
 * @author Joel Alcantara
 */
function preparaModalFinalExamen(){
    let modalElement = select_id('modalExamen');
    while (modalElement.firstChild) {
        //The list is LIVE so it will re-index each call
        modalElement.removeChild(modalElement.firstChild);
    }

    modalElement.innerHTML = `<br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <h1 class="modal-title" id="mensajeModal">Muchas Gracias por Presentar tu Evaluación</h1>
        <br><br>
        <p>Pronto nos pondremos en contacto con usted.</p>
        <br><br>`;
        
        let aDespues = document.createElement('a');
        let botonDespues = document.createElement('button');

        aDespues.href = "../html/inicio.html";
        botonDespues.id = "close2";
        botonDespues.innerHTML = "Salir";
        aDespues.appendChild(botonDespues);

        modalElement.appendChild(aDespues);
}

/**
 * Función que inicia el listen para validar donde se encuentra el mouse
 * @author Joel Alcantara
 */
function inicializaListenMouse(){
    let contenedor = select_id('contenedor');
    contenedor.addEventListener("mouseleave", function(evt) {
        selecciona_respuesta(-1);
      }, false);
}

/**
 * Función que inicia listener para validar que el usuario no utiliza el teclado.
 * @author Joel Alcantara
 */
function inicializaListenTeclado(){
    document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        var codeValue = event.code;
        
        selecciona_respuesta(-1);
      }, false);
}

/**
 * Función que muestra el modal al iniciar el examen, esto con las reglas especificas para presentarlo.
 * @author Joel Alcantara
 */
function muestraReglas(){
    select_id('registered').click();
    cargaBotonesReglasExamen();
}


/**
 * Función que actualiza el estatus de un aspirante en cuanto a su evaluación.
 * @param {String} idsession: Id de la sessión para actualizarlo.
 * @returns 1 si se modificó el elemento, 0 en otro caso.
 * @author Joel Alcantara
 */
 function actualizaAspiranteEvaluaciones(){
    
    let elemento = getElemento('aspirante', 'email', getUserName());
    
    elemento["calificacionExamen"] = aciertos;
    elemento["promedio"] = (elemento["calificacionEntrevista"]+aciertos)/2;
    elemento["asignadoExamen"] = 2;
    modificaElementoById('aspirante', elemento, 'email');
}

muestraReglas();