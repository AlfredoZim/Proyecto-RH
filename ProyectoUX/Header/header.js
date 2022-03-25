class show_header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        
        let session = JSON.parse( localStorage.getItem('session') );
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
                <a href="#">INICIO</a>
                `+(session.tipoUsuario == 'RH'? ` <a href="#">ENTREVISTADORES</a> `: ` `) +
                (session.tipoUsuario == 'RH'? ` <a href="#">ASPIRANTES</a> `: ` `) +
                (session.tipoUsuario == 'RH'? ` <a href="#">EXÁMENES</a> `: ` `) +
                (session.tipoUsuario == 'RH'? ` <a href="#">REPORTES</a> `: ` `) +
                `
                
                
                
            </div>
            <div class="right">
                <a h ref="#" class="item"><i class="fa-solid fa-right-to-bracket"></i></a>
            </div>
        </nav>
        <div class="responsive-menu" id="menu-r">
            <a href="#">INICIO</a>
            <a href="#">ENTREVISTADORES</a>
            <a href="#">ASPIRANTES</a>
            <a href="#">EXÁMENES</a>
            <a href="#">REPORTES</a>
        </div>
        </header>`;
    }
}

window.customElements.define('my-header',show_header);