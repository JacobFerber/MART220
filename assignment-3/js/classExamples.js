var timerValue = 10;
var startButton;
var img1;

function setup() {
  Image(img1,0,0)
  textAlign(CENTER);
  setInterval(timeIt, 1000);
}
function preload()
{
    img1 =loadimage('/assignment-3/');
  
    createCanvas(256, 256)
}

function draw() {
  background(img1);
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  };
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  };
  if (timerValue == 0) {
    text('game over', width / 2, height / 2 + 15);
  };
};

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}