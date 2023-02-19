var img1;
var img2;
var img3;
var timerValue = 10;

function preload()
{
    img1 = loadImage('./assets/image1.jpg');
    img2 = loadImage('./assets/image2.jpg');
    img3 = loadImage('./assets/image3.jpg');

}
function setup()
{
    
    createCanvas(250,250);
}
function draw()
{
    cassens();
    background(img1);
    timeIt();
}
function cassens()
{
    console.log(timerValue)

background();
  if (timerValue >= 1000) {
    Image(img1);
  }
  if (timerValue < 1000) {
    Image(img2 );
  }
  if (timerValue == 0) {
    Image('game over', width / 2, height / 2 + 15);
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}