const firstBold = document.querySelector("b");
console.log(firstBold);

// console.log(firstBold.parentElement); //p
// console.log(firstBold.parentElement.parentElement); //body
// console.log(firstBold.parentElement.parentElement.parentElement); //html
// console.log(firstBold.parentElement.parentElement.parentElement.parentElement); //nulll

const paragraph = firstBold.parentElement;
// console.log(paragraph); //p

// console.log(paragraph.children); //htmlcollection

// console.log(paragraph.childNodes); //nodelist

// console.log(paragraph.children[0]);
// console.log(paragraph.children[3]);

const squareImg = document.querySelector(".square");
console.log(squareImg);

console.log(squareImg.nextSibling); //text
console.log(squareImg.nextElementSibling); //img

console.log(squareImg.previousSibling); //text
console.log(squareImg.previousElementSibling); //p

//Create Element

const newImg = document.createElement("img");
console.dir(newImg);
newImg.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
);

//appendChild

document.body.appendChild(newImg);
newImg.classList.add("square");

const h3 = document.createElement("h3");
h3.textContent = "New h3 is created";
document.body.appendChild(h3);

//Append

const p = document.querySelector("p");
console.log(p);

p.append(
  "I am new text, want to write a long text alaki",
  "<b>second append is here</b>"
);

const newB = document.createElement("b");
newB.append("harchi ....");
console.log(newB);
//p.append(newB);
//p.prepend(newB);

//$ insertAdjacentElement

const h2 = document.createElement("h2");

h2.append("adorable chikens");

const h1 = document.querySelector("h1");

//h1.insertAdjacentElement("beforebegin", h2);

//h1.insertAdjacentElement("afterbegin", h2);

//h1.insertAdjacentElement("beforeend", h2);
h1.insertAdjacentElement("afterend", h2);
