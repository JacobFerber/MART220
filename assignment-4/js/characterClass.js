class characterClass
{
    
    constructor(fileName,x,y,w,h)
    {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.characterImage;
        this.createImage();
        
    }
    createImage()
    {
        this.characterImage = loadImage(this.fileName)
    }
    draw()
    {   //this is what this.characterImages.length would reference
        console.log(this.fileName);
        image(this.characterImage,this.x,this.y,386/3,456/3);
    }
    updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 10;
        }
        else if(direction == "reverse")
        {
            this.x -= 10;
        }
        else if(direction == "Idle")
        {
            this.x=x;
        }
        else if(direction == "down")
        {
            this.y += 10;
        }else if(direction == "up")
        {
            this.y -= 10;

        }
    }
   
}
