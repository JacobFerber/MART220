class foodClass
{
    
  constructor(x,y,w,h)
  {
   // properties

      this.x = x;
      this.y = y;
      this.w = w; 
      this.h = h;

  }
  
  // functions
  drawCircle()
  {
      
    fill(12,132,33);
    rect(this.x,this.y,this.w,this.h);
  }
}
