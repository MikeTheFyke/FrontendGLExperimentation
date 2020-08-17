var vertexShaderText =
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'',
'void main()',
'{',
' gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

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

/// This is to change dynamically the size of the canvas element to fit the device screen size 
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // gl.viewport (0,0, window.innerWidth, window.innerHeight);

    gl.clearColor (0.75,0.85,0.8,1.0) // set the color of the paint for canvas.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // paints the defined color : Color Buffer & Depth Buffer etc.

    /// Vertex Shader
    // function vertexShader(vertPosition, vertColor) {
    //     return {
    //         fragColor : vertColor,
    //         gl_Position : [vertPosition.x, vertPosition.y, 0.0, 1.0]
    //     };
    // };
};
