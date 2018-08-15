'use strict';

function sayHi() {
  console.log(`${this.name} says: maaaaaaaaa`);
}
// constructor for goats
function Goat(name, filename, votes = 0, shown = 0) {
  this.name = name;
  this.filename = filename;
  this.votes = votes;
  this.shown = shown;
  Goat.allGoats.push(this);
}
Goat.allGoats = [];
Goat.totalVotes = 0;
Goat.prototype.sayHi = sayHi;

new Goat('Cruiser', 'img/cruisin-goat.jpg');
new Goat('Kisser', 'img/kissing-goat.jpg');
var goat1 = new Goat('Sassy', 'img/sassy-goat.jpg');
var goat2 = new Goat('Happy', 'img/smiling-goat.jpg');
new Goat('Chilly', 'img/sweater-goat.jpg');

// initialize first two goats being shown
goat1.shown = 1;
goat2.shown = 1;

function displayTwoNewGoats() {
  if (Goat.totalVotes >= 10) {
    displayResults();
  } else {
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
    goat1.shown++;
    goat2.shown++;
  }
}

function displayResults() {
  console.log('done');
  img1.remove();
  img2.remove();
  // need something similar for the numbers
  var namesArray = [];
  var votesArray = [];
  for (var i = 0; i < Goat.allGoats.length; i++) {
    // also add numbers to the new array
    namesArray.push(Goat.allGoats[i].name);
    votesArray.push(Goat.allGoats[i].votes);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of Votes',
        data: votesArray, // these numbers seem important
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            suggestedMax: 6
          }
        }]
      }
    }
  });
}

// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that goat
  goat1.votes++;
  Goat.totalVotes++;
  // goat1.votes = goat1.votes + 1;
  displayTwoNewGoats();
});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that goat
  goat2.votes++;
  Goat.totalVotes++;
  // goat1.votes = goat1.votes + 1;
  displayTwoNewGoats();
});
