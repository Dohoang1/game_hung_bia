class Beer {
    constructor(x, y, width, height, dy, imgSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dy = dy;
        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveDown() {
        this.y += this.dy;
    }

    resetBeer(x, y, dy, imgSrc) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.img.src = imgSrc;
    }
}