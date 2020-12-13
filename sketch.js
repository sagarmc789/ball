const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_option={
        isStatic:true
    }

var ball_option={
    restitution: 1.0
}

ground=Bodies.rectangle(1,370,400,50,ground_option)

ball=Bodies.circle(200,100,100,ball_option)


World.add(world,ground)

World.add(world,ball)
console.log(ground)
}

function draw(){

    background(0);

    Engine.update(engine);

    rect(ground.position.x,ground.position.y,400,30)

ellipseMode(RADIUS)

    ellipse(ball.position.x,ball.position.y,20,20)


}