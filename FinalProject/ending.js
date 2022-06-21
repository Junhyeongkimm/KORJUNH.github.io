
//Load Font and Ending BGM
function preload () {
  myFont = loadFont ('font/font.ttf');
  mySound = loadSound ('sound/dayofrecon.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.play ();
}

//Ending Design 
function draw() {
  background(0);
  fill (255, 0, 55);
  text ('You have escaped...   Maybe?', width/2, height/2);
  textAlign ('center');
  textFont (myFont);
  textSize (width/20);
  
}