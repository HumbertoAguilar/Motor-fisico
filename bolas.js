class Ball{
    constructor(x,y,radius){
var options={
        restitution:0.8,
         friction:20,
        density:0.2,
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(2);
        stroke("black");
        fill("blue")
        rectMode(RADIUS)
        ellipse(0,0,this.radius)
       
        pop();


    }
}