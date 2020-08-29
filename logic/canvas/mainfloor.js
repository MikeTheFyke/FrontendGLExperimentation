function drawMainFloor(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

/// Layering Logic - Horizontal - X Axis
    if (Xcord >= 475){
        rightRoom();
        middleRoom();
        leftRoom();
    } else if (Xcord < 475 && Xcord > 445){
        leftRoom();
        rightRoom();
        middleRoom();
    } else if (Xcord <= 445){
        leftRoom();
        middleRoom();
        rightRoom();
    }
///    
}

function rightRoom(){
    var mainRight_gradient = ctx.createLinearGradient(topXCorner + Xwidth - 10,backY1, topXCorner + Xwidth - 10,backY1 + 300);
    mainRight_gradient.addColorStop(0, '#ff0000');
    mainRight_gradient.addColorStop(1, '#660000');

    ctx.fillStyle = mainRight_gradient;
 
    // Back Wall
    ctx.beginPath();
    ctx.moveTo((backX1 + (Xwidth/2)) - 70 ,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1 + 100);
    ctx.lineTo((backX1 + (Xwidth/2)) - 70 ,backY1 + 100);
    ctx.lineTo((backX1 + (Xwidth/2)) - 70 ,backY1);
    ctx.fill();
    ctx.stroke();
    // Right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1 + 100);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight - 10);
    ctx.fill();
    ctx.stroke();
    // Left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3) + 40),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo((backX1 + (Xwidth/2)) - 70 ,backY1);
    ctx.lineTo((backX1 + (Xwidth/2)) - 70 ,backY1 + 100);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3) + 40),topYCorner + Yheight - 10);
    ctx.fill();
    ctx.stroke();
    // Roof
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3) + 40),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1);
    ctx.lineTo((backX1 + (Xwidth/2)) - 70 ,backY1);
    ctx.fill();
    ctx.stroke();
    // Floor
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3) + 40),topYCorner + Yheight - 10);
    ctx.lineTo((backX1 + (Xwidth/2)) - 70 ,backY1 + 100);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1 + 100);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight - 10);
    ctx.fill();
    ctx.stroke();
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3) + 40),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3) + 40),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.stroke();
}

function leftRoom(){
    var mainLeft_gradient = ctx.createLinearGradient(backX1,backY1, backX1,backY1 + 300);
    mainLeft_gradient.addColorStop(0, '#ffff99');
    mainLeft_gradient.addColorStop(1, '#b3b300');

    ctx.fillStyle = mainLeft_gradient;

    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1 + 100);
    ctx.lineTo(backX1,backY1 + 100);
    ctx.lineTo(backX1,backY1);
    ctx.fill();
    ctx.stroke();
    // Left Wall
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + 10,topYCorner + Yheight - 10);
    ctx.lineTo(backX1,backY1 + 100);
    ctx.lineTo(backX1,backY1);
    ctx.fill();
    ctx.stroke();
    // Right Wall
    ctx.beginPath();
    ctx.moveTo(backX1 + ((Xwidth/2) - 210),backY1);
    ctx.lineTo(topXCorner + ((Xwidth/3)+50) - 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + ((Xwidth/3)+50) - 10,topYCorner + Yheight - 10);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1 + 100);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1);
    ctx.fill();
    ctx.stroke();
    // Floor
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10,topYCorner + Yheight - 10);
    ctx.lineTo(backX1,backY1 + 100);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1 + 100);
    ctx.lineTo(topXCorner + ((Xwidth/3)+50) - 10,topYCorner + Yheight - 10);
    ctx.moveTo(topXCorner + 10,topYCorner + Yheight - 10);
    ctx.fill();
    ctx.stroke();
    // Roof
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1);
    ctx.lineTo(topXCorner + ((Xwidth/3)+50) - 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.fill();
    ctx.stroke();
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + ((Xwidth/3)+50) - 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + ((Xwidth/3)+50) - 10,topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + 10,topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.stroke();
}

function middleRoom(){

    var mainHall_gradient = ctx.createLinearGradient(0,backY1, 0,topYCorner + Yheight - 10);
    mainHall_gradient.addColorStop(0, '#ff531a');
    mainHall_gradient.addColorStop(1, '#802000');

    ctx.fillStyle = mainHall_gradient;

    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1 + 150, backY1 );
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230), backY1 );
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230), backY1  + 100);
    ctx.lineTo(backX1 + 150, backY1 + 100);
    ctx.lineTo(backX1 + 150, backY1 );
    ctx.fill();
    ctx.stroke();
    // Left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1 + 150,backY1 );
    ctx.lineTo(backX1 + 150, backY1 + 100);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50),topYCorner + ((Yheight/2) - 10));
    ctx.fill();
    ctx.stroke();
    // Right Wall
    ctx.beginPath();
    ctx.moveTo(backX1 + 150 + ((Xwidth/2) - 230), backY1 );
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + Yheight - 10);
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230), backY1  + 100);
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230), backY1 );
    ctx.fill();
    ctx.stroke();
    // Floor
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + Yheight - 10);
    ctx.lineTo(backX1 + 150, backY1 + 100);
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230), backY1  + 100);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50),topYCorner + Yheight - 10);
    ctx.fill();
    ctx.stroke();
    // Roof
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1 + 150, backY1 );
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230), backY1 );
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 10));
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + ((Yheight/2) - 10));
    ctx.fill();
    ctx.stroke();
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 10));
    ctx.stroke();
}