
function drawOutside (){
    
    var grass_gradient = ctx.createLinearGradient(0,topYCorner + Yheight + 20,0,topYCorner + Yheight + 40);
    grass_gradient.addColorStop(0, '#2db300');
    grass_gradient.addColorStop(1, '#134d00');

    ctx.fillStyle = '#2db300'; // Grass TopX
    ctx.beginPath();
    ctx.moveTo(0 , topYCorner + Yheight + 20 );
    ctx.lineTo(backX1 - 120 ,backY1 + 140);
    ctx.lineTo(backX1 + Xwidth - 160,backY1 + 140);
    ctx.lineTo(900, topYCorner + Yheight + 20 );
    ctx.fill();

    ctx.beginPath(); // Grass first layer
    ctx.fillStyle = grass_gradient;
    ctx.moveTo(0 , topYCorner + Yheight + 20 );
    ctx.lineTo(topXCorner, topYCorner + Yheight + 20 ) ;
    ctx.lineTo(topXCorner, topYCorner + Yheight + 160 );
    ctx.lineTo(topXCorner + Xwidth, topYCorner + Yheight + 160 );
    ctx.lineTo(topXCorner + Xwidth, topYCorner + Yheight + 20 );
    ctx.lineTo(900, topYCorner + Yheight + 20 );
    ctx.lineTo(900, 650 );
    ctx.lineTo(0, 650 );
    ctx.lineTo(0 , topYCorner + Yheight + 20 );
    ctx.fill();

    var dirt_gradient = ctx.createLinearGradient(0, 400, 00, 650);
    dirt_gradient.addColorStop(0, '#734d26');
    dirt_gradient.addColorStop(1, '#261a0d');

    ctx.beginPath(); // Dirt
    ctx.fillStyle = dirt_gradient;
    ctx.moveTo(0 , topYCorner + Yheight + 40);
    ctx.lineTo(topXCorner, topYCorner + Yheight + 40) ;
    ctx.lineTo(topXCorner, topYCorner + Yheight + 160 );
    ctx.lineTo(topXCorner + Xwidth, topYCorner + Yheight + 160 );
    ctx.lineTo(topXCorner + Xwidth, topYCorner + Yheight  + 40 );
    ctx.lineTo(900, topYCorner + Yheight + 40);
    ctx.lineTo(900, 650 );
    ctx.lineTo(0, 650 );
    ctx.lineTo(0 , topYCorner + Yheight + 40);
    ctx.fill();
}