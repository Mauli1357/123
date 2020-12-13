
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

	var bob1, bob2, bob3, bob4;
	var rope1, rope2, rope3, rope4;
	var roof;

function preload()
{
	
}

function setup() {
	createCanvas(500,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(170,300);
	bob2 = new Bob(210,300);
	bob3 = new Bob(250,300);
	bob4 = new Bob(290,300);
	bob5 = new Bob(330,300);

	roof = new Roof(250,150,180,20);

	rope1 = new Rope( bob1.body,{x:170, y: 150});
	rope2 = new Rope( bob2.body,{x:210, y: 150});
	rope3 = new Rope( bob3.body,{x:250, y: 150});
	rope4 = new Rope( bob4.body,{x:290, y: 150});
	rope5 = new Rope( bob5.body,{x:330, y: 150});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



