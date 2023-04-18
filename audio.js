const sampleRate = 44100;
const array = new Float32Array(sampleRate);

function sampleWave (freq, wave) {
    for (let i = 0; i < sampleRate; i++){
        array[i] =  wave.formula((i/freq));
    }
    console.log("done");
    return array;
}



function playSound({array}){    
    const audioContext = new AudioContext({sampleRate:44100})
    const audioBuffer = audioContext.createBuffer(1, array.length,44100);
    audioBuffer.copyToChannel(array,0);
    const source = audioContext.createBufferSource();
    source.connect(audioContext.destination);
    source.buffer = audioBuffer;
    source.start();
}



export {sampleWave, playSound};