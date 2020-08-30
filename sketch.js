var movingRect,fixedRect;
var rect1,rect2;
var rect3,rect4;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  textSize(20);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";


  gameObject1 = createSprite(100, 200, 80, 50);
  gameObject2 = createSprite(200, 200, 80, 50);

  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";

  rect1 = createSprite(700, 50, 80, 50);
  rect2 = createSprite(700, 350, 50, 80);
  rect1.velocityY = 2;
  rect2.velocityY = -2;

  rect3 = createSprite(100, 50, 80, 50);
  rect4 = createSprite(600, 50, 50, 80);
  rect3.velocityX = 2;
  rect4.velocityX = -2;
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  // if(isTouching(movingRect, fixedRect)){
  //   fixedRect.shapeColor = "red";
  //   movingRect.shapeColor = "red";
  //   text("Objects are Touching", 200,50);
  // }
  // else{
  //   fixedRect.shapeColor = "green";
  //   movingRect.shapeColor = "green";
  //   text("Objects are NOT touching", 200,50);
  // }


  if(isTouching(movingRect, gameObject1)){
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
    text("Objects are Touching", 200,50);
  }
  else{
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
    text("Objects are NOT touching", 200,50);
  }

  bounceOff(rect1,rect2);
  bounceOff(rect3,rect4);

  drawSprites();
}



