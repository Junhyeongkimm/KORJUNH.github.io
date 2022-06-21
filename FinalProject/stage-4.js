function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight)
};

function draw() {
  background(70);
  roomobject5();
  mouse();
  //EndOfGame();
}
function roomobject5() {
  //벽색깔 //wall color
  noStroke();
  fill(55);
  rect(0, 0, width, 700);
}

function mouse()
{
  //쥐 생김새//mouse
  push();
  noStroke();
  fill(0);
  circle(windowWidth / 2 - 235, windowHeight / 2 + 260, 10);
  fill(100);
  ellipse(windowWidth / 2 - 250, windowHeight / 2 + 270, 40, 25);
  fill(0);
  circle(windowWidth / 2 - 245, windowHeight / 2 + 260, 10);
  fill(247, 176, 211);
  circle(windowWidth / 2 - 230, windowHeight / 2 + 267, 5);
  stroke(0);
  strokeWeight(2);
  noFill();
  bezier(
    windowWidth / 2 - 270,
    windowHeight / 2 + 270,
    windowWidth / 2 - 275,
    windowHeight / 2 + 265,
    windowWidth / 2 - 280,
    windowHeight / 2 + 290,
    windowWidth / 2 - 290,
    windowHeight / 2 + 275
  );

  if (mouseIsPressed && mouseX > windowWidth / 2 - 290 && mouseX < windowWidth / 2 - 220 && mouseY > windowHeight / 2 + 260 && mouseY < windowHeight / 2 + 275) 
  {
    console.log("hi");
    window.location.href = "stage-5-index.html";
  }
  pop();
}

function reset()
{
  playcheck++;
  button.hide();
  USERLIFE=1;
}
// function EndOfGame()
// {
//   if(USERLIFE<0)
//   {
//     background(0);
//     push();
//     fill(0);
//     rect(0,0,width,height);
//     fill(255,0,100);
//     textAlign(CENTER);
//     textFont(myFont2)
//     push();
//     textSize(width/20);
//     text("GAME OVER", width/2, height/2);
//     pop();
//     text("if you want to play the game once again, plz press Button", width/2, height/2+20);
//     pop();
//   }
//   if(playcheck==0)
//   {
//     background(0);
//     push();
//     fill(255);
//     rect(0,0,width,height);
//     fill(0);
//     textAlign(CENTER);
//     textFont(myFont);
//     push();
//     textSize(width/30)
//     text("MOUSE ESCAPE",width/2, height/2);
//     pop();
//     push()
//     text("if you want to play the game, plz press the button", width/2, height/2+20);
//     pop();
//     button.center();
//     button.position(width/2-40, height/2+30);
//     button.mousePressed(reset);
//   }
// }
