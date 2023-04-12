var r1;
var r2;
let successSound, failureSound;

function preload () {
 soundFormats("WAV");
 successSound = loadSound("./assets/success");
 failureSound = loadSound("./assets/failure");
 backgroundSound = loadSound('./assets/background')
}


function setup() {
    createCanvas (800,600)
    backgroundMusic();
}

function draw () {
    background (220)

    var r1 = new rectClass(100,100,210,40);
    var r2 = new rectClass(700,120,30,30);

    r1.draw();
    r2.draw();

    text(areRectanglesColliding(r1,r2), 300,300);
}


function areRectanglesColliding(r1, r2){
    var topEdge1 = r1.getY() + r1.getH();
    var rightEdge1 = r1.getX() + r1.getW(); 
    var leftEdge1 = r1.getX();
    var bottomEdge1 = r1.getY();
    var topEdge2 = r2.getY() + r2.getH();
    var rightEdge2 = r2.getX() + r2.getW(); 
    var leftEdge2 = r2.getX();
    var bottomEdge2 = r2.getY();   
    
    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
        if(failureSound.isPlaying())
    {
      failureSound.pause();
    }
    else
    {
      failureSound.play();
    }
   }
   successSound.play(); //starts song
   //successSound.loop(); //loops song at the end
   successSound.setVolume(0.3);
   successSound.stop([100000])
   
}

function backgroundMusic() {
    backgroundSound.play(); //starts song
    backgroundSound.loop(); //loops song at the end
    backgroundSound.setVolume(0.3);
    userStartAudio(); //enable audio once user interacts with the audio
}

function mousePressed() {
    
    
    //pasuse
  }