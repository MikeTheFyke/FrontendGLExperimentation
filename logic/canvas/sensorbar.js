var sensorCTR = 0 ;

function drawSensor(){

    var sbX1 = topXCorner + (xthick / 2) - 10 ;
    var sbX2 = topXCorner + (xthick / 2) + 10 ;

    var sbY1 = topYCorner + ythick +  5 ;
    var sbY2 = topYCorner + ythick + 20 ;

    ctx.strokeStyle = "blue";
    ctx.fillStyle = "white";
    ctx.lineWidth = 5;

    ctx.beginPath(); // Outer Frame
    ctx.moveTo( ( topXCorner + 285 ),((topYCorner + ythick) - 5 ) ); // Left Top
    ctx.lineTo( ((topXCorner + xthick ) - 285 ),(topYCorner + ythick) - 5 ); // Right Top
    ctx.lineTo( ((topXCorner + xthick ) - 230 ),(topYCorner + ythick) + 50 ) ; // Right Bottom Corner
    ctx.lineTo( ( topXCorner + 230 ),(topYCorner + ythick) + 50 ); // Left Bottom Corner
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // Lower Bar
    ctx.moveTo( ( topXCorner + 250 ),((topYCorner + ythick) + 30 ) ); // Left Top
    ctx.lineTo( ((topXCorner + xthick ) - 250 ),(topYCorner + ythick) + 30 ); // Right Top
    ctx.lineTo( ((topXCorner + xthick ) - 230 ),(topYCorner + ythick) + 50 ) ; // Right Bottom Corner
    ctx.lineTo( ( topXCorner + 230 ),(topYCorner + ythick) + 50 ); // Left Bottom Corner
    ctx.closePath();
    ctx.stroke();    

    // if (sensorCTR = 1 ){
    //     for ( var m = 0; m <= 200; m++ ) {   
    //         ctx.beginPath(); // Moving Box
    //         ctx.moveTo( sbX1 + m, sbY1 );
    //         ctx.lineTo( sbX2 + m, sbY1 );
    //         ctx.lineTo( sbX2 + m, sbY2 );
    //         ctx.lineTo( sbX1 + m, sbY2 );
    //         ctx.closePath();
    //         ctx.stroke();
    //         ctx.fill();
    //         sensorCTR = sensorCTR + 1;
    //     }
    // }

    // if (sensorCTR = 2 ){
    //     for ( var m = 0; m <= 200; m++ ) {   
    //         ctx.beginPath(); // Moving Box
    //         ctx.moveTo( sbX1 - m, sbY1 );
    //         ctx.lineTo( sbX2 - m, sbY1 );
    //         ctx.lineTo( sbX2 - m, sbY2 );
    //         ctx.lineTo( sbX1 - m, sbY2 );
    //         ctx.closePath();
    //         ctx.stroke();
    //         ctx.fill();
    //         sensorCTR = 1;
    //     }
    // }
    // console.log("SensorCTR = " + sensorCTR);
}

// function movingSensor() {
//     drawSensor();
//     if (sensorCTR = 2){
//         sensorCTR = 1;
//     } else {
//         sensorCtr ++;
//     }
// }
// setInterval(movingSensor, 2000);