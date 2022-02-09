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

btn1.onclick = click;

function click() {
  alert("mahya");
  alert("rasa");
}

btn1.addEventListener("click", function () {
  alert("deniz");
});
//won't be overwriten
btn2.addEventListener("click", function () {
  alert("deniz");
});
