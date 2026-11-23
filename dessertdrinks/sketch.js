let ballX= 300;
let ballY= 300;
let ballSize= 80;
let score= 0;
let gameState = "START";
let img;

async function setup() {
  createCanvas(600, 600);
  
  textAlign(CENTER);
  textSize(20);
  
  img=await loadImage("boba.png");
  imageMode (CENTER);
}

function draw() {
  background(215, 211, 240);
  if (gameState == "START") {
    startScreen();
  }
  if (gameState == "L1") {
    levelOne();
    fill(71, 66, 102);
  }
  if (gameState == "L2") {
    levelTwo();
    ballSize=40;
    fill(217, 151, 52);
  }
  if (gameState == "L3") {
    levelThree();
    ballSize=50;
  }
  if (gameState == "WIN") {
    winScreen();
  }
  text("Toppings Eaten:" + score, width/2, 40);
}

function startScreen() {
  background(215, 231, 252);
  fill(61, 85, 117)
  text("Dessert Drinks", width/2, height/2 - 30);
  text("Press any key to start", width/2, height/2+10);
  if (keyIsPressed) {
    gameState = "L1";
  }
}

function levelOne() {
  text("Taro Milk Tea", width/2, height-20)
  let distToBall = dist(ballX, ballY, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }
  if (score >= 5) {
    gameState = "L2"
  }
  image(img, ballX, ballY, ballSize, ballSize)
}

function levelTwo() {
  background(247, 226, 190);
  text("Mango Sago", width/2, height-20);
  let distToBall = dist(ballX, ballY, mouseX, mouseY);
  
  if (distToBall < ballSize/2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }
  if (score >= 10) {
    gameState = "L3"
  }
  //line (ballX, ballY, mouseX, mouseY);
  fill(250, 191, 90);
  stroke(250, 191, 90);
  circle(ballX, ballY, ballSize);
}

function levelThree() {
  background(223, 247, 232);
  text("Buko Pandan", width/2, height-20);
  let distToBall = dist(ballX, ballY, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
    ballSize=ballSize - 2;
  }
  if (score >=15) {
    gameState="WIN";
  }
  fill(53, 161, 93);
  stroke(53, 161, 93);
  square(ballX, ballY, ballSize)
}

function winScreen() {
  background(215, 231, 252);
  fill(61, 85, 117);
  stroke(61, 85, 117);
  text("Finished!", width/2, height/2);
}