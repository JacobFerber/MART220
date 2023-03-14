class characterClass
{
    
    constructor(images)
    {
        this.images = images;
        this.characterImages = [];

        for (var i = 0; i < images.length; i++) {
            console.log(this.images[i]);
            
            this.characterImages[i] = loadImage(this.images[i]);
        }
    }
    
    draw(frame)
    {   //this is what this.characterImages.length would reference
        image(this.characterImages[frame],300,150,386,456);
    }
    animate()
    {   
        //consoloe.log(this.imageLinks)
       
    }
}
