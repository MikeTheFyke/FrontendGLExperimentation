let spriteSheet;
let spriteData;

let animation = [];

function preload(){
    spriteSheet = loadImage('../images/SpriteSheetChipmunk.png');
    spriteData = loadJSON('../logic/chipmunkFrames.json');
}

function setup(){
    createCanvas(640, 480);
    let frames = spriteData.frames;
    for (let i = 0; i < frames.length; i++){
        let pos = frames[i].position; // Find Position of frame
        let img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }

    console.log(spriteData);
}

function draw(){
    background(0);
    // image(spriteSheet,0,0); // displays all frames
    // image(animation[5],0,0); // displays one at a time
    image(animation[frameCount % animation.length],0,0); // displays one at a time
}