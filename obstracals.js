class Obstacele {
    constructor(game,x){
        this.game=game;
        this.spritewidth=120;
        this.spriteheight=120;
        this.scaledwidth=this.spritewidth*this.game.ratio;
        this.scaledheight=this.spriteheight*this.game.ratio;
        this.x=x;
        this.y=this.game.height*0.5-this.scaledheight;
    }
    update(){
        this.x-=this.game.speed;
    }
    draw(){
        this.game.ctx.fillRect(this.x,this.y,this.scaledwidth,this.scaledheight);
    }
    resize(){
        this.scaledwidth=this.spritewidth*this.game.ratio;
        this.scaledheight=this.spriteheight*this.game.ratio;
    }
}
    
    
