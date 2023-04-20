import * as canvas from './canvas/canvas.js';
import { Wave } from './waveAPI/waveApi.js';
import * as audio from './audio/audio.js';
import * as card from './waveCard/card.js';
let myFinishedWave;

//window.onload(() => {
//console.log('loaded');
//canvas.drawWave(Wave.shift(Wave.amplify(Wave.sinesoidal(1,1),3.6),.5));
//});

let mySound;
const playButton = document.getElementById("playButton");
const synthesizeButton = document.getElementById("synthButton");
const newButton = document.getElementById("newButton");

playButton.onclick = () => {
    if(myFinishedWave != null){
        mySound = new Float32Array(audio.sampleWave(110, myFinishedWave));
        audio.playSound({ array: mySound, samplerate: 44100 });
    }
};

synthesizeButton.onclick = () => {
    let waves = [];
    // collect the info from each wave card in the waves array
    const waveData = document.querySelectorAll('wave-card');
    waveData.forEach(dataPoint => {
        let waveFromData;
        let waveContainer;
        console.log(dataPoint);
        if (dataPoint.dataset.waveType == "sine") {
            waveFromData = Wave.shift(
                Wave.amplify(
                    Wave.sinesoidal(dataPoint.dataset.period,dataPoint.dataset.skew), 
                    dataPoint.dataset.amplitude),
                parseFloat(dataPoint.dataset.shift));
        } else if (dataPoint.dataset.waveType == "rect") {
            waveFromData = Wave.shift(
                Wave.amplify(
                    Wave.rectangle(dataPoint.dataset.period,dataPoint.dataset.skew), 
                    dataPoint.dataset.amplitude),
                    parseFloat(dataPoint.dataset.shift));
        }
        else if (dataPoint.dataset.waveType == "tri") {
            waveFromData = Wave.shift(
                Wave.amplify(
                    Wave.triangle(dataPoint.dataset.period,dataPoint.dataset.skew), 
                    dataPoint.dataset.amplitude),
                    parseFloat(dataPoint.dataset.shift));
        }
        else if (dataPoint.dataset.waveType == "saw") {
            waveFromData = Wave.shift(
                Wave.amplify(
                    Wave.saw(dataPoint.dataset.period,dataPoint.dataset.skew), 
                    dataPoint.dataset.amplitude),
                    parseFloat(dataPoint.dataset.shift));
        }
        console.log(dataPoint.dataset);
        if(dataPoint.dataset.invert === "true"){waveFromData = Wave.invert(waveFromData)}
        if(dataPoint.dataset.clamp === "true"){waveFromData = Wave.clamp(waveFromData, dataPoint.dataset.clampVal)}
        console.log(waveFromData);
        waves.push(waveFromData);
    });
    
    canvas.clear();

    myFinishedWave = Wave.synthesize(waves);
    
    canvas.drawWave(myFinishedWave);
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