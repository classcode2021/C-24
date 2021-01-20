class Bird {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          "friction":1.0,
          "density":1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      stroke ("red")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };