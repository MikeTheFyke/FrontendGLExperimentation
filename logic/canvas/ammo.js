var ammoText = 8

function ammoCtr(){
    if (ammoCount >= 1){
        ammoCount = ammoCount - 1;
        ammoText = ammoCount;
        console.log("AmmoCount = " + ammoCount)
    } else {
        ammoCount = ammoCount + 9;
    }
}

function ammoBar(){
    ctx.strokeStyle = "blue";
    ctx.beginPath(); // Top Middle Icon
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner,topYCorner + 20); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 200,topYCorner - 5);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 240,topYCorner + 40); // RT SubMid
    ctx.lineTo( topXCorner,topYCorner + 40); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();

    // drawBars() Health Like Interior Bar
    if (ammoText >= 1 ){
        drawBullets();
    } else {
        reloadBullets();
    }

    // ammoHash();

    ctx.font = "30px Verdana";
    ctx.fillStyle="white";
    ctx.fillText(ammoText,topXCorner + 180,topYCorner + 30, 90,100);

}

// function drawBars() { // Health Like Bar
//     ctx.strokeStyle = "green";
//     ctx.beginPath(); // Health Icon
//     ctx.lineWidth = 5;
//     ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
//     ctx.lineTo( topXCorner + 195,topYCorner + 5);      // RT Mid Top Corner
//     ctx.lineTo( topXCorner + 220,topYCorner + 30); // RT SubMid
//     ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
//     ctx.closePath();
//     ctx.stroke();
// }

function drawBullets(){
    
    for (var i = 1; i <= ammoText; i++){
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "blue";
        ctx.beginPath(); // Top Middle Icon
        ctx.lineWidth = 2;
        ctx.moveTo( topXCorner + (i * 10) + (i*10),topYCorner + 60); // LeTop Mid Top Corner
        ctx.lineTo( topXCorner + ((i * 10) + 10) + (i*10),topYCorner + 60);      // RT Mid Top Corner
        ctx.lineTo( topXCorner + ((i * 10) + 10) + (i*10),topYCorner + 75); // RT SubMid
        ctx.lineTo( topXCorner + (i * 10) + (i*10),topYCorner + 75); // LeTop SubMid 
        ctx.closePath();
        ctx.fill();

        ctx.beginPath() // Bullet Arc
        ctx.arc(topXCorner + 5 + (i * 10) + (i*10), topYCorner + 55, 5, 1 * Math.PI, 0 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }
    
    shotDot();

}

function shotDot (){
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc( Xcord, Ycord, 5, 0 * Math.PI, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc( Xcord, Ycord, 5, 0 * Math.PI, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
}


function reloadBullets (){
        ctx.fillStyle = "red";
        ctx.beginPath(); // Top Middle Icon
        ctx.lineWidth = 2;
        ctx.moveTo( topXCorner ,topYCorner + 50); // LeTop Mid Top Corner
        ctx.lineTo( topXCorner + 250,topYCorner + 50);      // RT Mid Top Corner
        ctx.lineTo( topXCorner + 265, topYCorner + 75); // RT SubMid
        ctx.lineTo( topXCorner , topYCorner + 75); // LeTop SubMid 
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "white";
        ctx.beginPath(); // Top Middle Icon
        ctx.lineWidth = 2;
        ctx.moveTo( topXCorner + 2 ,topYCorner + 52); // LeTop Mid Top Corner
        ctx.lineTo( topXCorner + 248,topYCorner + 52);      // RT Mid Top Corner
        ctx.lineTo( topXCorner + 263, topYCorner + 73); // RT SubMid
        ctx.lineTo( topXCorner + 2, topYCorner + 73); // LeTop SubMid 
        ctx.closePath();
        ctx.stroke();

        ctx.font = "20px Verdana";
        ctx.fillStyle="white";
        ctx.fillText("-- RELOAD --",topXCorner + 80,topYCorner + 70, 90,100);
}