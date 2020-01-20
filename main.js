var bird;
var pipes = [];
var dead = false;
var textbox;
var score = 0;

function setup() {
  createCanvas(800, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  textbox = createP("Score: " + score)
    .style("color", "#000000")
    .style("font-size", "32pt");
}

function draw() {
  background(30);
  bird.update();
  bird.show();
  textbox.html("Score: " + score);

  if (frameCount % 80 == 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();
    pipes[i].hit(bird);

    if (pipes[i].offscreeen()) {
      pipes.splice(i, 1);
    }
  }
  if (dead) {
    noLoop();
    createP("GameOver")
      .style("color", "#000000")
      .style("font-size", "32pt");
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
