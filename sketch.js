var paperObject,paperSprite,ground,trashObject,trashSprite;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = Bodies.circle(50,610 , 5 , options);
	World.add(world, paperObject);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	trashSprite = createSprite(550,610,20,100);
	trashSprite.shapeColor = "green";
	trashSprite = createSprite(620,650,150,20);
	trashSprite.shapeColor = "green";
	trashSprite = createSprite(700,610,20,100);
	trashSprite.shapeColor = "green";
	trashObject = Bodies.rectangle(50,610 , 5 , {isStatic:true});
	World.add(world, trashObject);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(paperObject.position.x,paperObject.position.y,60,60);
  drawSprites();

}
function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.Body,paperObject.Body.pos,{x:85,y:-85});
}	
}



