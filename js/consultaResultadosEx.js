import modalDatas from '../components/modalData/index.js';
const modalData = new modalDatas();



export function getVals(){
    const aspirante = [
        {
            nombre : "Jovani Reyes Benítez",
            area : "Analyst",
            vacante : "Desarrollador Front-end",
            examen : "Front-end Básico",
            respuestasCorrectas : "9/20",
            email : 'jovanireyesbenitez@gmail.com',
            notas: 'Necesita más experiencia en Front-end, aunque se ve que tiene ganas de aprende'
        },
        {
            nombre : "Joel Apellido Apellid",
            area : "Analyst",
            vacante : "Desarrollador Back-end",
            examen : "Back-end Avanzado",
            respuestasCorrectas : "17/20",
            email : 'joel@gmail.com',
            notas: 'No tiene conocimientos solidos en Front-end pero es muy bueno en back-end'

        },
        {
            nombre : "Alfredo Chavez Gomez",
            area : "Analyst",
            vacante : "Desarrollador Back-end",
            examen : "Back-end Avanzado",
            respuestasCorrectas : "17/20",
            email : 'afedoChavz@minsait.com',
            notas: 'Comentario, comentario, comentario jejeje xd'

        }

    ]
  
    let userKey = JSON.parse(localStorage.getItem("userExam"));
  
    if(userKey){
      return userKey;
    }else{
      localStorage.setItem("userExam", JSON.stringify(aspirante));
      userKey = JSON.parse(localStorage.getItem("userExam"));
    }
    return userKey;
}
  

/* ------ CODIGO CON IMPLEMENTACIÓN REAL ------*/

export function getIdBut(e){
    modalData.showModal(e.id)
}



export function fullTable(){
    let table = document.getElementById('dataExam');          
    let datas = JSON.parse(localStorage.getItem('userExam'));

    Object.values(datas).map(e => {
        let tableRow = document.createElement('tr');
 
        tableRow.innerHTML = `<td>${e.nombre}</td>
         <td>${e.area}</td> <td>${e.vacante}</td> 
         <td>${e.examen}</td> <td>${e.respuestasCorrectas}</td>
         <td>
            <span  id=${e.email} onclick="getIdBut(this)">
                <i class="fa-solid fa-eye" style="color: rgb(45, 110, 209)"></i>
            </span>
         </td>`;
        

         table.appendChild(tableRow)
    }
    )

}