class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(18, 6, 77);
        stroke(18, 6, 77);
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}