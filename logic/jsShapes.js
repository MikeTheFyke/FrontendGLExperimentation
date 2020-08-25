// Three base ThreeJS elements 1.Scene 2.Camera 3.Renderer
var scene = new THREE.Scene ();

var camera = new THREE.PerspectiveCamera (75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5; // Lower number will zoom the camera in, higher zoom out

var renderer = new THREE.WebGLRenderer ({antialias: true});

renderer.setClearColor("#e5e5e5"); // background color light grey;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// Allow renderer and camera to adjust dynamically with browser window adjustment
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

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
    // implementing GSAP

    // this.tl = new TimelineMax ().delay(.3); // .3 will create a much smoother animation
    this.tl = new TimelineMax (); // changed to paused to make aniamtion play after an event.
    this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.Easeout}) // we can add more commands like frames.
    this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.Easeout}) 
    this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.Easeout}) 
    this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI * .5, ease: Expo.Easeout}, "=-1.5"); // Addition of attributes outside of object will effect timline of which command occurs.  
    }
}

// function onMouseClick (event){ // Change color on mouse click to red.
//     event.preventDefault();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1; 
//     mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

//     raycaster.setFromCamera(mouse, camera);

//     var intersects = raycaster.intersectObjects(scene.children, true);
//     for (var i = 0; i < intersects.length; i ++){
//         intersects[i].object.material.color.set(0xff0000);
//     }
// }

// // implementing GSAP

// // this.tl = new TimelineMax ().delay(.3); // .3 will create a much smoother animation
// this.tl = new TimelineMax ({paused: true}); // changed to paused to make aniamtion play after an event.
// this.tl.to(this.mesh.scale, 1, {x: 2, ease: Expo.Easeout}) // we can add more commands like frames.
// this.tl.to(this.mesh.scale, .5, {x: .5, ease: Expo.Easeout}) 
// this.tl.to(this.mesh.position, .5, {x: 2, ease: Expo.Easeout}) 
// this.tl.to(this.mesh.rotation, .5, {y: Math.PI * .5, ease: Expo.Easeout}, "=-1.5"); // Addition of attributes outside of object will effect timline of which command occurs.  

window.addEventListener('mousemove', onMouseMove); // Animation will now after a hover event.
// window.addEventListener('click', onMouseClick, false); // Change color on mouse click

render();