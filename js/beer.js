class Beer {
    constructor(x, y, width, height, dy, imgSrcArray) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dy = dy;
        this.imgSrcArray = imgSrcArray; // Store imgSrcArray as a class property
        this.img = new Image();
        this.img.src = this.imgSrcArray[Math.floor(Math.random() * this.imgSrcArray.length)];
        this.imgLoaded = false;

        // Ensure the image is fully loaded before using it
        this.img.onload = () => {
            this.imgLoaded = true;
        };
    }

    draw(ctx) {
        if (this.imgLoaded) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    moveDown() {
        this.y += this.dy;
    }

    resetBeer(x, y, dy) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.img.src = this.imgSrcArray[Math.floor(Math.random() * this.imgSrcArray.length)];
        this.imgLoaded = false; // Reset the flag until the new image is loaded
        this.img.onload = () => {
            this.imgLoaded = true;
        };
    }
}