const menu = document.getElementById("slide-menu");
const menu_show = document.getElementById("menu-r");

menu.addEventListener("click", () => {
    menu_show.classList.toggle("show-menu");
});