var movingRect,fixedRect;
var birds,pigs;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;
 movingRect = createSprite(400, 800, 80, 30);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 movingRect.velocityY = -5;
 fixedRect.velocityY = 5;
 birds = createSprite(200,50,25,40);
 birds.shapeColor = "green";
 birds.debug = true;
 pigs = createSprite(200,400,40,15);
 pigs.shapeColor = "green";
 pigs.debug = true;
}


function draw() {
  background(0);  
  bounceOff(movingRect,fixedRect);
  pigs.x = World.mouseX;
  pigs.y = World.mouseY;
  if(isTouching(pigs,birds)){
  pigs.shapeColor = "blue";
  birds.shapeColor = "blue";
  }
  else{
  pigs.shapeColor = "green";
  birds.shapeColor = "green"
  }
  drawSprites();
}

