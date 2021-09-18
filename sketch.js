const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, leftWall, rightWall;
var bridge;
var joinPoint, jointLink;
var stones = [];

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(400,490,800,20);
  leftWall = new Base(10,400,20,200);
  rightWall = new Base(790,400,20,200);

  bridge = new Bridge(15,{x:0,y:400});
  joinPoint = new Base(770,400,20,50);

  Matter. Composite.add(bridge.body, joinPoint);
  jointLink = new Link(bridge, joinPoint); 
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  leftWall.display();
  rightWall.display();
  bridge.show();
  //stones.displayBall();
}
