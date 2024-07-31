class Score {
    constructor(pointsMusic) {
        this.value = 0;
        this.pointsMusic = pointsMusic
    }

    draw(ctx) {
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + this.value, 20, 30);
    }

    increase() {
        this.pointsMusic.currentTime = 0;
        this.pointsMusic.play();
        this.value++;
    }
}