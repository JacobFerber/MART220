var idlePaths = [];
var myAnimation;


function preload()
{
    idlePaths = loadStrings('assets/Idle/Idle.txt');
}

function setup()
{
    createCanvas(1000,800)
    myAnimation = new animationClass(0,0,380,486);
    myAnimation.loadAnimation('Idle', idlePaths);

}

function draw()
{
    background(120);
 //   myAnimation.updatePosition('idle');
    myAnimation.setCurrentFrameCount(frameCount);
    myAnimation.drawAnimation('Idle');
}