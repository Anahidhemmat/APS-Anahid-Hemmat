/*
make a shopping list with their quantity:

you should follow the below steps:

 - Listen for the for submission
 - When the form is submitted, prevent the default behaviour
 - Grab the quantity input value and the product input value
 - Create a new <li> element. Set the text in the new <li></li> to include the 
   quantity and product name from the form
 - Append the new <li></li> to the <ul></ul> on the page
 - Reset inputs

*/

const form = document.querySelector("form");
const ul = document.querySelector("#list");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productValue = e.target.product.value;
  const quantityValue = e.target.qty.value;

  addProduct(productValue, quantityValue);

  e.target.product.value = "";
  e.target.qty.value = "";
});

const addProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.append(`${product} - ${quantity}`);
  ul.append(li);
};
