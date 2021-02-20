let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {

  background(220, 111, 444);

  fill(255, 204, 0);
  circle(40, 55, 40);

  fill(220, 111, 444);
  circle(50, 50, 40);

  fill(120, 120, 50);
  rect(230, 230, 100, 50);

  fill(220, 220, 220);
  rect(240, 240, 10, 20);

  fill(220, 220, 220);
  rect(265, 240, 10, 20);

  fill(220, 220, 220);
  rect(300, 240, 25, 38);

  fill(250, 0, 0);
  quad(250, 200, 230, 230, 330, 230, 350, 200);

  fill(120, 120, 50);
  quad(350, 200, 350, 280, 330, 280, 330, 230);

  fill(220, 120, 110);
  rect(0, 280, 400, 150);

  fill(0, 0, 0);
  rect(300, 280, 25, 60);

  fill(0, 0, 0);
  rect(0, 330, 400, 50);



  x = x + 2.0;
  if (x > 400) {
    x = 0;
  }

  fill(220, 220, 220);
  rect(0, 353, x, 5);

}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}