function rectile() {
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 5;
    ctx.beginPath()
    ctx.arc( Xcord, Ycord, 50, 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
    ctx.stroke();

    // --- Horizontals
    ctx.beginPath()
    ctx.moveTo( Xcord - 55, Ycord);
    ctx.lineTo( Xcord - 45, Ycord);
    ctx.stroke();

    ctx.beginPath()
    ctx.moveTo( Xcord + 45, Ycord);
    ctx.lineTo( Xcord + 55, Ycord);
    ctx.stroke();

    // --- Verticals
    ctx.beginPath()
    ctx.moveTo( Xcord, Ycord - 45);
    ctx.lineTo( Xcord, Ycord - 55);
    ctx.stroke();
    
    ctx.beginPath()
    ctx.moveTo( Xcord, Ycord + 45);
    ctx.lineTo( Xcord, Ycord + 55);
    ctx.stroke();

}