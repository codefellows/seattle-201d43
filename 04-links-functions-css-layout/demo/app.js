console.log('js linked');

// var name = prompt('what is your name?');
// console.log('name is ' + name);
// var shoeSize = prompt('what is your shoe size?');
// console.log('shoe size is ' + shoeSize);
// var catName = prompt('what is your cat\'s name?');
// console.log('cat\'s name is ' + catName);


// makes a string plural by adding an 's' to the end
// parameter: a string (the word to pluralize)
// returns: string, the input with an s on the end
function pluralize(word) {
  return word + 's';
  // var pluralWord = word + 's';
  // return pluralWord;
}


// get one piece of data in a prompt and log the result
// parameter: data, a string of what to prompt for
// returns a string, the thing the user entered
function collectData(data) {
  var answer = prompt('what is your ' + data + '?');
  console.log(data + ' is ' + answer);
  return answer;
}
var data = ['name', 'shoe size', 'cat\'s name'];


function collectMuchData(infoArr) {
  for(var i = 0; i < infoArr.length; i++) {
    collectData(infoArr[i]);
  }
}

collectMuchData(['name', 'shoe size', 'cat\'s name']);
collectMuchData(['bench press weight', '']);

// collectData(data[0]);
// collectData(data[1]);
// collectData(data[2]);

// for(var i = 0; i < data.length; i++) {
//   var answer = prompt('what is your ' + data[i] + '?');
//   console.log(data[i] + ' is ' + answer);
// }