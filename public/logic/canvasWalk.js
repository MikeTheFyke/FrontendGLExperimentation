var canvas = document.getElementById('walkCanvas');
var ctx = canvas.getContext('2d');

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

  
})