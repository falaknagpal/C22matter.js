const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world

var ground_options={
  isStatic: true
}

  ground=Bodies.rectangle(200,390,1200,20,ground_options)
  World.add(world,ground)

  console.log(ground)
 
}

function draw() {
  background("pink"); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,1200,20)
  drawSprites();
}