const btn2 = document.querySelector("#v2");

//console.dir(btn);

btn2.onclick = function () {
  alert("v2, you clicked me");
  alert("v2, don't click me");
};

const btn3 = document.querySelector("#v3");

// btn3.addEventListener("click", function () {
//   alert("v3, you clicked me");
// });

function scream() {
  console.log("AAAAAaaaaaaahhhh , dont touch");
}

btn3.onmouseenter = scream;

//this code just execute if you "onmouseenter"
//if you use scream() it execute right away on page load
//and it doesnt work anymore

//RESIZE

const heightOutPut = document.querySelector("#height");
const widthOutPut = document.querySelector("#width");

function reportWndowResize() {
  heightOutPut.textContent = window.innerHeight;
  widthOutPut.textContent = window.innerWidth;
}

window.addEventListener("resize", reportWndowResize);
