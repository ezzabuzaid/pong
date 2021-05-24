class Draw {

    drawRect(xAxis, yAxis, width, height) {
        context.fillRect(xAxis, yAxis, width, height);
        return this;
    }

    color(color) {
        context.fillStyle = color;
        return this;
    }

    drawCircle(xAxis, yAxis, radius) {
        context.beginPath();
        context.arc(xAxis, yAxis, radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        return this;
    }

    drawText(text, xAxis, yAxis, fontSize = 50) {
        context.font = `${fontSize}px fantasy`;
        context.fillText(text, xAxis, yAxis)
        return this;
    }

    drawNet() {
        const netHeight = 10;
        const netWidth = 2;
        const xAxis = subtraction(divide(canvas.width, 2), divide(netWidth, 2));
        const segementsCounts = divide(canvas.height, netHeight);
        for (let i = 0; i < segementsCounts; i++) {
            if (even(i)) {
                const segementPosition = addition(multiplication(i, netHeight), divide(netHeight, 2));
                this.drawRect(xAxis, segementPosition, netWidth, netHeight);
            }
        }
    }

}