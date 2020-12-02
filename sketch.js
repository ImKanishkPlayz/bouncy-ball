const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic: true
  }

  var ball_options={
    restitution: 1.0
  }

  ground = Bodies.rectangle(200, 390, 50, 50, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(200,200,20, ball_options);
  World.add(world, ball);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 50, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}

