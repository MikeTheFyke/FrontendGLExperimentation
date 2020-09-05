class Sprite {
    constructor(animation, animationB, x, x2, y, speed, speedB, windowWidth) { // An object stored within it ...
        this.windowW = windowWidth;
        this.x = x;
        this.y = y;
        this.animation = animation; // an array of images,
        this.len = this.animation.length; // the length of the array,
        this.speed = speed; // the speed at which to display,
        this.index = 0; // and the position.
        this.animationB = animationB;
        this.x2 = x2;
        this.speedB = speedB;
        this.index2 = 0;
    }
    

    show() {
        let index = floor(this.index) % this.len; // added to handle unwhole numbers as indices for multiple speeds
        let index2 = floor(this.index) % this.len;
        image(this.animation[index],this.x, this.y) // changed to include just index to handle the passed along floored index from above for multiple speeds
        // image(this.animation[this.index % this.len],this.x, this.y) for the same speed this.index is floored to recieve unwhole number indices
        image(this.animationB[index2],this.x2, this.y)
    }

    animate(){
    this.index += this.speed;
    this.index2 += this.speedB;
    this.x += this.speed * 5; // speed added to x to create movement from left to right
    this.x2 -= this.speedB * 5;
        if (this.x > (windowW + 288)){
            this.x = -288;
        }
        if (this.x2 < -288){
            this.x2 =  windowW + 288;
        }
    }
}