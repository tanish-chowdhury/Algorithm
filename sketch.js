var fixedrect, movingrect,edges;

function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400,200,80,100) ;
 movingrect = createSprite(600,300,50,70);

 fixedrect.shapeColor = "green";
 movingrect.shapeColor = "green";

 fixedrect.debug = true;
 movingrect.debug = true;

 fixedrect.velocityX=5;
 fixedrect.velocityY=-5;

 movingrect.velocityX=-5;
 movingrect.velocityY=5;
 
 edges = createEdgeSprites();
}

function draw() {
  background(100);
  //movingrect.x = mouseX;
  //movingrect.y = mouseY; 

  movingrect.bounceOff(edges);
  fixedrect.bounceOff(edges);

  if (movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 && movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2){
    //fixedrect.shapeColor = "red";
   // movingrect.shapeColor = "red";
movingrect.velocityX=movingrect.velocityX*-1;
fixedrect.velocityX=fixedrect.velocityX*-1;
movingrect.velocityY=movingrect.velocityY*-1;
fixedrect.velocityY=-1*fixedrect.velocityY;
  }
 /* else{
    /*fixedrect.shapeColor = "green";
   movingrect.shapeColor = "green";
  }*/

  
  drawSprites();
}