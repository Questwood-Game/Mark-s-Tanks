 function checkCars()
{
	//tank 1
	if(tank1_lives>=0 && tank1[0].position.y>worldHeight)
	{
		ClockSign=ClockSign*-1;
		Matter.World.remove(engine.world, tank1[0]);
		Matter.World.remove(engine.world, tank1[1]);
		
		tank1_lives--;
		
		if(tank1_lives<1)
		{
			showGameOver("Game Over ALYONA");
		}
		else
		{
			showGameOver("Try again ALYONA. You have "+tank1_lives+" lives.");
	    
			tank1=drawTank(tankPositions[0][0],tankPositions[0][1],'tank1.png');
		}
	}
	
	//tank 2
	if(tank2_lives>=0 && tank2[0].position.y>worldHeight)
	{
		ClockSign=ClockSign*-1;
		//delete tank
		Matter.World.remove(engine.world, tank2[0]);
		Matter.World.remove(engine.world, tank2[1]);

		//minus lives
		tank2_lives--;
		
		if(tank2_lives<1)
		{
			showGameOver("Game Over <MAYA ");
		}
		else
		{
			//show message
			showGameOver("Try again MAYA. You have "+tank2_lives+" lives.");
			//spawn the tank
			tank2=drawTank(tankPositions[1][0],tankPositions[1][1],'tank2.png');
		}
	}



	//tank 3
	if(tank3_lives>=0 && tank3[0].position.y>worldHeight)
	{
		ClockSign=ClockSign*-1;
		//delete tank
		Matter.World.remove(engine.world, tank3[0]);
		Matter.World.remove(engine.world, tank3[1]);

		//minus lives
		tank3_lives--;
		
		if(tank3_lives<1)
		{
			showGameOver("Game Over MARK");
		}
		else
		{
			//show message
			showGameOver("Try again MARK. You have "+tank3_lives+" lives.");
			//spawn the tank
			tank3=drawTank(tankPositions[2][0],tankPositions[2][1],'tank3.png');
		}
	}
	

}

