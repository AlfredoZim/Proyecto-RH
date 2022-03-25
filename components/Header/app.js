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