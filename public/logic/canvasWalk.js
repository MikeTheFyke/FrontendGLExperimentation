var canvas = document.getElementById('walkCanvas');
var ctx = canvas.getContext('2d');

var showingWelcomeBanner = true;

var WelcomeBanner = document.getElementById('welcomeBanner');


let spriteSheet;
let spriteData;

let animation = [];

// let chipmunk; // Single Chipmunk

let chipmunks = [];

var windowW = canvas.width;
var windowH = canvas.height;

function preload(){
  spriteSheet = loadImage('../images/SpriteSheetChipmunk.png');
  spriteData = loadJSON('../logic/chipmunkFrames.json');
  console.log("Preload has run");
}

function setup(){
  let frames = spriteData.frames;
  for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position; // Find Position of frame
      let img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
  }
  // chipmunk = new Sprite(animation, 100, 100, 1); // new sprite from p5ChipmunkSprite and a speed of 1 // added an x 100 and a y 100 // A single Chipmunk
  for (let i = 0; i < 5; i ++){ // Multiple Chipmunks
      // chipmunks[i] = new Sprite(animation, 0, i * 50, 1) they run at the same speed
      chipmunks[i] = new Sprite(animation, -288, i * 20, random(1.25, 2), windowW); // creates multiple random speeds to run
      // chipmunksB[i] = new Sprite(animationB, -288, i * 20, random(1.25, 2), windowW);
  }
}

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
    draw();
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

function draw(){
  background( '#FFFFFF');
  // image(spriteSheet,0,0); // displays all frames
  // image(animation[5],0,0); // displays one at a time
  // image(animation[frameCount % animation.length],0,0); // animation[frameCount % animation.length] displays all frames = ANIMATION! // Modjeo Operator
  for (let chipmunk of chipmunks){
      chipmunk.show();
      chipmunk.animate();
  }

  // chipmunk.show(); // single Chipmunk
  // chipmunk.animate(); // Create a animate and show function in p5ChipmunkSprite // single Chipmunk
}

//Ren and stimpy 1 10 32