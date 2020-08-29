function drawSecondFloor(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    if (Xcord >= 475){
        secondRight();
        secondMiddle();
        secondLeft();
    } else if (Xcord < 475 && Xcord > 445){
        secondLeft();
        secondRight();
        secondMiddle();
    } else if (Xcord <= 445){
        secondLeft();
        secondMiddle();
        secondRight();
    }

}

function secondLeft(){
    var secondLeft_gradient = ctx.createLinearGradient(topXCorner + 10,topYCorner + 10, topXCorner + 10,topYCorner + ((Yheight/2) - 20));
    secondLeft_gradient.addColorStop(0, '#ffff99');
    secondLeft_gradient.addColorStop(1, '#b3b300');

    ctx.fillStyle = secondLeft_gradient;

    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1,backY1 - 100 );
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 100 );
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 10);
    ctx.lineTo(backX1,backY1  - 10);
    ctx.lineTo(backX1,backY1 - 100 );
    ctx.fill();
    ctx.stroke();
    // left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + 10);
    ctx.lineTo(backX1,backY1 - 100 );
    ctx.lineTo(backX1,backY1  - 10);
    ctx.lineTo(topXCorner + 10, topYCorner + ((Yheight/2) - 20));
    ctx.fill();
    ctx.stroke();
    // right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + 10);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 100 );
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + ((Yheight/2) - 20));
    ctx.fill();
    ctx.stroke();
    // Roof
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + 10);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 100 );
    ctx.lineTo(backX1,backY1 - 100 );
    ctx.fill();
    ctx.stroke();
    // Floor
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 10);
    ctx.lineTo(backX1,backY1  - 10);
    ctx.fill();
    ctx.stroke();
    // Front
    ctx.beginPath(); 
    ctx.moveTo(topXCorner + 10, topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + 10, topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + 10, topYCorner + 10);
    ctx.stroke();
}

function secondMiddle(){
 
    var secondHall_gradient = ctx.createLinearGradient(topXCorner + ((Xwidth/3) + 50),topYCorner + 10,topXCorner + ((Xwidth/3) + 50),topYCorner + ((Yheight/2) - 20));
    secondHall_gradient.addColorStop(0, '#ff531a');
    secondHall_gradient.addColorStop(1, '#802000');

    ctx.fillStyle = secondHall_gradient;

     // Back Wall
     ctx.beginPath();
     ctx.moveTo(backX1 + 150,backY1 - 100 );
     ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 100 );
     ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 10);
     ctx.lineTo(backX1 + 150,backY1  - 10);
     ctx.lineTo(backX1 + 150,backY1 - 100 );
     ctx.fill();
     ctx.stroke();
     // left Wall
     ctx.beginPath();
     ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + 10);
     ctx.lineTo(backX1 + 150,backY1 - 100 );
     ctx.lineTo(backX1 + 150,backY1  - 10);
     ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 20));
     ctx.fill();
     ctx.stroke();
     // right Wall
     ctx.beginPath();
     ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + 10);
     ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 100 );
     ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 10);
     ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 20));
     ctx.fill();
     ctx.stroke();
    // Roof
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + 10);
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 100 );
    ctx.lineTo(backX1 + 150,backY1 - 100 );
    ctx.fill();
    ctx.stroke();
    // Floor
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 10);
    ctx.lineTo(backX1 + 150,backY1  - 10);
    ctx.fill();
    ctx.stroke();
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.stroke();
}

function secondRight(){
    var secondRight_gradient = ctx.createLinearGradient(topXCorner + Xwidth - 10, topYCorner + 10, topXCorner + Xwidth - 10,topYCorner + ((Yheight/2) - 20));
    secondRight_gradient.addColorStop(0, '#ff0000');
    secondRight_gradient.addColorStop(1, '#660000');

    ctx.fillStyle = secondRight_gradient;
    // Back Wall
    ctx.beginPath();
    ctx.moveTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 ); // left upper
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 100 ); // right upper
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 10); // right lower
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 10 ); // left lower
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 ); // left upper
    ctx.fill();
    ctx.stroke();
    // left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + 10);
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 10 );
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + ((Yheight/2) - 20));   
    ctx.fill();
    ctx.stroke();
    // right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + 10); //
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 20));
    ctx.fill();
    ctx.stroke();
    // Roof
    ctx.beginPath();
    ctx.moveTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 100 );
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + 10);
    ctx.fill();
    ctx.stroke();
    // Floor
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 20)); // lower left
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + ((Yheight/2) - 20)); // lower right
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 10 ); // left lower
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 10); // right lower
    ctx.fill();
    ctx.stroke();
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + 10); // lower left
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + 10); // lower right
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + ((Yheight/2) - 20)); // upper right
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 20)); // upper right
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + 10); // upper left
    ctx.stroke();
}