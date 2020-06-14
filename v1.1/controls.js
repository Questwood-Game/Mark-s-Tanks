//var controlKeys={'65':false,'68':false};
	var map={};

function checkKey(e) {

//	alert("LOL");

    e = e || window.event;
	

	map[e.keyCode]=e.type=='keydown';
	//showGameOver(JSON.stringify(map));
	//alert(JSON.stringify(map));
	//var i,l=map.length;
	//for(i=0;i<l;i++)
		/*
	for(var key in map)
	{
		//alert(key+"***"+map[key]);
	//	alert(key);
		for(var k in controlKeys)
		{
			if(key==k)
			{
				controlKeys[key]=map[key];
				//alert(JSON.stringify(controlKeys));
				
			}
		}*/
		doKey();//parseInt(key));
	//}
	
	
}

function doKey(key)
{
	let speed=10*zoom;

	//Cannon
	//alert(JSON.stringify(map));
	//Tank 2
	//alert(key);	

    if (map['38']) {
        // rotate counter clockwise
		Body.rotate(tank2[1], -Math.PI/40);
		
    }
    else if (map['40']) {
        // rotate clockwise
		Body.rotate(tank2[1], Math.PI/40);
    }
	
	//Tank 1
	
	if (map['87']) {
        // rotate counter clockwise
		Body.rotate(tank1[1], -Math.PI/40);
    }
    else if (map['83']) {
        // rotate clockwise
		Body.rotate(tank1[1], Math.PI/40);
    }
	
	
	
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
	
	
	//Fire tank 1
	if (map['69']) {
       fire(tank1[0],tank1[1])
	}
	
	//Fire tank 2
	if (map['96']) {
       fire(tank2[0],tank2[1])
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
	
	
	
	Body.applyForce( bomb, {x: bomb.position.x, y: bomb.position.y}, {x: dx, y: dy});
	Body.applyForce( tank, {x: bomb.position.x, y: bomb.position.y}, {x: -dx*0.3, y: -dy*0.3});
}

function applyXforce(b,speed)
{
	Body.applyForce( b, {x: b.position.x, y: b.position.y}, {x: speed, y: 0});
}