class CollisionRect {
    #x;
    #y;
    #w;
    #h;

    constructor() { }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getWidth() {
        return this.#w;
    }

    getHeight() {
        return this.#h;
    }

    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
    }

    setDimensions(width, height) {
        this.#w = width;
        this.#h = height;
    }

    containsPoint(x, y) {
        return x >= this.#x && x <= this.#x + this.#w
            && y >= this.#y && y <= this.#y + this.#h;
    }
}

class Button extends CollisionRect {
    #label;
    #checked;
    #fillColours;
    #state;
    #textColours;

    constructor(location, size, text) {
        super();
        this.setPosition(x, y);
        this.setDimensions(w, h);
        this.#label = label;
        this.#checked = false;
      //  this.#setColours();


    }

    draw() {
        rect(this.getX(), this.getY(), this.getWidth(), this.getHeight(), 5);
        if (this.#checked) {
            textAlign(CENTER, CENTER);
            textSize(this.getHeight() * 0.75);
            fill(this.#strokeColours.get(this.#state))
            text("✓", this.getX(), this.getY(), this.getWidth(), this.getHeight());
        }
        fill(this.#labelColours.get(this.#state));
        textAlign(LEFT, CENTER);
        textSize(this.getHeight() * 0.5)
        text(this.#label, this.getX() + this.getWidth() + 10, this.getY(), AUTO, this.getHeight());
    }
}

