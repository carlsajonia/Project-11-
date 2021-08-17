var jaxon, jaxon_running;
var path, pathImg;
var wall1, wall2;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");

  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  jaxon = createSprite(200,330,10,400);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.1;

  wall1 = createSprite(400,200,10,400);
  wall1.visible = false;

  wall2 = createSprite(10,200,10,400);
  wall2.visible = false;
}

function draw() {
  background(0);

  if(path.y > 500){
    path.y=height/2;
  }

  jaxon.x = World.mouseX;

  jaxon.collide(wall1);
  jaxon.collide(wall2);

  drawSprites();
}

