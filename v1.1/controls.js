var map={};

function checkKey(e) {

    e = e || window.event;
		map[e.keyCode]=e.type=='keydown';
	doKey();
}

function doKey(key)
{
	let speed=20*zoom;

	//Cannon

	
	//Tank 1
	
	if (map['87']) {
        // rotate counter clockwise
		Body.rotate(tank1[1], -Math.PI/40);
    }
    else if (map['83']) {
        // rotate clockwise
		Body.rotate(tank1[1], Math.PI/40);
    }
	
	//Tank 2

    if (map['38']) {
        // rotate counter clockwise
		Body.rotate(tank2[1], -Math.PI/40);
		
    }
    else if (map['40']) {
        // rotate clockwise
		Body.rotate(tank2[1], Math.PI/40);
    }
	
		
	//Tank 3


    if (map['79']) {
        // rotate counter clockwise
		Body.rotate(tank3[1], -Math.PI/40);
		
    }
    else if (map['76']) {
        // rotate clockwise
		Body.rotate(tank3[1], Math.PI/40);
    }
	
	//to fly
	//if (map['32']) {
       // left arrow
	  //  applyYforce(tank1[0],-speed*3);
		//applyYforce(tank2[0],-speed*3);
		//applyYforce(tank3[0],-speed*3);
//	}
	
	//Body
	//Tank 1
	if (map['65']) {
       // left arrow
	    applyXforce(tank1[0],-speed);

   }
    else if (map['68']) {
       // right arrow
	    applyXforce(tank1[0],speed);
    }
	
	//Tank 2
	if (map['37']) {
       // left arrow
	    applyXforce(tank2[0],-speed);
   }
    else if (map['39']) {
       // right arrow
	   applyXforce(tank2[0],speed);
    }
	
	//Tank 3
	if (map['75']) {
       // left arrow
	    applyXforce(tank3[0],-speed);
   }
    else if (map['59']) {
       // right arrow
	   applyXforce(tank3[0],speed);
    }
	
	
	//Fire tank 1
	if (map['69']) {
       fire(tank1[0],tank1[1])
	}
	
	//Fire tank 2
	if (map['96']) {
       fire(tank2[0],tank2[1])
	}
//Fire tank 3
	if (map['80']) {
       fire(tank3[0],tank3[1])
	}

}

function getCannonPosition(cannon)
{
	var x=0;
	var y=0;
	
	var xB=0;
	var yB=0;
	
	//alert(cannon.bounds+)
	
	var x1=Math.abs(cannon.bounds.max.x-cannon.position.x);
	var x2=Math.abs(cannon.bounds.min.x-cannon.position.x);
	
	
	if(x1>x2)
	{
		x=cannon.bounds.max.x;
		xB=cannon.bounds.min.x;
	}
	else
	{
		x=cannon.bounds.min.x;
		xB=cannon.bounds.max.x;
	}
	
	var y1=Math.abs(cannon.bounds.max.y-cannon.position.y);
	var y2=Math.abs(cannon.bounds.min.y-cannon.position.y);
	
	if(y1>y2)
	{
		y=cannon.bounds.max.y;
		yB=cannon.bounds.min.y;
	}
	else
	{
		y=cannon.bounds.min.y;
		yB=cannon.bounds.max.y;
	}
	
		//alert(x1+','+x2);
	//alert(JSON.stringify(cannon.bounds)+JSON.stringify(cannon.position));
	
	return [x,y,xB,yB];
	
}

function fire(tank,cannon)
{
	var k=0.3;
	var pos=getCannonPosition(cannon);
	
	var dx=(pos[0]-pos[2])*k;
	var dy=(pos[1]-pos[3])*k;
	
	//var dx=(pos[0]-cannon.position.x)*k;
	//var dy=(pos[1]-cannon.position.y)*k;
	
	//var dx=(cannon.bounds.min.x-cannon.bounds.max.x)*k;
	//var dy=(cannon.bounds.min.y-cannon.bounds.max.y)*k;
		
	var x=pos[0];//+dx/10;
	var y=pos[1];//+dy/10;
	
	//showGameOver(dx+","+dy);
	
	var bomb = Bodies.circle(x,y,20*zoom,{
		isStatic: false, density: 20*zoom, friction: 0.0,restitution: 1
	});
	
	
	World.add(engine.world, bomb);
	
	
	//var dx=(x-cannon.position.x)*k;
	//var dy=(y-cannon.position.y)*k;
	
	
	
	Body.applyForce( bomb, {x: bomb.position.x, y: bomb.position.y}, {x: dx*1.5, y: dy*1.5});
	Body.applyForce( tank, {x: bomb.position.x, y: bomb.position.y}, {x: -dx*0.1, y: -dy*0.1});
}

function applyXforce(b,speed)
{
	Body.applyForce( b, {x: b.position.x, y: b.position.y}, {x: speed, y: 0});
}

function applyYforce(b,speed)
{
	Body.applyForce( b, {x: b.position.x, y: b.position.y}, {x: 0, y: speed});
}