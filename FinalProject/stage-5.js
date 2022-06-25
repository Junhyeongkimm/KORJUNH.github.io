let current_time=0,previous_time=0,interval_time=0, time=0;
let timecheck;
let limittime=60;
let USERLIFE=1;
let button;
let callmouse=false;
let monsterstartsound;
let stagebgm;
let totaltime;
let hintimage;
let flashlight;
let button1, button2, button3;
let condition1=false, condition2=false, condition3=false, condition4=false, condition5=false, condition6=false;
let hint_x=50,hint_y=500;
let myFontl;


function preload()
{
  myFont=loadFont('font/font.ttf')
  flashlight = loadImage('picture/flashlight-2.png');
  hintimage=loadImage('picture/hint2.png')
  passwordimage=loadImage('picture/hin4.png')
  monsterstartsound=loadSound('sound/Monster2.wav')
  stagebgm=loadSound('sound/stage4bgm.mp3')

}

function setup() {
  let r=color(255,0,0);
  let y=color(255,255,0);
  let b=color(0,0,255);

    frameRate(30);
    createCanvas(windowWidth, windowHeight)
    //red button
    button1=createButton('R')
    button1.position(600,500)
    button1.size(100,100)
    button1.style('background-color', r);
    
    //yellow button
    button2=createButton('Y')
    button2.position(800,500)
    button2.size(100,100)
    button2.style('background-color', y);
    
    //blue button
    button3=createButton('B')
    button3.position(1000,500)
    button3.size(100,100)
    button3.style('background-color', b);
    monsterstartsound.play()
    stagebgm.play()
}

function draw() {
    background(50);
    roomobject7();
    
    mouse();
    hint();
    timer();
    
}
function roomobject7() {
    //wall color
    noStroke();
    fill(20);
    rect(0, 0, width, 700); 
    //puzle  
    image(hintimage,650,50,400,300)

    push();
    fill(255,0,0)
    ellipse((width / 2)+100 , 820, 900,  205);
    ellipse(500,800,500,170)
    pop();


    //Conditions for moving on to the next stage
    button1.mousePressed(stageclearcondition1)
    if(condition1==true)
    {
      button2.mousePressed(stageclearcondition2)
    }
    if(condition2==true)
    {
      button2.mousePressed(stageclearcondition3)
    }
    if(condition3==true)
    {
      button3.mousePressed(stageclearcondition4)
    }
    if(condition4==true)
    {
      button2.mousePressed(stageclearcondition5)
    }
    if(condition5==true)
    {
      button1.mousePressed(stageclearcondition6)
    }
}

function mouse()
{
  //mouse Initial Location
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

  //mouse clear location
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
    window.location.href = "stage-6-index.html";
  }
  }
}  

//left timer
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
  if(totaltime==30)
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


//gameover menu
function EndOfGame()
{
  if(USERLIFE<0)
  { 
    button1.hide()
    button2.hide()
    button3.hide()

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
    textFont(myFont)
    push();
    textSize(width/20);
    text("GAME OVER", width/2, height/2);
    pop();
    text("if you want to play the game once again, plz press Button", width/2, height/2+20);
    pop();
  }
}


//stage cleear conditions
function stageclearcondition1()
{
  condition1=true;
  print('codition1')
}

function stageclearcondition2()
{
  condition2=true;
  print('codition2')
}

function stageclearcondition3()
{
  condition3=true;
  print('codition3')
}

function stageclearcondition4()
{
  condition4=true;
  print('codition4')
}

function stageclearcondition5()
{
 condition5=true;
 print('codition5') 
}

function stageclearcondition6()
{
  condition6=true;
  print('codition6')
  callmouse=true;
}

function hint()
{
  //벽에 붙은 단서 쪽지//hint
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
    rect(hint_x+60,hint_y,200,100);
    pop();
   
   push();
   stroke(0);
   fill(0);
   textSize(15);
   text(" Let's take a close look at ",hint_x+150,540);
   text(" the arrow in the picture.",hint_x+145,560);
   pop();
  }
}