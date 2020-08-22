class Bob {
    constructor(x, y) {
      var options = {
        isStatic : false,
        restitution : 0.3,
        density : 1.2,
        friction : 0.5
      }
      this.body = Matter.Bodies.circle(x, y, 50, options);
      this.radius = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill(255,0,255)
      ellipse(pos.x, pos.y, this.radius);
    }
  }