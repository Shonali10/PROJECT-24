
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,stone;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(500,height,1000,20);
hammer = new Hammer(20,20);
stone = new Stone(500,320,70,70);
rubber = new Rubber(700,20,22.5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background( 173,216,230);
  
ground.display();
hammer.display();
stone .display();
rubber.display();
  drawSprites();
 
}



