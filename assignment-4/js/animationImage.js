class animationImages
{
    constructor(fileName, x, y, w, h)
    {
        this.fileName = fileName;
        this.x = 100; 
        this.y = 1820;
        this.w = 515;
        this.h = 2327;
        this.animationImages = this.loadAnimation();
    }

    loadAnimation()
    {
        return loadImage(this.fileName);
    }

    drawAnimation()
    {
        image(this.fileName, this.x, this.y, this.w, this.h);
    }
}