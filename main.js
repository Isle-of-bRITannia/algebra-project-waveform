import * as canvas from "./canvas.js";
import { Wave } from './waveApi.js';
let myWave = Wave.saw(1,20);
let myNewWave = Wave.combine(myWave,Wave.sinesoidal(1,1))
let myAmpedWave = Wave.amplify(myNewWave, 2);
//window.onload(() => {
    //console.log('loaded');
    canvas.drawWave(myAmpedWave);
//});