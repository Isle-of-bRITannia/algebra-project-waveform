class Wave{
    constructor(left,right){
        this.left = left;
        this.right = right;
    };
    //formula to return
    formula(x){
        return(this.left.formula(x) + this.right.formula(x));
    }
}

class Sinesoidal{
    constructor(amp,period,skew, shift){
        this.amp = amp;
        this.period = period;
        this.skew = skew;
        this.shift = shift;
    };
    //amp
    //freq
    //skew (should be between 1 and 10)
    //formula = amp * sine(freqx + shift + skew)
    //skew = (sinx/skew)
    formula(x){
        return amp* Math.sin((Math.PI*2*(x+ shift) )/this.period + (Math.sin(Math.PI*2*(x+ shift))/skew))
    }
}
class Rect{
    constructor(amp,period,ratio){
        this.amp = amp;
        this.period = period;
        this.ratio = ratio;
    };
    //amp
    //freq
    //ratio
    //y = amp when remainder(x/freq > ratio) && -amp when remainder(x/freq < ratio)
    formula(x){
        return amp* Math.sign(x%period + ratio - 1);
    }
}
class Triangle{
    constructor(amp,period,skew, shift){
        this.amp = amp;
        this.period = period;
        this.skew = skew;
        this.shift = shift;
    };
//amplitude
//freq
//skew

//y = amp * arcsin(sine(freqx + (sinx/skew)))
formula(x){
    return ((2/Math.PI) * amp * Math.asin(Math.sin((Math.PI*2*(x+ shift) )/this.period + (Math.sin(Math.PI*2*(x+ shift))/skew))));
}
}
class Saw{
    constructor(amp,period,skew, shift){
        this.amp = amp;
        this.period = period;
        this.skew = skew;
        this.shift = shift;
    };
    //amp
    //freq
    //2(x/freq - floor(.5 + x/freq))
    formula(x){
        return(amp * (x/period -Math.floor(.5 + x/period) ))
    }
}

