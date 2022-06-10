var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  background("yellow"); 

  if (keyIsDown(RIGHT_ARROW))
  
   background("red");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x ;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x ;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y ;
   
  }

  if (keyIsDown(DOWN_ARROW))  
  {
    box.position.y = box.position.y ; 
  }

  drawSprites();
}




