new fullpage('#preview', {
    autoscrolling: true,
    navigation: true,
    keyboardScrolling: false,
    // navigationPosition: 'right',
    // navigationTooltips: ['WebGL', 'Canvas', 'Animation', 'ThreeJs', 'Processing', 'P5Js', 'Gsap'],
    onLeave: (origin, destination, direction) =>{
        const section = destination.item;
        const title = section.querySelector('.section-header');
        const description = section.querySelector('p');

        const sigil = document.querySelectorAll('.section-canvas');
        const div = document.querySelectorAll('.section-div');

        const tl = new TimelineMax({ delay: 0.5});
        tl.fromTo(title, 0.5, {x: "-50", opacity: 0}, {x: 0, opacity: 1});
        tl.fromTo(description, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1}, '-=.5');

        tl.fromTo(sigil, 0.5, {x: '-175%'}, {x: '0%'}, '-=.5');
        tl.fromTo(div, 0.5, {x: '-175%'}, {x: '0%'}, '-=.5');
        // tl.fromTo(avatar1, 0.5, {x: '-350%'}, {x: '-20%'});
        // tl.fromTo(avatar2, 0.5, {x: '200%'}, {x: '-20%'});
        // tl.fromTo(avatar2B, 0.5, {x: '-350%'}, {x: '-20%'});

    }
});
/// TandP Farting
var newFart = new Audio();

function Tfarting () {
    var fartRandom = Math.floor(Math.random() * 2) + 1;
    console.log(fartRandom);
    if (fartRandom === 1){
        newFart.src = "../sounds/dry-fart.mp3";
    }
    else if (fartRandom === 2){
        newFart.src = "../sounds/wet-fart_1.mp3";
    }
    var Tbutt = document.getElementById('TfartingButt');
    Tbutt.src = "../images/canvas/T-Fart-T.gif";
    var Pbutt = document.getElementById('PfartingButt');
    Pbutt.src = "../images/canvas/T-Fart-P.gif";
}
function Pfarting () {
    var fartRandom = Math.floor(Math.random() * 2) + 1;
    console.log(fartRandom);
    if (fartRandom === 1){
        newFart.src = "../sounds/dry-fart.mp3";
    }
    else if (fartRandom === 2){
        newFart.src = "../sounds/wet-fart_1.mp3";
    }
    var Tbutt = document.getElementById('TfartingButt');
    Tbutt.src = "../images/canvas/P-Fart-T.gif";
    var Pbutt = document.getElementById('PfartingButt');
    Pbutt.src = "../images/canvas/P-Fart-P.gif";
}

/// WebGl Spinning Cube

var vertexShaderText =
[
'precision mediump float;',
'',
'attribute vec3 vertPosition;',
'attribute vec3, vertColor;',
'varying vec3 fragColor;',
'uniform mat4 mWorld;',
'uniform mat4 mView;',
'uniform mat4 mProj;',
'',
'void main()',
'{',
' fragColor = vertColor;',
' gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);',
'}'
].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
' gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');

var canvas1 = document.getElementById("section-s1-canvas");
var gl = canvas1.getContext('webgl');

gl.clearColor (0,0,0,0.8) // set the color of the paint for canvas.
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // paints the defined color : Color Buffer & Depth Buffer etc.
gl.enable(gl.DEPTH_TEST); // Added Depth test to keep track of drawn sides.
gl.enable(gl.CULL_FACE); // removes face, "culls" the face.
gl.frontFace(gl.CCW);
gl.cullFace(gl.BACK); // culls back face.

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vertexShader, vertexShaderText);
gl.shaderSource(fragmentShader, fragmentShaderText);

gl.compileShader(vertexShader);

gl.compileShader(fragmentShader);

var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.validateProgram(program);

