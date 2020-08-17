var InitDemo = function () {
    console.log('Demo is initializing');

    var canvas = document.getElementById('triangle-canvas');
    var gl = canvas.getContext ('webgl');

    if (!gl){
        console.log('WebGL not supported, falling back to experimental gl');
        gl = canvas.getContext('experimental-webgl');
    }

    if (!gl) {
        alert('Your Browser does not support WebGL');
    }

// This is to change dynamically the size of the canvas element to fit the device screen size 
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // gl.viewport (0,0, window.innerWidth, window.innerHeight);

};