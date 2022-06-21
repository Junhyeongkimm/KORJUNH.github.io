console.log("mouse");
let t;
let myFont;
let flashlight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  intro2.play ();
}


function preload() {
  myFont = loadFont('font/font.ttf');
  flashlight = loadImage('picture/flashlight-2.png');

  laugh = loadSound('sound/originallaugh.mp3');
  distortOne = loadSound('sound/distortedlaugh1.mp3');
  distortTwo = loadSound('sound/distortedlaugh2.mp3');
  distortThree = loadSound('sound/distortedlaugh3.mp3');
  distortFour = loadSound('sound/distortedlaugh4.mp3')
  distortFive = loadSound('sound/distortedlaugh5.mp3');
  distortSix = loadSound('sound/distortedlaugh6.mp3');
  distortSeven = loadSound('sound/distortedlaugh7.mp3');
  distortEight = loadSound('sound/distortedlaugh8.mp3');
  intro2 = loadSound('sound/escaperoomintro.m4a');


}


function draw() {
  // 바닥
  if (mouseIsPressed && mouseX > (width / 2) - 300 && mouseX < (width / 2) + 170 && mouseY > (height / 2) + 250) {
    background(random(200), random(200), 255);
  } else {
    background(0);
  }

  //왼쪽 벽// left wall
  fill(50);
  noStroke();
  rect(0, 0, (width / 4), (3 * height / 4));
  triangle(0, (3 * height / 4), (width / 4), (3 * height / 4), 0, (3.8 * height / 4));

  //오른쪽 벽 // right wall
  fill(100);
  rect((width / 4), 0, (3 * width / 4), (3 * height / 4));
  triangle((width / 4), (3 * height / 4), (width), (3 * height / 4), (width), (7 * height / 8));

  //왼쪽 벽에 붙어 있는 눈 // left wall eyes
  for (eyesX = (width / 32); eyesX <= (width / 4); eyesX += 50) {
    for (eyesY = (height / 32); eyesY <= (height / 2.5); eyesY += 50) {
      noFill();
      stroke(0);
      strokeWeight(3);
      arc(eyesX, eyesY, 40, 30, 0, PI);
    }
  }

  //가운데에 붙어 있는 버튼 위 빨간 글씨 // escape button
  fill('red');
  noStroke();
  textSize(width / 30);
  textFont(myFont);
  text('escape', (3 * width / 10), (5.5 * height / 10));
  text('here', (3 * width / 10), (6.2 * height / 10));

  //가짜탈출 버튼 // fake escape button
  push();
  translate((0.2 * width / 10), (-0.2 * height / 10));
  fill(200);
  rect((width / 2) - 70, (height / 2) + 70, 100, 120);
  fill(random(255), random(255), 255);
  circle((width / 2) - 20, (height / 2) + 130, 50);
  pop();

  warning();

  // 입 // mouth
  push();
  translate((0.5 * width / 10), (0.2 * height / 10));
  noStroke();
  fill(150);
  circle((width / 2) + 365, (height / 2) + 360, 10);
  fill(255);
  ellipse((width / 2) + 350, (height / 2) + 370, 40, 25);
  fill(150);
  circle((width / 2) + 355, (height / 2) + 360, 10);
  fill(247, 176, 211);
  circle((width / 2) + 370, (height / 2) + 367, 5);
  stroke(200);
  strokeWeight(2);
  noFill();
  bezier((width / 2) + 330, (windowHeight / 2) + 370, (width / 2) + 325, (height / 2) + 365, (width / 2) + 320, (height / 2) + 390, (width / 2) + 310, (height / 2) + 375);
  pop();

  //
  image(flashlight, mouseX - 3000, mouseY - 3000);
}


function mousePressed() {
  //바닥 사운드
  if (mouseX > (width / 2) - 300 && mouseX < (width / 2) + 170 && mouseY > (height / 2) + 250) {
    distortEight.play();
  }

  //얼굴 사운드
  if (mouseX > (width / 3) - 50 && mouseY < (height / 5) + 250 && mouseX < (width / 3) + 275) {
    distortFour.play();
  }

  // 왼쪽벽 눈 사운드
  if (mouseX < width / 4 && mouseY < height / 2.5) {
    distortOne.play();
  }

  //왼쪽 가장 아래 사운드
  if (mouseX < (width / 4) && mouseY < (3 * height / 4) && mouseY > height / 2.5) {
    distortTwo.play();
  }

  //오른쪽 가장 위 사운드
  if (mouseX > (6.5 * width / 10) && mouseY < (2.3 * height / 10)) {
    distortSix.play();
  }

  //깜빡이는 눈들 사운드
  if (mouseX > (6.5 * width / 10) && mouseY > (2.5 * height / 9) && mouseY < (3 * height / 4)) {
    distortSeven.play();
  }

  if (mouseX > (3 * width / 10) && mouseX < (6.5 * width / 10) && mouseY > (5.5 * height / 10) && mouseY < (7.2 * height / 10)) {
    distortThree.play();
  }


  if (mouseX > (4 * width / 10) && mouseX < (6 * width / 10) && mouseY > (5.5 * height / 10) && mouseY < (7.2 * height / 10)) {
    distortFive.play();
  }

  //쥐
  if (mouseX > (7 * width / 10) && mouseY > (8.5 * height / 10)) {
    console.log('reached play');
    laugh.play();
    window.location.href = "ending-index.html";
  }

}


