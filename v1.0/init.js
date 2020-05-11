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

let car1 = null;
let car2 = null;
let car3 = null;
let car4 = null;

let sizes=[[330,10,30],[130,10,50],[130,10,30],[130,10,30]];

let worldWidth=1200; 
let worldHeight=600;

function init()
{
    
engine = Matter.Engine.create();

// render
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

// now you can start adding bodies...

}
