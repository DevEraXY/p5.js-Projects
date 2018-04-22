function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noCursor()

}

function draw() {
  noStroke()
  background(200);
  fill(255,255,0)
  rect(200,200,100,100);
  rect(300,300,100,100);
  fill(0,255,0);
  ellipse(300,300,50,50);
  //rotate(PI / 3.0);
  //ellipse(300,400,50,70);
 

}
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}