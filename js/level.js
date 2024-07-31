class Level {
    constructor() {
        this.value = 1;
    }

    draw(ctx) {
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText("Level: " + this.value, canvas.width-80, 30);
    }

    increase() {
        this.value++;
    }
}