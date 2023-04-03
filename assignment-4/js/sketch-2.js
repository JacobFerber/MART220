// sketch-2.js
import { Sandwich } from './sandwich.js';
let images = [];
let characterObject;
let timerValue = 0;
let i = 0;

function preload() {
  images = loadStrings("./assets/Idle.txt");
}

// Import the Sandwich class from sandwich.js


// Define a function to randomly generate sandwich objects
function generateSandwiches(numSandwiches) {
  let sandwiches = [];
  for (let i = 0; i < numSandwiches; i++) {
    let x = random(width);
    let y = random(height);
    sandwiches.push(new Sandwich(x, y));
  }
  return sandwiches;
}

// Call the generateSandwiches function with a random number of sandwiches
let mySandwiches = generateSandwiches(Math.floor(random(1, 6)));

function setup() {
  createCanvas(800, 480);
  setInterval(displayCounter, 60);
  characterObject = new characterClass(images);
}

function draw() {
  background(220);
  for (let i = 0; i < mySandwiches.length; i++) {
    mySandwiches[i].display();
  }
  characterObject.draw(i);
}

function displayCounter() {
  i++;
  if (i > 9) {
    i = 0;
  }
} 