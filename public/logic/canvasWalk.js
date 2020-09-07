var canvas = document.getElementById('walkCanvas');
var ctx = canvas.getContext('2d');

var showingWelcomeBanner = true;

var WelcomeBanner = document.getElementById('welcomeBanner');

var windowW = canvas.width;
var windowH = canvas.height;


window.onload = function() {  
    console.log("CanvasWidth : " + windowW);
    console.log("CanvasHeight : " + windowH);

    var framesPerSecond = 30;
    setInterval(function() {
        drawEverything();
    },1000/framesPerSecond);
  
    canvas.addEventListener ('mousedown', handleMouseClick);
}

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

function handleMouseClick(evt){
  if(showingWelcomeBanner) {
    showingWelcomeBanner = false;
  }
}


function drawEverything() {
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,900,650);
    if (showingWelcomeBanner) {
        ctx.drawImage(WelcomeBanner, 350, 300);
        return;
    }
}
