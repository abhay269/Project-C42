//creating drop class
class createDrop{

    //setting parameters
    constructor(x,y){

        //making drops frictional and giving it restitution
        var options = {

            friction: 0.001,
            restitution:0.1    

        }

        //making rain body to circle, setting radius of rain and adding rain to world
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
        
    }

    //updating the rain
    updateY(){     

        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

        }

    }

    //showing the drop
    showDrop(){

        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);

    }

}