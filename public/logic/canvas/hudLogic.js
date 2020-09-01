var canvas = document.getElementById('hudCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topYCorner = 20;
var topXCorner = 20;
const xthick = 950;
const ythick = 525;

var ammoCount = 8;

// Background variables
var imgMouseX = 0;
var imgMouseY = 0;
var imgY = -100;
var imgX = -700;
var img = document.getElementById("field");
////////////////////////

function calculateMousePos(evt){      // an event fires when mouse moves
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x:mouseX,   // Object Literal
      y:mouseY    // Object Literal
    };
  }

window.onload = function() {
    setInterval(function() {
    drawEverything();  
    },1000/framesPerSecond); // Hundredth of seconds

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
        function(evt) {
            var mousePos = calculateMousePos(evt);
            Xcord = mousePos.x;
            Ycord = mousePos.y;
            topYCorner = mousePos.y-((ythick/2) + 75);
            topXCorner = mousePos.x-((xthick/2) + 50);
            imgMouseX = mousePos.x;
            imgMouseY = mousePos.y;
            console.log ("  Mouse X Position = " + imgMouseX)
       }
    );
    canvas.addEventListener("click", 
        function (){
            ammoCtr()
        }
    );
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);

    if (topYCorner <= 50){ // Top Boundry
        topYCorner = 50 ;}
    if (topYCorner >= 90){ // Bottom Boundry
        topYCorner = 90 ;} 
    if (topXCorner >= 275){ // Right Boundry
        topXCorner = 275 ;}
    if (topXCorner <= 175 ){ // Left Boundry
        topXCorner = 175 ;}



    background()

    // drawLines()

    // hudFrameRed()

    rectile()

    blueHud()
    drawSensor()
    moveBar()
    drawHealthBar()
    drawRadar()
    ammoBar()
    
  }

  function drawLines() {
    ctx.strokeStyle = "teal";
    ctx.beginPath(); // Top Left Line
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(topXCorner,topYCorner);
    ctx.stroke();

    ctx.beginPath(); // Top Right Line
    ctx.moveTo(1400,0);
    ctx.lineTo(topXCorner + xthick,topYCorner);
    ctx.stroke();

    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(0,675);
    ctx.lineTo(topXCorner,topYCorner + ythick);
    ctx.stroke();

    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(1400,675);
    ctx.lineTo(topXCorner + xthick,topYCorner +ythick); 
    ctx.stroke();
  }

  function background(){
      if ( imgMouseX <= 300 && imgX != 0){ // X Movement
        imgX = imgX + 10;
        console.log("Background is here = " + imgX)
      }

      if ( imgMouseX >= 1100 && imgX != -1400){
        imgX = imgX - 10;
        console.log("Background is here = " + imgX)
      }

      if ( imgMouseY <= 150 && imgY != 0 ){ // Y Movement
          imgY = imgY +10;
      }

      if ( imgMouseY >= 400 && imgY != -300 ){
        imgY = imgY - 10;
    }
    ctx.drawImage(img, imgX, imgY, 2800, 1000);
  }
