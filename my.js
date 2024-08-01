let bgMusic = document.getElementById("bgmusic");
let pointsMusic = document.getElementById("pointsMusic");
let gameoverMusic = document.getElementById('gameover')
let beerBroke = document.getElementById("beerbroke")
let lvlUp = document.getElementById("lvlup")
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let basket = new Basket(canvas.width / 2, canvas.height - 65, 100, 60, 10,'imgs/basket.jpg');
let score = new Score(pointsMusic);
let background = new Background(getRandomColor(),"white");
let isGameOver = false;
let lvl = new Level();
let gameStarted = false;
let lives = new Lives(3);
let brokenBeers = [];


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

let beers = [
    new Beer(Math.random() * (canvas.width - 20), 0, 28, 50, 3, 'imgs/beer.png')
];

function drawGameOver() {
    ctx.fillStyle = "#FF0000";
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
}

function update() {
    bgMusic.play();
    if (isGameOver) return;

    basket.update(canvas.width);


    beers.forEach((beer, index) => {
        beer.moveDown();

        Math.randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        if (
            beer.y + beer.height >= basket.y &&
            beer.x + beer.width >= basket.x &&
            beer.x <= basket.x + basket.width
        ) {
            score.increase();
            beer.resetBeer(Math.random() * (canvas.width - 20), Math.randomInt(-600,-200), (Math.random() * (score.value / 10)) + 3, 'imgs/beer.png');

            if (score.value % 10 === 0) {
                beers.push(new Beer(Math.random() * (canvas.width - 20), Math.randomInt(-1400,-600), 28, 50, (Math.random() * (score.value / 10)) + 3, 'imgs/beer.png'));
                lvl.increase();
                lives.value++;
                lvlUp.play();
            }
        }
        if (beer.y + beer.height >= canvas.height) {
            lives.decrease();
            beerBroke.play();
            brokenBeers.push(new BrokenBeer(beer.x - 10, beer.y + 15, 50, 40, 'imgs/brokenbeer.png'));
            beer.resetBeer(Math.random() * (canvas.width - 20), Math.randomInt(-600,-200), (Math.random() * (score.value / 10)) + 3, 'imgs/beer.png');
        }

            if (lives.value <= 0) {
                isGameOver = true;
                bgMusic.pause();
                document.getElementById("replayButton").style.display = "block";
            }
    });
    brokenBeers = brokenBeers.filter(brokenBeer => !brokenBeer.isExpired());
}

function gameLoop() {
    if (!gameStarted) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    basket.draw(ctx);
    beers.forEach(beer => beer.draw(ctx));
    score.draw(ctx);
    lvl.draw(ctx);
    lives.draw(ctx);
    brokenBeers.forEach(brokenBeer => brokenBeer.draw(ctx));

    let img = document.getElementById("frog");

    if (isGameOver) {
        img.src = "imgs/frog2.jfif";
        drawGameOver();
        gameoverMusic.play();


    } else {
        if (score.value >= 10) img.src = "imgs/frog4.jpg";
        if (score.value >= 20) img.src = "imgs/frog5.jpg";
        if (score.value >= 30) img.src = "imgs/frog6.jpg";
        if (score.value >= 40) img.src = "imgs/frog7.jpg";
        update();
        requestAnimationFrame(gameLoop);
    }
}
function resetGame() {
    gameoverMusic.currentTime = 0;
    gameoverMusic.pause();
    bgMusic.currentTime = 0;

    basket = new Basket(canvas.width / 2, canvas.height - 65, 100, 60, 10,'imgs/basket.jpg');
    score = new Score(pointsMusic);
    background = new Background(getRandomColor(),"white");
    isGameOver = false;
    lvl = new Level();
    lives = new Lives(3);
    beers = [
        new Beer(Math.random() * (canvas.width - 20), 0, 28, 50, 3, 'imgs/beer.png')
    ];
    gameStarted = false;
    document.getElementById("startButton").disabled = false;
    document.getElementById("replayButton").style.display = "none";
    document.getElementById("frog").src = "imgs/frog.jpg";
}

document.getElementById("replayButton").addEventListener("click", () => {
    resetGame();
    document.getElementById("startButton").click();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        basket.movingLeft = true;
    } else if (event.keyCode === 39) {
        basket.movingRight = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode === 37) {
        basket.movingLeft = false;
    } else if (event.keyCode === 39) {
        basket.movingRight = false;
    }
});
document.getElementById("startButton").addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        requestAnimationFrame(gameLoop);
        document.getElementById("startButton").disabled = true;
    }
});