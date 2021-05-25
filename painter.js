class Painter {
    constructor(element) {
        this.element = element;
    }
    paintBall() {
        throw new Error("Method not implemented.")
    }
    paintPaddle() {
        throw new Error("Method not implemented.")
    }
    paintNet() {
        throw new Error("Method not implemented.")
    }
    paintBoard() {
        throw new Error("Method not implemented.")
    }
    paintText() {
        throw new Error("Method not implemented.")
    }

    clearPaint() {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * @returns {HTMLElement}
     */
    getElement() {
        return this.element;
    }

    get offsetBottom() {
        return boardHeight + this.offsetTop;
    }

    get offsetTop() {
        return this.getElement().getBoundingClientRect().top;
    }

}