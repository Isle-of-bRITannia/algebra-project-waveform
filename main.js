import * as canvas from "./canvas.js";
import { Wave } from './waveApi.js';
import * as audio from "./audio.js";
let waves = [];
waves[0] = Wave.sinesoidal(1,1);
waves[1] = Wave.combine(Wave.sinesoidal(1,1), Wave.sinesoidal(8,2));
let myNewWave = Wave.synthesize(waves);
//window.onload(() => {
    //console.log('loaded');
    canvas.drawWave(myNewWave);
//});
const mySound = new Float32Array(audio.sampleWave(220,myNewWave));
const playButton = document.getElementById("playButton");

playButton.onclick = () => {
    
    audio.playSound({array: mySound,samplerate: 44100});
};