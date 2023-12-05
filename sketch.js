let currentlyDoing = 'request'

let workingSites = ['stackoverflow.com','github.com']
let playingSites = ['scratch.mit.edu','youtube.com']

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  background(255)
  text('currentlyDoing: ' + currentlyDoing, 10, 20)
  text('workingSites: ' + workingSites, 10, 40)
  text('playingSites: ' + playingSites, 10, 60)
}