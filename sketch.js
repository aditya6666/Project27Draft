
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter = 20;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(100,400,400,100);
	bob1 = new Bob(500,600,50);
	bob2 = new Bob(450,600,50);
	bob3 = new Bob(400,600,50);
	bob4 = new Bob(350,600,50);
	bob5 = new Bob(300,600,50);
	rope1 = new Rope(bob1.body,this.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
 
}



