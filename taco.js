class Taco {
    constructor(x, y) {
      var options = {
        'density':0.2,
        'friction': 10,
        'restitution':0.5,
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 30;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      if(keyDown(65)){
        this.body.x+=-10
      }
      if(keyDown(68)){
        this.body.x+=+10
      }
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };