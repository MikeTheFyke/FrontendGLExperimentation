var windowW = canvas.width;
var windowH = canvas.height;

(function() { "use strict";

  const SPRITE_SIZE = 16;

  var Animation.prototype = {

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

  var buffer, controller, display, loop, player, render, resize, sprite_sheet;

  buffer = document.getElementById('walkCanvas').getContext("2d"); // var canvas = document.getElementById('walkCanvas');
  display = document.querySelector('walkCanvas').getContext("2d"); // var ctx = canvas.getContext('2d');

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
          break;

          case 38: // Up Key

          if (controller.up.state != key_state) controller.up.active = key_state;
          controller.up.state = key_state;
          break;

          case 39: // Right key

          if (controller.right.state != key_state) controller.right.state = key_state;
          controller.right.state = key_state;
          break;
        }
      }
  };

  player = {
    
  }
})