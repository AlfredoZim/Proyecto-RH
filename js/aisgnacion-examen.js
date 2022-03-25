const n_user = document.getElementById("n-user");
const s_user = document.getElementById("s-user");

let aspirante = getElemento("aspirante","email","AAA@hotmail.com");
n_user.innerText = aspirante.nombre;
s_user.innerText = aspirante.nombre;