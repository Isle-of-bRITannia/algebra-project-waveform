import * as canvas from './canvas/canvas.js';
import { Wave } from './waveAPI/waveApi.js';
import * as audio from './audio/audio.js';
import * as card from './waveCard/card.js';
let waves = [];
let myFinishedWave;
waves[0] = Wave.sinesoidal(1, 1);
waves[1] = Wave.synthesize([Wave.sinesoidal(1, 1), Wave.sinesoidal(8, 2)]);

//window.onload(() => {
//console.log('loaded');
//canvas.drawWave(myNewWave);
//});

let mySound;
const playButton = document.getElementById("playButton");
const synthesizeButton = document.getElementById("synthButton");
const newButton = document.getElementById("newButton");

playButton.onclick = () => {
    mySound = new Float32Array(audio.sampleWave(220, myNewWave));
    audio.playSound({ array: mySound, samplerate: 44100 });
};

synthesizeButton.onclick = () => {
    // collect the info from each wave card in the waves array
    myFinishedWave = Wave.synthesize(waves);
}

newButton.onclick = () => {
    const container = document.querySelector('.container');
    container.appendChild(createCard());
}

function createCard() {
    const newCard = document.createElement("wave-card");
    newCard.dataset.waveType = "sine";
    newCard.dataset.period = 1;
    newCard.dataset.skew = 10;
    newCard.dataset.amplitude = 1;
    newCard.dataset.shift = 0;
    newCard.dataset.clamp = false;
    newCard.dataset.clampVal = 1;
    newCard.dataset.invert = false;
    newCard.dataset.select = false;
    return newCard;
}