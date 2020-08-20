var canvas = document.getElementById('TandP-canvas');
var ctx = canvas.getContext('2d');
var imgP = document.getElementById('P01-image');
var framesPerSecond = 10;

function calculateMousePos(evt){      // an event fires when mouse moves
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x:mouseX,   // Object Literal
      y:mouseY    // Object Literal
    };
  }

window.onload = function() {
    setInterval(function() {
        drawEverything();
    },1000/framesPerSecond); // Hundredth of seconds

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
            var mousePos = calculateMousePos(evt);
            Xcord = mousePos.x;
            Ycord = mousePos.y;
       }
    );
}

function drawEverything () {
    ctx.drawImage(imgP,10,10)
}