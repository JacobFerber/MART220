var myAnimation;
var myFood;
var images = [];
var foods = [];
var characterObject;
var foodObject;
var index =0;
var i = 0;
var timeIt=1;
var timerValue =0;

var x=50;
var y=50;
var w=100;
var h=100;

var secondFont;
var firstFont;

function preload(){

 images = loadStrings("./assets/Idle.txt");
 
}
function setup(){
    createCanvas(640,480);
    setInterval(increaseIndex,50)
    characterObject = new characterClass(images);
    
 //   for(var i =0; i <500;i++ )
 //   {
  //  myFood = new foodClass(50,50,50,50);
 //   foods[i] = myFood;
  //  }
//  for (var i = 0; i < 50; i++) {
   foodObject = new foodClass(x,y,w,h); // automatically calls constructor
 //   foods[i] = foodObject;
//}
    

    
  

}
function draw() {
    
    background(120);
  //  for( var i = 0; i <foods.length;i ++)
 //   {
 //       foods[i].drawCircle();
 //   }
    characterObject.draw(index);
    foodObject.drawCircle();
    //console.log(foodObject.x)
    
   // for(var i= 0;i < foods.length;i++ )
  // {
  //  foods[i].draw();
 //  }

}
//function timeIt(){
//  if (timerValue > 0){
//    timerValue--;
//  }


//}

function increaseIndex(){
  
  console.log(images.length)
  if (index >= images.length -1)
  {

    index=0;
  }
  index++;
}