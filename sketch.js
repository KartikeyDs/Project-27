const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var Bob1, Bob2, Bob3, Bob4, Bob5;
var rope1, rope2, rope3, rope4, rope5;
var sup1,sup2,sup3,sup4;

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

  roof= new Roof(400,150,250, 20);
  
  Bob1 = new Bob(400,350,35);

  Bob2 = new Bob(365,297,35);

  Bob3 = new Bob(435,297,35);

  Bob4 = new Bob(470,297,35);

  Bob5 = new Bob(330,297,35);

  sup1 = new Roof(365,150,5,5)

  sup2 = new Roof(435,150,5,5)

  sup3 = new Roof(470,150,5,5)

  sup4 = new Roof(330,150,5,5)

  
 rope1 = new Rope(roof.body, Bob1.body);

  rope2 = new Rope(sup1.body, Bob2.body);

  rope3 = new Rope(Bob3.body, sup2.body);

  rope4 = new Rope(Bob4.body, sup3.body);

  rope5 = new Rope(Bob5.body, sup4.body);

 
  

 
  
  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(205);

 

  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(Bob5.body,Bob5.body.position,{x:-20,y:-20});
   
  
  }
  
 
  
  roof.display();

  Bob1.display();

  Bob2.display();

  Bob3.display();

  Bob4.display();

  Bob5.display();

  rope1.display();

  rope2.display();

  rope3.display();

  rope4.display();

  rope5.display();


  drawSprites();
 
}