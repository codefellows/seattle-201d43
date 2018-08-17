/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cartItems = JSON.parse(localStorage.getItem('cart')).items || [];
var cart = new Cart(cartItems);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var product of Product.allProducts) {
    var opt = document.createElement('option');
    opt.textContent = product.name;
    opt.value = Product.allProducts.indexOf(product);
    selectElement.appendChild(opt);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  var pickedItem = Product.allProducts[parseInt(document.getElementById('items').value)];
  // DONE: get the quantity
  var quantity = parseInt(document.getElementById('quantity').value);
  // DONE: using those, add one item to the Cart
  cart.addItem(pickedItem, quantity);
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var totalQuantity = 0;
  for (var i = 0; i < cart.items.length; i++) {
    totalQuantity += cart.items[i].quantity;
  }
  document.getElementById('itemCount').textContent = totalQuantity;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
updateCounter();
