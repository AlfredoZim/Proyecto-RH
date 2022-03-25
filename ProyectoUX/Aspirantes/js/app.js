const registry = document.getElementById("registered");
const modal_registry = document.getElementById("m-register");
const close_modal_registry = document.getElementById("close");


registry.addEventListener('click', () => {
    modal_registry.classList.add('show');
})

close_modal_registry.addEventListener('click', () => {
    modal_registry.classList.remove('show');
    location.reload();
})

const registry2 = document.getElementById("registered2");
const modal_registry2 = document.getElementById("m-register2");
const close_modal_registry2 = document.getElementById("close2");


registry2.addEventListener('click', () => {
    modal_registry2.classList.add('show2');
})

close_modal_registry2.addEventListener('click', () => {
    modal_registry2.classList.remove('show2');
    if(!close_modal_registry2.classList.contains("no-reload"))
        location.reload();
    close_modal_registry2.classList.remove("no-reload");
    close_modal_registry2.classList.remove("reload");
})

const registry3 = document.getElementById("registered3");
const modal_registry3 = document.getElementById("m-register3");
const close_modal_registry3 = document.getElementById("close3");
const delete_modal_registry3 = document.getElementById("delete3");


registry3.addEventListener('click', () => {
    modal_registry3.classList.add('show3');
})

close_modal_registry3.addEventListener('click', () => {
    modal_registry3.classList.remove('show3');
})

delete_modal_registry3.addEventListener('click', () => {
    modal_registry3.classList.remove('show3');
    eliminaElementoPorIndice('aspirante', indexAEliminar);
    location.reload();
})
