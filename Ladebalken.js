let compSize = 5;
let midX;
let midY;
let barX;
let barY;
let progBarX;
let progBarY;
let currentDate;
let finalDate;
let startDate;
let difCurrent;
let difStart;
let prog;
let fontUsed; 

function preload() {
  fontUsed = loadFont('Generica.otf');
  fontCounter = loadFont('SourceCodePro-ExtraLight.ttf');
}

function setup() {
  frameRate(60);
  createCanvas(windowWidth-compSize, windowHeight-compSize);
  midX = width * 0.5;
  midY = height * 0.5;
  barX = width * 0.9;
  progBarX = barX * 0.99;
  barY = 55;
  progBarY = barY - (barX - progBarX);
  finalDate = new Date(2023,3,22);
  startDate = new Date(2023,1,0);
  background(3, 1, 10, 255);
}


function draw() {
  if (windowWidth <= 500) {
    barY = 30;
  }
  else {
   barY = 55;
  }
  progBarY = barY - (barX - progBarX);
  currentDate = new Date();
  difCurrent = finalDate - currentDate;
  difStart = finalDate - startDate;
  prog = 100 - difCurrent * 100 / difStart;
  background(3, 1, 10, 255);
  fill(0,0,0,0);
  stroke(255);
  strokeWeight(1);
  rect(midX - barX * 0.5, midY - barY * 0.5, barX, barY, 18);
  noStroke();
  fill(0,255,0,255);
  rect(midX - progBarX * 0.5, midY - progBarY * 0.5, progBarX * prog * 0.01, progBarY, 14); 
  if (windowWidth <= 500) {
    textSize(20);
  }
  else {
    textSize(36);
  }
  noStroke();
  fill(255);
  textFont(fontUsed);
  textAlign(LEFT);
  text('Fritz als Ausstellungstechniker', midX - barX * 0.5 , midY - 36);
  textFont(fontCounter);
  textAlign(RIGHT);
    if (windowWidth <= 500) {
    textSize(15);
  }
  else {
    textSize(20);
  }
  text(nfc(prog,7) + ' %', midX + barX *0.5 , midY + 46);
  
  
}

function windowResized() {
  resizeCanvas(windowWidth-compSize, windowHeight-compSize);
  midX = width * 0.5;
  midY = height * 0.5;
  barX = width * 0.9;
  progBarX = barX * 0.99;
  progBarY = barY - (barX - progBarX);
}
