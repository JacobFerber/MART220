// sandwich.js

class Sandwich {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = random(70, 100);
      this.height = random(50, 80);
    }
  
    // Method to display the sandwich object
    display() {
      push();
      translate(this.x, this.y);
      fill(255, 204, 51); // yellow bread
      rect(0, 0, this.width, this.height, 10);
  
      fill(255, 255, 0); // cheese
      rect(10, this.height / 3, this.width - 20, this.height / 3);
  
      fill(153, 102, 51); // meat
      rect(this.width / 5, this.height / 6, this.width / 3, this.height / 1.5);
  
      fill(255); // mayo
      for (let i = 0; i < 5; i++) {
        let x = random(this.width / 2);
        let y = random(this.height / 2);
        ellipse(x, y, this.width / 10, this.height / 8);
      }
      pop();
    }
  }