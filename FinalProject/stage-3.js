let hint_x=50,hint_y=500;
let myFont;
let img;
let inp=0;
let callmouse=false;
const PASSWORD='password';
let gImages={};

function preload()
{
  myFont=loadFont ('font/font.ttf');
  gImages[PASSWORD]=loadImage('picture/password picture.png')
}

function setup() {
    frameRate(30);
    createCanvas(windowWidth, windowHeight)
    stageclearcondition();
};

function draw() {
    background(70);
    roomobject3();
    push();
    fill(0);
    text("Please enter Password.",160,610);
    pop();
    hint();
    mouse();
    // 가운대 액자 사진
    image(gImages[PASSWORD],475,325,150,150)
}
function roomobject3() {
    //벽색깔 //wall color
    noStroke();
    fill(105);
    rect(0, 0, width, 700);
    
    pictureframe1();
    pictureframe2();
    pictureframe3();
    pictureframe4();  
    pictureframe5();
    
  
}

function stageclearcondition()
{
  let inp = createInput('');
  inp.position(160,620);
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
    window.location.href = "stage-4-index.html";
  }
  pop();
}

function hint()
{
  //벽에 붙은 단서 쪽지
  push();
  stroke(0);
  fill(255,150,0);
  rect(hint_x,hint_y+10,50,30);
  pop();

  push();
  stroke(0);
  textSize(5);
  text(" figure something out",50,520);
  text(" if I use the stuff",50,525);
  text(" on the floor.",50,530);
  pop();

  if(mouseIsPressed && mouseX > 40 && mouseX< 100 && mouseY > 500 && mouseY < 670)
  {
    push();
    stroke(0);
    fill(255,150,0);
    rect(hint_x+60,hint_y,260,150);
    pop();
   
   push();
   stroke(0);
   fill(0);
   textSize(22);
   textFont(myFont);  
   text(" figure something out",hint_x+60,540);
   text(" if I use the stuff",hint_x+60,580);
   text(" on the floor.",hint_x+60,620);
   pop();
  }
}

function pictureframe1()
{
  fill(51,0,0);
  rect(100,100,300,300)

  fill(255,255,100);
  rect(125,125,250,250)
}

function pictureframe2()
{
  fill(30,0,0);
  rect(450,300,200,200)

  fill(255,255,100);
  rect(475,325,150,150)
}


function pictureframe3()
{
  fill(30,0,0);
  rect(700,200,400,400)

  fill(255,255,100);
  rect(725,225,350,350)
}

function pictureframe4()
{
  fill(30,0,0);
  rect(1200,350,300,300)

  fill(255,255,100);
  rect(1225,375,250,250)
}

function pictureframe5()
{
  fill(30,0,0);
  rect(1200,75,400,200)

  fill(255,255,100);
  rect(1225,100,350,150)
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
  if(this.value()=='5474')
  {
    callmouse=true;
    print('clear!')

  }
}



