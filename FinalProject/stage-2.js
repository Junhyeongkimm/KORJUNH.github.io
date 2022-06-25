let hint_x=50,hint_y=500;
let hint_width=50,hint_height=70;
let inp=0;
let callmouse=false;
let gImages={};
let stagebgm;
const HINT='hint';

function preload()
{
 gImages[HINT]=loadImage('picture/stage2 hint.png');
 stagebgm=loadSound('sound/stagebgm.mp3');
}

function setup() {
    frameRate(30);
    createCanvas(windowWidth, windowHeight)
    stageclearcondition();
    stagebgm.play()
};

function draw() {
    background(70);
    roomobject2();
    push();
    fill(0);
    text("Please enter Password.",160,110);
    pop();
    image(gImages[HINT],300,90,100,100)

    hint();
    mouse();
}
function roomobject2() {
  //벽색깔 //wall color
  noStroke();
  fill(155);
  rect(0, 0, width, 700);
  //책장 Bookcase
  for (x = windowWidth / 3 - 400; x <= windowWidth; x +=400) {
    stroke(0);
    fill(51, 0, 0);
    rect(x,200,300,500);
  }
  //선반 shelf
  for (x = windowWidth / 3 - 400; x <= windowWidth; x +=400) {
    for(y=200; y<=700; y+=100){
      stroke(0);
      fill(24, 0, 0);
      rect(x,y,315,20);
    }
  }  
  //왼쪽 테두리 //Left border
  for (x = windowWidth / 3 - 400; x <= windowWidth; x +=400) {
    for(y=200; y<=600; y+=100){
      stroke(0);
      fill(24,0,0);
      rect(x,y,15,100);
    }
  }
  //오른쪽 테두리  Right border
  for (x = windowWidth / 3 - 100; x <= windowWidth; x +=400) {
    for(y=200; y<=600; y+=100){
      stroke(0);
      fill(24,0,0);
      rect(x,y,15,100);
    }
  } 
  //기본 책1 book
  for (x = 305; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책2 book
  for (x = 320; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책3 book
  for (x = 335; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책4 book
  for (x = 350; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책5 book
  for (x = 365; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
   //기본책6 book
   for (x = 380; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책7 book
  for (x = 395; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책8 book
  for (x = 410; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책9 book
  for (x = 425; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책10 book
  for (x = 440; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책11 book
  for (x = 455; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책11 book
  for (x = 290; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책12 book
  for (x = 275; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책13 book
  for (x = 260; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(110);
      rect(x,y,15,60);
    }
  }
  //기본책14 book
  for (x = 245; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책15 book
  for (x = 230; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책16 book
  for (x = 215; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //기본책17 book
  for (x = 200; x <= windowWidth; x +=400) {
    for(y=240; y<=700; y+=100){
      stroke(0);
      fill(120);
      rect(x,y,15,60);
    }
  }
  //빨간책들 //redbook
  push();
  fill(255, 0, 0);
  rect(300,340,20,60);
  rect(410,440,20,60)
  rect(595,440,20,60)
  rect(995,540,20,60)
  rect(1395,240,20,60)
  rect(230,440)
  pop();

  //초록책들 // greenbook
  push();
  fill(0, 255, 0);
  rect(305,440,15,60)
  rect(660,440,15,60)
  rect(1105,640,15,60)
  rect(1520,440,15,60)
  pop();
  //파란책들 //bluebook
  push();
  fill(0, 0, 255);
  rect(200,540,15,60);
  rect(410,640,15,60);
  rect(750,640,15,60);
  rect(690,240,15,60);
  rect(1090,340,15,60);
  rect(1595,240,15,60);
  rect(1090,640,15,60)
  pop();
  //하얀책들//whitebook
  push();
  fill(255);
  rect(185,340,15,60);
  rect(795,440,15,60)
  rect(1150,240,15,60)
  rect(1520,640,15,60)
  pop();

  
}

function stageclearcondition()
{
  let inp = createInput('');
  inp.position(160,120);
  inp.size(70);
  inp.input(myInputEvent);
}

function mouse()
{
  //쥐 생김새//mouse
  push();
  noStroke();
  fill(0);
  circle(-40, -40, 10);
  fill(100);
  ellipse(-40, -40, 40, 25);
  fill(0);
  circle(-40, -40, 10);
  fill(247, 176, 211);
  circle(-40,-40,5);
  stroke(0);
  strokeWeight(2);
  noFill();
  bezier(
   -40,-40,-40,-40,-40,-40,-40,-40);


  if(callmouse==true){
  push();
  noStroke();
  fill(0);
  circle(windowWidth / 2 - 235, windowHeight / 2 + 270, 10);
  fill(100);
  ellipse(windowWidth / 2 - 250, windowHeight / 2 + 280, 40, 25);
  fill(0);
  circle(windowWidth / 2 - 245, windowHeight / 2 + 270, 10);
  fill(247, 176, 211);
  circle(windowWidth / 2 - 230, windowHeight / 2 + 277, 5);
  stroke(0);
  strokeWeight(2);
  noFill();
  bezier(
    windowWidth / 2 - 270,
    windowHeight / 2 + 280,
    windowWidth / 2 - 275,
    windowHeight / 2 + 265,
    windowWidth / 2 - 280,
    windowHeight / 2 + 290,
    windowWidth / 2 - 290,
    windowHeight / 2 + 275
  );
  }

  if (mouseIsPressed && mouseX > windowWidth / 2 - 290 && mouseX < windowWidth / 2 - 220 && mouseY > windowHeight / 2 + 260 && mouseY < windowHeight / 2 + 285) 
  {
    console.log("hi");
    window.location.href = "stage-3-index.html";
  }
  pop();
}
 
function hint()
{
  //벽에 붙은 단서 쪽지//hint
  push();
  stroke(0);
  fill(255,150,0);
  rect(hint_x,hint_y,hint_width,hint_height);
  pop();

  push();
  stroke(0);
  textSize(5);
  text(" Wouldn't the colors",50,520);
  text("  of the books ",50,525);
  text(" on the bookshelf ",50,530);
  text(" be a clue?s",50,535);
  pop();

  if(mouseIsPressed && mouseX > 40 && mouseX< 100 && mouseY > 500 && mouseY < 670)
  {
    push();
    stroke(0);
    fill(255,150,0);
    rect(hint_x+60,hint_y,170,200);
    pop();
   
   push();
   stroke(0);
   fill(0);
   textSize(16);
   text(" Wouldn't the colors",hint_x+60,540);
   text(" of the books",hint_x+60,560);
   text(" on the bookshelf",hint_x+60,580);
   text(" be a clue?",hint_x+60,600);
   text(" ",hint_x,620);
   pop();
  }
}


//Conditions for moving on to the next stage
function myInputEvent() {
  console.log('you are typing: ', this.value());
  if(this.value()=='5447')
  {
    callmouse=true;
    print('clear!')

  }
}