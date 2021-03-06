let banderaInyectar = true;

/**
 * Funcion que incorpora datos de prueba al inicio de una sesión, en caso de ya existir, 
 * no se realiza ninguna inserción de datos.
 * @author Joel Alcantara
 */
function inyectarInsumos(){
    if(!banderaInyectar)
        return;
    
    let aspiranteUno = {
        "nombre" : "Hector",
        "paterno" : "Macias",
        "materno" : "Moreno",
        "email" : "aspirante1@gmail.com",
        "edad" : 30,
        "telefono" : 55381229282,
        "universidad" : "Tec de Monterrey",
        "especialidad" : "Ingeniero en Sistemas",
        "experiencia" : 10,
        "tecnologias" : "JAVA, NET, IOS",
        "idiomas" : "Ingles con Tofel",
        "direccion" : "Las jacarandas #293 Int 2 Robleda del Sur, cp 23923, ciudad de matamoros",
        "descripcionExperiencia" : "Desarrollador backend en institutos de investigación de datos.",
        "asignadoExamen": 0,
        "calificacionEntrevista" : 0,
        "calificacionExamen" : 0,
        "promedio" : 0,
        "notaEntrvistador" : '',
        "contratado" : false,
        "entrevistador" : "",
        "password" : "123"
    };

    let aspiranteDos = {
        "nombre" : "Luis",
        "paterno" : "Robles",
        "materno" : "Lucio",
        "email" : "aspirante2@gmail.com",
        "edad" : 23,
        "telefono" :2281229282,
        "universidad" : "UNAM",
        "especialidad" : "Ingeniero en Sistemas",
        "experiencia" : 1,
        "tecnologias" : "JAVA",
        "idiomas" : "Ingles A1",
        "direccion" : "Ensures del sur #294 Int 22 Libres soy, cp 43433, ciudad de guanajuato",
        "descripcionExperiencia" : "Desarrollador backend en ingestas de datos",
        "asignadoExamen": 0,
        "calificacionEntrevista" : 0,
        "calificacionExamen" : 0,
        "promedio" : 0,
        "notaEntrvistador" : '',
        "contratado" : false,
        "entrevistador" : "",
        "password" : "123"
    };

    insertarElemento("aspirante", aspiranteUno, "email");
    insertarElemento("aspirante", aspiranteDos, "email");
    
    inyectaExamen();
}

/**
 * Función que inyecta insumos de preguntas para las pruebas de realización de examen.
 * @author Joel Alcantara
*/
function inyectaExamen(){
    localStorage.setItem('examenJava', JSON.stringify([
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Cuál es la descripción que crees que define mejor el concepto 'clase' en la programación orientada a objetos?",
            "respuesta":"Es un modelo o plantilla a partir de la cual creamos objetos",
            "incorrecta1":"Es un tipo particular de variable",
            "incorrecta2":"Es un concepto similar al de 'array'",
            "incorrecta3":"Es una categoria de datos ordenada secuencialmente",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué elementos crees que definen a un objeto?",
            "respuesta":"Sus atributos y sus métodos",
            "incorrecta1":"Sus cardinalidad y su tipo",
            "incorrecta2":"La forma en que establece comunicación e intercambia mensajes",
            "incorrecta3":"Su interfaz y los eventos asociados",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué hace el siguiente código?",
            "respuesta":"Regresa el area de un circulo de radio r",
            "incorrecta1":"No compila",
            "incorrecta2":"No podemos saberlo",
            "incorrecta3":"Regresa el diametro de un circulo.",
            "imagen":"../../img/pregunta1.jpg"
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué código de los siguientes tiene que ver con la herencia?",
            "respuesta":"public class Componente extends Producto",
            "incorrecta1":"public class Componente inherit Producto",
            "incorrecta2":"public class Componente implements Producto",
            "incorrecta3":"public class Componente belong to Producto",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué significa instanciar una clase?",
            "respuesta":"Crear un objeto a partir de la clase",
            "incorrecta1":"Duplicar una clase",
            "incorrecta2":"Eliminar una clase",
            "incorrecta3":"Conectar dos clases entre sí",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"En Java, ¿a qué nos estamos refiriendo si hablamos de 'Swing'?",
            "respuesta":"Una librería para construir interfaces gráficas",
            "incorrecta1":"Una función utilizada para intercambiar valores",
            "incorrecta2":"Es el sobrenombre de la versión 1.3 del JDK",
            "incorrecta3":"Un framework específico para Android",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué es Eclipse?",
            "respuesta":"Un IDE para desarrollar aplicaciones",
            "incorrecta1":"Una libreria de Java",
            "incorrecta2":"Una versión de Java especial para servidores",
            "incorrecta3":"Ninguna de las anteriores",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué elementos crees que definen a un objeto?",
            "respuesta":"El formato que obtenemos tras compilar un fuente .java",
            "incorrecta1":"El formato de intercambio de datos",
            "incorrecta2":"Un tipo de variable",
            "incorrecta3":"Un depurador de código",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué código asociarías a una Interfaz en Java?",
            "respuesta":"public class Componente implements Printable",
            "incorrecta1":"public class Componente interface Product",
            "incorrecta2":"Componente cp = new Componente (interfaz)",
            "incorrecta3":"Componente cp = new Componente.interfaz",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué significa sobrecargar (overload) un método?",
            "respuesta":"Crear un método con el mismo nombre pero diferentes argumentos",
            "incorrecta1":"Añadirle funcionalidades a un método",
            "incorrecta2":"Cambiarle el nombre dejándolo con la misma funcionalidad",
            "incorrecta3":"Editarlo para modificar su comportamiento",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué es una excepción?",
            "respuesta":"Un error que lanza un método cuando algo va mal",
            "incorrecta1":"Un bucle que no finaliza",
            "incorrecta2":"Un objeto que no puede ser instanciado",
            "incorrecta3":"Un tipo de evento muy utilizado al crear interfaces",
            "imagen":""
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué hace el siguiente código?",
            "respuesta":"No compila",
            "incorrecta1":"HHHHHHHHHH",
            "incorrecta2":"No podemos saberlo",
            "incorrecta3":"Nada",
            "imagen":"../../img/pregunta2.jpg"
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué hace el siguiente código?",
            "respuesta":"0 1 2 3 4 5",
            "incorrecta1":"1 2 3 4 5",
            "incorrecta2":"0 1 2 3 4 5 6",
            "incorrecta3":"0 1 2 3 4 5 6 7 8 9",
            "imagen":"../../img/pregunta3.jpg"
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué hace el siguiente código?",
            "respuesta":"Inicializa 6 variables",
            "incorrecta1":"No compila",
            "incorrecta2":"No podemos saberlo",
            "incorrecta3":"Crea 6 variables en null",
            "imagen":"../../img/pregunta4.jpg"
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué hace el siguiente código?",
            "respuesta":"Solicita y regresa un numero en formato binario",
            "incorrecta1":"No compila",
            "incorrecta2":"Error de ejecución",
            "incorrecta3":"Solicita y regresa el modulo base 2 de un numero",
            "imagen":"../../img/pregunta5.jpg"
        },
        {
            "categoria": "EXAMEN JAVA",
            "pregunta":"¿Qué hace el siguiente código?",
            "respuesta":"Asigna el valor a un atributo de la clase MiClase",
            "incorrecta1":"No compila",
            "incorrecta2":"Error en ejecución",
            "incorrecta3":"Le resta 5 al valor del atributo tipo de la clase Miclase",
            "imagen":"../../img/pregunta6.jpg"
        }
    ]));
}

inyectarInsumos();