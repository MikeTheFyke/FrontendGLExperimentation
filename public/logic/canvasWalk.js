var canvas;
var ctx;

var showingWelcomeBanner = true;

var WelcomeBanner = document.getElementById('welcomeBanner');


let spriteSheet;
let spriteData;

let animation = [];
let animationB = [];

// let chipmunk; // Single Chipmunk

let chipmunks = [];
let chipmunksB = [];

var windowW;
var windowH;

function preload(){
  spriteSheet = loadImage('../images/SpriteSheetChipmunk.png');
  spriteSheetB = loadImage('../images/SpriteSheetChipmunkB.png');
  spriteData = loadJSON('../logic/chipmunkFrames.json');
  console.log("Preload has run");
}

function setup(){
  createCanvas(windowW, 220);
  let frames = spriteData.frames;
  for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position; // Find Position of frame
      let img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
      let imgB = spriteSheetB.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
      animationB.push(imgB);
  }
  // chipmunk = new Sprite(animation, 100, 100, 1); // new sprite from p5ChipmunkSprite and a speed of 1 // added an x 100 and a y 100 // A single Chipmunk
  for (let i = 0; i < 5; i ++){ // Multiple Chipmunks
      // chipmunks[i] = new Sprite(animation, 0, i * 50, 1) they run at the same speed
      chipmunks[i] = new Sprite(animation,animationB, -288, windowW + 288, i * 20, random(1.25, 2), random(1.25, 2), windowW); // creates multiple random speeds to run
      // chipmunksB[i] = new Sprite(animationB, -288, i * 20, random(1.25, 2), windowW);
  }
}

window.onload = function() {
    canvas = document.getElementById('walkCanvas');
    ctx = canvas.getContext('2d');
  
    windowW = canvas.width;
    windowH = canvas.height;
    console.log("CanvasWidth : " + windowW);
    console.log("CanvasHeight : " + windowH);

    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything ();
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

function moveEverything() {
  if (showingWelcomeBanner) {
    return;
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