
class Platform{
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          restitution :0.8,
          friction :1.5,
          density :1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      

      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill(115,115,115);
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
  }