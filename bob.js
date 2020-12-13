class Bob{
    constructor(x,y) {
        var options = {
        //    'restitution':0.8,
         //   'friction':1.0,
         //   'density':1.0
         isStatic:true
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}