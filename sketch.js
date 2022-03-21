function preload(){
trackImg= loadImage("track.png");
gostJumping= loadImage("gost-jumping.png");
gostStanding= loadImage("gost-standing.png");
}
function setup(){
createCanvas(1000,700);

track=createSprite(450,200,45,45);
track.addImage("track",trackImg);
gostJumping= createSprite()

//adding velocity to track 
track.velocityY=6;
track.scale=2;
player=createSprite(200,200,45,45);



}

function draw(){
background("white");

//reset the track 
if (track.y>400)
    track.y=200;

// calling the function playerControl
playerControl();
spawnGarbage();

drawSprites();
}

function playerControl()
{

    if(keyDown(LEFT_ARROW))
    {
    player.x=player.x-5;
    
    }

    if(keyDown(RIGHT_ARROW))
     {
        player.x=player.x+5;
        
    }
}
function spawnGarbage(){
// creating garbage sprite
if (frameCount%50==0){
    garbage1=createSprite(random(10,600),random(10,600),30,30);
    garbage1.velocityY=6;

}
}
function touchingGarbage(){

}