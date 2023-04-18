let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

const drawWave = (wave = {formula: (x) => 1}) => {
    let canvasWidth = canvas.width;

    for(const xPos = 0; xPos < canvasWidth; xPos++){
        let yPos = wave.formula(xPos);
        ctx.beginPath();
        ctx.moveTo(xPos, yPos);
        ctx.lineTo(xPos + 1, yPos + 1);
        ctx.stroke();
    }
}

export{
    drawWave,
}