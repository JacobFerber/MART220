class characterClass
{
    
    constructor(fileName,x,y,w,h)
    {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
    }
    
    draw()
    {
    image(this.fileName,this.x,this.y,this.w,this.h)
    }
}
var imageArray = [];
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;

function setup()
{
    createCanvas(640,480);
    for(var i = 0; i < 5; i++){
    imageArray[1] = img1 = new characterClass('./assets/templerun/Idle__000.png',50,50,319,486);
    imageArray[2] = img2 = new characterClass('./assets/templerun/Idle__001.png',50,50,319,486);
    imageArray[3] = img3 = new characterClass('./assets/templerun/Idle__002.png',50,50,319,486);
    imageArray[4] = img4 = new characterClass('./assets/templerun/Idle__003.png',50,50,319,486);
    imageArray[5] = img5 = new characterClass('./assets/templerun/Idle__004.png',50,50,319,486);
    imageArray[6] = img6 = new characterClass('./assets/templerun/Idle__005.png',50,50,319,486);
    imageArray[7] = img7 = new characterClass('./assets/templerun/Idle__006.png',50,50,319,486);
    imageArray[8] = img8 = new characterClass('./assets/templerun/Idle__007.png',50,50,319,486);

    
    
    
    }
}
function draw()
{
    background(120);
    for(var i = 0; i < imageArray.length; i++)
    {   
    imageArray[i].draw();
    }
}