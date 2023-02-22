var myAnimation;

var myimage;
var length;

var i = 0;
var animations = [];
function preload()
{
    myAnimation = new animationImages('./assets/templerun/Idle__000.png')
}
function setup()
{
    createCanvas(1920,1280)

    
    //animations[i] = myAnimation;
  //  for(var i = 0;i < 5;i++)
 //   {
    myAnimation =  new animationImages("./assets/templerun/Idle__000.png", 100, 1820,515,2327)
   // animations[0] =myAnimation;
    //myAnimation = new animationImages("./assets/templerun/Run__000.png", 100, 1820,515,2327)
   // animations[1] =myAnimation;

    //setInterval(incrementIdleIndex, 1000);
   // }
}

function draw()
{
    background(100,20,20);
   // for(var i = 0; i < animations.length; i++)
   // {
        image(,50,50)


    //}


}

function incrementIdleIndex()
{
    i++
    if(i >= animations.length)
    {
        i = 0;
    }
}

 