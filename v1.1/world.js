//here we will draw the world


//document.onkeydown = checkKey;
document.onkeydown = checkKey;
document.onkeyup = checkKey;
//onkeydown = onkeyup =


function drawWorld()
{
	
	// params: x, y, width, height, options
	let w=worldWidth-100;
	let h=worldHeight-60;
	let square1= Matter.Bodies.rectangle(worldWidth/2, h,w, 30, {
		// specify options here
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	
	let square2 = Matter.Bodies.rectangle(tankPositions[0][0]+20, tankPositions[0][1]+20,200, 20, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	let square3 = Matter.Bodies.rectangle(tankPositions[1][0]-20, tankPositions[1][1]+20,200, 20, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	let square4 = Matter.Bodies.rectangle(tankPositions[2][0], tankPositions[2][1]+20,200, 20, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	
	
	//let square5= Matter.Bodies.rectangle(worldWidth/2, tankPositions[2][1]+100,worldWidth-600, 20, {
		// specify options here
		//density: 1000, friction: 0, restitution: 1.0,
		//isStatic:true
	//});
	
	
	let square6 = Matter.Bodies.rectangle(tankPositions[0][0]-50, tankPositions[0][1]+200,200, 20, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	

	let square7 = Matter.Bodies.rectangle(tankPositions[2][0]+520, tankPositions[2][1]+200,200, 20, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	
	let square8 = Matter.Bodies.rectangle(tankPositions[0][0]-120, tankPositions[0][1]+150,20, 100, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	

	let square9 = Matter.Bodies.rectangle(tankPositions[2][0]+590, tankPositions[2][1]+150,20, 100, {
		density: 1000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	
		let p2 = Matter.Bodies.rectangle(tankPositions[0][0]+200, tankPositions[0][1]+230,20, 70, {
		density: 10000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	

	let p3 = Matter.Bodies.rectangle(tankPositions[2][0]+270, tankPositions[2][1]+180,20, 70, {
		density: 10000, friction: 0, restitution: 1.0,
		isStatic:true
	});
	
	
	
	let p1= Matter.Bodies.rectangle(worldWidth/2, tankPositions[2][1]+200,worldWidth- 800, 20, {
		// specify options here
		density: 10000, friction: 0, restitution: 1.0,rotation:3, 
		isStatic:true
	});
	
	

	worldFloor = Body.create({
		parts: [p1,p2,p3],
		isStatic: true,
		density: 1000,
				render: {
                    sprite: {
                        texture: 'cannon.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
    });
	//square1,
	Matter.World.add(engine.world, [square2,square3,square4,square6,square7,square8,square9,worldFloor]);
	
}

function worldTick()
{
	Body.rotate(worldFloor, Math.PI/1800*ClockSign);
}

function showGameOver(txt)
{
	
	var obj=document.getElementById("messagebox");
	obj.innerHTML=txt;
	obj.style.display="block";
	setTimeout(function(){ hideGameOver(); }, 3000);
}

function hideGameOver()
{
	var obj2=document.getElementById("messagebox");
	obj2.style.display="none";
}