class Rope{

    constructor(x,y,offsetX){

        this.offsetX=offsetX
        this.offsetY=100
        var options = {
            bodyA:x,
            bodyB:y,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world, this.rope);
    }
    
    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var Point1X = pointA.x
        var Point1Y = pointA.y

        var Point2X = pointB.x + this.offsetX
        var Point2Y = pointB.y + this.offsetX

        push();
        strokeWeight(5);
        line(Point1X, Point1Y, Point2X, 50);
        pop();
    }
}
