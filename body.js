let bodyX = [];
let bodyY = [];

function bodyCoordinates(){
  bodyX.unshift(xSnake);
  bodyX.splice(bodyCount + 2, 1); 
  //cada vez que a cobra come uma fruta, bodyCount incrementa em 1.
  //every time the snake eat a fruit, bodyCount increases by 1.
  
  bodyY.unshift(ySnake);
  bodyY.splice(bodyCount + 2, 1); 
  
}

function gameOver(){
  if (bodyCount > 0) {
    for (var i = 1; i < bodyX.length; i++){
      var x = bodyX[i];
      var y = bodyY[i];
      if (xSnake === x & ySnake === y ){
        bodyCount = 0;
        bodyX = [];
        bodyY = [];
      }
    }
  }
  
}

function grow (){
  if (bodyCount > 0){
    fill (200,50,120);
    for (var i = 1; i < bodyX.length; i++){
      rect(bodyX[i], bodyY[i], n, n);
    }
    frameRate(10);
    noStroke();
  }
}

