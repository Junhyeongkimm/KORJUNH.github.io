let current_time=0,previous_time=0,interval_time=0, time=0;
let timecheck;
let limittime=90;
let USERLIFE=1;
let myFont2;
let passwordimage;
let button;
let inp=0;
let callmouse=false;
let monsterstartsound;
let stagebgm;
let totaltime;
let hint_x=50,hint_y=500;

function preload()
{
  myFont2=loadFont('font/font.ttf')
  passwordimage=loadImage('picture/hin4.png')
  monsterstartsound=loadSound('sound/Monster2.wav')
  stagebgm=loadSound('sound/stage4bgm.mp3')

}


function stageclearcondition1()
{
  let inp = createInput('');
  inp.position(730,610);
  inp.size(70);
  inp.input(myInputEvent);
}


function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight)
  stageclearcondition1();
  monsterstartsound.play()
  stagebgm.play()
};

function draw() {
  background(70);
  roomobject4();
  push();
  fill(255);
  textSize(15)
  text("Please enter Password.",800,600);
  pop();
  mouse();
  hint();
  timer();
}
function roomobject4() {
  //벽색깔 //wall color
  noStroke();
  fill(55);
  rect(0, 0, width, 700);
  push()
  fill(255, 0, 0);
  ellipse((width / 2), 850, width/2, height/4);
  ellipse(300, 850, width/2, 200);
  pop();

  pictureframe1();


}

function pictureframe1()
{
  fill(51,0,0);
  rect(700,200,300,300)

  fill(255,255,100);
  rect(725,225,250,250)
  image(passwordimage,725,225,250,250)
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
  if (mouseIsPressed && mouseX > windowWidth / 2 - 290 && mouseX < windowWidth / 2 - 220 && mouseY > windowHeight / 2 + 260 && mouseY < windowHeight / 2 + 285) 
  {
    console.log("hi");
    window.location.href = "stage-5-index.html";
  }
  }

  pop();
}

function hint()
{
  //hint
  push();
  stroke(0);
  fill(255,0,0);
  rect(hint_x-20,hint_y+10,50,30);
  pop();

  push();
  stroke(0);
  fill(0)
  textSize(5);
  text(" ~~~~~~~~~~~ ",50,520);
  text(" ~~~~~~~~~~~ ",50,525);
  text(" ~~~~~~~~~~~ .",50,530);
  pop();

  if(mouseIsPressed && mouseX > 40 && mouseX< 100 && mouseY > 500 && mouseY < 670)
  {
    push();
    stroke(0);
    fill(255,0,0);
    rect(hint_x+60,hint_y,400,200);
    pop();
   
   push();
   stroke(0);
   fill(0);
   textSize(15);
   text(" Based on the horizontal line in the picture,",hint_x+220,540);
   text(" the upper circle has a value of 5",hint_x+185,560);
   text(" and the lower circle has a value of 1.",hint_x+200,580);
   text(" The value is then calculated based on",hint_x+200,600);
   text(" whether the circle is attached to the horizon.",hint_x+225,620);
   pop();
  }
}


// left timer
function timer() 
{
  current_time = millis();
  if(time==0){
    timecheck=millis()
    interval_time=current_time-previous_time-timecheck;

  }
  else
  {
    interval_time=current_time-previous_time-timecheck;
  }
  time++;
  interval_time = int(interval_time/1000);
  totaltime=limittime-interval_time;

  textAlign(CENTER);
  textSize(30);
  fill(255,30,40);
  text('TIME:', 45, 35);
  text(totaltime, 115, 35);
  
  //the roar of a monster
  if(totaltime==80)
  {
    monsterstartsound.play()
  }
  if(totaltime==60)
  {
    monsterstartsound.play()
  }
  if(totaltime==40)
  {
    monsterstartsound.play()
  }

//gameover condition
  if(totaltime < 0)
  {
    USERLIFE-=2;
    EndOfGame();
  }
}

function restart()
{
  console.log("hi");
  window.location.href = "index.html";
}


//game over mene
function EndOfGame()
{
  if(USERLIFE<0)
  {
    push();
    button=createButton("restart")
    button.position(windowWidth/2, windowHeight/2+50);
    button.mousePressed(restart); 
    pop();
    background(0);
    push();
    fill(0);
    rect(0,0,width,height);
    fill(255,0,100);
    textAlign(CENTER);
    textFont(myFont2)
    push();
    textSize(width/20);
    text("GAME OVER", width/2, height/2);
    pop();
    text("if you want to play the game once again, plz press Button", width/2, height/2+20);
    pop();
  }
}

//Conditions for moving on to the next stage
function myInputEvent() {
  console.log('you are typing: ', this.value());
  if(this.value()=='3976')
  {
    callmouse=true;
    print('clear!')

  }
}
