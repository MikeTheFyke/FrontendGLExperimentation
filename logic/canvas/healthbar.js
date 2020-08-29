function drawHealthBar() {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";

    ctx.beginPath(); // Outter Frame
    ctx.arc(topXCorner + xthick -220 , topYCorner + 30, 20, 0.5 * Math.PI, 1.25 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner + xthick -200 , topYCorner + 10, 20, 1.25 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    ctx.arc(topXCorner + xthick + 20 , topYCorner + 65, 40, 1.5 * Math.PI, 2.55 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick - 30 , topYCorner + 100, 40, 0 * Math.PI, 1.5 * Math.PI, true); // Bottom Interior Arc
    ctx.closePath();
    ctx.stroke();

    innerBar();
}

var diameter = 11 ;

function innerBar(){
    ctx.lineWidth = 4;
    ctx.strokeStyle="lightblue";
    ctx.fillStyle = "blue";
    ctx.beginPath(); // Inner Cell
    ctx.arc(topXCorner + xthick - 205 , topYCorner + 24, 15, 0.5 * Math.PI, 1.25 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner + xthick - 200 , topYCorner + 13, 12, 1.25 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    ctx.arc(topXCorner + xthick +  22 , topYCorner + 65, 25, 1.5 * Math.PI, 2.5 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick -  12 , topYCorner + 84, 33, 0 * Math.PI, 1.5 * Math.PI, true); // Bottom Interior Arc
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 1; // Blue Cross
    ctx.beginPath();
    ctx.moveTo( topXCorner + xthick - 250 , topYCorner + 90 ); // Leftt edge Bottom Corner
    ctx.lineTo( topXCorner + xthick - 250 , topYCorner + 80 ); // Left edge Top Corner
    ctx.lineTo( topXCorner + xthick - 240 , topYCorner + 80 ); // Left Edge Center Top
    ctx.lineTo( topXCorner + xthick - 240 , topYCorner + 70 ); // Top left Corner 
    ctx.lineTo( topXCorner + xthick - 230 , topYCorner + 70 ); // Top Right Corner
    ctx.lineTo( topXCorner + xthick - 230 , topYCorner + 80 ); // Right Edge Center
    ctx.lineTo( topXCorner + xthick - 220 , topYCorner + 80 ); // Right edge Top Corner
    ctx.lineTo( topXCorner + xthick - 220 , topYCorner + 90 ); // Right edge Bottom Corner
    ctx.lineTo( topXCorner + xthick - 230 , topYCorner + 90 ); // Right Edge Center
    ctx.lineTo( topXCorner + xthick - 230 , topYCorner + 100 ); // Bottom Right Corner
    ctx.lineTo( topXCorner + xthick - 240 , topYCorner + 100 ); // Bottom Left Corner
    ctx.lineTo( topXCorner + xthick - 240 , topYCorner + 90 );
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    drawBar01()
}

function bar01() {

    for (var b = 1; b <= 6; b++){

        ctx.fillStyle = "white";
        ctx.beginPath(); // Inner Cell
        ctx.arc(topXCorner + xthick - 230 + ( b * 34) , topYCorner + 85, diameter, 0 * Math.PI, 2 * Math.PI, false); // Bottom Left Arc
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "blue";
        ctx.beginPath(); // Inner Cell
        ctx.arc(topXCorner + xthick - 230 + ( b * 34) , topYCorner + 85, 12, 0 * Math.PI, 2 * Math.PI, false); // Bottom Left Arc
        ctx.closePath();
        ctx.fill();
    }
}


function drawBar01() {
    bar01();
    if ( diameter >= 14){
        diameter = 11;
    
    }
    diameter = diameter + 0.025;
}