var boxVertices =
// X, Y , Z              R,G,B
[
    //  0.0,  0.5, 0.0,     1.0, 1.0, 0.0,
    // -0.5, -0.5, 0.0,     0.7, 0.0, 1.0,
    //  0.5, -0.5, 0.0,     0.1, 1.0, 0.6

    // Top
    -1.0, 1.0, -1.0,        0.5, 0.5, 0.5,
    -1.0, 1.0,  1.0,        0.5, 0.5, 0.5,
     1.0, 1.0,  1.0,        0.5, 0.5, 0.5,
     1.0, 1.0, -1.0,        0.5, 0.5, 0.5,

    // Left
    -1.0,  1.0,  1.0,        0.75, 0.25, 0.5,
    -1.0, -1.0,  1.0,        0.75, 0.25, 0.5,
    -1.0, -1.0, -1.0,        0.75, 0.25, 0.5,
    -1.0,  1.0, -1.0,        0.75, 0.25, 0.5,

    // Right
    1.0,  1.0,  1.0,        0.25, 0.25, 0.75,
    1.0, -1.0,  1.0,        0.25, 0.25, 0.75,
    1.0, -1.0, -1.0,        0.25, 0.25, 0.75,
    1.0,  1.0, -1.0,        0.25, 0.25, 0.75,

    // Front
     1.0,  1.0,  1.0,        1.00, 0.0, 0.15,
     1.0, -1.0,  1.0,        1.00, 0.0, 0.15,
    -1.0, -1.0,  1.0,        1.00, 0.0, 0.15,
    -1.0,  1.0,  1.0,        1.00, 0.0, 0.15,

    // Back
    1.0,   1.0,  -1.0,       0.00, 1.0, 0.15,
    1.0,  -1.0,  -1.0,       0.00, 1.0, 0.15,
    -1.0, -1.0, -1.0,        0.00, 1.0, 0.15,
    -1.0,  1.0, -1.0,        0.00, 1.0, 0.15,

    // Bottom
    -1.0, -1.0, -1.0,         0.5, 0.5, 1.00,
    -1.0, -1.0,  1.0,         0.5, 0.5, 1.00,
     1.0, -1.0,  1.0,         0.5, 0.5, 1.00,
     1.0, -1.0, -1.0,         0.5, 0.5, 1.00

];

var boxIndices =
[
    // Top
    0, 1, 2,
    0, 2, 3,

    // Left
    5, 4, 6,
    6, 4, 7,

    // Right
    8,  9,  10,
    8, 10,  11,

    // Front
    13, 12, 14,
    15, 14, 12,

    // Back
    16, 17, 18,
    16, 18, 19,

    // Bottom
    21, 20, 22,
    22, 20, 23
];

var boxVertexBufferObject = gl.createBuffer();
// Active Buffer becomes boxVertexBuffer
gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

var boxIndexBufferObject = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');

// Added next line to add 3 shades to triangle
var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');

gl.vertexAttribPointer(
    positionAttribLocation, // Attribute Location
    3, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    6 * Float32Array.BYTES_PER_ELEMENT,// Size of an individual vertex
    0 // Offset from the beginning of a single vertex to this attribute
);

gl.vertexAttribPointer(
    colorAttribLocation, // Attribute Location
    3, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    6 * Float32Array.BYTES_PER_ELEMENT,// Size of an individual vertex
    3 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
);

gl.enableVertexAttribArray(positionAttribLocation);

// Added next line to add 3 shades to triangle
gl.enableVertexAttribArray(colorAttribLocation);

// Set our new Matrices

// Tell OpenGL state machine which program should be active.
gl.useProgram(program);

var matWorldUnifromLocation = gl.getUniformLocation(program,'mWorld');
var matViewUnifromLocation = gl.getUniformLocation(program,'mView');
var matProjUnifromLocation = gl.getUniformLocation(program,'mProj');

var worldMatrix = new Float32Array(16);
var viewMatrix = new Float32Array(16);
var projMatrix = new Float32Array(16);

glMatrix.mat4.identity(worldMatrix);
// glMatrix.mat4.lookAt(viewMatrix, [0, 0, -5], [0, 0, 0], [0, 1, 0]); // Camera positioning changed to -5, makes object seem further away.
glMatrix.mat4.lookAt(viewMatrix, [0, 0, -5], [0, 0, 0], [0, 1, 0]); // Camera positioning
glMatrix.mat4.perspective(projMatrix , glMatrix.glMatrix.toRadian(45), canvas1.width / canvas1.height, 0.1, 1000.0);

