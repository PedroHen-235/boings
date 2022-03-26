
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine
let world
var bolla
var ground
var wedge
var angle=60
var poly
var bolla2
var bolla3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 var bolla_options = {
restitution : 0.40,
frictionAir : 0.01
}
var bolla3_options = {
restitution : 0.40,
frictionAir : 0.01
}
var bolla2_options = {
restitution : 0.40,
frictionAir : 0.01
}
Engine.run(engine);
  
var ground_options = {
isStatic : true
}
   
bolla = Bodies.circle(220,10,10,bolla_options)
World.add(world,bolla)

bolla2 = Bodies.rectangle(150,20,50,40,bolla2_options)
World.add(world,bolla2)

ground = Bodies.rectangle(200,390,800,20,ground_options);
World.add(world,ground);








}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  drawSprites();
 
ellipse(bolla.position.x,bolla.position.y,20);
rect(bolla2.position.x,bolla2.position.y,50,40);
rect(ground.position.x,ground.position.y,800,20)





}



