var box1, box2;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box1 = createSprite(15, 200, 50, 50);
  box2 = createSprite(207, 200, 50, 50);
  box1.shapeColor = "green";
  box2.shapeColor = "blue";
}

function draw() {
  background(0,255,255);
  box1.x = World.mouseX;
  box1.y = World.mouseY;
  if (box1.x - box2.x < box1.width/2 + box2.width/2 && 
    box2.x - box1.x < box1.width/2 + box2.width/2 && 
    box1.y - box2.y < box1.height/2 + box2.height/2 && 
    box2.y - box1.y < box1.height/2 + box2.height/2) {
    box1.shapeColor = "red";
    box2.shapeColor = "red";
  } else {
    box1.shapeColor = "green";
    box2.shapeColor = "blue";
  }
  drawSprites();
}