const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var ground;

function setup(){
    createCanvas(1250,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;


    ground = new Ground(600,580,1250,20);

    block1 = new Block(600,560);
    block2 = new Block(680,560);
    block3 = new Block(760,560);
    block4 = new Block(840,560);
    block5 = new Block(920,560);
    block6 = new Block(1000,560);
    block7 = new Block(1080,560);
    block8 = new Block(1160,560);
    block9 = new Block(670,480);
    block10 = new Block(750,480);
    block11 = new Block(830,480);
    block12 = new Block(910,480);
    block13 = new Block(990,480);
    block14 = new Block(1070,480);
    block15 = new Block(740,400);
    block16 = new Block(820,400);
    block17 = new Block(900,400);
    block18 = new Block(980,400);
    block19 = new Block(810,320);
    block20 = new Block(890,320);

    ball = new Ball(300,400);

    rope = new Rope(ball.body,{x:600,y:0});

}

function draw(){
    background("black");
    Engine.update(myEngine);

    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    
    ball.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    
}

