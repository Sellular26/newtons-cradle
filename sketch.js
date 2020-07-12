const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(340,300,25);
    ball2 = new Ball(370,300,25);
    ball3 = new Ball(400,300,25);
    ball4 = new Ball(430,300,25,1,0);
    ball5 = new Ball(460,300,25);

    bar = new Bar(400, 100, 220, 20);
    
    rope = new Rope(ball.body, bar.body ,{x: -100, y: 0});
    rope2 = new Rope(ball2.body, bar.body, {x: -50, y: 0});
    rope3 = new Rope(ball3.body,bar.body, {x: 0, y: 0});
    rope4 = new Rope(ball4.body,bar.body, {x: 50, y: 0});
    rope5 = new Rope(ball5.body, bar.body,{x: 100, y: 0});
}

function draw(){
    
    background(150, 50, 0);
    
    Engine.update(engine);

    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bar.display();
}
function keyPressed(){
	if (keyCode == UP_ARROW){
        Matter.Body.applyForce(ball.body, ball.position, {x:-205, y:-15});
	}
}
