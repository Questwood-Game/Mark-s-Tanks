function drawTank(x,y,a,b,c)
{

//let dome = Matter.Bodies.circle(x, y, 20, {
    // specify options here
//});
//Matter.World.add(engine.world, dome);


//let square = Matter.Bodies.rectangle(x+5, y, 100, 20, {
    //// specify options here
//});

var car = Composites.car(x, y, a, b, c);

Matter.World.add(engine.world, car);

return car;

}

function checkCars()
{
	if(car1.bodies[0].position.y<0)
	{
		applyYforce(car1,1);
			
	}
	
	if(car2.bodies[0].position.y<0)
	{
		applyYforce(car2,10);
	}
	
	if(car1.bodies[0].position.y>worldHeight)
	{
		showGameOver("Game Over Mark");
		
		Matter.World.remove(engine.world, car1);
		car1=drawTank(200,100,sizes[0][0],sizes[0][1],sizes[0][2]);
			
	}
	
	if(car2.bodies[0].position.y>worldHeight)
	{
		showGameOver("Game Over Aliona");
		
		Matter.World.remove(engine.world, car2);
		car2=drawTank(1000,100,sizes[1][0],sizes[1][1],sizes[1][2]);
	}
	
	
	if(car3.bodies[0].position.y>worldHeight)
	{
		
		showGameOver("Mini lost!");
		
		Matter.World.remove(engine.world, car3);
		car3=drawTank(550,100,sizes[2][0],sizes[2][1],sizes[2][2]);
		
	}
	
	if(car4.bodies[0].position.y>worldHeight)
	{
		
		showGameOver("Mini B lost!");
		
		Matter.World.remove(engine.world, car4);
		car4=drawTank(650,100,sizes[3][0],sizes[3][1],sizes[3][2]);
		
	}
	
	controlRobot(car3);
	controlRobot(car4);
	
}

function controlRobot(car_robot)
{
	
	//let speed=(Math.random()-0.5)/10;
	let speed=(Math.random())/50;
	let speedY=-(Math.random())/50;
	
	let cx1=car1.bodies[0].position.x;
	let cx2=car2.bodies[0].position.x;
	let cx3=car_robot.bodies[0].position.x;
	
	let m_to_car1_distance=Math.abs(cx1-cx3);
	let m_to_car2_distance=Math.abs(cx2-cx3);
	
	if(m_to_car1_distance<m_to_car2_distance)
	{
		speed=Math.sign(cx1-cx3)*speed;
	}
	else
	{
		speed=Math.sign(cx2-cx3)*speed;
	}
	
	applyXforce(car_robot,speed)
	applyYforce(car_robot,speedY)
	
	
}

/*
var boxA = Bodies.rectangle(400, 200, 80, 80);
var ballA = Bodies.circle(380, 100, 40, 10);
var ballB = Bodies.circle(460, 10, 40, 10);
var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });
 
World.add(engine.world, [boxA, ballA, ballB, ground]);

*/