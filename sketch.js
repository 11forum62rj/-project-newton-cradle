
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint=Matter.MouseConstraint;
const Mouse = Matter.Mouse
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	canvas = createCanvas(1000,800);
	engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options={
    mouse:canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);


	//Create the Bodies Here.

  bob1 = new Pendulum(340, 450, "#00b0ff"); 
  bob2 = new Pendulum(400, 450, "#e91e63"); 
  bob3 = new Pendulum(460, 450, "#ffc107"); 
  bob4 = new Pendulum(520, 450, "#e91e63"); 
  bob5 = new Pendulum(580, 450, "#00b0ff"); 
  
  rope1 = new Sling(bob1.body, { x: 340, y: 200 }); 
  rope2 = new Sling(bob2.body, { x: 400, y: 200 }); 
  rope3 = new Sling(bob3.body, { x: 460, y: 200 }); 
  rope4 = new Sling(bob4.body, { x: 520, y: 200 }); 
  rope5 = new Sling(bob5.body, { x: 580, y: 200 });





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()




  drawSprites();
 
}

  function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


