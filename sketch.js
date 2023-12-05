function setup() {
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  if(width > height) {
    textSize(height / 32)
  } else {
    textSize(width / 32)
  }
  
  textAlign(CENTER,CENTER)
  
  text("hello", width / 2, height / 2)
}
