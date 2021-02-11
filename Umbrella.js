//creating Umbrella class 
class Umbrella {

    //setting parameters
    constructor(x,y){

        //making umbrella static
        var options = {

            isStatic: true,

        }

        //loading images, making umbrella body to circle, setting radius of umbrella and adding umbrella to world
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)

    }

    display(){

        //making variable, setting image mode to center
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);

    }

}