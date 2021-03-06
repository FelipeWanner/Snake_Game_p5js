function setup() {
  createCanvas(400, 400);
  fruitCoordinates();
}

function draw() {
  background(0);
  snake();
  respawn();
  keyPressed();
  createFruit();
  eatFruit();
  bodyCoordinates();
  grow();
  gameOver();
}

