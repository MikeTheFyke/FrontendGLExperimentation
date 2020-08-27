class Sprite {
    constructor(animation, x, y, speed) { // An object stored within it ...
        this.x = x;
        this.y = y;
        this.animation = animation; // an array of images,
        this.len = this.animation.length; // the length of the array,
        this.speed = speed; // the speed at which to display,
        this.index = 0; // and the position.
    }

    show() {
        image(this.animation[this.index % this.len],this.x, this.y)
    }

    animate(){
    this.index += this.speed;
    }
}