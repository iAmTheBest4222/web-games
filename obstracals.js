class Obstacele {
    constructor(game,x){
        this.game=game;
        this.spritewidth=120;
        this.spriteheight=120;
        this.scaledwidth=this.spritewidth*this.game.ratio;
        this.scaledheight=this.spriteheight*this.game.ratio;
        this.x=x;
        this.y=Math.random()*(this.game.height-this.scaledheight);
        this.y=this.game.height*0.5-this.scaledheight;
        this.speedY=Math.random()<0.5?-1*this.game.ratio:1*this.game.ratio;
        
    }
    update(){
        this.x-=this.game.speed;
        this.y+=this.speedY;
        if (this.y<=0 || this.y>=this.game.height-this.scaledheight){
            this.speedY*=-1;
        }
        
    }
    
    draw(){
        this.game.ctx.fillRect(this.x,this.y,this.scaledwidth,this.scaledheight);
        //to draw the rect (obstcals)
    }
    resize(){
        this.scaledwidth=this.spritewidth*this.game.ratio;
        this.scaledheight=this.spriteheight*this.game.ratio;
        //for the sizing of the rect
    }
}
    
    
