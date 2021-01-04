var squareA,squareB;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  squareA = createSprite(200,200,50,50);
  squareB = createSprite(350,200,75,75);
  squareA.shapeColor = "red";
  squareB.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  squareB.x = World.mouseX;
  squareB.y = World.mouseY; 
  console.log(squareB.y-squareA.y);
  if(squareB.x-squareA.x<squareA.width/2 + squareB.width/2  && squareA.x-squareB.x<squareA.width/2 + squareB.width/2 && squareB.y-squareA.y<squareA.height/2 + squareB.height/2 && squareA.y-squareB.y<squareA.height/2 + squareB.height/2){
    squareA.shapeColor = "green";
    squareB.shapeColor = "green";
  }else{
    squareA.shapeColor = "red";
    squareB.shapeColor = "blue";
  } 
  drawSprites();
}