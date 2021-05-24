const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouseDirection = new MouseDirection();
const textFontSize = 50;

const playerSigementwidth = 25;
const playerSigementHeight = 100;

function refresh(fn, framePerSecond) {
    setInterval(fn, 1000 / framePerSecond)
}
