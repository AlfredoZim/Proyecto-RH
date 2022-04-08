class show_header extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let typeUsers = document.cookie.split(' ');
        let tipoUs = document.cookie.split('=')[1];
        typeUsers.forEach(element => {
            let parts = element.split('=');
            if("TypeSession" == parts[0])
                tipoUs = parts[1];
        });
        this.innerHTML = `
        <header>
        <div class="space-logo">
            <h2>BankIndra</h2>
            <h3>An Indra company</h3>
        </div>
        <nav>
            <div class="menu-bars">
                <button id="slide-menu"><i class="fa-solid fa-bars"></i></button>
            </div>
            <div class="left">
                <a href="inicio.html">INICIO</a>
                `+(tipoUs == 'RH'? `<a href="#">ENTREVISTADORES</a>`:``)+`
                `+(tipoUs == 'RH'? `<a href="consultaAspirantes.html">ASPIRANTES</a>`:``)+`
                `+(tipoUs == 'RH' || tipoUs == 'EN'? `<a href="#">EXÁMENES</a>`:``)+`
                `+(tipoUs == 'RH'? `<a href="#">REPORTES</a>`:``)+`
            </div>
            <div class="right">
                <a h ref="#" class="item"><i class="fa-solid fa-right-to-bracket"></i></a>
            </div>
        </nav>
        <div class="responsive-menu" id="menu-r">
            <a href="inicio.html">INICIO</a>
            `+(tipoUs == 'RH'? `<a href="#">ENTREVISTADORES</a>`:``)+`
            `+(tipoUs == 'RH'? `<a href="consultaAspirantes.html">ASPIRANTES</a>`:``)+`
            `+(tipoUs == 'RH'|| tipoUs == 'EN'? `<a href="#">EXÁMENES</a>`:``)+`
            `+(tipoUs == 'RH'? `<a href="#">REPORTES</a>`:``)+`
        </div>
        </header>`;
    }
}

window.customElements.define('my-header',show_header);