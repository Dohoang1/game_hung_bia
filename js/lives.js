class Lives {
    constructor(initialLives) {
        this.value = initialLives;
        this.livesImages = new Image();
        this.livesImages.src = 'imgs/heart.png';
    }

    draw(ctx) {
        for (let i = 0; i < this.value; i++) {
            ctx.drawImage(this.livesImages, canvas.width - (30 * (i + 1)), 50, 20, 20);
        }
    }

    decrease() {
        if (this.value > 0) {
            this.value--;
        }
    }
}