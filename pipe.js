function Pipe() {
  this.gap = 140;
  this.dist = (height - this.gap) / 6;
  this.top = this.dist + random(this.dist * 4);
  this.bottom = height - this.top - this.gap;
  this.x = width;
  this.w = 50;
  this.speed = 4;
  this.passing = false;

  this.show = function() {
    fill(200);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreeen = function() {
    return this.x < -this.w;
  };

  this.hit = function(bird) {
    if (bird.x < this.x + this.w && bird.x > this.x) {
      this.passing = true;
      if (
        bird.y - bird.r / 3 < this.top ||
        bird.y + bird.r / 3 > height - this.bottom
      ) {
        dead = true;
        return true;
      }
    } else {
      if (this.passing) {
        score++;
      }
      this.passing = false;
    }
    return false;
  };
}
