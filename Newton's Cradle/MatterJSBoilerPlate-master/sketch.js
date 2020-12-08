
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(360,400);
	bob2 = new Bob(395,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(405,400);
	bob5 = new Bob(440,400);

	roof = new Roof(400,300,200,40);

	rope1 = new Rope(bob.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,0,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,0,0);
	rope5 = new Rope(bob5.body,roof.body,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-85,y:0})
	}
}

  drawSprites();
  fill("red");
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
}




