var r1;
var r2;
let successSound, failureSound;

var idlePaths = [];
var runPaths = [];
var characterObject;
var animation = [];
var runAnimation = [];
var index =0;
var i = 0;
var isColliding = false;

var score=0;

function preload () {
 soundFormats("WAV");
 successSound = loadSound("./assets/success");
 failureSound = loadSound("./assets/failure");
 backgroundSound = loadSound('./assets/background')
 idlePaths = loadStrings("./assets/Idle/Idle.txt");
 runPaths = loadStrings('./assets/Run/Run.txt')
}


function setup() {
    createCanvas (800,600)
    backgroundMusic();
    for(var i =0; i <idlePaths.length; i++)
    {
    characterObject = new characterClass(idlePaths[i],50,50,50,50);
    animation[i] = characterObject;
    }
    
    for( i=0; i <runPaths.length; i++)
    {
      characterObject = new characterClass(runPaths[i],50,50,50,50);
      runAnimation[i] = characterObject;    
    }
    
    setInterval(increaseIdleIndex, 50)

    
}
/*
function checkCollision() {
  runAnimation[i].isRectanglesColliding(r2,moveRect);
}
function moveRect() {
  successSound.play();
  successSound.setLoop(false);
  .remove();

}
*/
function draw () 
{
 //checkCollision()
    background (220)

    var r1 = new rectClass(200,100,210,40);
    var r2 = new rectClass(700,120,30,30);

    if(keyIsPressed)
    {
      var isColliding = runAnimation[i].isRectanglesColliding(r1);
      var isColliding2 = runAnimation[i].isRectanglesColliding(r2);

      if(isColliding == true){
        successSound.play(); //starts song
        //successSound.loop(); //loops song at the end
        successSound.setVolume(1);
        failureSound.stop(10)
        score = score+1;
      }
      if(isColliding2 == true)
      {
        failureSound.play(); //starts song
        //successSound.loop(); //loops song at the end
        failureSound.setVolume(1);
        failureSound.stop(1)
        score = score-1;
      }

      if(key == "d")
      {      

        for(let i = 0; i < runAnimation.length; i++) {
        runAnimation[i].updatePosition('forward');
        animation[i].updatePosition('forward');

          }
        runAnimation[i].draw();

        textSize(32) 

      }
      else if(key =="a")
      {
        for(let i = 0; i < runAnimation.length; i++) {
        runAnimation[i].updatePosition('reverse');
        animation[i].updatePosition('reverse');
        }
        runAnimation[i].draw();
      }
      else if(key =="s")
      {
        for(let i = 0; i < runAnimation.length; i++) {
        runAnimation[i].updatePosition('down');
        animation[i].updatePosition('down');
        }
        runAnimation[i].draw();
      }
      else if(key =="w")
      {
        for(let i = 0; i < runAnimation.length; i++) {
        runAnimation[i].updatePosition('up');
        animation[i].updatePosition('up');
        }
        runAnimation[i].draw();
      }
      else 
      { 
        animation[i].draw();
        animation[i].updatePosition('idle');

      }
      
    }
    else
    {
    //console.log(animation.length);
      animation[i].draw();
      

   }
   fill('green');
   r1.draw();
   fill('red');
   r2.draw();
   fill('black');
   //isRectanglesColliding(r1,r2);
   textSize(36);
   //text(collideRectRect(r1.getX(), r1.getY(), r1.getW(), r1.getH(),r2.getX(), r2.getY(), r2.getW(), r2.getH()),300,300);
   text(isColliding, 300, 300);
   text("sc"+score,100,100)
  }


 function recT(r1, r2){
    var topEdge1 = r1.getY() + r1.getH();
    var rightEdge1 = r1.getX() + r1.getW(); 
    var leftEdge1 = r1.getX();
    var bottomEdge1 = r1.getY();
    var topEdge2 = r2.getY() + r2.getH();
    var rightEdge2 = r2.getX() + r2.getW(); 
    var leftEdge2 = r2.getX();
    var bottomEdge2 = r2.getY();   
    
    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
      
      
      return true;
     
   }
  
   return false;

   
   
}


  

function backgroundMusic() {
    backgroundSound.play(); //starts song
    backgroundSound.loop(); //loops song at the end
    backgroundSound.setVolume(0.3);
    userStartAudio(); //enable audio once user interacts with the audio
}

function mousePressed() {
  if(failureSound.isPlaying())
  {
    failureSound.pause();
  }
  else
  {
    failureSound.play();
  }
    
    //pasuse
  }

  function increaseIdleIndex(){
  
    i++
    if (i >= animation.length -1)
    {
  
      i=0;
    }
    
  }