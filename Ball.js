class Ball{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            mass : 20
        }
        this.body = Bodies.circle(x,y,70);
        World.add(myWorld,this.body);

    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,70,70);
    }
}