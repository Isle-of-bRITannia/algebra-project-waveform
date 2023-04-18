import {Wave, CombinedWave, SynthesizeWave, ClampWave, InverseWave, Amped, Shifted, Sinesoidal, Rect, Triangle, Saw} from './waveform.js'

const WaveAPI = {
    combine: (wave1,wave2) => new CombinedWave(wave1,wave2),
    synthesize: (...waves) => new SynthesizeWave(...waves),
    clamp: (wave, clampVal) => new ClampWave(wave,clampVal),
    invert: (wave) => new InverseWave(wave),
    amplify: (wave, ampVal) => new Amped(wave,ampVal),
    shift: (wave, shiftVal) => new Shifted(wave,shiftVal),    
    sinesoidal: (period,skew) => new Sinesoidal(period,skew),
    rectangle: (period,ratio) => new Rect(period,ratio),
    triangle: (period,skew) => new Triangle(period,skew),
    saw: (period,skew) => new Saw(period,skew),
    
}

export {WaveAPI as Wave};