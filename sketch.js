var GameState = 'PLAY' 
var fenceGroup
var bushGroup
var ground
var groundI
var dog 
var dogA
var cat 
var catA
var fenceI
var bushI
var fence
var bush
var IG
var stopI
var startI, restartI;
var restart 
var start
var score 

function preload(){
groundI = loadImage('images/background.png')
dogA = loadAnimation('images/dog1.png','images/dog2.png','images/dog3.png')
catA = loadAnimation('images/cat1.png','images/cat2.png','images/cat3.png')
bushI = loadImage('images/bush.png')
fenceI = loadImage('images/fence.png')
startI = loadImage('images/start.png')
restartI = loadImage('images/restart (2).png')
stopI = loadImage('images/stop.png')
}

function setup() {
  createCanvas(670,600);
  fenceGroup = createGroup()
  bushGroup = createGroup()
  ground = createSprite (200,350,900,10)
  ground.shapeColor = 'black'
  ground.x = ground.width /8;
  ground.addImage(groundI)
  ground.scale = 0.7
  ground.velocityX = -5
  ground.setCollider('rectangle',0,350,2800,10)
  dog = createSprite(138,350)
  dog.addAnimation('runing dog',dogA)
  dog.scale=1.5
  dog.setCollider('rectangle',0,0,45,45)
  cat =createSprite(610,535)
  cat.addAnimation('running cat',catA)
  cat.scale = 1.5
  cat.setCollider('rectangle',0,0,35,35)
  restart = createSprite(350,300)
  restart.addImage(restartI)
  restart.scale = 0.5
  ground.debug = true
  cat.debug = true
  dog.debug = true
  
  
}



function draw() {
  background(255,255,255);
  if(GameState == 'PLAY'){
    restart.visible = false
  if(ground.x < 0) {
    ground.x = ground.width/8
  }
  console.log(dog.y)
  if(keyDown('Space')&& dog.y > 550){
    dog.velocityY=-13
  }
  dog.velocityY = dog.velocityY+0.5
  if(keyDown('Space')&& cat.y >550){
    cat.velocityY=-13
  }
  cat.velocityY = cat.velocityY+0.5
  createbush()
  createfence()
  dog.collide(ground)
  cat.collide(ground)
  if(dog.isTouching(bushGroup)||dog.isTouching(fenceGroup)){
    GameState = 'END'
  }
  
}
else if(GameState === 'END'){
  ground.velocityX = 0
  restart.visible = true
  bush.velocityX = 0
  fence.velocityX = 0

  if(mousePressedOver(restart)) {
    reset();
  }
}
  drawSprites();
  text(mouseX + ', '+mouseY, 50,50)
}

function createfence(){
  if(frameCount % 180 == 0) {
    fence = createSprite(777,540)
    fence.addImage(fenceI)
    fence.scale = 0.35
    fence.velocityX = -5
    fence.setCollider('rectangle',0,0,100,100)
    fenceGroup.add(fence)
    fence.debug = true
  }
  
}

function createbush(){
if(frameCount %250 == 0){
  bush = createSprite(798,554)
  bush.addImage(bushI)
  bush.scale = 0.25
  bush.velocityX = -5
  fence.depth = bush.depth+1
  bush.setCollider('rectangle',0,0,100,100)
  bushGroup.add(bush)
  bush.debug = true


}

}

function reset(){
  gameState = 'PLAY';
  restart.visible = false;
  fenceGroup.destroyEach()
  bushGroup.destroyEach()
}


  


