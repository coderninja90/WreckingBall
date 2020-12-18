class Block{
    constructor(x,y){
        var options = {
            restitution : 0.3,
            density : 0.2,
            friction : 0.6
        }

        this.body = Bodies.rectangle(x,y,80,80);
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("yellow");
        fill("green");
        rect(0,0,80,80);
        pop();
    }
}