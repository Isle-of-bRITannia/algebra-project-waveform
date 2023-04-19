import * as canvas from "./canvas/canvas.js";
import { Wave } from './waveAPI/waveApi.js';
import * as audio from "./audio/audio.js";
let waves = [];
waves[0] = Wave.sinesoidal(1,1);
waves[1] = Wave.combine(Wave.sinesoidal(1,1), Wave.sinesoidal(8,2));
let myNewWave = Wave.triangle(1,1);//Wave.synthesize(waves);
//window.onload(() => {
    //console.log('loaded');
    canvas.drawWave(myNewWave);
//});
let mySound; 
const playButton = document.getElementById("playButton");

playButton.onclick = () => {    
    mySound = new Float32Array(audio.sampleWave(220,myNewWave));
    audio.playSound({array: mySound,samplerate: 44100});
};