class Ball {
    constructor(radius, speed) {
        this.radius = radius;
        this.speed = speed;
        this.xVelocity = speed;
        this.yVelocity = speed;
        this.xAxis = 0;
        this.yAxis = 0;
    }

    top() {
        return this.yAxis;
    }

    bottom() {
        return add(this.yAxis, this.radius);
    }

    left() {
        return subtract(this.xAxis, this.radius);
    }

    right() {
        return add(this.xAxis, this.radius);
    }

    move() {
        if (
            or(
                gte(this.bottom(), boardHeight),
                lte(this.top(), 0)
            )
        ) {
            this.yVelocity = inverse(this.yVelocity);
        }
        this.xAxis += this.xVelocity;
        this.yAxis += this.yVelocity;
    }

}