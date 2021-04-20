var  tom,jerry
var cat_still,cat_moving
var mouse_moving,mouse_teasing
var garden
function preload() {
    cat_still=
    loadAnnimation("cat1.png","cat2.png")
    cat_moving=
    loadAnnimation("cat3.png","cat4.png")

    garden=
    loadImage("garden.png")

    mouse_moving=
    loadAnnimation("mouse1.png","mouse2.png")
    mouse_teasing=
    loadAnnimation("mouse3.png","mouse4.png")

}

function setup(){
    createCanvas(1000,800);
   jerry=createSprite(200,350,200,200) 
   tom=createSprite(600,350,200,200)
}

function draw() {

   background(255);
   background=createSprite(0,0,1000,800);         
   background.addImage(garden)
   background.scale=3
  

    drawSprites(); 




    if(keyDown(LEFT_ARROW)){
        
    }
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("cat_moving",catImg2);
    tom.changeAnnimation("cat_moving")
    jerry.addAnimation("mouse_teasing",mouseImg3)
    jerry.changeAnnimation("mouse_teasing")
  }


}
