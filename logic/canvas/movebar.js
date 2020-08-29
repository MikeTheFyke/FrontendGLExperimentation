
function moveBar() {

    var barX = Xcord;
    var barX2 = Xcord;

        if (barX >= 890){ // Right Boundry
            barX = 890 ;}
        if (barX <= 510 ){ // Left Boundry
            barX = 510 ;}
        
        if (barX2 >= 915){ // Right Boundry
            barX2 = 915 ;}
        if (barX2 <= 485 ){ // Left Boundry
            barX2 = 485 ;}
    
    ctx.strokeStyle= "blue";
    ctx.fillStyle = "white";

    ctx.beginPath(); // Middle Move Bar Interior
    ctx.moveTo( barX - 50,topYCorner - 35 ); // Left Top Corner
    ctx.lineTo( barX + 50,topYCorner - 35 ); // Right Top Corner
    ctx.lineTo( barX + 50,topYCorner + 10); // Right Bottom Corner
    ctx.lineTo( barX - 50,topYCorner + 10); // Left Bottom Corner
    ctx.closePath();
    ctx.stroke();
    ctx.fill()

    ctx.beginPath(); // Middle MOve Bar Exterior
    ctx.moveTo( barX2 - 25,topYCorner - 35 ); // Left Top Corner
    ctx.lineTo( barX2 + 25,topYCorner - 35 ); // Right Top Corner
    ctx.lineTo( barX2 + 25,topYCorner + 10); // Right Bottom Corner
    ctx.lineTo( barX2 - 25,topYCorner + 10); // Left Bottom Corner 
    ctx.closePath();
    ctx.stroke();
    ctx.fill()

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo((topXCorner + 270),topYCorner - 35 ); // Left Top Corner
    ctx.lineTo( ( (topXCorner + xthick) - 270),topYCorner - 35 ); // Right Top Corner
    ctx.lineTo( ( (topXCorner + xthick) - 285),topYCorner + 10); // RT SubMid
    ctx.lineTo((topXCorner + 285),topYCorner + 10); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
}
