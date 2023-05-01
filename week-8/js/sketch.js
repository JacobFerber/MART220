var idlePaths = [];
var runPaths = [];
let myAnimation;


function preload()
{
    idlePaths = loadStrings("./assets/Idle/Idle.txt");
    runPaths = loadStrings("./assets/Run/Run.txt");
    myAnimation = new animationClass(100,100,100,800);
    
}

function setup()
{
    createCanvas(1000,800)

    myAnimation.loadAnimation('Idle', idlePaths);
    myAnimation.loadAnimation('Run', runPaths)
    // faster way to add an image
    treasureImage = createSprite(500,200,900,300,'static');
    treasureImage.img = "./assets/treasure.jpeg"
    //hitbox related
    treasureImage.scale = 0.45;
    //hitbox
    treasureImage.diameter = 300;

}

function draw()
{
    background(120);
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('Run');
        if(myAnimation.isColliding(treasureImage)){
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle')
       }
    }    
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('Run')
        if(myAnimation.isColliding(treasureImage)){
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle')
        }
    }
        else
        {
            myAnimation.drawAnimation('Idle');
        }
        treasureImage.debug = mouseIsPressed;
    
    

 //   myAnimation.updatePosition('idle');
  //  myAnimation.setCurrentFrameCount(frameCount);
  //  myAnimation.drawAnimation('Idle');
}