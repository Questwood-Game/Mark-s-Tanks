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
