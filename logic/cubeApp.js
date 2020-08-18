// Creates Red Triangle
// var vertexShaderText =
// [
// 'precision mediump float;',
// '',
// 'attribute vec2 vertPosition;',
// '',
// 'void main()',
// '{',
// ' gl_Position = vec4(vertPosition, 0.0, 1.0);',
// '}'
// ].join('\n');

// Creates 3 color shaded triangle
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

// Red Triangle
// var fragmentShaderText =
// [
// 'precision mediump float;',
// '',
// 'void main()',
// '{',
// ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
// '}'
// ].join('\n');

// Creates 3 color shaded triangle
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


var InitDemo = function () {
    console.log('Demo is initializing');

    var canvas = document.getElementById('cube-canvas');
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

// Create Shaders Components
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
        return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)){
        console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
        return;
    }

// Create Graphics Pipeline
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)){
        console.error('ERROR linking program pipeline', gl.getProgramInfoLog(program));
        return;
    }

    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
        console.error('ERROR validating program!, gl.getProgramInfoLog(program)');
        return;
    }

// Create Buffer

    // RED Triangle
    // var triangleVertices =
    // // X, Y     
    // [
    //     0.0, 0.5,
    //     -0.5, -0.5,
    //     0.5, -0.5
    // ];

    // 3 Shaded Triangle
    var triangleVertices =
    // X, Y , Z              R,G,B
    [
         0.0,  0.5, 0.0,     1.0, 1.0, 0.0,
        -0.5, -0.5, 0.0,     0.7, 0.0, 1.0,
         0.5, -0.5, 0.0,     0.1, 1.0, 0.6
    ];

    var triangleVertexBufferObject = gl.createBuffer();
    // Active Buffer becomes triangleVertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

    var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
 
    // Added next line to add 3 shades to triangle
    var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');

    // For single colored triangle
    // gl.vertexAttribPointer(
    //     positionAttribLocation, // Attribute Location
    //     2, // Number of elements per attribute
    //     gl.FLOAT, // Type of elements
    //     gl.FALSE,
    //     2 * Float32Array.BYTES_PER_ELEMENT,// Size of an individual vertex
    //     0 // Offset from the beginning of a single vertex to this attribute
    // );

    // Added next 2 blocks for 3 shades to triangle
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
    glMatrix.mat4.lookAt(viewMatrix, [0, 0, -2], [0, 0, 0], [0, 1, 0]); // Camera positioning
    glMatrix.mat4.perspective(projMatrix , glMatrix.glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

    gl.uniformMatrix4fv(matWorldUnifromLocation, gl.FALSE, worldMatrix);
    gl.uniformMatrix4fv(matViewUnifromLocation, gl.FALSE, viewMatrix);
    gl.uniformMatrix4fv(matProjUnifromLocation, gl.FALSE, projMatrix);

// Main Render Loop

    var angle = 0;
    var indentityMatrix = new Float32Array(16);
    glMatrix.mat4.identity(indentityMatrix);

    var loop = function () {
        angle = performance.now() / 1000 / 6 * 2 * Math.PI;
        glMatrix.mat4.rotate(worldMatrix, indentityMatrix, angle, [0, 1, 0]);
        gl.uniformMatrix4fv(matWorldUnifromLocation, gl.FALSE, worldMatrix);
        
        gl.clearColor(0.75, 0.85, 0.8, 1.0);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

        gl.drawArrays(gl.TRIANGLES, 0, 3);

        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

};
