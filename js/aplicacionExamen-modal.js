const registry = document.getElementById("registered");
const modal_registry = document.getElementById("m-register");

//Inicia el listener para aperturar el modal.
registry.addEventListener('click', () => {
    modal_registry.classList.add('show');
})

/**
 * Funcion que inicializa los listener para el botón de iniciar el examen.
 * @author Joel Alcantara
 */
function ponerEscuchaBotonIniciarExamen(){
    let close_modal_registry = document.getElementById("close");
    close_modal_registry.addEventListener('click', () => {
        modal_registry.classList.remove('show');
        iniciarExamen();
    })
}

