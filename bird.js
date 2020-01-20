function Bird() {
  this.y = height / 2;
  this.x = width / 2;
  this.r = 32;

  this.gravity = 0.7;
  this.lift = -17;
  this.velocity = 0;

  this.show = function() {
    fill(225);
    ellipse(this.x, this.y, this.r, this.r);
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.92;
    this.y += this.velocity;

    if (this.y <= 0 || this.y >= height) {
      dead = true;
    }
  };

  this.up = function() {
    this.velocity = this.lift;
  };
}
