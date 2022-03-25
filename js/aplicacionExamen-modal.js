const registry = document.getElementById("registered");
const modal_registry = document.getElementById("m-register");


registry.addEventListener('click', () => {
    modal_registry.classList.add('show');
})

function ponerEscuchaBotonIniciarExamen(){
    let close_modal_registry = document.getElementById("close");
    close_modal_registry.addEventListener('click', () => {
        modal_registry.classList.remove('show');
        iniciarExamen();
    })
}

