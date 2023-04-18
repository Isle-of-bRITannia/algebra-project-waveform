class Wave{

}

class CombinedWave extends Wave{
    constructor(left,right){
        this.left = left;
        this.right = right;
    };
    //formula to return
    formula(x){
        return((this.left.formula(x) + this.right.formula(x))/2);
    }
}

class Sinesoidal extends Wave{
    constructor(period,skew){
        super();
        this.period = period;
        this.skew = skew;
    };
    set period(x){this.period = x};
    set skew(x){this.skew = x};
    //amp
    //freq
    //skew (should be between 1 and 10)
    //formula = amp * sine(freqx + shift + skew)
    //skew = (sinx/skew)
    formula(x){
        return Math.sin((Math.PI*2*(x+ shift) )/this.period + (Math.sin(Math.PI*2*(x+ shift))/skew))
    }
}
// normalized wave
// class NormWave extends Wave{
//     constructor(wave){
//         super();
//         this.wave();
//     }
//     formula(x) {
//         return this.wave.formula(x);
//     }
// }

//cutoff wave
class ClampWave extends Wave{
    constructor(wave) {
        super();
        this.wave = wave;
    }
    formula(x) {
        return Math.min(Math.max(this.wave.formula(x),1),-1) ;
    }
}
//inverse
class InverseWave extends Wave{
    constructor(wave) {
        super();
        this.wave = wave;
    }
    formula(x) {
        return -1 * this.wave.formula(x);
    }
}
//function for each held data
class Amped extends Wave {
    constructor(amp, wave) {
        super();
        this.amp = amp;
        this.wave = wave;
    }
    formula(x) {
        return amp * this.wave.formula(x);
    }
}
class Shifted extends Wave {
    constructor(shift, wave) {
        super();
        this.shift = shift;
        this.wave = wave;
    }
    formula(x) {
        return this.wave.formula(x + this.shift);
    }
}

class Rect extends Wave{
    constructor(period,ratio){
        this.period = period;
        this.ratio = ratio;
    };
    //amp
    //freq
    //ratio
    //y = amp when remainder(x/freq > ratio) && -amp when remainder(x/freq < ratio)
    formula(x){
        return Math.sign(x%period + ratio - 1);
    }
}


class Triangle extends Wave{
    constructor(period,skew){
        this.period = period;
        this.skew = skew;
    };

//amplitude
//freq
//skew

//y = amp * arcsin(sine(freqx + (sinx/skew)))
formula(x){
    return (2/Math.PI)* Math.asin(Math.sin((Math.PI*2*(x) )/this.period + (Math.sin(Math.PI*2*(x))/skew)));
}
}


class Saw extends Wave{
    constructor(period,skew){
        this.period = period;
        this.skew = skew;
    };
    //amp
    //freq
    //2(x/freq - floor(.5 + x/freq))
    formula(x){
        return((x/period -Math.floor(.5 + x/period) ))
    }
}

