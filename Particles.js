class Particles {
    constructor(x, y, r) {
        var options = {
            'restitution': 0.4

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options)
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);


    }
    display() {
        push()
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }


}