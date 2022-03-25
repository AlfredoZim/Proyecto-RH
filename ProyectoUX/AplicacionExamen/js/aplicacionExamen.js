let pregunta;
let posibles_respuestas;
let listaPreguntas = getElementos('examenJava');
let aciertos;
const numeroPreguntas = 10;
let numeroPregunta = 0;
let sobreElemento = true;

function select_id(id) {
    return document.getElementById(id);
}
  
function style(id) {
    return select_id(id).style;
}

function escogerPregunta(n) {
    pregunta = listaPreguntas[n];
    select_id("categoria").innerHTML = pregunta.categoria;
    select_id("pregunta").innerHTML = pregunta.pregunta;
    select_id("imagen").setAttribute("src", pregunta.imagen);

    desordenarRespuestas(pregunta);
}

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

function iniciarExamen(){
    aciertos = 0;
    numeroPregunta = 0;
    actualizaAspiranteEvaluaciones();
    siguientePregunta();
    inicializaListenTeclado();
    inicializaListenMouse();
}

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

        aDespues.href = "../../../Aspirantes/html/Consulta/consultaAspirantes.html";
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

        aDespues.href = "../../../Aspirantes/html/Consulta/consultaAspirantes.html";
        botonDespues.id = "close2";
        botonDespues.innerHTML = "Salir";
        aDespues.appendChild(botonDespues);

        modalElement.appendChild(aDespues);
    }
}

function permitirHacerExamen(){
    let session = JSON.parse( localStorage.getItem('session') );
    console.log(session);
    let elemento = getElemento('aspirante', 'email', session["email"]);
    
    console.log(elemento);
    if(elemento["asignadoExamen"] <= 1)
        return true;
    return false;
}

function siguientePregunta(){
    let numerosEscogidos = [];
    let numSiguientePregunta = getNumeroSigPregunta(numerosEscogidos);
    
    select_id('cardinalPregunta').innerHTML = ('Pregunta ' + (numeroPregunta+1) + ' de ' + numeroPreguntas);
    escogerPregunta(numSiguientePregunta);
}

function getNumeroSigPregunta(escogidos){
    let nuevo;
    do {
        nuevo = Math.floor(Math.random()*listaPreguntas.length);
    }while(escogidos.includes(nuevo));
    escogidos.push(nuevo);
    return nuevo;
}

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

function finalizaEvaluacion(){
    actualizaAspiranteEvaluaciones();
    preparaModalFinalExamen();
    select_id('registered').click();
}

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

        aDespues.href = "../../../Aspirantes/html/Consulta/consultaAspirantes.html";
        botonDespues.id = "close2";
        botonDespues.innerHTML = "Salir";
        aDespues.appendChild(botonDespues);

        modalElement.appendChild(aDespues);
}

function inicializaListenMouse(){
    let contenedor = select_id('contenedor');
    contenedor.addEventListener("mouseleave", function(evt) {
        selecciona_respuesta(-1);
      }, false);
}

function inicializaListenTeclado(){
    document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        var codeValue = event.code;
        
        selecciona_respuesta(-1);
      }, false);
}

function muestraReglas(){
    select_id('registered').click();
    cargaBotonesReglasExamen();
}


/**
 * Función que actualiza el estatus de un aspirante en cuanto a su evaluación.
 * @param {String} idsession: Id de la sessión para actualizarlo.
 * @returns 1 si se modificó el elemento, 0 en otro caso.
 */
 function actualizaAspiranteEvaluaciones(){
    let session = JSON.parse( localStorage.getItem('session') );
    let elemento = getElemento('aspirante', 'email', session["email"]);
    
    elemento["calificacionExamen"] = aciertos;
    elemento["promedio"] = (elemento["calificacionEntrevista"]+aciertos)/2;
    elemento["asignadoExamen"] = 2;
    modificaElementoById('aspirante', elemento, 'email');
}

muestraReglas();