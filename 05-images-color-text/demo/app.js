console.log('js linked');

var fruits = ['apple', 'banana', 'cantaloupe', 'durian'];

// gets item from an index of an array
// if that array is too short, gives back last item instead
function getItem(arr, index) {
  // debugger;
  if (index >= arr.length) {
    return arr[arr.length - 1];
  } else {
    return arr[index];
  }
}