gl.uniformMatrix4fv(matWorldUnifromLocation, gl.FALSE, worldMatrix);
gl.uniformMatrix4fv(matViewUnifromLocation, gl.FALSE, viewMatrix);
gl.uniformMatrix4fv(matProjUnifromLocation, gl.FALSE, projMatrix);

// Added for 2x spin

    var xRotationMatrix = new Float32Array(16);
    var yRotationMatrix = new Float32Array(16);

    var angle = 0;
    var indentityMatrix = new Float32Array(16);
    glMatrix.mat4.identity(indentityMatrix);

    var loop = function () {
        angle = performance.now() / 1000 / 6 * 2 * Math.PI;
        glMatrix.mat4.rotate(yRotationMatrix, indentityMatrix, angle, [0, 1, 0]); // 2x spin
        glMatrix.mat4.rotate(xRotationMatrix, indentityMatrix, angle / 2, [1, 0, 0]); // 2x spin
        glMatrix.mat4.mul(worldMatrix, xRotationMatrix, yRotationMatrix); // 2x spin - multiple x by y and make world matrix.
        gl.uniformMatrix4fv(matWorldUnifromLocation, gl.FALSE, worldMatrix);
        
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

        gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

/// Canvas
    (function() { "use strict";

  const SPRITE_SIZE = 144;

  var Animation = function(frame_set, delay){
    this.count = 0;
    this.delay = delay;
    this.frame = 0;
    this.frame_index = 0;
    this.frame_set = frame_set;
  };

  Animation.prototype = {

    change:function(frame_set, delay = 15){
      
      if(this.frame_set != frame_set) {
        this.count = 0;
        this.delay = delay;
        this.frame_index = 0;
        this.frame_set = frame_set;
        this.frame = this.frame_set[this.frame_index];
      }
    },
    update:function(){
      this.count ++;
      if (this.count >= this.delay) {
        this.count = 0;
        this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;
        this.frame = this.frame_set[this.frame_index];
      }
    }
  };

  var buffer, display, controller, player, sprite_sheet, loop, render;

  buffer = document.getElementById('section-s2-canvas'); // var canvas = document.getElementById('walkCanvas');
  display = buffer.getContext('2d'); // var ctx = canvas.getContext('2d');

  controller = {

      left: { active:false, state:false },
      right: { active:false, state:false },
      up: { active:false, state:false },

      keyUpDown: function(event) {
        var key_state = (event.type == "keydown") ? true:false;

        switch(event.keyCode) {
          case 37: // Left Key

          if (controller.left.state != key_state) controller.left.active = key_state;
          controller.left.state = key_state;
          console.log(player.x);
          break;

          case 38: // Up Key

          if (controller.up.state != key_state) controller.up.active = key_state;
          controller.up.state = key_state;
          break;

          case 39: // Right key

          if (controller.right.state != key_state) controller.right.active = key_state;
          controller.right.state = key_state;
          break;
        }
      }

  };

  player = {

    animation: new Animation(),
    jumping: true,
    height: 144,
    width: 144,
    x: buffer.width/2 - 77,
    y: 40-18,
    x_velocity: 0,
    y_velocity: 0

  };

  sprite_sheet = {

    frame_sets:[ [0], [1,2,3,4,5,6,7], [8,9,10,11,12,13,14] ],
    image: new Image()
  };

  loop = function(time_stamp) {

    if (controller.up.active && !player.jumping) {
      controller.up.active = false;
      player.jumping = true;
      player.y_velocity -= 30;
    }
    if (controller.left.active) {
      player.animation.change(sprite_sheet.frame_sets[2], 7);
      player.x_velocity -= 0.55;
    }
    if (controller.right.active) {
      player.animation.change(sprite_sheet.frame_sets[1], 7);
      player.x_velocity += 0.55;
    }
    if (!controller.left.active && !controller.right.active) {
      player.animation.change(sprite_sheet.frame_sets[0], 20);
    }

    player.y_velocity += 0.95; // gravity strength

    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    if (player.y + player.height > buffer.height - 2){
      player.jumping = false;
      player.y = buffer.height - 2 - player.height;
      player.y_velocity = 0;
    }
    if (player.x  < 0) {
      player.x = 0;
    } else if (player.x > buffer.width - player.width) {
      player.x = buffer.width - player.width;
    }

    player.animation.update();
    render();
    window.requestAnimationFrame(loop);

  };

  render = function() {

    display.fillStyle = "#7ec0ff";
    display.fillRect(0, 0, buffer.width, buffer.height);
    display.strokeStyle = "#8ed0ff";
    display.lineWidth = 10;
    display.fillStyle = "#009900";
    display.fillRect(0, 645, buffer.width, 4);
    display.drawImage(sprite_sheet.image, player.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(player.x), Math.floor(player.y), SPRITE_SIZE, SPRITE_SIZE);
    display.drawImage(buffer, 0, 0, buffer.width, buffer.height, 0, 0, buffer.width, buffer.height);
  };



  buffer.width = 900;
  buffer.height = 650;

  window.addEventListener("keydown", controller.keyUpDown);
  window.addEventListener("keyup", controller.keyUpDown);

  

  sprite_sheet.image.addEventListener("load", function(event) {
    window.requestAnimationFrame(loop);
  });

  sprite_sheet.image.src = "../images/canvas/FO-SpriteSheet02.png";

}) ();

/// ThreeJs
var canvas4 = document.getElementById("section-s4-canvas")

var scene = new THREE.Scene ();

var camera = new THREE.PerspectiveCamera (75,canvas4.width/canvas4.height,0.1,1000);
camera.position.z = 5; // Lower number will zoom the camera in, higher zoom out

var renderer = new THREE.WebGLRenderer ({antialias: true, canvas: canvas4});

renderer.setClearColor("#e5e5e5"); // background color light grey;

var raycaster = new THREE.Raycaster(); // Added to specify where click must be performed to activate animation.
var mouse = new THREE.Vector2();

/// Cube = geometry, material, mesh
var geometry = new THREE.BoxGeometry(1, 1, 1); // (Radius, Width Segments, Height Segments)
var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7}); // White Cubes
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(-2,2,0);
scene.add(mesh);

