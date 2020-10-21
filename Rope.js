class Rope {
    constructor (body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10,
            pointB:{x:this.offsetX, y: this.offsetY}

        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }






}