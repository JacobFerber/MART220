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
       // console.log(this.fileName);
        image(this.characterImage,this.x,this.y,this.w,this.h);
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
    getX()
    {  
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    getW()
    {
        return this.w;
    }
    getH()
    {
        return this.h;
    }
    
    isRectanglesColliding(r2){
        return collideRectRect(this.x, this.y, this.w, this.h ,r2.getX(), r2.getY(), r2.getW(), r2.getH());

       /* var topEdge1 = this.y + this.h;
        var rightEdge1 = this.x + this.w; 
        var leftEdge1 = this.x;
        var bottomEdge1 = this.y;
        var topEdge2 = r2.getY() + r2.getH();
        var rightEdge2 = r2.getX() + r2.getW(); 
        var leftEdge2 = r2.getX();
        var bottomEdge2 = r2.getY();   
        
        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
    
         return true;
        }
       return false; */
    }
}    