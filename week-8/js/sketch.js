var idlePaths = [];
let myAnimation;


function preload()
{
    idlePaths = loadStrings("./assets/Idle/Idle.txt");
    myAnimation = new animationClass(200,200,380,486);
    
}

function setup()
{
    createCanvas(1000,800)

     myAnimation.loadAnimation('Idle', idlePaths);
    // faster way to add an image
    treasureImage = createSprite(450,300,100,100,'static');
    treasureImage.img = "./assets/treasure.jpeg"
    //hitbox related
    treasureImage.scale = 0.35;
    //hitbox
    treasureImage.diameter = 150;

}

function draw()
{
    background(120);
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('run');
        if(myAnimation.isColliding(treasureImage)){
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle')
        }
    }    
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('run')
        if(myAnimation.isColliding(treasureImage)){
            myAnimation.drawAnimation('run');
            myAnimation.updatePosition('run')
        }
    }
    

 //   myAnimation.updatePosition('idle');
  //  myAnimation.setCurrentFrameCount(frameCount);
  //  myAnimation.drawAnimation('Idle');
}