
class SVGPainter extends Painter {
    /**
     * 
     * @param {SVGElement} svg
     */
    constructor(svg) {
        super(svg);
        this.svg = svg;
        this.svg.setAttribute('width', boardWidth);
        this.svg.setAttribute('height', boardHeight);
    }

    paintBoard() {
        const board = createElement('rect');
        board.setAttribute('fill', 'black');
        board.setAttribute('width', boardWidth);
        board.setAttribute('height', boardHeight);
        this.svg.appendChild(board);
    }

    paintBall(radius, xAxis, yAxis) {
        const circle = createElement('circle');
        circle.setAttribute('fill', 'white');
        circle.setAttribute('r', radius);
        circle.setAttribute('cx', xAxis);
        circle.setAttribute('cy', yAxis);
        this.svg.appendChild(circle);
    }

    paintPaddle(xAxis, yAxis) {
        const paddle = createElement('rect');
        paddle.setAttribute('width', paddleWidth);
        paddle.setAttribute('height', paddleHeight);
        paddle.setAttribute('fill', 'white');
        paddle.setAttribute('x', xAxis);
        paddle.setAttribute('y', yAxis);
        this.svg.appendChild(paddle);
    }

    paintNet(width) {
        const line = createElement('line');
        line.setAttribute('x1', divide(boardWidth, 2));
        line.setAttribute('x2', add(divide(boardWidth, 2), width));
        line.setAttribute('y1', 0);
        line.setAttribute('y1', boardHeight);
        line.setAttribute('stroke', 'white');
        this.svg.appendChild(line);
    }

    paintText(value, xAxis, yAxis) {
        const text = createElement('text');
        text.textContent = value;
        text.setAttribute('x', xAxis);
        text.setAttribute('y', yAxis);
        text.setAttribute('font-size', `${textFontSize}px`);
        text.setAttribute('font-family', 'fantasy');
        text.setAttribute('fill', 'white');
        this.svg.appendChild(text);
    }

    clearPaint() {
        this.svg.innerHTML = '';
    }



}
