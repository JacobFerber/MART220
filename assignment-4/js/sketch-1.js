
var idlePaths = [];
var runPaths = [];
var foods = [];

var characterObject;
var foodObject;

var animation = [];
var runAnimation = [];
var index =0;
var i = 0;
var j =0;

var x=50;
var y=50;
var w=100;
var h=100;

var secondFont;
var firstFont;

function preload(){
//load strings brings in the file paths which asigns all the strings into the idlePaths array
 idlePaths = loadStrings("./assets/Idle/Idle.txt");
 runPaths = loadStrings('./assets/Run/Run.txt')

 
}
function setup(){
    createCanvas(640,480);
    //moves through the length of the idlePath
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
  //  setInterval(increaseRunIndex, 50)
    foodObject = new foodClass(x,y,w,h); // automatically calls constructor\
    
}
function draw() {
    background(120);
    
    foodObject.drawCircle();
    if(keyIsPressed)
    {
      if(key == "d")
      {
        console.log(foodObject.x)
        for(let i = 0; i < runAnimation.length; i++) {
        runAnimation[i].updatePosition('forward');
        animation[i].updatePosition('forward');
        }
        runAnimation[i].draw();
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

    console.log(animation.length);
      animation[i].draw();
   }
}


function increaseIdleIndex(){
  
  i++
  if (i >= animation.length -1)
  {

    i=0;
  }
  
}
function increaseRunIndex(){
  
j++
  if (j >= runAnimation.length -1)
  {

    j=0;
  }

}