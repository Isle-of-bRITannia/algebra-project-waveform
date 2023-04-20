const template = document.createElement("template");


template.innerHTML = `
    <div class="box">
        <button>Remove</button>

        <span>
            <label for="waveType">WaveType</label>
            <select name="waveType" id="waves">
                <option value="sine">Sinesoidal</option>
                <option value="rect">Rectangle</option>
                <option value="tri">Triangle</option>
                <option value="saw">Sawtooth</option>
            </select>
        </span>


        <span class="input">
            <label for="invert">Invert</label>
            <input id="invert" name="invert" type="checkbox">
        </span>

        <span class="input">
            <label for="clamp">Clamp</label>
            <input id="clamp" name="clamp" type="checkbox">
        </span>

        <span class="input">
            <p>Clamp Value</p>
            <input id="clamp-range" type="range">
        </span>

        <span class="input">
            <p>Amplitude</p>
            <input id="amplitude" type="range">
        </span>

        <span class="input">
            <p>Period</p>
            <input id="period" type="range">
        </span>

        <span class="input">
            <p>Skew</p>
            <input id="skew" type="range">
        </span>

        <span class="input">
            <p>Shift</p>
            <input id="shift" type="range">
        </span>

    </div>
    <hr>
`;

class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.h1 = this.shadowRoot.querySelector("h1");
        this.removeButton = this.shadowRoot.querySelector("button");
        this.waveType = this.shadowRoot.querySelector("#waves");
        this.invert = this.shadowRoot.querySelector("#invert");
        this.clamp = this.shadowRoot.querySelector("#clamp");
        this.clampRange = this.shadowRoot.querySelector("#clamp-range");
        this.amplitude = this.shadowRoot.querySelector("#amplitude");
        this.period = this.shadowRoot.querySelector("#period");
        this.skew = this.shadowRoot.querySelector("#skew");
        this.shift = this.shadowRoot.querySelector("#shift");

    }

    connectedCallback() {
        this.removeButton.innerHTML = "Remove"
        this.removeButton.onclick = () => {
            this.remove();
        }
        this.waveType.onclick = () => {
            this.setAttribute('data-wave-type', this.waveType.value);
        }
        this.invert.onclick = () => {
            this.setAttribute('data-invert', this.invert.checked);
        }
        this.clamp.onclick = () => {
            this.setAttribute('data-clamp', this.clamp.checked);
        }
        this.clampRange.onclick = () => {
            this.setAttribute('data-clamp-val', this.clampRange.value);
        }
        this.amplitude.onclick = () => {
            this.setAttribute('data-amplitude', this.amplitude.value);
        }
        this.period.onclick = () => {
            this.setAttribute('data-period', this.period.value);
        }
        this.skew.onclick = () => {
            this.setAttribute('data-skew', this.skew.value);
        }
        this.shift.onclick = () => {
            this.setAttribute('data-shift', this.shift.value);
        }
        this.render();
    }

    disconnectedCallback() {
        this.removeButton.onclick = null;
        this.waveType.onclick = null;
        this.invert.onclick = null;
        this.clamp.onclick = null;
        this.clampRange.onclick = null;
        this.amplitude.onclick = null;
        this.period.onclick = null;
        this.skew.onclick = null;
        this.shift.onclick = null;
    }


    render() {
        // this.h1.innerHTML = `${exercise}`;
    }

}


customElements.define('wave-card', Card)