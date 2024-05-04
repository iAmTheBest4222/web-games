class Player {
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y;
        this.height = 200;
        this.width = 200;
        this.spriteHeight = 200;
        this.spritewidth = 200;
        this.speedY = -2;
    } draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    } update() {
        this.x++;
        this.y += this.speedY;
        if (!this.isTouchingBottom()) {
            this.speedY += this.game.gravity;
        } if (this.isTouchingBottom()) {
            this.y = this.game.height - this.height;
            alert("WARNING [points -1]");
            this.resize();
        }
    } resize() {
        this.width = this.spriteHeight * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.speedY = -8 * this.game.ratio;
    }
    isTouchingBottom() {
        return this.y >= this.game.height - this.height;
    }
    isTouchingTop() {
        return this.y <= 0;
    }
    flap() {
        if (!this.isTouchingTop()) {
            this.speedY = -5;
        }
    }
}