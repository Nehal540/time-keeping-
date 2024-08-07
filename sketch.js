let timerDuration = 10; // Timer duration in seconds
let startTime;
let timerRunning = false;

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(32);
  startTime = millis(); // Initialize start time
}

function draw() {
  background(220);
  
  if (timerRunning) {
    let elapsedTime = millis() - startTime; // Time elapsed since the timer started
    let remainingTime = timerDuration * 1000 - elapsedTime; // Time left in milliseconds
    
    if (remainingTime <= 0) {
      remainingTime = 0;
      timerRunning = false; // Stop the timer when it reaches 0
    }
    
    let seconds = Math.floor(remainingTime / 1000);
    let milliseconds = remainingTime % 1000;
    
    text(nf(seconds, 2) + "." + nf(Math.floor(milliseconds / 10), 2), width / 2, height / 2);
  } else {
    text("Press SPACE to start", width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === ' ') {
    startTime = millis(); // Reset start time
    timerRunning = true; // Start the timer
  }
}