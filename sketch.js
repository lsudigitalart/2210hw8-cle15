function setup(){
  createCanvas(640, 480);
}

function draw(){

}
function mouseReleased(){
  background(0);
  charGen(mouseX, mouseY, 100);
}
function charGen(eyes,mouth,body){
centerMass = height/2;
fill(random(255), random(255), random(255));
ellipse(width/2, centerMass, body, body *random(3));

fill(random(255, random(255), random(255)));
rectMode(CENTER);
rect(width/2, centerMass - 20 *random(2), map(eyes, 0 , width, 10, 40), 8);

fill(random(255, random(255), random(255)));
ellipse(width/2, centerMass - 15 * random(2), map(eyes, mouth, mouth, 20, 80), 10);
}
