function checkCars()
{
	if(tank1[0].position.y>worldHeight)
	{
		showGameOver("Game Over Mark");
		
		Matter.World.remove(engine.world, tank1[0]);
		Matter.World.remove(engine.world, tank1[1]);
		
		tank1=drawTank(200,worldHeight-150);
	}
	
	if(tank2[0].position.y>worldHeight)
	{
		showGameOver("Game Over Aliona");
		
		Matter.World.remove(engine.world, tank2[0]);
		Matter.World.remove(engine.world, tank2[1]);
		tank2=drawTank(worldWidth-200,worldHeight-150);
	}

	//controlRobot(car3);
	//controlRobot(car4);

}

