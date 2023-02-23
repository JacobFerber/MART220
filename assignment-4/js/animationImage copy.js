class characterClass
{
    constructor(fileName,x,y,w,h)
    {
        this.fileName = fileName;
        this.x = random(640);
        this.y = random(480);
        this.w = 586;
        this.h = 600;
    }
    
    drawCharacter()
    {
    
    image(this.fileName,this.x,this.y,this.w,this.h)
    }
}
