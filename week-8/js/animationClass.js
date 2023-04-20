class animationClass{
    constructor(x,y,w,h)
    {   
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.imageObject=[];
        this.i=0
        this.currentFrameCount = 0;
        this.direction = "";
        ;
        //this.frameDelay=0;

    }
    createAnimation()
    {
         this.currentAnimation = createSprite(300, 250);
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
    
    setCurrentFrameCount(currentFrameCount){
        this.currentFrameCount=currentFrameCount;
    }
    


loadAnimation(fileNames,animationType)
{ 
    this.currentAnimation.addAnimation(animationType,fileNames[0], fileNames[fileNames.length-1]);
       
}
    loadAnimtion(){
        this.currentAnimation = loadAnimation(this.fileNames[0], this.fileNames[this.fileNames.length-1]);   

    }
    drawAnimation(animationType) {
        
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = .5;
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 1;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 1;

        }
        else {
            this.currentAnimation.velocity.x = 0;
        }


    }

    incrementIndex() {
       
        if(this.currentFrameCount % 5 == 0)
        {
            this.i++;
        }
       
        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }
}