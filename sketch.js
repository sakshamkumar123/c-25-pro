
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,200,70)
  ground=new Ground(400,670,800,100)
  
  d1= new bottom (600,546,140,150)
  d2= new Dustbin (540,550,25,150)
  d3= new Dustbin (660,550,25,150)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(200);
  if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position, {x:85,y:-85})
  }
  d2.display();
  d3.display();
  d1.display();
  paper.display();
  ground.display();
  drawSprites();
 
}



