/**
 * Funciones y atributos para los modales de asignar evaluación y entrevistas.
 * @author Joel Alcantara
 */

const registry = document.getElementById("registered");
const modal_registry = document.getElementById("m-register");
const close_modal_registry = document.getElementById("close");


registry.addEventListener('click', () => {
    modal_registry.classList.add('show');
})

close_modal_registry.addEventListener('click', () => {
    if(validaVacios()){
        elementoEvaluar["calificacionEntrevista"] = document.getElementById("evaluacionEntrevista").value;
        elementoEvaluar["notaEntrvistador"] = document.getElementById("notas").value;
        elementoEvaluar["promedio"] = 
        (parseFloat(elementoEvaluar["calificacionExamen"]) + parseFloat(elementoEvaluar["calificacionEntrevista"]))/2;
        modificaElementoById('aspirante', elementoEvaluar, "email");
        modal_registry.classList.remove('show');
        location.reload();
    }
})
