function setup() 
{
  createCanvas(500, 200);
  background(0)
  
  //pacman
  noStroke()
  fill(255, 255, 0)
  circle(150, 100, 150)
  
  //pacman mouth
  fill(0)
  triangle(150, 100, 50, 25, 50, 175)
  
  //ghost
  fill(255, 0, 0)
  circle(350, 80, 128)
  
  noStroke()
  fill(255, 0, 0)
  rect(286, 80, 128, 100)
  
  //first eye
  fill(255)
  circle(320, 80, 35)
  fill(0, 0, 255)
  circle(320, 80, 20)
  
  //second eye
  fill(255)
  circle(375, 80, 35)
  fill(0, 0, 255)
  circle(375, 80, 20)
}

