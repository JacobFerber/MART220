let spriteSheet;
let spritedata;



let animation = [];

function preload(){
    spritedata = loadJSON('./lib/INDIE.JSON')
    spriteSheet = loadImage('./assets/templerun/Idle__000.png')
}
function setup(){
    preload()
    createCanvas(640,480)
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spriteSheet.get(pos.x,pos.y,pos.w,pos.h);
        animation.push(img);
}
    console.log(animation)
}
function draw(){
    background(0);
    image(animation[0],0,0);
}