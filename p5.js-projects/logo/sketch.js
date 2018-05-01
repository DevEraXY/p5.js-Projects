function setup() {
  createCanvas(500, 500);
	background(255)


}

function draw() {

	//**Logo**
	
	//outer Circle
	strokeWeight(1)
	stroke(54, 128, 46);
	fill(11, 142, 23,1);
	ellipse(250,250,250,250);
	noStroke();

	strokeWeight(.1)
	stroke(54, 128, 46);
	//inner Circle
	fill(127, 155, 155,1)
	ellipse(250,250,200,200);
	noStroke()
	
	//Shade
	fill(193,219,218,2);
	ellipse(200,200,270,270);
	strokeWeight(2)
	stroke(54, 128, 46);

	line(180,300,320,300)

	fill(255);
	textSize(40);
	text("G.E.", 175, 215);
	text("Concrete", 185, 250);
	text("Inc.", 230, 285);
	textSize(10);
	text("Replace • Repair • Install", 200, 320);
}