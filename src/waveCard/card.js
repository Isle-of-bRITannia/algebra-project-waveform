const template = document.createElement("template");


template.innerHTML = `
    <div class="box">
        <h1></h1>

        <button></button>

        <label for="waveType">WaveType</label>
        <select name="waveType" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>

        <span class="input">
            <p>Invert</p>
            <input type="checkbox">
        </span>

        <span class="input">
            <p>Amplitude</p>
            <input type="range">
        </span>

        <span class="input">
            <p>Period</p>
            <input type="range">
        </span>

        <span class="input">
            <p>Skew</p>
            <input type="range">
        </span>

        <span class="input">
            <p>Shift</p>
            <input type="range">
        </span>


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