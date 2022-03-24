class headerLog extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>
        .space-logo{
            background-color: #0D3F4D;
            width: 100%;
            height: 6rem;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            display: flex;
            align-items: center;
        }
        .space-logo h2{
            margin-left: 2rem;
            font-family: 'Titillium Web', sans-serif;
            color: white;
            font-size: 3rem;
        }
        .space-logo h3{
            margin: 1rem 0 0 3rem;
            font-family: 'Titillium Web', sans-serif;
            color: white;
            font-size: 1rem;
        }

        </style>

        <header class="space-logo">
            <h2>BankIndra</h2>
            <h3>An Indra company</h3>
        </header>
        `
    }
}

window.customElements.define('header-logo', headerLog)