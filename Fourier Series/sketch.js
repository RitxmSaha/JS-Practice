// Fourier Series Exercise 
// JS Practice
// https://www.youtube.com/watch?v=Mm2eYfj0SgA

let time = 0;
let wave = [];
let slider;

function setup() {
  createCanvas(800, 400);
  slider = createSlider(1, 10, 5);
}

function draw() {

  background(0);
  translate(200, 200);

  let x  = 0;
  let y = 0;
  
    stroke(255);
    noFill();

  for(let i = 0; i < slider.value(); i++) {
      let prevx = x;
      let prevy = y;

      let n = 1 + 2*i;
      let radius = 75 * (4 / (n * PI));
      x += radius*cos(n*time);
      y += radius*sin(n*time);

      stroke(255,100);
      noFill();
      ellipse(prevx,prevy,radius*2);
      fill(255);
      ellipse(x,y,5);
      stroke(255);
      
      line(prevx,prevy,x,y);
  }

  wave.unshift(y);

  translate(250,0);
  line(x-250,y,0,y);
  noFill();
  beginShape();
  for(let i = 0; i < wave.length; i++) {
      vertex(i,wave[i]);
  }
  endShape();


  time -= 0.05;

  if(wave.length > 450) {
      wave.pop();
  }
}