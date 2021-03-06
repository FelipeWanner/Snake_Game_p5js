let xFruit;
let YFruit;
let index = 0;

function fruitCoordinates(){
   xFruit = 10 * floor (random(0,40));
   yFruit = 10 * floor (random(0,40));
  for (var i = 1; i < bodyX.length; i++){
      var x = bodyX[i];
      var y = bodyY[i];
    if (xFruit === x & yFruit === y){
        xFruit = 10 * floor (random(0,40));
        yFruit = 10 * floor (random(0,40));
        }
}
}

//aqui na funcção createFruit a ideia era utilizar uma linha de função utilizando uma array com o nome das frutas, utilizando "index" como o identificador, mas ao rodar o programa, acontece um erro em width. Não consegui compreender então modifiquei a função para uma solução um pouco maior.

function createFruit(){
  if (index === 0){
      image(apple, xFruit, yFruit, 10, 10)
    }else if (index === 1){
              image(pear, xFruit, yFruit, 10, 10)
    } else if (index === 2){
               image(banana, xFruit, yFruit, 10, 10)
    } else if (index === 3){
               image(watermellon, xFruit, yFruit, 10, 10)
    }
}

