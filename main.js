import * as canvas from "./canvas.js";
import { Wave } from './waveApi.js';
import * as audio from "./audio.js";
let myWave = Wave.sinesoidal(1,1);
let myNewWave = Wave.combine(myWave, Wave.sinesoidal(3,2));
//window.onload(() => {
    //console.log('loaded');
    canvas.drawWave(myNewWave);
//});
const mySound = new Float32Array(audio.sampleWave(220,myNewWave));
const playButton = document.getElementById("playButton");

playButton.onclick = () => {
    
    audio.playSound({array: mySound,samplerate: 44100});
};