import {Wave, SynthesizeWave, ClampWave, InverseWave, Amped, Shifted, Sinesoidal, Rect, Triangle, Saw} from './waveform.js'

const WaveAPI = {
    synthesize: (...waves) => new SynthesizeWave(...waves),
    clamp: (wave, clampVal) => new ClampWave(wave,clampVal),
    invert: (wave) => new InverseWave(wave),
    amplify: (wave, ampVal) => new Amped(wave,ampVal),
    shift: (wave, shiftVal) => new Shifted(wave,shiftVal),    
    sinesoidal: (period,skew) => new Sinesoidal(period,skew),
    rectangle: (period,skew) => new Rect(period,skew),
    triangle: (period,skew) => new Triangle(period,skew),
    saw: (period,skew) => new Saw(period,skew),
    
}

export {WaveAPI as Wave};