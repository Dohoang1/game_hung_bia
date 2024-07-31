class Background {
    constructor(color1, color2) {
        this.color1 = color1;
        this.color2 = color2;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw() {
        let gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, this.color1);
        gradient.addColorStop(1, this.color2);

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}