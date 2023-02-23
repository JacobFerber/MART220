class foodClass
{
    
    constructor(redColor,greenColor,blueColor,x,y,x2,y2)
    {
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor; 
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        
    }
    
    drawsq()
    {
    fill(this.redColor, this.greenColor, this.blueColor)
    rect(this.x,this.y,this.x2,this.y2)
    }
}
var foodArray = [];
foodArray[1] = rect1 = new foodClass(100,100,250,200,200,200,200);
foodArray[2] = rect2 = new foodClass(100,100,250,200,200,200,200);
function setup()
{
    createCanvas(640,480);
}
function draw()
{
    background(120);
    for(var i = 0; i < foodArray.length; i++)
    {   
    foodArray[i].drawsq();
    }
}