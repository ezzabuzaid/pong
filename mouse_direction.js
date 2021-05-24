


class MouseDirection {
    constructor() {
        this.top = false;
        this.right = false;
        this.bottom = false;
        this.left = false;

        this.oldX = 0;
        this.oldY = 0;
        this.canvasOffsetTop = canvas.offsetTop;
        this.canvasOffsetBottom = window.innerHeight - canvas.offsetTop;
        document.body.addEventListener("mousemove", (event) => {
            this.getMouseDirection(event)
        }, false);
    }



    getMouseDirection(event) {
        this.right = false;
        this.top = false;
        this.bottom = false;

        if (this.oldX < event.pageX) {
            this.right = true;
        } else {
            this.left = true;
        }

        // if (this.oldY < event.pageY) {
        //     this.bottom = true;
        // } else {
        //     this.up = true;
        // }

        if (event.pageY > this.canvasOffsetBottom) {
            this.bottom = true;
        } else if (event.pageY < this.canvasOffsetBottom) {
            this.top = true;
        }

        this.oldX = event.pageX;
        this.oldY = event.pageY;
    }
}