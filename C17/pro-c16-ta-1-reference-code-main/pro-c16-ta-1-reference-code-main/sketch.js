var box1;
var box2

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(300,300,50,10);
  box2 = new Box(200,200,10,50);
}

function draw() 
{
  background(220);
  box1.show();
  box1.set_speed(2);
  box2.show();
  box2.set_speed(1);

}

