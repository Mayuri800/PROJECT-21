var wall,thickness;
var speed,bullet, weight;


function setup() {
  createCanvas(1600,800);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = ("white");
}

function draw() {
 
  drawSprites();
}