//클릭시 나타나는 글씨들
function warning() {
  fill('red');
  noStroke();
  textFont(myFont);

  //응 속았징
  if (mouseIsPressed && mouseX > (4 * width / 10) && mouseX < (6 * width / 10) && mouseY > (5.5 * height / 10) && mouseY < (7.2 * height / 10)) {
    textSize(width / 30);
    text('just', (5.55 * width / 10), (6.5 * height / 10));
    text('kidding', (5.55 * width / 10), (7 * height / 10));
  }

  //너는 탈출하지 못행
  if (mouseIsPressed && mouseX > (6.5 * width / 10) && mouseY < (2.3 * height / 10)) {
    textSize(width / 25);  
    text('you', (8.5 * width / 10), (height / 10));
    text('cannot', (6.5 * width / 10), (1.6 * height / 10));
    text('escape', (7 * width / 10), (2.3 * height / 10));
  }

  // 너는 우리가 항상 지켜볼겨
  if (mouseIsPressed && mouseX < (width / 4) && mouseY < (3 * height / 4) && mouseY > height / 2.5) {
    textSize(width / 20);
    text('we', width / 32, (height / 2));
    text('are', width / 10, 5.5 * height / 10);
    textSize(width / 25);
    text('always', width / 50, (6 * height / 10));
    for (textY = (6.5 * height / 10); textY <= (3 * height / 4); textY += height / 25) {
      text('watching', width / 50, textY);
    }
  }

  // 왼쪽눈들 색깔
  if (mouseIsPressed && mouseX < width / 4 && mouseY < height / 2.5) {
    for (eyesPressedX = (width / 32); eyesPressedX <= (width / 4); eyesPressedX += 50) {
      for (eyesPressedY = (height / 32); eyesPressedY <= (height / 2.5); eyesPressedY += 50) {
        noFill();
        stroke(0);
        strokeWeight(4);
        ellipse(eyesPressedX, eyesPressedY, 40, 30);
        stroke(random(255), random(255), random(255));
        circle(eyesPressedX, eyesPressedY, 15);
        stroke(150);
      }
    }
  }

  //오른쪽 벽 눈들의 깜박거림
  for (blinkX = (6.5 * width / 9); blinkX < (9.5 * width / 10); blinkX += 95) {
    for (blinkY = (height / 3); blinkY < (3 * height / 4); blinkY += 95) {

      if (mouseIsPressed && mouseX > (6.5 * width / 10) && mouseY > (2.5 * height / 9) && mouseY < (3 * height / 4)) {
        stroke(0);
        strokeWeight(2);
        line(blinkX - 30, blinkY + 40, blinkX - 20, blinkY + 30);
        line(blinkX, blinkY + 50, blinkX, blinkY + 30);
        line(blinkX + 30, blinkY + 40, blinkX + 20, blinkY + 30);
        fill(0);
        noStroke();
        circle(blinkX, blinkY, 70);
      } else {
        stroke(0);
        strokeWeight(2);
        line(blinkX - 30, blinkY - 40, blinkX - 20, blinkY - 30);
        line(blinkX, blinkY - 50, blinkX, blinkY - 30);
        line(blinkX + 30, blinkY - 40, blinkX + 20, blinkY - 30);
        fill(0);
        noStroke();
        circle(blinkX, blinkY, 70);
        fill(255);
        ellipse(blinkX, blinkY, 15, 70);
      }

    }
  }
  
  //얼굴
    push();
  eyeLeftX = constrain(map(mouseX, 0, width, (width / 2) - 120, (width / 2) - 60), (width / 2) - 120, (width / 2) - 60);
  eyeLeftY = constrain(map(mouseY, 0, height, (height / 4) - 40, (height / 4) - 20), (height / 4) - 40, (height / 4) - 20);
  eyeRightX = constrain(map(-mouseX + 400, 0, width, (width / 2), (width / 2) + 80), (width / 2), (width / 2) + 80);
  eyeRightY = constrain(map(mouseY, 0, height, (height / 4) - 40, (height / 4) - 20), (height / 4) - 40, (height / 4) - 20);
  mouthX = constrain(mouseX, 0, 200);
  mouthY = constrain(mouseY, 0, 200);

  //눈동자 색깔 변경
  fill(255);
  ellipse((width / 2) - 95, (height / 4) - 20, 85, 45);
  ellipse((width / 2) + 25, (height / 4) - 20, 85, 45);

  // 눈 모양
  if (mouseIsPressed && mouseX > (width / 3) - 50 && mouseY < (height / 5) + 250 && mouseX < (width / 3) + 275) {
    fill(255, 0, 0);
  } else {
    fill(50, 149, 168);
  }
  ellipse(eyeLeftX, eyeLeftY, 30, 30);
  ellipse(eyeRightX, eyeRightY, 30, 30);
  fill(0);
  ellipse(eyeLeftX, eyeLeftY, 6.5, 6.5);
  ellipse(eyeRightX, eyeRightY, 6.5, 6.5);

  if (mouseIsPressed && mouseX > (width / 3) - 50 && mouseY < (height / 5) + 250 && mouseX < (width / 3) + 275) {
    //클릭시 변하는 눈
    fill(0);
    ellipse(eyeLeftX - 7.5, eyeLeftY - 7.5, 5, 5);
    ellipse(eyeLeftX + 7.5, eyeLeftY - 7.5, 5, 5);
    ellipse(eyeLeftX, eyeLeftY + 9, 5, 5);
    ellipse(eyeRightX - 7.5, eyeRightY - 7.5, 5, 5);
    ellipse(eyeRightX + 7.5, eyeRightY - 7.5, 5, 5);
    ellipse(eyeRightX, eyeRightY + 9, 5, 5);

    //클릭시 입 상태
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(10);
    line((width / 2) - 70, (height / 3), (width / 2) - 70, (height / 2));
    fill(255, 0, 0);
    ellipse((width / 2) - 35, (height / 3), mouthX / 2, mouthY / 15);
  } else {
    //기본 입 상태
    fill(255);
    ellipse((width / 2) - 35, (height / 3), mouthX / 2, mouthY / 15);
  }
  pop();
}
