'use strict';

// constructor for goats
function Goat(filename) {
  this.filename = filename;
  this.votes = 0;
  Goat.allGoats.push(this);
}
Goat.allGoats = [];

new Goat('img/cruisin-goat.jpg');
new Goat('img/kissing-goat.jpg');
new Goat('img/sassy-goat.jpg');
new Goat('img/smiling-goat.jpg');
new Goat('img/sweater-goat.jpg');
