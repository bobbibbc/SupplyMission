var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1, wall1, wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	wall1=createSprite(400, 650, 200, 20);
	wall2=createSprite(310, 600, 20, 100);
	wall3=createSprite(490, 600, 20, 100);
	wall1.shapeColor=color="red";
	wall2.shapeColor=color="red";
	wall3.shapeColor=color="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	packageSprite.x= packageBody.position.x
	packageSprite.y= packageBody.position.y

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  console.log(packageSprite.x)
  console.log(packageSprite.y)

  helicopterSprite.display();
  packageSprite.display();
  side1.display();
  side2.display();
  ground.display();

  keyPressed();
  
  drawSprites();
}

function keyPressed() {
  if (keyWentDown === (40)) {
	Matter.Body.setStatic(packageBody, false);
  }
}