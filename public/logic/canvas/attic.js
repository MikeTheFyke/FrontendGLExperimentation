function drawAttic (){

    var roof_gradient = ctx.createLinearGradient(0,topYCorner - 90, 0, topYCorner);
    roof_gradient.addColorStop(0, '#734d26');
    roof_gradient.addColorStop(1, '#4d3319');

    ctx.fillStyle = roof_gradient;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.beginPath(); // Back Wall
    ctx.moveTo( backX1,backY1 - 110 );
    ctx.lineTo(backX1 + ((Xwidth - backX1)/2) - 15,backY1 - 175);
    ctx.lineTo( (backX1 + (Xwidth/2)) + 105 ,backY1  - 110 );
    ctx.lineTo( backX1,backY1 - 110 );
    ctx.fill();

    ctx.beginPath(); // Right Side
    ctx.moveTo(topXCorner + (Xwidth/2),topYCorner - 90);
    ctx.lineTo(backX1 + ((Xwidth - backX1)/2) - 15,backY1 - 175);
    ctx.lineTo( (backX1 + (Xwidth/2)) + 105 ,backY1  - 110 );
    ctx.lineTo(topXCorner + Xwidth - 30,topYCorner);
    ctx.lineTo(topXCorner + (Xwidth/2),topYCorner - 90);
    ctx.fill();

    ctx.beginPath(); // Left Side
    ctx.moveTo( topXCorner + (Xwidth/2),topYCorner - 90);
    ctx.lineTo( backX1 + ((Xwidth - backX1)/2) - 15,backY1 - 175);
    ctx.lineTo( backX1,backY1 - 110 );
    ctx.lineTo( topXCorner + 30,topYCorner);
    ctx.lineTo( topXCorner + (Xwidth/2),topYCorner - 90);
    ctx.fill();

    ctx.beginPath(); // Floor
    ctx.moveTo( backX1,backY1 - 110 );
    ctx.lineTo( (backX1 + (Xwidth/2)) + 105 ,backY1  - 110 );
    ctx.lineTo(topXCorner + Xwidth - 30,topYCorner);
    ctx.lineTo( topXCorner + 30,topYCorner);
    ctx.fill();

    ctx.beginPath(); // Front
    ctx.moveTo(topXCorner + 30,topYCorner);
    ctx.lineTo(topXCorner + (Xwidth/2),topYCorner - 90); // Peak
    ctx.lineTo(topXCorner + Xwidth - 30,topYCorner);
    ctx.lineTo(topXCorner + 30,topYCorner);
    ctx.stroke();

}