// making the variables and world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops = 100;

var thunderCreatedFrame = 0;

// loading Images here
function preload(){

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");


}

//making the setup function
function setup(){

    //making engine and adding it in world
    engine = Engine.create();
    world = engine.world;

    //creating canvas
    createCanvas(400,700);
    
    //calling umbrella class
    umbrella = new Umbrella(200,500);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));

        }

    }
    
}

//making draw function
function draw(){

    //updating engine
    Engine.update(engine);

    //setting background to zero
    background(0);

    //creating random images of thunder
    rand = Math.round(random(1,4));

    if(frameCount%80===0){

        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);

        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;

        }

        //scaling thunder images
        thunder.scale = random(0.3,0.6)

    }

    //destroying thunder image
    if(thunderCreatedFrame + 10 ===frameCount && thunder){

        thunder.destroy();

    }

    //displaying umbrella
    umbrella.display();

    //updating drops and showing it
    for(var i = 0; i<maxDrops; i++){

        drops[i].showDrop();
        drops[i].updateY()

    }

    //draw the sprites
    drawSprites();
}   

