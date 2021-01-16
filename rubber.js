class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r=r
      
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
  strokeWeight(4);
  stroke("black");    
      fill("blue");
    //   circle(0,0, this.r);
      ellipse(0,0, 45,45);
      pop();
    }
  };
  