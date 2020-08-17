var InitDemo = function () {
    console.log('This is working');

    var canvas = document.getElementById('triangle-canvas');
    var gl = canvas.getContext ('webgl');

    if (!gl){
        console.log('WebGL not supported, falling back to experimental gl');
        gl = canvas.getContext('experimental-webgl');
    }

    if (!gl) {
        alert('Your Browser does not support WebGL');
    }
};