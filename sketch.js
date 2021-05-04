var movingRect, fixedRect;

function setup() {
  var canvas = createCanvas(800,400);

  //creating sprites 
  movingRect = createSprite(200,200,40,40);
  //adding colour
  movingRect.shapeColor="green";


  fixedRect = createSprite(300,200,40,40);
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  //moving rectangle with mouse
 movingRect.y = mouseY;
 movingRect.x = mouseX;

 console.log(movingRect.x - fixedRect.x);

 //changing colour of fixed rect and moving rect when they touches
 //if rectangle is at right colour green 
 if(movingRect.x-fixedRect.x <movingRect.width/2+fixedRect.width/2 &&
  //if rect is at left colour green
  fixedRect.x - movingRect.x<movingRect.width/2+fixedRect.width/2 && 
  //if rect is above colour green
  movingRect.y - fixedRect.y<movingRect.height/2 + fixedRect.height/2 &&
  //if rect is below colour green
  fixedRect.y - movingRect.y<movingRect.height/2+fixedRect.height/2){
   movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
 }
 else{
   //changing colour
   movingRect.shapeColor = "green"
   fixedRect.shapeColor = "green"
 }

  drawSprites();


}