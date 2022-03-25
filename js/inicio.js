const container = document.getElementById("container");
let viewRH = `<div class="title-page">
<h2>Actividades pendientes</h2>
</div>

<section>
<div>
    <h3>Entrevistas del día de hoy</h3>
    <table>
        <thead>
            <tr>
                <th>Entrevistador</th>
                <th>Aspirante</th>
                <th>Vacante</th>
                <th>Horario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <h3>Aspirantes sin entrevista asignada</h3>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Vacante</th>
                <th></th>
            </tr>
        </thead>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
    </table>
</div>
</section>`;
let viewinterviewer = `<div class="title-page">
<h2>Actividades pendientes</h2>
</div>

<section>
<div>
    <h3>Aspirantes con entrevistas pendientes</h3>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Vacante</th>
                <th>Horario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <h3>Examenes pendientes por comentar</h3>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Vacante</th>
                <th>Horario</th>
            </tr>
        </thead>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
    </table>
</div>
</section>`;
let viewapplicant = `<section>
<div>
    <h3>Estatus de Proceso</h3>
    <table>
        <thead>
            <tr>
                <th>Vacante</th>
                <th>Estado</th>
                <th>Comentarios</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
            <tr>
                <td>uno</td>
                <td>uno</td>
                <td>uno</td>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <h3>Evaluaciones</h3>
    <table>
        <thead>
            <tr>
                <th>Nombre de Exámen</th>
                <th>Estado</th>
                <th></th>
            </tr>
        </thead>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
        <tr>
            <td>uno</td>
            <td>uno</td>
            <td>uno</td>
        </tr>
    </table>
</div>
</section>`;

container.innerHTML = viewRH;




const Aspirantes = 
[
    {
        "nombre": "Alfredo"
    },
    {
        "nombre": "Ivan"
    }
]
console.log(Aspirantes);
let uno = Aspirantes.filter(aspirante => aspirante.nombre != "Ivan");
console.log(uno);