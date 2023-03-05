var myAnimation;
var myFood;
var images = [];
var foods = [];
var myCharacter;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var timeIt=1;
var timerValue =0;
//let animation = [];

function preload(){

    img1 = new loadImage('./assets/templerun/Idle__000.png',50,50,319,486);
    img2 = new loadImage('./assets/templerun/Idle__001.png',50,50,319,486);
    img3 = new loadImage('./assets/templerun/Idle__002.png',50,50,319,486);
    img4 = new loadImage('./assets/templerun/Idle__003.png',50,50,319,486);
    img5 = new loadImage('./assets/templerun/Idle__004.png',50,50,319,486);
    img6 = new loadImage('./assets/templerun/Idle__005.png',50,50,319,486);
    img7 = new loadImage('./assets/templerun/Idle__006.png',50,50,319,486);
    img8 = new loadImage('./assets/templerun/Idle__007.png',50,50,319,486);

}
function setup(){
    createCanvas(640,480)
    for(var i =0; i <500;i++ )
    {
    myFood = new foodClass(50,50,50,50);
    foods[i] = myFood;
    }
    for(var i =0; i <500;i++ )
    {
    myAnimation = new characterClass(50,50,50,50);
    images[i] = myAnimation;
    }
   //  myCharacter = new characterClass('./assets/templerun/Idle__000.png',this.x,this.y,this.w,this.h)
   // let frames = spritedata.frames;
   // for (let i = 0; i < frames.length; i++) 
    //{
       // let pos = frames[i].position;
       // let img = spriteSheet.get(pos.x,pos.y,pos.w,pos.h);
        //animation.push(img);
//}
    
}
function draw() {
    console.log(myFood)

    background(120);
    for(var i= 0;i < foods.length;i++ )
   {
    foods[i].draw();
   }
   for(var i= 0;i < images.length;i++ )
   {
    images[i].draw();
   }
    
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