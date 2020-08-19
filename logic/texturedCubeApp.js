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
'attribute vec2 vertTexCoord;',
'varying vec2 fragTexCoord;',
'uniform mat4 mWorld;',
'uniform mat4 mView;',
'uniform mat4 mProj;',
'',
'void main()',
'{',
' fragTexCoord = vertTexCoord;',
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
'varying vec2 fragTexCoord;',
'uniform sampler2D sampler;', // Add sampler for Texture Shading // texture 0
'',
'void main()',
'{',
' gl_FragColor = texture2D(sampler, fragTexCoord);',
'}'
].join('\n');


var InitDemo = function () {
    console.log('Demo is initializing');

    var canvas = document.getElementById('textured-cube-canvas');
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
    gl.enable(gl.DEPTH_TEST); // Added Depth test to keep track of drawn sides.
    gl.enable(gl.CULL_FACE); // removes face, "culls" the face.
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK); // culls back face.

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

// 12 Textured Triangles / 6 sides
    var boxVertices =
        // X, Y , Z          U(x), V(z)
[
        // Top
        -1.0, 1.0, -1.0,        0, 0,
        -1.0, 1.0,  1.0,        0, 1,
         1.0, 1.0,  1.0,        1, 1,
         1.0, 1.0, -1.0,        1, 0,

        // Left
        -1.0,  1.0,  1.0,        0, 0,
        -1.0, -1.0,  1.0,        1, 0,
        -1.0, -1.0, -1.0,        1, 1,
        -1.0,  1.0, -1.0,        0, 1,

        // Right
        1.0,  1.0,  1.0,         1, 1,
        1.0, -1.0,  1.0,         0, 1,
        1.0, -1.0, -1.0,         0, 0,
        1.0,  1.0, -1.0,         1, 0,

        // Front
         1.0,  1.0,  1.0,        1, 1,
         1.0, -1.0,  1.0,        1, 0,
        -1.0, -1.0,  1.0,        0, 0,
        -1.0,  1.0,  1.0,        0, 1,

        // Back
        1.0,   1.0,  -1.0,       0, 0,
        1.0,  -1.0,  -1.0,       0, 1,
        -1.0, -1.0,  -1.0,       1, 1,
        -1.0,  1.0,  -1.0,       1, 0,

        // Bottom
        -1.0, -1.0, -1.0,         1, 1,
        -1.0, -1.0,  1.0,         1, 0,
         1.0, -1.0,  1.0,         0, 0,
         1.0, -1.0, -1.0,         0, 1,

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
    var texCoordAttribLocation = gl.getAttribLocation(program, 'vertTexCoord');

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
        5 * Float32Array.BYTES_PER_ELEMENT,// Size of an individual vertex
        0 // Offset from the beginning of a single vertex to this attribute
    );

    gl.vertexAttribPointer(
        texCoordAttribLocation, // Attribute Location
        2, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT,// Size of an individual vertex
        3 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
    );


    gl.enableVertexAttribArray(positionAttribLocation);

    // Added next line to add 3 shades to triangle
    gl.enableVertexAttribArray(texCoordAttribLocation);

// Create our texture after loading buffer.

    var boxTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, boxTexture);
    gl.bindTexture(gl.TEXTURE_2D, null);

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
    glMatrix.mat4.perspective(projMatrix , glMatrix.glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

    gl.uniformMatrix4fv(matWorldUnifromLocation, gl.FALSE, worldMatrix);
    gl.uniformMatrix4fv(matViewUnifromLocation, gl.FALSE, viewMatrix);
    gl.uniformMatrix4fv(matProjUnifromLocation, gl.FALSE, projMatrix);

// Added for 2x spin

        var xRotationMatrix = new Float32Array(16);
        var yRotationMatrix = new Float32Array(16);

// Main Render Loop

    var angle = 0;
    var indentityMatrix = new Float32Array(16);
    glMatrix.mat4.identity(indentityMatrix);

    var loop = function () {
        angle = performance.now() / 1000 / 6 * 2 * Math.PI;
        glMatrix.mat4.rotate(yRotationMatrix, indentityMatrix, angle, [0, 1, 0]); // 2x spin
        glMatrix.mat4.rotate(xRotationMatrix, indentityMatrix, angle / 2, [1, 0, 0]); // 2x spin
        glMatrix.mat4.mul(worldMatrix, xRotationMatrix, yRotationMatrix); // 2x spin - multiple x by y and make world matrix.
        gl.uniformMatrix4fv(matWorldUnifromLocation, gl.FALSE, worldMatrix);
        
        gl.clearColor(0.75, 0.85, 0.8, 1.0);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

        gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

};
