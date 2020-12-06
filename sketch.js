const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player,score=0;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;

var ball;
var img;

function preload(){
  img = loadImage("hexagon (1).png");
  bgImg();

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  player = new Player(50,200,40,40);

  /*ball = Bodies.circle(50,200,20);
  World.add(world,ball);*/

  sling = new Chain(player.body,{x:150, y:160});

}

function draw() {
  if(bg){
  background(bg);
  }
  Engine.update(engine);
  strokeWeight(2);
  stroke("black");
  textSize(13);
  fill("black");
  text("Score :"+ score, width-300, 50);
  fill(rgb(135, 205, 236));
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
 

  fill("lightBlue");
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();

  fill("lightPink");
 block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill(rgb(47, 48, 48));

  block13.display();
  block13.score();
  fill(rgb("135, 205, 236"));
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  fill("lightGreen");

  block19.display();
  block19.score();
  block20.display();
  block20.score();
  fill("lime");
  block21.display();
  block21.score();
  block22.display();
  block22.score();

  ground1.display();
  ground2.display();
  ground3.display();

  player.display();

  sling.display();

}


function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
   
    sling.attach(player.body);
  }
  //console.log(ball.body);
}
async function bgImg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var r=await response.json();
  var date=r.datetime;
  var hour=date.slice(11,13);
  if((hour>=6)&&(hour<=16)){
    bg=loadImage("morning.jpg");
  }
  else{
    bg=loadImage("night.jpg");
  }
}