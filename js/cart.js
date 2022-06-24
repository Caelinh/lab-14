/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let parent = document.querySelector("tbody");
  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let body = document.querySelector('tbody');
  for (let i = 0; i < cart.items.length; i++) {
    let tableRow = document.createElement('tr');
    tableRow.textContent = cart.items.product.name;
    body.appendChild(tableRow);



    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent(removeItemFromCart, cartItems.quantity, cartItems);

    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}
function removeItemFromCart(event) {
    

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
