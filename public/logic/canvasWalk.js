var canvas;
var canvasContext;

var showingWinScreen = true;

var WelcomeBanner = document.getElementById('welcomeBanner');

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
  if(showingWinScreen) {
    showingWinScreen = false;
  }
}

window.onload = function() {
  canvas = document.getElementById('walkCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30;
  setInterval(function() {
  moveEverything ();
  drawEverything();
  },1000/framesPerSecond); // Hundredth of seconds, ballX movement

  canvas.addEventListener ('mousedown', handleMouseClick);
}

function moveEverything() {
  if (showingWinScreen) {
    return;
  }
}

function drawEverything() {
  colorRect(0,0,canvas.width,canvas.height, 'black');       // blanks screen black

  if (showingWinScreen) {
    canvasContext.drawImage(WelcomeBanner, 350, 300);
    return;
  }
}

function colorRect(leftX,topY, width,height,drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY,width,height);
}