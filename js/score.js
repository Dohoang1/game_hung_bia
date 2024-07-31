class Score {
    constructor() {
        this.value = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + this.value, 20, 30);
    }

    increase() {
        this.value++;
    }

    reset() {
        this.value = 0;
    }
}