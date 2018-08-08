// when someone clicks on the h1, console.log so we know they clicked it

// WHERE: the first h1 on the page
var allH1s = document.getElementsByTagName('h1');

function logSuccess(e) {
  console.log(`they clicked ${e.target.textContent}`);
}

function alertSuccess() {
  alert('success');
}

for (var i = 0; i < allH1s.length; i++) {
  allH1s[i].addEventListener('click', logSuccess);
}


// firstH1.addEventListener('click', function() {
//   logSuccess();
//   alertSuccess();
// });

// firstH1.addEventListener('click', function() {
//   console.log('they clicked it');
// });
