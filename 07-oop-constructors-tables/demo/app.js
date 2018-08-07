console.log('js loaded');

function startTheClass() {
  console.log('Hello! My name is ' + this.name + '. Let\'s talk about ' + this.classTopic + '.');
}

var myName = 'Michelle';

var justin = {
  name: 'Justin',
  shoeSize: 11.5,
  eyeColor: 'green',
  shirtColor: 'gray',
  startClass: startTheClass,
  classTopic: 'puppies',
  addInfo: addPersonInfo
};

var me = {
  name: myName,
  shoeSize: 10,
  eyeColor: 'blue',
  shirtColor: 'black',
  startClass: startTheClass,
  classTopic: 'Objects',
  tas: [justin,
    {
      name: 'joana',
      shoeSize: 7.5
    },
    {
      name: 'suzanne',
      shoeSize: 7
    }],
  addInfo: addPersonInfo
};

var heading = document.getElementById('header');
var h2 = document.createElement('h2');
h2.textContent = 'we made this h2';
heading.appendChild(h2);


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

// add one person's info to the page
function addPersonInfo() {
  var tbody = document.getElementById('main-content');
  var personInfo = document.createElement('tr');
  var personName = document.createElement('td');
  var personShoeSize = document.createElement('td');
  var personEyeColor = document.createElement('td');
  var personShirtColor = document.createElement('td');

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

me.addInfo();
justin.addInfo();
