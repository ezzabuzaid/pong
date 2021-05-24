class Player {

    constructor(xAxis) {
        this.xAxis = xAxis;
        this.yAxis = subtraction(divide(canvas.height, 2), divide(playerSigementHeight, 2));
        this.score = 0;
    }


    top() {
        return this.yAxis;
    }

    bottom() {
        return addition(this.top(), playerSigementHeight);
    }

    left() {
        return this.xAxis;
    }

    right() {
        return addition(this.xAxis, playerSigementwidth);
    }

    center() {
        return addition(this.top(), divide(playerSigementHeight, 2))
    }

    get goingUp() { }

    move(yAxis) {
        const maxDown = addition(divide(canvas.height, 2), playerSigementHeight);
        const maxUp = 0;
        if (lte(yAxis, maxDown)) {
            this.yAxis = yAxis;
        } else {
            this.yAxis = maxDown
        }
        if (mouseDirection.bottom) {
        }
        // else if (mouseDirection.top) {
        //     if (lte(yAxis, maxUp)) {
        //         this.yAxis = maxUp
        //     } else {
        //         this.yAxis = yAxis;
        //     }
        // }

    }

}