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

const addProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.append(product, ` - ${quantity}`);
  ul.append(li);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productInput = e.target.product.value;
  const quantityInput = e.target.qty.value;

  if (!productInput || !quantityInput) {
    alert("Enter product");
    return;
  } else {
    addProduct(productInput, quantityInput);

    //khali krdn input in form
    e.target.product.value = "";
    e.target.qty.value = "";
  }
});
