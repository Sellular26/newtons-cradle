class Ball{
    constructor(x, y, radius) {
        var options = {
          restitution:1.2,
          density:2,
          friction:1
        }
        this.body =  Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("metalball.png")

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, this.radius);
        this.image.width = 70
        this.image.height = 70
        pop();
      }
}