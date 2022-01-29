const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     console.log(this); //button
//     console.dir(this);
//     button.style.backgroundColor = randomColor();
//     button.style.color = randomColor();
//   });
// }

const h1s = document.querySelectorAll("h1");

// for (let h1 of h1s) {
//   h1.addEventListener("click", function () {
//     h1.style.backgroundColor = randomColor();
//     h1.style.color = randomColor();
//   });
// }

function colourise() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

for (let button of buttons) {
  button.addEventListener("click", colourise);
}

for (let h1 of h1s) {
  h1.addEventListener("click", colourise);
}

function colourise2(element) {
  e.addEventListener("click", colourise);
}
