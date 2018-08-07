console.log('js loaded');

// global variables
var myName = 'Michelle';


// set up instance methods that I will attach to the constructor

// add one person's info to the page
function addInfo() {
  var tbody = document.getElementById('main-content');
  var personInfo = document.createElement('tr');
  var personName = document.createElement('td');
  var personShoeSize = document.createElement('td');
  var personEyeColor = document.createElement('td');
  var personShirtColor = document.createElement('td');
  personName.className = 'blue';

  personName.textContent = this.name;
  personShoeSize.textContent = this.shoeSize;
  personEyeColor.textContent = this.eyeColor;
  personShirtColor.textContent = this.shirtColor;
  personInfo.appendChild(personName);
  personInfo.appendChild(personShoeSize);
  personInfo.appendChild(personEyeColor);
  personInfo.appendChild(personShirtColor);
  tbody.appendChild(personInfo);
}

// one person starts the class
function startTheClass() {
  console.log('Hello! My name is ' + this.name + '. Let\'s talk about ' + this.classTopic + '.');
}

// set up a constructor
function Person(name, shoeSize, eyeColor, shirtColor) {
  this.name = name;
  this.shoeSize = shoeSize;
  this.eyeColor = eyeColor;
  this.shirtColor = shirtColor;
  this.addInfo = addInfo; // BAD DON'T DO THIS
}
Person.prototype.addInfo = addInfo;
Person.prototype.startClass = startTheClass;



// runner code: actually do stuff
var me = new Person('Michelle', 10, 'blue', 'gray');
var justin = new Person('Justin', 11.5, 'green', 'gray');
var heading = document.getElementById('header');
var h2 = document.createElement('h2');
h2.textContent = 'we made this h2';
heading.appendChild(h2);

me.addInfo();
justin.addInfo();



// zombie code from yesterday



// var justin = {
//   name: 'Justin',
//   shoeSize: 11.5,
//   eyeColor: 'green',
//   shirtColor: 'gray',
//   startClass: startTheClass,
//   addInfo: addPersonInfo
// };



// add one person's info to the page
// function addPersonInfo(person) {
//   var ul = document.getElementById('main-content');
//   var personInfo = document.createElement('li');
//   var personNameDiv = document.createElement('div');
//   var personShoeSizeDiv = document.createElement('div');

//   personNameDiv.textContent = person.name;
//   personShoeSizeDiv.textContent = 'shoe size: ' + person.shoeSize;
//   personInfo.appendChild(personNameDiv);
//   personInfo.appendChild(personShoeSizeDiv);
//   ul.appendChild(personInfo);
// }

// addPersonInfo(me);
// addPersonInfo(justin);


// // add one person's info to the page
// function addPersonInfo() {
//   var ul = document.getElementById('main-content');
//   var personInfo = document.createElement('li');
//   var personNameDiv = document.createElement('div');
//   var personShoeSizeDiv = document.createElement('div');

//   personNameDiv.textContent = this.name;
//   personShoeSizeDiv.textContent = 'shoe size: ' + this.shoeSize;
//   personInfo.appendChild(personNameDiv);
//   personInfo.appendChild(personShoeSizeDiv);
//   ul.appendChild(personInfo);
// }