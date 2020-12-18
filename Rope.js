class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA :bodyA,
            pointB : pointB,
            stiffness: 0.1,
            length : 400
        }

        this.rope = Constraint.create(options);
        World.add(myWorld,this.rope);
    }

  

    display(){
      
        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;
        strokeWeight(3);
        stroke("yellow");
        line(posA.x,posA.y,posB.x,posB.y);
     

    }
}