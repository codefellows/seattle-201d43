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
var goat1 = new Goat('img/sassy-goat.jpg');
var goat2 = new Goat('img/smiling-goat.jpg');
new Goat('img/sweater-goat.jpg');

function displayTwoNewGoats() {
  // show new pictures to user
  // grab 2 goats at random
  var randIndex = Math.floor(Math.random() * Goat.allGoats.length);
  goat1 = Goat.allGoats[randIndex];
  do {
    var secondGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
  } while (randIndex === secondGoatIndex);
  goat2 = Goat.allGoats[secondGoatIndex];
  // change img src on the page to match the 2 new goats
  img1.src = goat1.filename;
  img2.src = goat2.filename;
}

// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that goat
  goat1.votes++;
  // goat1.votes = goat1.votes + 1;
  displayTwoNewGoats();
});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that goat
  goat2.votes++;
  // goat1.votes = goat1.votes + 1;
  displayTwoNewGoats();
});
