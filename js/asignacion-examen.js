//let n_user = document.getElementById("n-user");
//let s_user = document.getElementById("s-user");
//
//let aspirante = getElemento("aspirante","email","AAA@hotmail.com");
//n_user.innerText = aspirante.nombre;
//s_user.innerText = aspirante.nombre;

const btn_addexam = document.getElementById("add-exam");
const select_exam = document.getElementById("select-exam");
const exam = document.getElementById("exam");
const btn_save = document.getElementById("save");
const modal = document.getElementById("modal");
const info_exam = document.getElementById("info-exam");
//let aspirantes = getElementosByParam('aspirante', 'asignadoExamen', 0);
//let aspirante = getElemento("aspirante", correo,"email");
//aspirante["id_Examen"] = id;
//aspirante["asignadoExamen"] = 1;
//modificaElementoById("aspirante",aspirante,"email");
let examenes = getElementos("examenes");

console.log(examenes)

let examenesHTML = examenes.map(({id_examen,nombre_examen})=>{
    return `<option value="${id_examen}">${nombre_examen}</option>`
}).join("");
exam.innerHTML += examenesHTML;

btn_addexam.addEventListener("click",()=>{
    select_exam.classList.remove("hidden");
    btn_addexam.classList.add("hidden");
});
exam.addEventListener("change",()=>{
    if (exam.disabled != true && exam.value != "NAO") {
        btn_save.disabled = false;
    } else {
        btn_save.disabled = true;
    }
});
btn_save.addEventListener("click",()=>{
    if (exam.value != "NAO"){
        modal.classList.add('show');
        window.setTimeout(() => {
            modal.classList.remove('show');
            select_exam.classList.add("hidden");
            info_exam.classList.remove('hidden');
        }, 1500);
    }
});

