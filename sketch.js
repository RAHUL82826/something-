var ad, d

function setup() {
  createCanvas(800,400);
  ad = createSprite(400, 100,50,80)
  ad.shapeColor = "Blue";
  ad.debug = true;
  d = createSprite(400, 800,80,30);
  d.shapeColor = "blue";
  d.debug = true;

  d.velocityY = -5;
  ad.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(d,ad);
  drawSprites();
}

function bounceOff(r1,r2){
  if (r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2) {
    r1.velocityX = r1.velocityX * (-1);
    r2.velocityX = r2.velocityX * (-1);
  }
  if (r1.y - r2.y < r2.height/2 +r1.height/2
    && r2.y - r2.y < r2.height/2 + r1.height/2) {
      r1.velocityY = r1.velocityY * (-1);
      r2.velocityY = r2.velocityY * (-1);
  } 
}

