//here we will draw the world


document.onkeydown = checkKey;




function drawWorld()
{
	
	// params: x, y, width, height, options
	let w=worldWidth-100;
	let h=worldHeight-60;
	let square = Matter.Bodies.rectangle(worldWidth/2, h,w, 30, {
		// specify options here
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	Matter.World.add(engine.world, square);
	
}

function showGameOver(txt)
{
	
	var obj=document.getElementById("GameOver");
	obj.innerHTML=txt;
	obj.style.display="block";
	setTimeout(function(){ hideGameOver(); }, 1000);
}

function hideGameOver()
{
	var obj=document.getElementById("GameOver");
	obj.style.display="none";
}