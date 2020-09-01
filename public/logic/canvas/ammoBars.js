function ammoHash(){
    ctx.strokeStyle="darkblue";
    ctx.fillStyle="blue";
    ctx.lineWidth = 5;

    bar08();
    bar07();
    bar06();
    bar05();
    bar04();
    bar03();
    bar02();
    bar01();
}

function bar08(){
    ctx.beginPath(); // Health Icon
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 195,topYCorner + 5);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 220,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar07(){
    ctx.beginPath(); // Health Icon
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 140,topYCorner + 11);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 155,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar06(){
    ctx.beginPath(); // Health Icon
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 115,topYCorner + 13);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 130,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar05(){
    ctx.beginPath(); // Health Icon
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 92.5,topYCorner + 17);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 105,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar04(){
    ctx.beginPath(); // Health Icon
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 73,topYCorner + 19); // RT Mid Top Corner
    ctx.lineTo( topXCorner + 83,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar03(){
    ctx.beginPath(); // Health Icon
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 53,topYCorner + 21); // RT Mid Top Corner
    ctx.lineTo( topXCorner + 63,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar02(){
    ctx.beginPath(); // Health Icon
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 35,topYCorner + 23);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 43,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function bar01(){
    ctx.beginPath(); // Health Icon
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 20,topYCorner + 24);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 25,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}