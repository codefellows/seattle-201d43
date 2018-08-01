'use strict';

console.log('js loaded');

// for loops best for going through arrays/doing something a fixed number of times

// for(setup ; condition ; increment) {
//   do this thing until the condition is false
// }

// while (condition) {
//   keep going until the condition is false
// }
/* i++  is the same as i = i + 1 */

var fruits = ['apple', 'banana', 'canteloupe', 'dragonfruit'];

//for()
for(var i = 1; i < 11; i = i + 1) {
  console.log('i is ' + i);

}


// the same thing, but as a while loop!
var j = 1;
while(j < 11) {
  console.log('j is ' + j);
  j = j + 1;
  // or, j++;
}

for (var i = 0; i < fruits.length; i++) {
  var answer = '';
  while (answer !== 'yes') {
    answer = prompt('Do you like ' + fruits[i] + '?');
  }
}

for (var i = 0; i < fruits.length; i++) {
  if (i % 2 === 0) {
    console.log(fruits[i] + 's');
  }
}

for (var i = 0; i < fruits.length; i = i + 2) {
  console.log(fruits[i] + 's');
}

// var ready = false;
// // while (ready === false) {
// while(!ready) {
//   ready = confirm('are you ready to see the page?');
// }

