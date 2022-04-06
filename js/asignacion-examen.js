//const n_user = document.getElementById("n-user");
//const s_user = document.getElementById("s-user");
//
//let aspirante = getElemento("aspirante","email","AAA@hotmail.com");
//n_user.innerText = aspirante.nombre;
//s_user.innerText = aspirante.nombre;

const btn_addexam = document.getElementById("add-exam");
const select_exam = document.getElementById("select-exam");
const area = document.getElementById("area");
const exam = document.getElementById("exam");
const btn_save = document.getElementById("save");

btn_addexam.addEventListener("click",()=>{
    select_exam.classList.remove("hidden");
    btn_addexam.classList.add("hidden");
});
area.addEventListener("change", ()=>{
    if(area.value != "NAO"){
        exam.disabled = false;
        exam.getElementsByTagName("option")[0].selected = true;
    }else{
        exam.disabled = true;
        btn_save.disabled = true;
        exam.getElementsByTagName("option")[0].selected = true;
    }
});
exam.addEventListener("change",()=>{
    if (exam.disabled != true && exam.value != "NAO") {
        btn_save.disabled = false;
    } else {
        btn_save.disabled = true;
    }
});
btn_save.addEventListener("click",()=>{
    if (area.value != "NAO" && exam.value != "NAO"){

    }
});