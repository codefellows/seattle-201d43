/* global Cart */
'use strict';

var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
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
  var tBody = document.getElementsByTagName('tbody')[0];
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var tBody = document.getElementsByTagName('tbody')[0];

  // DONE: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++) {
    var tr = document.createElement('tr');
    var deleteTd = document.createElement('td');
    deleteTd.textContent = 'x';
    deleteTd.dataset.index = i;
    deleteTd.addEventListener('click', removeItemFromCart);
    tr.appendChild(deleteTd);
    var quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    tr.appendChild(quantityTd);
    var itemTd = document.createElement('td');
    itemTd.textContent = cart.items[i].product.name;
    tr.appendChild(itemTd);
    tBody.appendChild(tr);
  }
}

function removeItemFromCart(event) {
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(parseInt(event.target.dataset.index));
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
