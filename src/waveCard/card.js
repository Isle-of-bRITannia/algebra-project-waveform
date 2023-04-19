const template = document.createElement("template");


template.innerHTML = `
    <div class="box">
        <h1></h1>
        <button></button>
    </div>
`;

class Card extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.h1 = this.shadowRoot.querySelector("h1");
        this.button = this.shadowRoot.querySelector("button");
    }
    
    connectedCallback(){
        this.button.innerHTML = "Favorite"
        this.button.onclick = () => {
            storage.addFavorite(this.getAttribute('data-id'));
            this.button.innerHTML = "Favorited"
            this.button.disabled = true;
            console.log(storage.readLocalStorage().favorites);
        }
        this.render();
    }

    disconnectedCallback(){
        this.button.onclick = null;
    }


    render(){
        this.h1.innerHTML = `${exercise}`;
    }

}


customElements.define('wave-card', Card)