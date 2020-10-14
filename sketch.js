var bullet,wall,thikness;
var speed,weight;

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(760,200,thikness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  thikness = random(22,83);
}

function draw() {
  background(0);  
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thikness*thikness*thikness);
    if(damage >10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10 && damage > 5){
      wall.shapeColor = color(230,230,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}