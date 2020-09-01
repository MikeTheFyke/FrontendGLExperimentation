function drawBasement(){

    ctx.strokeStyle = "black";
    ctx.fillStyle = '#465353';
    ctx.lineWidth = 4;

    ctx.beginPath(); // Basement Front
    ctx.moveTo(topXCorner , topYCorner + Yheight );
    ctx.lineTo(topXCorner + Xwidth, topYCorner + Yheight );
    ctx.lineTo(topXCorner + Xwidth, topYCorner + Yheight + 160 );
    ctx.lineTo(topXCorner, topYCorner + Yheight + 160 );
    ctx.lineTo(topXCorner, topYCorner + Yheight ) ;
    ctx.stroke();
    ctx.fill();

    // Back Wall
    ctx.fillStyle = '#465353';
    ctx.beginPath();
    ctx.moveTo(backX1,backY1 + 110);
    ctx.lineTo(backX1 + 450,backY1 + 110);
    ctx.lineTo(backX1 + 450,backY1 + 200);
    ctx.lineTo(backX1,backY1 + 200);
    ctx.lineTo(backX1,backY1 + 110);
    ctx.fill();
    // Left Wall
    ctx.fillStyle = '#758a8a'
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + Yheight + 10);
    ctx.lineTo(backX1,backY1 + 110);
    ctx.lineTo(backX1,backY1 + 200);
    ctx.lineTo(topXCorner + 10, topYCorner + Yheight + 150);
    ctx.lineTo(topXCorner + 10, topYCorner + Yheight + 10);
    ctx.fill();
    // Right Wall
    ctx.fillStyle = '#758a8a'
    ctx.beginPath();
    ctx.moveTo(backX1 + 450,backY1 + 110);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight + 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight + 150);
    ctx.lineTo(backX1 + 450,backY1 + 200);
    ctx.lineTo(backX1 + 450,backY1 + 110);
    ctx.fill();
    // Roof
    ctx.fillStyle = '#171c1c';
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + Yheight + 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight + 10);
    ctx.lineTo(backX1 + 450,backY1 + 110);
    ctx.lineTo(backX1,backY1 + 110);
    ctx.fill();
    // Floor
    ctx.fillStyle = '#9fadad'
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + Yheight + 150);
    ctx.lineTo(backX1,backY1 + 200);
    ctx.lineTo(backX1 + 450,backY1 + 200);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight + 150);
    ctx.lineTo(topXCorner + 10, topYCorner + Yheight + 150);
    ctx.fill();

}