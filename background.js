class Background {
    constructor(game) {
        this.game = game;
        this.image = document.getElementById("background1");
        this.image2=document.getElementById("background2");
        this.image3=document.getElementById("background3");
        this.width = 2400;
        this.height = this.game.baseHeight;
        this.x;
        this.scaledWidth;
        this.scaledHeight;
        window.addEventListener("keydown",e=>{
            this.mode(e.key);
          });
    }
    update() {
        this.x -= 2;
        if (this.x <= -this.scaledWidth) {
            this.x = 0;

        }

    }
    draw() {
        this.game.ctx.drawImage(this.image, this.x, 0,this.scaledWidth,this.scaledHeight);
        this.game.ctx.drawImage(this.image, this.x + this.scaledWidth-2, 0,this.scaledWidth,this.scaledHeight);
    } resize() {
        this.scaledWidth = this.width * this.game.ratio;
        this.scaledHeight = this.height * this.game.ratio;
        this.x = 0;
    }
    mode(e){
        if (e==="2") {
            this.image=this.image2;
        }
        
    }
}