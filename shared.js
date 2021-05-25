
const textFontSize = 50;

const paddleWidth = 50;
const paddleHeight = 100;

const boardWidth = window.innerWidth / 2;
const boardHeight = window.innerHeight / 2;

function animate(fps, fn) {
    const wrapper = () => {
        fn();
        setTimeout(() => {
            requestAnimationFrame(wrapper);
        }, 1000 / fps);
    }
    wrapper();
}

function createBall() {
    const ball = new Ball(10, 8);
    ball.xAxis = divide(boardWidth, 2);
    ball.yAxis = divide(boardHeight, 2);
    ball.xVelocity = ~inverse(ball.xVelocity);
    return ball;
}

/**
 * 
 * @param {string} tagName 
 */
function createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
}

