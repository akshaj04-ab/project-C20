var car,car1,car2;

var speed,weight;

var speed1,weight1;

var speed2,weight2;

var wall,wall1,wall2;


function setup() {
  createCanvas(1600,400);
  speed=random(50,95);
  weight=random(450,1500);
  speed1=random(55,90);
  weight1=random(400,1500);
  speed2=random(60,85);
  weight2=random(350,1500);
  
  car = createSprite(300, 200, 30, 10);
  car.shapeColor=color(255,255,255);
  
  wall=createSprite(1320,200,25,25);

  car1 = createSprite(300, 100, 30, 10);
  car1.shapeColor=color(255,255,255);
  
  wall1=createSprite(1320,100,25,25);

  car2 = createSprite(300, 300, 30, 10);
  car2.shapeColor=color(255,255,255);
  
  wall2=createSprite(1320,300,25,25);

  
  
  
}

function draw() {
  background(0);
  
  if(keyWentDown(RIGHT_ARROW)){

    car.velocityX=speed;
    car1.velocityX=speed1;
    car2.velocityX=speed2;

  }
  if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;

var deformation=0.5*speed*weight*speed/22509;

if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){

car.shapeColor=color(230,230,0);

}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}

  }

  if(wall1.x-car1.x<(car1.width+wall1.width)/2){

    car1.velocityX=0;
    
    var deformation=0.5*speed1*weight1*speed1/22509;
    
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
    
    car1.shapeColor=color(230,230,0);
    
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  
  
  
    }


    if(wall2.x-car2.x<(car2.width+wall2.width)/2){

      car2.velocityX=0;
      
      var deformation=0.5*speed2*weight2*speed2/22509;
      
      if(deformation>180)
      {
        car2.shapeColor=color(255,0,0);
      }
      if(deformation<180 && deformation>100){
      
      car2.shapeColor=color(230,230,0);
      
      }
      if(deformation<100)
      {
        car2.shapeColor=color(0,255,0);
      }
    
    
    
      }
   

  drawSprites();

  textSize(15);
  fill("red");
  text("press right arrow key for driving the cars for test",650,100);

}