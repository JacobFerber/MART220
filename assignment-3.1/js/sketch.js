var img1;
var img2;
var img3;
let firstFont;
let secondFont;
var timerValue = 750;
var imgx = 0;
var y=300;
var x=300;

function preload()
{
    img1 = loadImage('./assets/image1.jpg');
    img2 = loadImage('./assets/image2.jpg');
    img3 = loadImage('./assets/image3.jpg');
    firstFont = loadFont('./fonts/pixelart.ttf');
    secondFont = loadFont('./fonts/PixelBit-Free.ttf');

}
function setup()
{
    
    createCanvas(300,300);
}
function draw()
{
    timeIt();
    if(timerValue >= 300){
      image (img1,imgx,(0));
    }
    if(timerValue <= 499){
      image(img2,imgx-300,0)
    }
    if(timerValue <= 200){
      image(img3,imgx-590,0);
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