
var T;
var c, ctx;
var x, y;
function setCanvas() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, c.width, c.height);
    x = Math.floor(Math.random() * c.width);
    y = Math.floor(Math.random() * c.height);
    x -= x % 20;
    y -= y % 20;
    ctx.moveTo((x - x % 20), (y - y % 20));
    startDraw();
}

function draw() {
    let r = Math.floor(Math.random() * 256), g = Math.floor(Math.random() * 256), b = Math.floor(Math.random() * 256);
    ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
    let randX = Math.floor(Math.random() * 2);
    if (randX == 0)
        randX = -1;
    let randY = Math.floor(Math.random() * 2);
    if (randY == 0)
        randY = -1;

    randX *= 20;
    randY *= 20;

    if (Math.random() < 0.5)
        randX = 0;
    else
        randY = 0;

    x += randX;
    if (x < 0)
        x = 20;
    if (x > c.width)
        x = c.width - 20;

    y += randY;
    if (y < 0)
        y = 20;
    if (y > c.height)
        y = c.height - 20;
    ctx.lineTo(x, y);
    ctx.stroke();
    startDraw();
}

function startDraw() {
    T = setTimeout(draw, 5);
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function pauseDraw() {
    clearTimeout(T);
}

function clean() {
    pauseDraw();
    ctx.clearRect(0, 0, c.width, c.height);
}

function save() {
    pauseDraw();
    var dataURL = c.toDataURL();
    console.log(dataURL);
    let a = document.createElement("a");
    a.href = dataURL;
    a.download = "鬼畫符.png";
    a.click();
}