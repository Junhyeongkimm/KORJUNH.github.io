var maleLaugh1,
  maleLaugh2,
  maleLaugh3,
  maleLaugh4,
  cartoonLaugh,
  creepyLaugh,
  femaleLaugh1,
  femaleLaugh2,
  kidsLaugh,
  sitcomLaugh;
let button;
let playcheck = 0;
let myFont;
let myFont2;
let USERLIFE = 1;
let hint_x=50,hint_y=500;
let hint_width=50,hint_height=100;
let clearcondition1=false, clearcondition2=false; 


  
//Button laughter music load

function preload() {
  maleLaugh1 = loadSound("sound/malelaugh1.mp3");
  maleLaugh2 = loadSound("sound/malelaugh2.mp3");
  maleLaugh3 = loadSound("sound/malelaugh3.mp3");
  maleLaugh4 = loadSound("sound/malelaugh4.mp3");
  cartoonLaugh = loadSound("sound/cartoonlaugh.mp3");
  creepyLaugh = loadSound("sound/creepylaugh.mp3");
  femaleLaugh1 = loadSound("sound/femalelaugh1.mp3");
  femaleLaugh2 = loadSound("sound/femalelaugh2.mp3");
  kidsLaugh = loadSound("sound/kidslaugh.mp3");
  sitcomLaugh = loadSound("sound/sitcomlaugh.mp3");
  myFont = loadFont ('font/cute.ttf');
  myFont2 = loadFont ('font/font.ttf');
}

function setup() {
  frameRate(30);
  button=createButton("start") 
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  roomobject1();
  StartGame();
  
  if(mouseIsPressed &&mouseX > windowWidth / 2 + 400 &&
  mouseY < height / 2 - 130 &&
  mouseY > height / 2 - 380 )
  {
    clearcondition1=true;
    print('a');
  }   
}
function touchStarted()
{
  getAudioContext().resume();
}


function mouseClicked() {
  if (
    mouseX < windowWidth / 2 - 400 &&
    mouseY < height / 2 - 150 &&
    mouseY > height / 2 - 380
  ) {
    console.log("reached play");
    if (sitcomLaugh.isPlaying()) {
      sitcomLaugh.stop();
    } else {
      sitcomLaugh.play();
    }
  }

  if (
    mouseX > windowWidth / 2 - 350 &&
    mouseX < width / 2 - 150 &&
    mouseY < height / 2 - 130 &&
    mouseY > height / 2 - 380
  ) {
    console.log("reached play");
    if (maleLaugh1.isPlaying()) {
      maleLaugh1.stop();
    } else {
      maleLaugh1.play();
    }
  }

  if (
    mouseX > windowWidth / 2 - 100 &&
    mouseX < width / 2 + 100 &&
    mouseY < height / 2 - 130 &&
    mouseY > height / 2 - 380
  ) {
    console.log("reached play");
    if (cartoonLaugh.isPlaying()) {
      cartoonLaugh.stop();
    } else {
      cartoonLaugh.play();
    }
  }

  if (
    mouseX > windowWidth / 2 + 150 &&
    mouseX < width / 2 + 350 &&
    mouseY < height / 2 - 130 &&
    mouseY > height / 2 - 380
  ) {
    console.log("reached play");
    if (femaleLaugh1.isPlaying()) {
      femaleLaugh1.stop();
    } else {
      femaleLaugh1.play();
    }
  }

  if (
    mouseX > windowWidth / 2 + 400 &&
    mouseY < height / 2 - 130 &&
    mouseY > height / 2 - 380
  ) {
    console.log("reached play");
    if (kidsLaugh.isPlaying()) {
      kidsLaugh.stop();
    } else {
      kidsLaugh.play();
    }
  }

  if (
    mouseX < windowWidth / 2 - 400 &&
    mouseY > height / 2 - 80 &&
    mouseY < height / 2 + 180
  ) {
    console.log("reached play");
    if (femaleLaugh2.isPlaying()) {
      femaleLaugh2.stop();
    } else {
      femaleLaugh2.play();
    }
  }

  if (
    mouseX > windowWidth / 2 - 350 &&
    mouseX < width / 2 - 150 &&
    mouseY > height / 2 - 80 &&
    mouseY < height / 2 + 180
  ) {
    console.log("reached play");
    if (maleLaugh2.isPlaying()) {
      maleLaugh2.stop();
    } else {
      maleLaugh2.play();
    }
  }

  if (
    mouseX > windowWidth / 2 - 100 &&
    mouseX < width / 2 + 100 &&
    mouseY > height / 2 - 80 &&
    mouseY < height / 2 + 180
  ) {
    console.log("reached play");
    if (creepyLaugh.isPlaying()) {
      creepyLaugh.stop();
    } else {
      creepyLaugh.play();
    }
  }

  if (
    mouseX > windowWidth / 2 + 150 &&
    mouseX < width / 2 + 350 &&
    mouseY > height / 2 - 80 &&
    mouseY < height / 2 + 180
  ) {
    console.log("reached play");
    if (maleLaugh3.isPlaying()) {
      maleLaugh3.stop();
    } else {
      maleLaugh3.play();
      maleLaugh3.setVolume(0.1);
    }
  }

  if (
    mouseX > windowWidth / 2 + 400 &&
    mouseY > height / 2 - 80 &&
    mouseY < height / 2 + 180
  ) {
    console.log("reached play");
    if (maleLaugh4.isPlaying()) {
      maleLaugh4.stop();
    } else {
      maleLaugh4.play();
    }
  }
}

