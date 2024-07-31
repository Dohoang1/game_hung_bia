class Basket {
    constructor(x, y, width, height, dx, imgSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.img = new Image();
        this.img.src = imgSrc;
        this.movingLeft = false;
        this.movingRight = false;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    update(canvasWidth) {
        if (this.movingLeft) {
            this.x -= this.dx;
            if (this.x < 0) this.x = 0;
        }
        if (this.movingRight) {
            this.x += this.dx;
            if (this.x + this.width > canvasWidth) this.x = canvasWidth - this.width;
        }
    }
}