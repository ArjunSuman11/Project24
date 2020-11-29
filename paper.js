class Paper  {
    constructor(x, y, radius){
        var Options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density :0.8
        }
        this.body =Bodies.circle(x, y, radius, Options);
        this.radius= radius;
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position
        push();
        translate(pos.x, pos.y);
        fill(255);
        ellipse(0, 0, this.radius, this.radius);
        pop();        
    }
}