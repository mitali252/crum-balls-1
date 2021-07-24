``
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(490,630,20,100);
	box2 = new Box(700,630,20,100);
	box3 = new Box(600,680,20,100);
	ball = new Ball(200,200,40,40);
   ground= new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ball.display();
  
  ground.display();
  drawSprites();
 
}
function keypressed(){
  if(keyCode === UP_ARROW){
    Matter.body.applyforce(ball.body,ball.body.position,{x:85,y:-85})
  }
}


