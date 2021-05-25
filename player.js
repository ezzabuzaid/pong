class Player {

    constructor() {
        this.xAxis = 0;
        this.yAxis = 0;
        this.score = 0;
    }

    top() {
        return this.yAxis;
    }

    bottom() {
        return add(this.top(), paddleHeight);
    }

    left() {
        return this.xAxis;
    }

    right() {
        return add(this.xAxis, paddleWidth);
    }

    center() {
        return add(this.top(), divide(paddleHeight, 2))
    }

    move(yAxis) {
        this.yAxis = yAxis;
    }

}