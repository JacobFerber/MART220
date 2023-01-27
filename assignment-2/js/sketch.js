    var x=100;
    var y=100;
    var namex=850, namey=860;
    var sandox= 350;
    var sandoy= 300;
    var sando1x= 346;
    var sando1y= 304;
   var tomatox=450;
   var tomatoy=400;

    var applex= 575;
    var appley= 525;
    var stemx=575;
    var stemy=520   ;

    var carrot1x= 320;
    var carrot1y= 525;
    
    var carrot2x= 300;
    var carrot2y=525;

    var carrot3x=340;
    var carrot3y=525;

    function setup()
    {
        createCanvas(900,900)
        
    }
    function mouseMoved()
    {
       
        console.log(x);
        console.log(y);
    }
    
    function draw()
    {
        
        background(10,130,180)
        fill(360,360,360)
        circle(450,450,450)
        fill(240,248,255)
        circle(450,450,420)
        
        fill(179,110,0)
        rect(sando1x,sando1y,200,150)
        fill(204,136,0)
        rect(sandox,sandoy,200,150)
        fill(0,153,25)
        triangle(480,325,350,375,325,325)
        fill(255,25,25)
        circle(tomatox,tomatoy,125)
        fill(204,136,0)
        rect(sandox,sandoy,200,150)
        
        fill(179,0,0)
        circle(applex,appley,100)
        fill(9,51,0)
        rect(stemx,stemy,8,20)
        
        fill(255,166,77)
        ellipse(carrot1x,carrot1y,20,100)
        ellipse(carrot2x,carrot2y,20,100)
        ellipse(carrot3x,carrot3y,20,100)
        fill(0)
        textSize(25)
        text("Jacob Ferber",namex,namey)
    }
     