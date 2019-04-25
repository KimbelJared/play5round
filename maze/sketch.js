//Constants
let MAZE_SIZE = 500;
let BOX_SIZE = MAZE_SIZE/10;
let SPEED = 5;
let MAZE_GRID = 10;
//Solver
var buddy;

//Arrays
var boxes = [];

//Mazes
var mazeJSON;

function preLoad()
{
  //load Mazes
  mazeJSON = loadJSON("http://jaredkimbel.com/projects/maze/assets/maze1.json", mazePrep);
}

function setup()
{
  createCanvas(700, 700);

  buddy = new Solver();

  //Create all the boxes
  var num = 1;
  for (let x = 1; x <= MAZE_GRID+1; x++)
  {
    boxes[x] = []; // create nested array
    for (let y = 1; y < MAZE_GRID+1; y++)
    {
      boxes[x][y] = new Box(x,y,num);
      num++;
    }
  }
}

function draw()
{
  background(51);

  //Create initial square for maze to exist in
  push();
  noFill();
  stroke(255);
  //square(100, 100, MAZE_SIZE);
  pop();

  for (let x = 1; x < MAZE_GRID+1; x++)
  {
    for (let y = 1; y < MAZE_GRID+1; y++)
    {
      boxes[x][y].show();
    }
  }

  buddy.show();
}

function mazePrep(maze)
{
    console.log(maze.one.drawUp);
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    buddy.move(0, -1);
  } else if (keyCode === RIGHT_ARROW)
  {
    buddy.move(1,0);
  } else if (keyCode === DOWN_ARROW)
  {
    buddy.move(0,1);
  } else if (keyCode === LEFT_ARROW)
  {
    buddy.move(-1,0);
  }
}