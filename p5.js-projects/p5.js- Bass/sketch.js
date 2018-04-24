var second;
var big;
function setup() {
  createCanvas(400, 400);
	big = 0;
	second = 0;
}

function draw() {
  background(5);
	fill(25)
	ellipse(200,200,big, big);
	big = big + 7;
	if (big > 399){
		big = 0;
}
	fill(30)
	ellipse(200,200,second,second)
	second = second + 3;
	if (second > 399){
		
		second = 0;
	}
	
}