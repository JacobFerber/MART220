    var x=100;
    var y=100;
    var backgroundGREY=128;
    var background2x=680, background2y=830;
    var background2r=0,background2g=0,background2b=0;
    var namex=700, namey=860;
    var titleX=40,titleY=60;
    var sandox= 350;
    var sandoy= 300;
    var sando1x= 346;
    var sando1y= 304;
    
   var tomatox=450;
   var tomatoy=400;

    var applex= 575;
    var appley= 525;
    var stemx=575;
    var stemy=520;

    var carrot1x;
    var carrot1y= 525;
    
    var carrot2x;
    var carrot2y=525;

    var carrot3x;
    var carrot3y=525;
    
    var redLettuce=0
    var sando1r=179, sando1g=110, sando1b=0;
    var redColor,greenColor,blueColor;
    var x = 100;
    var y = 100;
    var side = 700;


    function setup()
    {
        createCanvas(900,900)
        redColor = random(255);
        greenColor = random(255);
        blueColor = random(255);

        //random location for the carrots
        carrot1x = random(100+320)
        carrot2x = random(100+300)
        carrot3x = random(100+340)

    }
    function mouseMoved()
    {
       //event handling changes the color of the background and text
        console.log(x)
        console.log(y)
       
        if(redLettuce > 255)
        {
            redLettuce = 0
        }
        else
        {
            redLettuce++;
        }
        if(redColor > 255)
        {
            redColor = 0;
        }
        else
        {
            redColor++;
        }
        if(greenColor > 255)
        {
            greenColor = 0;
        }
        else
        {
            greenColor++;
        }
        if(blueColor > 255)
        {
            blueColor = 0;
        }
        else
        {
            blueColor++;
        }
        //returns carrots to their position on the plate
        if(carrot3x > 390)
        {
            carrot3x = 390;
        }
        else
        {
            carrot3x++;
        }
        if(carrot3x < 380)
        {
            carrot1x = 320
        }
        else
        {
            carrot1x++;
        }
        if(carrot1x > 370)
        {
            carrot1x =370
        }
        if(carrot1x >369)
        {
           carrot2x++;
        }
        if(carrot2x > 350)
        {
            carrot1x=320;
            carrot2x=300;
            carrot3x=340;
        }
    }
    
    function draw()
    {
        
        background(backgroundGREY,backgroundGREY,backgroundGREY)
        fill(background2r,background2g,background2b)
        rect(background2x,background2y,190,45)

        fill(redColor,greenColor,blueColor);
        rect(x,y,side);
        
        fill(360,360,360)
        circle(450,450,450)
        fill(240,248,255)
        circle(450,450,420)
        
        fill(sando1r,sando1g,sando1b)
        rect(sando1x,sando1y,200,150)
        
        fill(redLettuce,153,25)
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
        fill(redColor,greenColor,blueColor)
        textSize(25)
        
        text("Jacob Ferber",namex,namey)
        fill(blueColor,greenColor,redColor)
        text("Random Delight",titleX,titleY)

       
    }
     