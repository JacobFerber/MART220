var myAnimation;
var myFood;
var images = [];
var foods = [];
var characterObject;
var i = 0;
var timeIt=1;
var timerValue =0;

var secondFont;
var firstFont;

function preload(){
 images = loadStrings("./assets/Idle.txt");

}
function setup(){
    createCanvas(640,480)

    for(var i =0; i <500;i++ )
    {
    myFood = new foodClass(50,50,50,50);
   foods[i] = myFood;
    }

    characterObject = new characterClass(images)

    characterObject.animate();


   // for(var i =0; i <500;i++ )
   // {
    //myAnimation = new characterClass(50,50,50,50);
    //images[i] = myAnimation;
    //}
   //  myCharacter = new characterClass('./assets/templerun/Idle__000.png',this.x,this.y,this.w,this.h)
   // let frames = spritedata.frames;
   // for (let i = 0; i < frames.length; i++) 
    //{
       // let pos = frames[i].position;
       // let img = spriteSheet.get(pos.x,pos.y,pos.w,pos.h);
        //animation.push(img);
//}
console.log(this.characterImages.length)
}
function draw() {
    console.log(myFood)

    background(120);
    for(var i= 0;i < foods.length;i++ )
   {
    foods[i].draw();
   }
 
   characterObject.draw(i);

  


    
   timeIt();
    if(timerValue >= 300){
      image (this.img1,this.x,this.y,this.w,this.h);
    }
    if(timerValue <= 499){
      image(this.img2,this.x,this.y,this.w,this.h);
    }
    if(timerValue <= 200){
      image(this.img3,this.x,this.y,this.w,this.h);
    }
    imgx++
    
    if(timerValue >= 500){
      fill('#ed225d');
      textFont(firstFont);
      textSize(20);
      text('Scrolling Fruit',0,150);
    }

    if(timerValue < 100 ){
      fill('#ed225d');
      textFont(firstFont);
      textSize(25);
      text('By',50,150)
      text('Jacob Ferber',x,y)
      y--;
      x--;
    }

    if(timerValue <= 1){
      fill('#22ed58');
      textFont(secondFont);
      textSize(35);
      text('Scrolling ',125,50);
      text('Fruit ',150,250);
      fill('#3a22ed');
      text('Jacob Ferber,',100,150)
    }
    console.log(draw)
}
function timeIt(){
  if (timerValue > 0){
    timerValue--;
  }


}