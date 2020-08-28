class Sprite {
    constructor(animation, x, y, speed, windowWidth) { // An object stored within it ...
        this.windowW = windowWidth;
        this.x = x;
        this.y = y;
        this.animation = animation; // an array of images,
        this.len = this.animation.length; // the length of the array,
        this.speed = speed; // the speed at which to display,
        this.index = 0; // and the position.
    }

    show() {
        let index = floor(this.index) % this.len; // added to handle unwhole numbers as indices for multiple speeds
        image(this.animation[index],this.x, this.y) // changed to include just index to handle the passed along floored index from above for multiple speeds
        // image(this.animation[this.index % this.len],this.x, this.y) for the same speed this.index is floored to recieve unwhole number indices
    }

    animate(){
    this.index += this.speed;
    this.x += this.speed * 5; // speed added to x to create movement from left to right
        if (this.x > (windowW + 288)){
            this.x = -288;
        }
    }
}