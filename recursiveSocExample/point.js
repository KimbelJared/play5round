class point
{

  constructor(px, py, mc)
  {
      this.px = px;
      this.py = py;
      this.x = px + xOffset;
      this.y = py + (ladder() * random(childYOffsets));
      this.gen = (this.x/xOffset)-2;
      console.log("gen: " + this.gen)
      console.log("x: " + this.x)
  }

  show(passedColor)
  {
      push();

      stroke(255);

      ellipse(this.x, this.y, 5);

      line(this.px, this.py, this.x, this.y);

      pop();
  }
}
