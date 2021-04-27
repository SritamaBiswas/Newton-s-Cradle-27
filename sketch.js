const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(300,200,300,20);
    bob1 = new bob(400,400);
	bob2 = new bob(350,400);
	bob3 = new bob(300,400);
	bob4 = new bob(250,400);
	bob5 = new bob(200,400);
    
	rope1 = new rope(bob1.body,roof1.body,100,0);
	rope2 = new rope(bob2.body,roof1.body,50,0);
	rope3 = new rope(bob3.body,roof1.body,0,0);
	rope4 = new rope(bob4.body,roof1.body,-50,0);
	rope5 = new rope(bob5.body,roof1.body,-100,0);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
 
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope5.display();
  rope4.display();
 drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:75,y:-75});
	   }
	 }


