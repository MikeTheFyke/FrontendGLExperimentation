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

// Geometry or form of the object + Material of object
var geometry = new THREE.BoxGeometry(1, 1, 1); // (Radius, Width Segments, Height Segments)
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00}); 

var mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 2; // repositions x cord compared to camera view

scene.add(mesh);

var light = new THREE.PointLight (0xFFFFFF, 1, 500); // Color (white), Intensity, Distance
light.position.set(10,0,25);
scene.add(light);

renderer.render(scene, camera);