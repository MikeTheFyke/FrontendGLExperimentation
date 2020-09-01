var width = 5;
var width2 = 3;

function radarBits() {
    ctx.fillStyle="blue"
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 50, 0 * Math.PI, 2.0 * Math.PI, false); // Boundry Point
    ctx.fill()
    
    ctx.fillStyle="blue"
    ctx.strokeStyle="black"
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 35, 0 * Math.PI, 2.0 * Math.PI, false); // Edge Point
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle="blue"
    ctx.strokeStyle="black"
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 5, 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle="White"
    ctx.beginPath();
    ctx.arc(topXCorner, (topYCorner + ythick) - 62.5, width, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    
    ctx.fillStyle="Blue"
    ctx.beginPath();
    ctx.arc(topXCorner, (topYCorner + ythick) - 62.5, width2, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();

    ctx.strokeStyle="black"
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 35, 0 * Math.PI, 2.0 * Math.PI, false); // Edge Point
    ctx.stroke()

    ctx.beginPath() // Hozizontal Radar Lines
    ctx.moveTo( topXCorner - 35 ,(topYCorner + ythick) - 62.5)
    ctx.lineTo( topXCorner + 35 ,(topYCorner + ythick) - 62.5)
    ctx.stroke()

    ctx.beginPath() // Vertical Radar Lines
    ctx.moveTo( topXCorner, (topYCorner + ythick) - 97.5)
    ctx.lineTo( topXCorner, (topYCorner + ythick) - 27)
    ctx.stroke()
}

function drawRadar() {
    radarBits();
    if ( width > 50){
        width = 5;
        width2 = 3
    }
    width = width + .5;
    width2 = width2 + .5;
}
setInterval(drawRadar, 2000);