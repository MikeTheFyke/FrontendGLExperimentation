let spriteSheet;
let spriteData;

function preload(){
    spriteSheet = loadImage('../images/SpriteSheetChipmunk.png');
    spriteData = loadJSON('../logic/chipmunkFrames.json');
}

function setup(){
    createCanvas(640, 480);
    console.log(spriteData);
}

function draw(){
    background(0);
    image(spriteSheet,0,0);
}