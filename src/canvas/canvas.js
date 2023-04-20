let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

const drawWave = (wave) => {
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight/2 + wave.formula(0));
    for(let xPos = 0; xPos < canvasWidth; xPos+= .1){
        let yPos = wave.formula(xPos/125);     
        ctx.lineTo(xPos,canvasHeight/2 + yPos*250);
    }    
    ctx.stroke();
}

const clear = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

export{
    drawWave,
    clear
}