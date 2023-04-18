class Wave{

}
//Combines 2 waves 
class CombinedWave extends Wave{
    constructor(left,right){
        super();
        this.left = left;
        this.right = right;
    };
    //retuns normalized amplitude result from 2 waves
    formula(x){
        return((this.left.formula(x) + this.right.formula(x))/2);
    }
}
class SynthesizeWave extends Wave{
    constructor(waves){
        super();
        this.waves = waves;
    }

    formula(x){
        let value = 0;
        let counter = 0;
        for(let i = 0; i < this.waves.length; i++){
            value+= this.waves[i].formula(x);
            counter++;
        }
        return (value/counter);
    }
}

class ClampWave extends Wave{
    constructor(wave,clampVal) {
        super();
        this.wave = wave;
        this.clampVal = clampVal;
    }
    //clips wave between clampval and -clampval
    formula(x) {
        return Math.min(Math.max(this.wave.formula(x),this.clampVal),-this.clampVal);
    }
}
class InverseWave extends Wave{
    constructor(wave) {
        super();
        this.wave = wave;
    }
    //inverses wave vertically
    formula(x) {
        return -1 * this.wave.formula(x);
    }
}
class Amped extends Wave {
    constructor(wave,amp) {
        super();
        this.amp = amp;
        this.wave = wave;
    }
    //amplifys wave by x = amp
    formula(x) {
        return this.amp * this.wave.formula(x);
    }
}
class Shifted extends Wave {
    constructor(wave, shift) {
        super();
        this.shift = shift;
        this.wave = wave;
    }
    //shifts contained wave by x = shift
    formula(x) {
        return this.wave.formula(x + this.shift);
    }
}

class Sinesoidal extends Wave{
    constructor(period,skew){
        super();
        this.period = period;
        this.skew = skew;
    };
    //freq
    //skew (should be between 1 and 10)
    //formula = amp * sine(freqx + shift + skew)
    //skew = (sinx/skewNum)
    formula(x){
        return Math.sin((Math.PI*2*(x) )/this.period + (Math.sin(Math.PI*2*(x))/this.skew))
    }
}

class Rect extends Wave{
    constructor(period,ratio){
        super();
        this.period = period;
        this.ratio = ratio;
    };
    //freq
    //ratio
    //y = amp when remainder(x/freq > ratio) && -amp when remainder(x/freq < ratio)
    formula(x){
        return Math.sign(x%this.period + this.ratio - 1);
    }
}


class Triangle extends Wave{
    constructor(period,skew){
        super();
        this.period = period;
        this.skew = skew;
    };
//freq
//skew
//y = amp * arcsin(sine(freqx + (sinx/skew)))
formula(x){
    return (2/Math.PI)* Math.asin(Math.sin((Math.PI*2*(x) )/this.period + (Math.sin(Math.PI*2*(x))/this.skew)));
}
}


class Saw extends Wave{
    constructor(period,skew){
        super()
        this.period = period;
        this.skew = skew;
    };
    //2(x/freq - floor(.5 + x/freq))
    formula(x){
        return((x/this.period -Math.floor(.5 + x/this.period) ))
    }
}

export {Wave, CombinedWave, SynthesizeWave, ClampWave, InverseWave, Amped, Shifted, Sinesoidal, Rect, Triangle, Saw}