// Sphere = geometry2, material2, mesh2
var geometry2 = new THREE.SphereGeometry(.75, 10, 10); // (Radius, Width Segments, Height Segments)
var material2 = new THREE.MeshLambertMaterial({color: 0x990000}); // Red 990000
var mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(-2,0,0);
scene.add(mesh2);

// Cone = geometry3, material3, mesh3
var geometry3 = new THREE.ConeGeometry(0.75, 1, 20, 32); // (Radius, Height, Width Segments, Height Segments)
var material3 = new THREE.MeshLambertMaterial({color: 0x003263}); // Blue 003263
var mesh3 = new THREE.Mesh(geometry3, material3);
mesh3.position.set(-2,-2,0);
scene.add(mesh3);

/// 2nd Collumn
// Cylinder = geometry4, material4, mesh4
var geometry4 = new THREE.CylinderGeometry(0.75, 0.75, 1, 32); // (TopRadius, BottomRadius, Height, radialSegments)
var material4 = new THREE.MeshLambertMaterial({color: 0x003263}); // Blue 003263
var mesh4 = new THREE.Mesh(geometry4, material4);
mesh4.position.set(0,2,0);
scene.add(mesh4);

// Dodecahedron = geometry5, material5, mesh5
var geometry5 = new THREE.DodecahedronGeometry(.75, 0); // (Radius, Detail)
var material5 = new THREE.MeshLambertMaterial({color: 0xF7F7F7}); // White F7F7F7
var mesh5 = new THREE.Mesh(geometry5, material5);
var mesh5 = new THREE.Mesh(geometry5, material5);
mesh5.position.set(0,0,0);
scene.add(mesh5);

// Octahedron = geometry6, material6, mesh6
var geometry6 = new THREE.OctahedronGeometry(.75, 0); // (Radius, Detail)
var material6 = new THREE.MeshLambertMaterial({color: 0x990000}); // Red 990000
var mesh6 = new THREE.Mesh(geometry6, material6);
mesh6.position.set(0,-2,0);
scene.add(mesh6);

