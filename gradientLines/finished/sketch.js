let DOT_SIZE = 20;
let DEBUG = true;
let GRADIENT_FINENESS = 1000;

var dotA, dotB, dotC;
var lineD, lineE;

function setup()
{

  var canvas = createCanvas(800, 800);

  dotA = new point(200, 400, color('#a8e6cf'));
  dotB = new point(600, 200, color('#dcedc1'));
  dotC = new point(600, 400, color('#ffd3b6'));
  dotD = new point(600, 600, color('#ffaaa5'));

  line1 = new fancyLine(dotA, dotB);
  line2 = new fancyLine(dotA, dotC);
  line3 = new fancyLine(dotA, dotD);

  line1.enableGradient();
  line2.enableGradient();
  line3.enableGradient();

}

function draw()
{
  background(51);

  dotA.show();
  dotB.show();
  dotC.show();
  dotD.show();

  line1.show();
  line2.show();
  line3.show();
}
