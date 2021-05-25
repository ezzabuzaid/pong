
class CanvasPainter extends Painter {
    /**
     * 
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        super(canvas);
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        canvas.width = boardWidth
        canvas.height = boardHeight;
    }

    clearPaint() { }

    paintBoard() {
        this.context.fillStyle = 'black';
        this._rect(0, 0, boardWidth, boardHeight);
        this.context.save();
    }

    paintBall(radius, xAxis, yAxis) {
        this.context.fillStyle = 'white';
        this.context.beginPath();
        this.context.arc(xAxis, yAxis, radius, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.save();
    }

    paintPaddle(xAxis, yAxis) {
        this.context.fillStyle = 'white';
        this._rect(xAxis, yAxis, paddleWidth, paddleHeight);
        this.context.save();
    }

    paintNet(width) {
        this.context.fillStyle = 'white';
        this._rect(divide(boardWidth, 2), 0, width, boardHeight);
        this.context.save();
    }

    paintText(value, xAxis, yAxis) {
        this.context.fillStyle = 'white';
        this.context.font = `${textFontSize}px fantasy`;
        this.context.fillText(value, xAxis, yAxis)
        this.context.save();
    }


    _rect(xAxis, yAxis, width, height) {
        this.context.fillRect(xAxis, yAxis, width, height);
        return this;
    }

}