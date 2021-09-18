class Stone
{
    constructor(x,y,r){
        var options = {
            restitution: 0.05
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    displayBall(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.r);
        pop();
       }
}
