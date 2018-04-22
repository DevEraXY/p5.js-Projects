function setup () {
  createCanvas(400, 400);
}

function draw () {
  fill(20,220,225);
  rect(50,40,300,300);


  var runner = mouseIsPressed;
  if (runner){

   line(mouseY,mouseX,mouseX,mouseY) ;
  }
    print(runner);
}