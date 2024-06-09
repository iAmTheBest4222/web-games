class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.baseHeight = 720;
    this.ratio = this.height / this.baseHeight;
    this.background=new Background(this);
    this.player = new Player(this);
    this.obstacles=[];
    this.numberOfElement=10;
    this.gravity;
    this.speed;
    this.resize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", e => {
      this.resize(e.currentTarget.innerWidth, canvas.height = e.currentTarget.innerHeight);
    });
    this.canvas.addEventListener("mousedown", e => {
      this.player.flap();
    });
    window.addEventListener("keydown",e=>{
      if (e.key === " " || e.key ==="Enter") {
        this.player.flap();
      }
      
    });

  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.fillStyle = "blue";
    this.ctx.borderRadius = "25px";
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ratio = this.height / this.baseHeight;

    this.gravity = 0.15 * this.ratio;
    this.speed=2*this.ratio;
    this.background.resize();
    this.player.resize();
    this.creatObstracals();
    this.obstacles.forEach(obstacle =>{
      obstacle.resize();
    });
    
    

  }
  
  render() {
    this.background.update();
    this.background.draw();
    this.player.update();
    this.player.draw();
    this.obstacles.forEach(obstacle =>{
      obstacle.update();
      obstacle.draw();
      
      
    });
  }
  creatObstracals(){
    this.obstacles=[];
    const firstX=100;
    const obstacelSpacing=100;
    for(let i=0;i<this.numberOfElement;i++){
      this.obstacles.push(new Obstacele(this,firstX+i*obstacelSpacing));
    }
  }
   
}
///////////////////////////////////////////////////////
window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 720;
  canvas.height = 720;

  const game = new Game(canvas, ctx);
  game.render();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render();
    requestAnimationFrame(animate);
  }
  this.requestAnimationFrame(animate);

});