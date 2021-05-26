
/**
 * 
 * @param {'svg'|'canvas'} graphics 
 */
function play(graphics) {

    let painter = new Painter();

    if (graphics === 'svg') {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        document.body.appendChild(svg);
        painter = new SVGPainter(svg);
    } else {
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        painter = new CanvasPainter(canvas);
    }

    let ball = createBall();

    const userPlayer = new Player();
    const oponentPlayer = new Player();

    userPlayer.yAxis = subtract(divide(boardHeight, 2), divide(paddleHeight, 2));
    userPlayer.xAxis = 0;
    oponentPlayer.yAxis = subtract(divide(boardHeight, 2), divide(paddleHeight, 2));
    oponentPlayer.xAxis = subtract(boardWidth, paddleWidth);

    function renderGame() {
        painter.clearPaint();
        painter.paintBoard();
        painter.paintBall(ball.radius, ball.xAxis, ball.yAxis);
        painter.paintPaddle(userPlayer.xAxis, userPlayer.yAxis);
        painter.paintPaddle(oponentPlayer.xAxis, oponentPlayer.yAxis);
        painter.paintNet(2, 10);
        painter.paintText(
            userPlayer.score,
            subtract(divide(boardWidth, 4), divide(textFontSize, 2)),
            boardHeight / 10
        );
        painter.paintText(
            oponentPlayer.score,
            subtract(multiply(divide(boardWidth, 4), 3), divide(textFontSize, 2)),
            boardHeight / 10
        );
    }

    function collision() {
        const player = getPlayer();
        return and(
            lte(player.left(), ball.right()),
            lte(player.top(), ball.bottom()),
            gte(player.right(), ball.left()),
            gte(player.bottom(), ball.top()),
        );
    }

    function getPlayer() {
        if (lte(ball.xAxis, divide(boardWidth, 2))) {
            return userPlayer;
        }
        return oponentPlayer;
    }

    ['mousemove', 'touchmove'].forEach(eventName => {
        document.addEventListener(eventName, (event) => {
            const cursorPosition = event.clientY - paddleHeight - painter.offsetTop;
            const exceededBottom = event.clientY > painter.offsetBottom
            const exceededTop = (event.clientY - paddleHeight) < painter.offsetTop
            userPlayer.move(cursorPosition);
            if (exceededBottom) {
                const boardBottom = painter.offsetBottom - painter.offsetTop - paddleHeight;
                userPlayer.move(boardBottom);
            }
            if (exceededTop) {
                userPlayer.move(0);
            }
        });
    });

    animate(60, () => {
        renderGame();
        const player = getPlayer();

        if (collision()) {
            const collisionPoint = subtract(ball.top(), player.center());
            const normalizedPoint = divide( // between -1 and 1
                collisionPoint,
                divide(paddleHeight, 2)
            );
            const direction = lte(ball.right(), divide(boardWidth, 2)) ? 1 : -1;
            const angel = (Math.PI / 4) * normalizedPoint;
            ball.xVelocity = Math.cos(angel) * ball.speed * direction;
            ball.yVelocity = Math.sin(angel) * ball.speed;
            ball.speed += ball.speed * 1 / 100;
        }

        ball.move();

        if (lte(ball.left(), 0)) {
            oponentPlayer.score++;
            ball = createBall();
        } else if (gte(ball.right(), boardWidth)) {
            userPlayer.score++;
            ball = createBall();
        }

        oponentPlayer.yAxis += ((ball.top() - (oponentPlayer.top() + paddleHeight / 2))) * ball.speed * 1 / 100;
    });

}
