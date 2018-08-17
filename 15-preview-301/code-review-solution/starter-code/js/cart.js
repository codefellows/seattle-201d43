/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')).items || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = document.getElementsByTagName('tbody')[0];
  while(tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  var tbody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    var tr = document.createElement('tr');
    tr.dataset.index = i;
    var deleteTd = document.createElement('td');
    deleteTd.textContent = 'X';
    deleteTd.className = 'deleter';
    var quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    var itemTd = document.createElement('td');
    itemTd.textContent = cart.items[i].product.name;
    tr.appendChild(deleteTd);
    tr.appendChild(quantityTd);
    tr.appendChild(itemTd);
    tbody.appendChild(tr);
  }

}

function removeItemFromCart(event) {

  if(event.target.className === 'deleter') {
    var tdToRemove = event.target.parentElement;
    var indexToRemove = parseInt(tdToRemove.dataset.index);
    cart.removeItem(indexToRemove);
    cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
