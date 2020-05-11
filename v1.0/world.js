//here we will draw the world


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

	let speed=0.1;


    if (e.keyCode == '38') {
        // up arrow
		applyYforce(car2,-speed*1);
    }
    else if (e.keyCode == '40') {
        // down arrow
		applyYforce(car2,speed);
    }
	
	
	if (e.keyCode == 87) {
        // up arrow
		applyYforce(car1,-speed*1);
    }
    else if (e.keyCode == 83) {
        // down arrow
		applyYforce(car1,speed*1);
    }
	
	
	
	//SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSalert(e.keyCode);
	
	if (e.keyCode == 65) {
       // left arrow
	    //Body.applyForce( car1.bodies[0], {x: car1.bodies[0].position.x, y: car1.bodies[0].position.y}, {x: -speed, y: 0});
		applyXforce(car1,-speed);

   }
    else if (e.keyCode == 68) {
       // right arrow
	   Body.applyForce( car1.bodies[0], {x: car1.bodies[0].position.x, y: car1.bodies[0].position.y}, {x: speed, y: 0});
	   //applyXforce(car1,speed);
    }
	
	
	if (e.keyCode == '37') {
       // left arrow
	    //Body.applyForce( car2.bodies[0], {x: car2.bodies[0].position.x, y: car2.bodies[0].position.y}, {x: -speed, y: 0});
		applyXforce(car2,-speed);

   }
    else if (e.keyCode == '39') {
       // right arrow
	   //Body.applyForce( car2.bodies[0], {x: car2.bodies[0].position.x, y: car2.bodies[0].position.y}, {x: speed, y: 0});
	   applyXforce(car2,speed);
    }
	
	

}

function applyXforce(b,speed)
{
	Body.applyForce( b.bodies[0], {x: b.bodies[0].position.x, y: b.bodies[0].position.y}, {x: speed, y: 0});
}

function applyYforce(b,speed)
{
	Body.applyForce( b.bodies[0], {x: b.bodies[0].position.x, y: b.bodies[0].position.y}, {x: 0, y: speed});
}


function drawWorld()
{
	
	// params: x, y, width, height, options
	let square = Matter.Bodies.rectangle(600, 500,worldWidth-100, 50, {
		// specify options here
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