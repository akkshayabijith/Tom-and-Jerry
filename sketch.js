function preload() {
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
  createCanvas(1000,800);

  garden = createSprite(500,400);
  garden.addImage(gardenImg);

  cat = createSprite(800,600);
  
  cat.scale = 0.1;

  mouse = createSprite(200,600);
  
  mouse.scale = 0.1;

  mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
  cat.setCollider("rectangle",0,0,cat.width,cat.height);

  keyPressed();
  cat.addImage("haha",catImg1);
  mouse.addImage("ha",mouseImg1);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

  
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2 && mouse.x - cat.x < mouse.width/2 + cat.width/2){
      cat.addImage("cats",catImg3);
      cat.changeImage("cats");

      mouse.addImage("mouses",mouseImg3);
      mouse.changeImage("mouses");
      cat.velocityX = 0;
    }


    
    

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("cat",mouseImg2);
    mouse.changeAnimation("cat");

    cat.addAnimation("mouse",catImg2);
    cat.changeAnimation("mouse");
    cat.velocityX = -5;
  }


}