/// 3rd Collumn
// Torus = geometry7, material7, mesh7
var geometry7 = new THREE.TorusGeometry(.5, 0.25, 16, 100); // (Radius (from centre to centre of tube), Tube Radius, radialSegments, tubularSegments
var material7 = new THREE.MeshLambertMaterial({color: 0x990000}); // Red 990000
var mesh7 = new THREE.Mesh(geometry7, material7);
mesh7.position.set(2,2,0);
scene.add(mesh7);

// TorusKnot = geometry8, material8, mesh8
var geometry8 = new THREE.TorusKnotGeometry(.5, 0.15, 100, 16); // (Radius (from centre to centre of tube), TubularSegments, radialSegments, tubularSegments
var material8 = new THREE.MeshLambertMaterial({color: 0x003263}); // Blue 003263
var mesh8 = new THREE.Mesh(geometry8, material8);
mesh8.position.set(2,0,0);
scene.add(mesh8);

// Icosahedron = geometry9, material9, mesh9
var geometry9 = new THREE.IcosahedronGeometry(.75, 0); // (Radius, Detail)
var material9 = new THREE.MeshLambertMaterial({color: 0xF7F7F7}); // White F7F7F7
var mesh9 = new THREE.Mesh(geometry9, material9);
mesh9.position.set(2,-2,0);
scene.add(mesh9);

var light = new THREE.PointLight (0xFFFFFF, 1, 500); // Color (white), Intensity, Distance
light.position.set(0,30,0); //light.position.set(10,0,25)
scene.add(light);

var light = new THREE.PointLight (0xFFFFFF, 2, 1000); // Color (white), Intensity, Distance
light.position.set(0,10,25);
scene.add(light);

var render = function () { // Fixes rendering issues when browser frame is resized
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function onMouseMove (event){ // To move accurately define mouse position for animation
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1; 
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i ++){

    this.tl = new TimelineMax (); // changed to paused to make aniamtion play after an event.
    this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.Easeout}) // we can add more commands like frames.
    this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.Easeout}) 
    this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.Easeout}) 
    this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI * .5, ease: Expo.Easeout}, "=-1.5"); // Addition of attributes outside of object will effect timline of which command occurs.  
    }
}

window.addEventListener('mousemove', onMouseMove); // Animation will now after a hover event.

render();

/// P5
let spriteSheet;
let spriteData;

let animation = [];
let animationB = [];

// let chipmunk; // Single Chipmunk

let chipmunks = [];
let chipmunksB = [];

var windowW = document.getElementById("section-s6-div").innerWidth;
preload();
function preload(){
    console.log("preload is running");
    spriteSheet = loadImage('../images/SpriteSheetChipmunk.png');
    spriteSheetB = loadImage('../images/SpriteSheetChipmunkB.png');
    spriteData = loadJSON('../logic/chipmunkFrames.json');
    setup();
}

function setup(){
    console.log("Setup is running");
    var canvas6 = createCanvas(windowW, 220);
    canvas6.parent('section-s6-div');
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

class Sprite {
    constructor(animation, animationB, x, x2, y, speed, speedB, windowWidth) { // An object stored within it ...
        this.windowW = windowWidth;
        this.x = x;
        this.y = y;
        this.animation = animation; // an array of images,
        this.len = this.animation.length; // the length of the array,
        this.speed = speed; // the speed at which to display,
        this.index = 0; // and the position.
        this.animationB = animationB;
        this.x2 = x2;
        this.speedB = speedB;
        this.index2 = 0;
    }
    

    show() {
        let index = floor(this.index) % this.len; // added to handle unwhole numbers as indices for multiple speeds
        let index2 = floor(this.index) % this.len;
        image(this.animation[index],this.x, this.y) // changed to include just index to handle the passed along floored index from above for multiple speeds
        // image(this.animation[this.index % this.len],this.x, this.y) for the same speed this.index is floored to recieve unwhole number indices
        image(this.animationB[index2],this.x2, this.y)
    }

    animate(){
    this.index += this.speed;
    this.index2 += this.speedB;
    this.x += this.speed * 5; // speed added to x to create movement from left to right
    this.x2 -= this.speedB * 5;
        if (this.x > (windowW + 288)){
            this.x = -288;
        }
        if (this.x2 < -288){
            this.x2 =  windowW + 288;
        }
    }
}