function roomobject1() {
  //벽색깔 //wall color
  noStroke();
  fill(255);
  rect(0, 0, width, 700);

  //벽면에 붙어있는 얼굴초상화//wall face
  for (x = windowWidth / 2 - 500; x <= windowWidth / 2 + 500; x += 250) {
    for (y = windowHeight / 2 - 250; y <= windowHeight / 2 + 60; y += 300) {
      noStroke();
      fill(0);
      ellipse(x, y, 200, 250);

      //얼굴초상화들의 랜덤한색깔의 입// wall face mouth
      fill(255);
      rect(x - 30, y - 50, 20, 30);
      rect(x + 10, y - 50, 20, 30);

      fill(232, 125, 179);
      ellipse(x, y + 45, 70, 60);

      noFill();
      stroke(random(200), random(200), 255);
      arc(x, y - 50, 120, 250, 0, PI, CHORD);
    }
  }
  hint();
  mouse();
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
    window.location.href = "stage-2-index.html";
  }
  pop();
}
function hint()
{
  //벽에 붙은 단서 쪽지
  push();
  stroke(0);
  fill(255,150,0);
  rect(hint_x-25,hint_y,hint_width,hint_height);
  pop();

  push();
  stroke(0);
  textSize(5);
  textFont(myFont);
  text(" A man who smiles",50,520);
  text(" when he sees a",50,525);
  text(" boy and a girl",50,530);
  text(" playing together.",50,535);
  text(" ",50,540);
  text(" Just laugh,",50,545);
  text(" keep laughing,",50,550);
  text(" keep smiling",50,555);
  pop();

  if(mouseIsPressed && mouseX > 40 && mouseX< 100 && mouseY > 500 && mouseY < 670)
  {
    push();
    stroke(0);
    fill(255,150,0);
    rect(hint_x+100,hint_y,200,400);
    pop();
   
   push();
   stroke(0);
   fill(0);
   textSize(18);
   text(" A man who smiles",hint_x+175,540);
   text(" when he sees a",hint_x+175,560);
   text(" boy and a girl",hint_x+175,580);
   text(" playing together.",hint_x+175,600);
   text(" ",hint_x,620);
   push();
   textFont(myFont2);
   text(" Just laugh,",hint_x+175,640);
   text(" keep laughing,",hint_x+175,660);
   text(" keep smiling",hint_x+175,680);
   pop();
   pop();
  }
}

function stageclearcondition1()
{
  clearcondition1=true;
  print("kidslaugh")

}
function stageclearcondition2()
{
  clearcondition2=true;
  print("manlaugh")

}

function reset()
{
  playcheck++;
  button.hide();
  USERLIFE=1;
}

function StartGame()
{

  if(playcheck==0)
  {
    background(0);
    push();
    fill(255);
    rect(0,0,width,height);
    fill(0);
    textAlign(CENTER);

    push();
    textFont(myFont);
    textSize(width/30)
    text("MOUSE ESCAPE",width/2, height/2);
    pop();
    push()
    text("if you want to play the game, plz press the button", width/2, height/2+20);
    pop();
    button.center();
    button.position(width/2-40, height/2+30);
    button.mousePressed(reset);
  }
}
