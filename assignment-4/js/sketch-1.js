let spriteSheet;
let spritedata;
var myFood;
var myCharacter;

//let animation = [];

function preload(){
    spritedata = loadJSON('./lib/INDIE.JSON')
    spriteSheet = loadImage('./assets/templerun/Idle__000.png')
}
function setup(){
    preload()
    createCanvas(640,480)
    myFood = new foodClass(50,50,50,50)
    myCharacter = new characterClass('./assets/templerun/Idle__000.png',this.x,this.y,this.w,this.h)
   // let frames = spritedata.frames;
   // for (let i = 0; i < frames.length; i++) 
    //{
       // let pos = frames[i].position;
       // let img = spriteSheet.get(pos.x,pos.y,pos.w,pos.h);
        //animation.push(img);
//}
    console.log(myFood)
}
function draw(){
    background(120);
    myFood.drawSquare();
    myCharacter.drawCharacter();
    //image(animation[0],0,0);
}