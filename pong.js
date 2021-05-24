(() => {

    const draw = new Draw();
    const userPlayer = new Player(0);
    const oponentPlayer = new Player(subtraction(canvas.width, playerSigementwidth));
    const ball = new Ball(10, 5);

    function render() {
        draw.color('white').drawRect(0, 0, canvas.width, canvas.height)

        draw.color('black').drawText(
            userPlayer.score,
            subtraction(divide(canvas.width, 4), divide(textFontSize, 2)),
            canvas.height / 10
        );

        draw.color('black').drawText(
            oponentPlayer.score,
            subtraction(multiplication(divide(canvas.width, 4), 3), divide(textFontSize, 2)),
            canvas.height / 10
        );

        draw.drawNet();

        draw.color('black').drawCircle(ball.xAxis, ball.yAxis, ball.radius);


        draw.color('black').drawRect(userPlayer.xAxis, userPlayer.yAxis, playerSigementwidth, playerSigementHeight)
        draw.color('black').drawRect(oponentPlayer.xAxis, oponentPlayer.yAxis, playerSigementwidth, playerSigementHeight)

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
        if (lte(ball.xAxis, divide(canvas.width, 2))) {
            return userPlayer;
        }
        return oponentPlayer;
    }

    document.addEventListener("mousemove", (event) => {
        const centerOfPlayer = addition(divide(canvas.height, 2), divide(playerSigementHeight, 2));
        const currentPosition = subtraction(event.clientY, centerOfPlayer);
        console.log(currentPosition);
        userPlayer.move(currentPosition);
    });


    refresh(() => {
        const player = getPlayer();
        if (collision()) {
            const collisionPoint = subtraction(ball.top(), player.center());
            const normalizedPoint = divide( // between -1 and 1
                collisionPoint,
                divide(playerSigementHeight, 2)
            );
            const direction = lte(ball.right(), divide(canvas.width, 2)) ? 1 : -1;
            const angel = (Math.PI / 4) * normalizedPoint;
            ball.xVelocity = Math.cos(angel) * ball.speed * direction;
            ball.yVelocity = Math.sin(angel) * ball.speed;
            ball.speed += 0.1;
        }

        ball.move();

        if (lte(ball.left(), 0)) {
            oponentPlayer.score++;
            ball.reset();
        } else if (gte(ball.right(), canvas.width)) {
            userPlayer.score++;
            ball.reset();
        }

        oponentPlayer.yAxis += ((ball.top() - (oponentPlayer.top() + playerSigementHeight / 2))) * 0.1;

        render();
    }, 60)

})()