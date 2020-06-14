function checkCars()
{
	if(tank1[0].position.y>worldHeight)
	{
		Matter.World.remove(engine.world, tank1[0]);
		Matter.World.remove(engine.world, tank1[1]);
		
		tank1_lives--;
		
		if(tank1_lives<1)
		{
			showGameOver("Game Over Mark");
		}
		else
		{
			showGameOver("Try again Mark. You have "+tank1_lives+" lives.");
	    
	
			tank1=drawTank(200,worldHeight-250,'tank1.png');
		}
	}
	
	if(tank2[0].position.y>worldHeight)
	{
		Matter.World.remove(engine.world, tank2[0]);
		Matter.World.remove(engine.world, tank2[1]);
		
		tank2_lives--;
		
		if(tank2_lives<1)
		{
			showGameOver("Game Over Ivan");
		}
		else
		{
			
			showGameOver("Try again Ivan. You have "+tank2_lives+" lives.");

			tank2=drawTank(worldWidth-200,worldHeight-150,'tank2.png');
		}
	}

	//controlRobot(car3);
	//controlRobot(car4);

}

