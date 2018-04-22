function setup() {
  createCanvas(600, 600);
	background(255)
}

function draw() {

	//first shadow line
	line(315, 280, 435, 205);
	//shadow line 2nd to first
	line(310, 290, 455, 210);
	//shadow line 2nd to bottom
	line(305, 300, 475, 215);
	//shadow line bottom
	line(295, 310, 495, 220);
	//fairy starts
	noStroke()
	//First Circle
	fill(35,143,247,1);
	ellipse(250,250,150,150);
	//Outer Circle
	fill(51,233,233,2)
	ellipse(250,250,100,100);
	//Shade
	fill(193,219,218,2);
	ellipse(200,200,200,200);
	//wing1
	fill(100);
	quad(459, 50, 298, 241, 300, 273, 400, 200);
	//wing2
	fill(100);
	quad(310, 50, 198,  95, 199, 200, 213, 160);
	//wing2 shade
	fill(200);
	quad(310, 50, 205,  95, 199, 200, 213, 160);
	//wing1 shade
	fill(200);
	quad(459, 50, 298, 241, 300, 273, 395, 200);

}
