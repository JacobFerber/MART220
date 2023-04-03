var myAnimation;
var myFood;
var images = [];
var foods = [];
var characterObject;
var foodObject;

var i = 0;
var timeIt=1;
var timerValue =0;

var secondFont;
var firstFont;

function preload(){

 images = loadStrings("./assets/Idle.txt");
 
}
function setup(){
    createCanvas(640,480);
    
    characterObject = new characterClass(images);
    
 //   for(var i =0; i <500;i++ )
 //   {
  //  myFood = new foodClass(50,50,50,50);
 //   foods[i] = myFood;
  //  }
  for (var i = 0; i < 50; i++) {
    foodObject = new foodClass(x,y,w,h); // automatically calls constructor
    foods[i] = foodObject;
}
    

    
  

}
function draw() {
    
    background(120);
    for( var i = 0; i <foods.length;i ++)
    {
        foods[i].drawCircle();
    }
    characterObject.draw(frameCount);
 
    if(frameCount >= 9){
      frameCount = 0;
    }
    else{
      frameCount++;
    }

    
   // for(var i= 0;i < foods.length;i++ )
  // {
  //  foods[i].draw();
 //  }

}
function timeIt(){
  if (timerValue > 0){
    timerValue--;
  }


}