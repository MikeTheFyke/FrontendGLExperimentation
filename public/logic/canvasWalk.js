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

  buffer = document.getElementById('walkCanvas'); // var canvas = document.getElementById('walkCanvas');
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
    x: 0,
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
      player.y_velocity -= 2.5;
    }
    if (controller.left.active) {
      player.animation.change(sprite_sheet.frame_sets[2], 7);
      player.x_velocity -= 0.05;
    }
    if (controller.right.active) {
      player.animation.change(sprite_sheet.frame_sets[1], 7);
      player.x_velocity += 0.05;
    }
    if (!controller.left.active && !controller.right.active) {
      player.animation.change(sprite_sheet.frame_sets[0], 20);
    }

    player.y_velocity += 0.25;

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