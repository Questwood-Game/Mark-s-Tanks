function drawTank(x,y,texture_file)
{
	//Zoom
	var k=zoom;
	var density=10*k;
	
	//Tank body 
	var body = Bodies.rectangle(0*k+x, -10*k+y, 200*k, 40*k,{
		isStatic: false, density: density, friction: 1000.0,
		
		render: {
                    sprite: {
                        texture: texture_file,
                        xScale: 0.5,
                        yScale: 0.5,
						marginY:-10
                    }
                }
		
	});
    	
	//Connon parts
	var cannon1 = Bodies.circle(0*k+x, -80*k+y, 5*k,{
		isStatic: false, density: density*10, friction: 1.0,render: {
visible: false,
lineWidth: 0,
strokeStyle: 'rgba(0,0,0,0)'
}
	});
	cannon1.render.visible = false;
	
	var cannon2 = Bodies.rectangle(100*k+x, -80*k+y, 100*k, 10*k,{
		isStatic: false, density: density/10, friction: 1.0,
		render:{visible: false}
	});
	
	//Cannon
	var cannon = Body.create({
		parts: [cannon1,cannon2],
		isStatic: false,
		
				render: {
                    sprite: {
                        texture: 'cannon.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
    });
	
	
	//Dome
	var dome = Bodies.circle(0*k+x, -50*k+y, 60*k,{
		isStatic: false, density: density, friction: 1.0
	});
	
	
	//Wheels
	var wheelY=20*k+y;
	
    var wheelA1 = Bodies.circle(-80*k+x,wheelY,20*k,{
		isStatic: false, density: density*10, friction: 100.0
	});
	var wheelA2 = Bodies.circle(-28*k+x,wheelY,20*k,{
	isStatic: false, density: density*10, friction: 100
	});
	
	var wheelA3 = Bodies.circle(28*k+x,wheelY,20*k,{
	isStatic: false, density: density*10, friction: 100
	});
	var wheelA4 = Bodies.circle(80*k+x,wheelY,20*k,{
	isStatic: false, density: density*10, friction: 100
	});
	
	
	//Wheel Joins
    var axisA1a = Constraint.create({bodyA:body,bodyB:wheelA1,pointA:{x:-90*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false});
	var axisA1b = Constraint.create({bodyA:body,bodyB:wheelA1,pointA:{x:-70*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	
	var axisA2a = Constraint.create({bodyA:body,bodyB:wheelA2,pointA:{x:-38*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	var axisA2b = Constraint.create({bodyA:body,bodyB:wheelA2,pointA:{x:-18*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	
	var axisA3a = Constraint.create({bodyA:body,bodyB:wheelA3,pointA:{x:18*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	var axisA3b = Constraint.create({bodyA:body,bodyB:wheelA3,pointA:{x:38*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	
	var axisA4a = Constraint.create({bodyA:body,bodyB:wheelA4,pointA:{x:70*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	var axisA4b = Constraint.create({bodyA:body,bodyB:wheelA4,pointA:{x:90*k,y:20*k},stiffness:1,render:{visible: false}}, { isStatic: false });
	
	
	//Tank Body
	var tank = Body.create({
		parts: [cannon,dome, wheelA1, wheelA2, wheelA3, wheelA4,body],
		isStatic: false
    });
	
	//Add Tank and Joins to the world
	World.add(engine.world, [tank, axisA1a, axisA1b, axisA2a, axisA2b, axisA3a, axisA3b,axisA4a, axisA4b]);
	
	return [tank,cannon];
}
