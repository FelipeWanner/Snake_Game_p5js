let xSnake = 190;
let ySnake = 190;
let n = 10;
let speedX = n;
let speedY = 0;
let bodyCount = 0;

function snake(){
  fill (200,50,120);
  rect(xSnake, ySnake, n, n);
  xSnake += speedX;
  ySnake += speedY;
  frameRate(10);
  noStroke();
}

function keyPressed(){
  if (speedX > 0 || speedX < 0){
      if (keyCode === DOWN_ARROW){
      speedY = n;
      speedX = 0;
        return false;
      
    } else if (keyCode === UP_ARROW){
      speedY = -n;
      speedX = 0;
      return false;
    } 
} else if (speedY > 0 || speedY < 0) {
  
      if (keyCode === LEFT_ARROW){
        speedY = 0;
        speedX = -n;
        return false;
      } else if (keyCode === RIGHT_ARROW){
        speedY = 0;
        speedX = n;
        return false;
      }
}
}

function respawn(){
  if (xSnake > 390){
      xSnake = 1;
      }
  if (xSnake < 0){
      xSnake = 390;
      }
  if (ySnake > 390){
      ySnake = 1;
      }
  if (ySnake < 0){
      ySnake = 390;
      }
}

function eatFruit(){
  if (xSnake >= xFruit - 2 
      & xSnake <= (xFruit + 2) 
      & ySnake >= yFruit - 2
      & ySnake <= (yFruit + 2)){
    fruitCoordinates();
    bodyCount++;
    index ++;
    if (index === 4){
      index = 0;
    }
      }
}