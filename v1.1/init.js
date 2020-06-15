let engine=null;
let render=null;
let runner=null;
let Composites = Matter.Composites;
let Composite = Matter.Composite;
let Mouse = Matter.Mouse;
let World = Matter.World;
let Constraint = Matter.Constraint;
let Bodies = Matter.Bodies;
let Body = Matter.Body;

var zoom=0.20;

let tank1=null;
let tank2=null;
let tank3=null;

let tank1_lives=5;
let tank2_lives=5;
let tank3_lives=5;

let worldWidth=Math.max(document.documentElement.clientWidth, 800)-10;//-50; 
let worldHeight=Math.max(document.documentElement.clientHeight, 600)-100;//-200;

let tankPositions=[[200,100],[worldWidth-200,100],[(worldWidth-400)/2+200,100]];

let worldFloor=null;
let ClockSign=-1;


function init()
{
	engine = Matter.Engine.create();

	render = Matter.Render.create({
		element: document.getElementById('gameBox'),
		engine: engine,
		options: {
			width: worldWidth,
			height: worldHeight,
			wireframes: false
		}
	});
	Matter.Render.run(render);

	// runner
	runner = Matter.Runner.create();
	Matter.Runner.run(runner, engine);
}
