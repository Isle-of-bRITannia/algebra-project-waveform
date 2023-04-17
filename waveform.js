class Wave{
    constructor(amp, freq, skew, pulseR){};
    //formula to return
}

class Sinesoidal{
    //amp
    //freq
    //skew
    //formula = amp * sine(freqx + shift + skew)
    //skew = (sinx/skew)
}
class Rect{
    //amp
    //freq
    //ratio
    //y = amp when remainder(x/freq > ratio) && -amp when remainder(x/freq < ratio)
}
class Triangle{
//amplitude
//freq
//skew

//y = arcsin(amp * sine(freqx + (sinx/skew)))
}
class Saw{
    //amp
    //freq
    //2(x/freq - floor(.5 + x/freq))
}

