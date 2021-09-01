const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left;
var right;
var topSide;
var ball_options;


function setup() {
	createCanvas(1280,600);


	engine = Engine.create();
	world = engine.world;

	ball_options={

		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2
		}

	//Create the Bodies Here.
	ball = Bodies.circle(200,300,12,ball_options);
	World.add(world,ball)

	groundObj = new ground(650,566,1300,50);
	left = new ground(600,490,20,100);
	right = new ground(780,490,20,100);
    top = new ground(650,10,1200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ellipse(ball.position.x,ball.position.y,12)

  groundObj.show();
  left.show();
  right.show();
 // topSide.show();
}


function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-6})
	}	
	else if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:0})
	}
	else if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-4	,y:0})
	}
	
}




	