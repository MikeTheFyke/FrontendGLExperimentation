function hudFrameRed() {
    ctx.strokeStyle = "red";
    ctx.beginPath(); // Top Line
    ctx.lineWidth = 10;
    ctx.moveTo((topXCorner),topYCorner); // Left Top Corner
    ctx.lineTo((topXCorner + 250),topYCorner); // LeTop Mid Top Corner
    ctx.lineTo((topXCorner + 275),topYCorner + 25); // LeTop SubMid 
    //_______________________________________________________________________________________
    ctx.lineTo( ( (topXCorner + xthick) - 275),topYCorner + 25); // RT SubMid
    ctx.lineTo( ( (topXCorner + xthick) - 250),topYCorner); // RT Mid Top Corner
    ctx.lineTo( (topXCorner + xthick),topYCorner);  // Right Top Corner
    ctx.lineTo( ((topXCorner + xthick) + 50),topYCorner + 100); // RT Point 1
    ctx.lineTo( ((topXCorner + xthick) + 25),topYCorner + 125); // RT Point 2
    //_______________________________________________________________________________________
    ctx.lineTo( (topXCorner + xthick) + 25,((topYCorner + ythick) - 125) ); // RiBot Point 02
    ctx.lineTo( (topXCorner + xthick) + 50,((topYCorner + ythick) - 100) ); // Ribot Point 01
    ctx.lineTo( (topXCorner + xthick),(topYCorner + ythick) );  // Right Bottom Corner 
    ctx.lineTo( ((topXCorner + xthick) - 250),topYCorner + ythick); // RiBot Mid Corner
    ctx.lineTo( ((topXCorner + xthick) - 275),(topYCorner + ythick) -25); // RiBto SubMid
    ctx.lineTo((topXCorner + 275),((topYCorner + ythick) - 25 ) ); // LeBot SubMid
    //_______________________________________________________________________________________
    ctx.lineTo((topXCorner + 250),(topYCorner + ythick)); // LeBot Mid Corner
    ctx.lineTo((topXCorner),(topYCorner + ythick) );  // Left Bottom Corner
    ctx.lineTo((topXCorner) - 50,(topYCorner + ythick) - 100);  // LeBot Point 01
    ctx.lineTo((topXCorner) - 25,(topYCorner + ythick) - 125);  // LeBot Point 02
    //_______________________________________________________________________________________
    ctx.lineTo( (topXCorner) - 25,topYCorner + 125); // LeTop Point 02
    ctx.lineTo( (topXCorner) - 50,topYCorner + 100); // LeTop Point 01
    ctx.closePath();
    ctx.stroke();
  }