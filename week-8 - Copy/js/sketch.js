var idlePaths = [];
var runPaths = [];
let myAnimation, gems;
let tImg = [];
let numImg = 3;
var score = 0;

function preload()
{
    idlePaths = loadStrings("./assets/Idle/Idle.txt");
    runPaths = loadStrings("./assets/Run/Run.txt");
   // myAnimation = new animationClass(100,100,100,800);
}

function setup()
{
    createCanvas(1000,800)

    coin = new Sprite(400, 50, 30);
	coin.color = 'yellow';
	player = new Sprite(50, 50);



   // myAnimation.loadAnimation('Idle', idlePaths);
   // myAnimation.loadAnimation('Run', runPaths)

    // faster way to add an image
    treasureImage = createSprite(random(300,1000),random(300,800),900,300,'static');
    treasureImage2 = createSprite(random(300,1000),random(300,800),900,300,'static');
    treasureImage3 = createSprite(random(300,1000),random(300,800),900,300,'static');
    treasureImage.img = "./assets/treasure.jpeg"
    treasureImage2.img = "./assets/treasure.jpeg"
    treasureImage3.img = "./assets/treasure.jpeg"
    
    //hitbox related
    treasureImage.scale = 0.45;
    treasureImage2.scale = 0.45;
    treasureImage3.scale = 0.45;
    //hitbox
    treasureImage.diameter = 300;
    treasureImage2.diameter = 300;
    treasureImage3.diameter = 300;

    
    
    

}

function draw()
{
    background(120);
    if (player.overlaps(coin)) coin.remove();{
        score = score+1;
    }
    if(kb.pressing('d'))
    {
        player.vel.x =5;
       // myAnimation.updatePosition('forward');
      //  myAnimation.drawAnimation('Run');
      //  if (myAnimation.overlaps(coin)) coin.remove();
      //  if(myAnimation.isColliding(treasureImage,treasureImage2,treasureImage3)){
       //     ;myAnimation.drawAnimation('Idle');
      //      myAnimation.updatePosition('Idle')
       
    }    
    else if(kb.pressing('a'))
    {
        player.vel.x =-5;
       // myAnimation.updatePosition('reverse');
       // myAnimation.drawAnimation('Run')
       // if(myAnimation.isColliding(treasureImage,treasureImage2,treasureImage3)){
       //     myAnimation.drawAnimation('Idle');
       //     myAnimation.updatePosition('Idle')
        }
    
    else if(kb.pressing('w'))
    {
        player.vel.y =-5;
       // myAnimation.updatePosition('up');
     //   myAnimation.drawAnimation('Run')
       // if(myAnimation.isColliding(treasureImage,treasureImage2,treasureImage3)){
      //      myAnimation.drawAnimation('Idle');
       //     myAnimation.updatePosition('Idle')
        }
    
    else if(kb.pressing('s'))
    {
        player.vel.y =5;
      //  myAnimation.updatePosition('down');
      //  myAnimation.drawAnimation('Run')
       // if(myAnimation.isColliding(treasureImage,treasureImage2,treasureImage3)){
       //     myAnimation.drawAnimation('Idle');
       //     myAnimation.updatePosition('Idle')
        }
    
        else
        {
            player.vel.x = 0;
            player.vel.y = 0;
          //  myAnimation.drawAnimation('Idle');
        
        treasureImage.debug = mouseIsPressed;
    
        }
        text("sc"+score,100,100)
 //   myAnimation.updatePosition('idle');
  //  myAnimation.setCurrentFrameCount(frameCount);
  //  myAnimation.drawAnimation('Idle');
}