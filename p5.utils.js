/*

Jared Kimbel | Jaredkimbel.com
Version 0.1 | Februrary 29th, 2020

*/
let DEBUG = false;
let DOT_SIZE = 10;

//Initial Function
p5.prototype.startTheEngine = function()
{
  console.log("p5.utils -- loaded");

  if(DEBUG)
  {
    console.log("p5.utils -- debug enabled");
  }
  else
  {
    console.log("p5.utils -- debug not enabled. Call enableDebug() to do so.");
  }


}
p5.prototype.registerMethod('init', p5.prototype.startTheEngine);

//Functions

//Enable Debug Function
p5.prototype.enableDebug = function()
{
  DEBUG = true;
  console.log("p5.utils -- debug enabled");
}

//Change Dot Size
p5.prototype.changeDotSize = function(input)
{
  DOT_SIZE = input;
  console.log("p5.utils -- DOT_SIZE changed to " + DOT_SIZE);
}

//Objects

/*

Point Object

*/
p5.prototype.point = class
{
  //Create all variables that the points will need
  constructor(x, y, color)
  {
      this.x = x;
      this.y = y;
      if (color == null)
      {
        this.color = 255;
      } else {
        this.color = color;
      }

      this.test();
  }
  //Make sure point is in bounds
  test()
  {
    if (this.y > height)
    {
      this.y = height;
      console.log("y not in bounds, set to max");
    } else if (this.y < 0)
    {
      this. y = 0;
      console.log("y not in bounds, set to min");
    } else if (this.x < 0)
    {
      this. x = 0;
      console.log("x not in bounds, set to min");
    } else if (this.x > width)
    {
      this. x = width;
      console.log("x not in bounds, set to max");
    }
  }

  //Diplay point on screen
  show()
  {
      push();

      colorMode(RGB, 255)
      fill(this.color);
      noStroke();

      ellipse(this.x, this.y, DOT_SIZE);

      pop();
  }

  move(newX, newY)
  {
    this.x = newX;
    this.y = newY;
  }

  //Update color
  updateColor(newColor)
  {
    this.color = newColor;
  }

}

/*

Line Object

*/
p5.prototype.fancyLine = class
{
  //Create all variables that the line will need
  constructor(point1, point2, color)
  {
      this.p1 = point1;
      this.p2 = point2;

      if (color == null)
      {
        this.color = 255;
      } else {
        this.color = color;
      }
  }

  show()
  {
    push();
    colorMode(RGB, 255)
    stroke(this.color);
    line(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
    pop();
  }

  //Update color
  updateColor(newColor)
  {
    this.color = newColor;
  }
}

/*

Grid Object

*/
p5.prototype.coordGrid = class
{
  constructor(x, y, color)
  {
    if(color == null){
      this.color = 255;
    } else {
      this.color = color;
    }
    this.origin = new point(x, y, this.color);

    this.q1 = true;
    this.q2 = false;
    this.q3 = false;
    this.q4 = false;

    this.xStop = width/4;
    this.yStop = height/4;
  }

  enableQuadrants(one, two, three, four){
    this.q1 = one;
    this.q2 = two;
    this.q3 = three;
    this.q4 = four;
  }

  show()
  {
    this.origin.show();
  }
}
