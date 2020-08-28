let spriteSheet;
let spriteData;

let animation = [];

// let chipmunk; // Single Chipmunk

let chipmunks = [];

var windowW = window.innerWidth;
console.log("window width is " + windowW);

function preload(){
    spriteSheet = loadImage('../images/SpriteSheetChipmunk.png');
    spriteData = loadJSON('../logic/chipmunkFrames.json');
}

function setup(){
    createCanvas(windowW, 220);
    let frames = spriteData.frames;
    for (let i = 0; i < frames.length; i++){
        let pos = frames[i].position; // Find Position of frame
        let img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
    // chipmunk = new Sprite(animation, 100, 100, 1); // new sprite from p5ChipmunkSprite and a speed of 1 // added an x 100 and a y 100 // A single Chipmunk
    for (let i = 0; i < 3; i ++){ // Multiple Chipmunks
        // chipmunks[i] = new Sprite(animation, 0, i * 50, 1) they run at the same speed
        chipmunks[i] = new Sprite(animation, -288, i * 20, random(0.75, 1), windowW); // creates multiple random speeds to run
    }
}

function draw(){
    background(0);
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