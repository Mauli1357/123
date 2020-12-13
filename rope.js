class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = this.offsetX
        this.offsetY = this.offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 10
        }
        this.bodyB = body2
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;

    }
    

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}