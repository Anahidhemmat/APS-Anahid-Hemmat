const btn1 = document.querySelector("button");
const btn2 = btn1.nextElementSibling;
const btn3 = btn2.nextElementSibling;

//property

// btn1.onclick = function () {
//   alert("mahya");
// };

//will be overwriten
// btn1.onclick = function () {
//   alert("Ana");
// };

// btn1.onclick = click;

// function click() {
//   alert("mahya");
//   alert("rasa");
// }

// btn1.addEventListener("click", function () {
//   alert("deniz");
// });
// //won't be overwriten
// btn2.addEventListener("click", function () {
//   alert("deniz");
// });

//BOM => browser object model

//resize
const h1width = document.createElement("h1");
const h1height = document.createElement("h1");
document.body.append(h1width, h1height);

btn3.addEventListener("click", () => {
  h1width.textContent = window.innerWidth;
  h1height.textContent = window.innerHeight;
});
window.addEventListener("resize", (e) => {
  //resize => window
  console.log(e);
  h1width.textContent = window.innerWidth;
  h1height.textContent = window.innerHeight;
});

//also window possible
document.body.addEventListener("keydown", (e) => {
  console.log(e); //target => body
});

console.log(document); //elements
console.dir(document); //objects

const randomColor = () => {
  const red = parseInt(Math.random() * 256);
  const green = parseInt(Math.random() * 256);
  const blue = parseInt(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};
btn3.addEventListener("click", () => {
  //document.body.style.backgroundColor = randomColor();
  document.body.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
});

//another way

const random = () => {
  return parseInt(Math.random() * 256);
};
