class bob{
    constructor(x,y){
        var options = {
            
            'restitution':1.1,
            'isStatic': false,
            'density':0.7,
            'friction':1
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.width = 50;
        this.height = 70;
        this.image = loadImage("ball.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("red");
        image(this.image,-25 ,0 , this.width,this.height);
        pop();
      }
    };