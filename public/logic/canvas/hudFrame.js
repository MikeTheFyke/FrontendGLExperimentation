function blueHud () {

    ctx.fillStyle="black";
    ctx.beginPath();
    ///
    ctx.moveTo(0,0); // Top Left
    ctx.lineTo(1400,0); // Top Right
    ctx.lineTo(1400,700); // Bottom Right
    ///
    ctx.arc( ((topXCorner + xthick) - 10),(topYCorner + ythick) -100, 100, 0.5 * Math.PI, 0 * Math.PI, true); // Bottom right Arc
    ctx.arc( ((topXCorner + xthick) + 25), topYCorner + ( ythick/2 ), 135, .5 * Math.PI, 1.5 * Math.PI, true); // Right Middle Arc
    ctx.arc((topXCorner + xthick) - 10, topYCorner + ( ( ythick/2)/2 ) - 35 , 100, 0, 1.5 * Math.PI, true); // Top Right Arc
    ///
    ctx.lineTo( ( (topXCorner + xthick) - 220),topYCorner - 30); // TOP RIGHT MID CORNER
    ctx.lineTo( ( (topXCorner + xthick) - 275),topYCorner + 25); // TOP RIGHT SUB MID
    ctx.lineTo((topXCorner + 275),topYCorner + 25); // TOP LEFT SUB MID
    ctx.lineTo( (topXCorner + 220), topYCorner - 30 ); // TOP LEFT MID CORNER
    ///
    ctx.arc(topXCorner + 10, topYCorner + ( ( ythick/2)/2 ) - 35 , 100, 1.5 * Math.PI, 1 * Math.PI, true); // Top Left Arc
    ctx.arc(topXCorner - 25, topYCorner + ( ythick/2 ), 135, 1.5 * Math.PI, .5 * Math.PI, true); // Left Middle Arc
    ctx.arc((topXCorner),(topYCorner + ythick) -100, 100, 1 * Math.PI, .5 * Math.PI, true); // Bottom Left Arc
    ///
    ctx.lineTo((topXCorner + 220),(topYCorner + ythick) + 30); // BOTTOM LEFT CORNER
    ctx.lineTo((topXCorner + 275),((topYCorner + ythick) - 25 ) ); // BOTTOM LEFT SUB MID
    ctx.lineTo( ((topXCorner + xthick) - 275),(topYCorner + ythick) -25); // BOTTOM RIGHT SUB MID
    ctx.lineTo( ((topXCorner + xthick) - 220),topYCorner + ythick + 30 ); // BOTTOM RIGHT SUB CORNER
    ///
    ctx.arc( ((topXCorner + xthick) - 10),(topYCorner + ythick) -100, 100, .5 * Math.PI, 0 * Math.PI, true); // Bottom right Arc
    ctx.lineTo( 1400,700);
    ctx.lineTo( 0, 700 ); // LEFT SIDE MIDDLE EDGE
    ctx.closePath();
    ctx.fill();

    /// FRAME BLUE
    // context.arc(x, y, radius, startAngle, endAngle, counterClockwise);\
    ctx.lineWidth = 10;
    ctx.strokeStyle = "blue"
    ctx.beginPath();
    //--------------------Left Side Arcs
    ctx.arc((topXCorner),(topYCorner + ythick) -100, 100, .5 * Math.PI, 1.0 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner - 25, topYCorner + ( ythick/2 ), 135, .5 * Math.PI, 1.5 * Math.PI, false); // Left Middle Arc
    ctx.arc(topXCorner + 10, topYCorner + ( ( ythick/2)/2 ) - 35 , 100, 1.0 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    //--------------------Middle Top Bars
    ctx.lineTo((topXCorner + 220),topYCorner - 30 ); // LeTop Mid Top Corner
    ctx.lineTo((topXCorner + 275),topYCorner + 25); // LeTop SubMid
    ctx.lineTo( ( (topXCorner + xthick) - 275),topYCorner + 25); // RT SubMid 
    ctx.lineTo( ( (topXCorner + xthick) - 220),topYCorner - 30); // RT Mid Top Corner
    //--------------------Right Side Arcs
    ctx.arc((topXCorner + xthick) - 10, topYCorner + ( ( ythick/2)/2 ) - 35 , 100, 1.5 * Math.PI, 0, false); // Top Right Arc
    ctx.arc( ((topXCorner + xthick) + 25), topYCorner + ( ythick/2 ), 135, 1.5 * Math.PI, .5 * Math.PI, false); // Right Middle Arc
    ctx.arc( ((topXCorner + xthick) - 10),(topYCorner + ythick) -100, 100, 0 * Math.PI, .5 * Math.PI, false); // Bottom right Arc
    //--------------------Middle Bottom Bars
    ctx.lineTo( (topXCorner + xthick),(topYCorner + ythick) );  // Right Bottom Corner 
    ctx.lineTo( ((topXCorner + xthick) - 220),topYCorner + ythick + 30 ); // RiBot Mid Corner
    ctx.lineTo( ((topXCorner + xthick) - 275),(topYCorner + ythick) -25); // RiBto SubMid
    ctx.lineTo((topXCorner + 275),((topYCorner + ythick) - 25 ) ); // LeBot SubMid
    ctx.lineTo((topXCorner + 220),(topYCorner + ythick) + 30); // LeBot Mid Corner
    ctx.lineTo((topXCorner),(topYCorner + ythick) );  // Left Bottom Corner
    ctx.stroke()
}