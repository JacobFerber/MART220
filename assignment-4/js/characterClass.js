class characterClass
{
    
    constructor(images)
    {
        this.images = images;
        this.characterImages = [];
    }
    
    draw()
    {   //this is what this.characterImages.length would reference
        image(this.characterImages[i],300,150,386,456);
    }
    animate()
    {   
        //consoloe.log(this.imageLinks)
        for (var j = 0; j < images.length; j++) {
            console.log(this.images[j]);
            person = loadImage(this.images[j]);
            this.characterImages[j] = person;
        }
    }
}
