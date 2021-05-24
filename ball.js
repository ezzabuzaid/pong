class Ball {
    constructor(radius, speed) {
        this.radius = radius;
        this.speed = speed;
        this.xVelocity = 5;
        this.yVelocity = 5;
        this.xAxis = divide(canvas.width, 2);
        this.yAxis = divide(canvas.height, 2);
    }

    top() {
        return this.yAxis;
    }

    bottom() {
        return addition(this.yAxis, this.radius);
    }

    left() {
        return subtraction(this.xAxis, this.radius);
    }

    right() {
        return addition(this.xAxis, this.radius);
    }

    reset() {
        const newBall = new Ball(this.radius, this.speed);
        newBall.xVelocity = inverse(this.xVelocity);
        Object.assign(this, newBall);
    }

    move() {
        if (
            or(
                gte(this.bottom(), canvas.height),
                lte(this.top(), 0)
            )
        ) {
            this.yVelocity = inverse(this.yVelocity);
        }
        this.xAxis += this.xVelocity;
        this.yAxis += this.yVelocity;
    }

}