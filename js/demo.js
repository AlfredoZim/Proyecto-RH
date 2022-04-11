var preguntas=[]
var examenes =[]
var posibles_respuestas=[]
let posible_respuesta = {     // un objeto
  		id_posible_respuesta: "1",
			posible_respuesta: "No compila"
};
posibles_respuestas.push(posible_respuesta)
console.log(posibles_respuestas)
let posible_respuesta1 = {     // un objeto
    id_posible_respuesta: "2",
      posible_respuesta: "Compila"
};
posibles_respuestas.push(posible_respuesta1)

var pregunta = {
    "id_pregunta" : "1",
    "pregunta" : "Pregunta 1",
    "respuesta_correcta" : 1,
    "posibles_respuestas" : posibles_respuestas
}

var posibles_respuestas_a=[]
let posible_respuesta_a = {     // un objeto
  		id_posible_respuesta: "1",
			posible_respuesta: "No compila *"
};
posibles_respuestas_a.push(posible_respuesta_a)
let posible_respuesta1_a = {     // un objeto
    id_posible_respuesta: "2",
      posible_respuesta: "Compila *"
};
posibles_respuestas_a.push(posible_respuesta1_a)

var pregunta_a = {
    "id_pregunta" : "2",
    "pregunta" : "Pregunta 2",
    "respuesta_correcta" : 1,
    "posibles_respuestas" : posibles_respuestas_a
}

preguntas.push(pregunta)
preguntas.push(pregunta_a)
console.log("1-----------------------------------------")
console.log(preguntas)
console.log("2-----------------------------------------")
console.log(JSON.stringify(preguntas))

var examen = {
    "id_examen": "1",
    "nombre_examen": "examen1",
    "tema": "1",
    "descripcion": "descripcion examen",
    "preguntas": ""
}
var examen2= {...examen}
examen.preguntas=preguntas
examen2.id_examen=2
examenes.push(examen)
examenes.push(examen2)
console.log("3--------------------------")
console.log(examen)
console.log("4--------------------------")
console.log(JSON.stringify(examen))
console.log("5--------------------------")
console.log(examenes)
console.log("6--------------------------")
console.log(JSON.stringify(examenes))
var examenJSONStringy=JSON.stringify(examenes)
var examenRec=JSON.parse(examenJSONStringy)
console.log("7--------------------------")
console.log(examenJSONStringy)
console.log("8--------------------------")
console.log(examenRec)
console.log("9--------------------------")
console.log(examenRec[0].preguntas[0].posibles_respuestas)
