var canvas = document.getElementById('TandP-canvas');
var ctx = canvas.getContext('2d');
var imgP = document.getElementById('P01-image');
var imgT = document.getElementById('T01-image');
var framesPerSecond = 30;

var mouseX;
var mouseY;

function calculateMousePos(evt){      // an event fires when mouse moves
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
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
    canvas.addEventListener("click", function(){
        TFart();
    });
}

function drawEverything () {
    ctx.drawImage(imgP,400,10)
    ctx.drawImage(imgT,100,10)
}

function TFart(){
    for (var x = 1; x <= 13; x++){
        ctx.fillStyle = "white";
        ctx.beginPath()
        ctx.rect(0,0,800,600);
        ctx.fill();
        imgT = document.getElementById("T" + x + "-fart");
        imgP = document.getElementById("P" + x + "-fart");
        ctx.drawImage(imgP,400,10)
        ctx.drawImage(imgT,100,10)
        console.log(x);
    }
}

