const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//options

//basics
// grandparent.addEventListener("click", function (e) {
//   console.log(e);
// });
// grandparent.addEventListener("click", function (e) {
//   console.log(e.target);
// });
// grandparent.addEventListener("click", function (e) {
//   console.log("Grandparent 1");
// });

//event bubbling

// grandparent.addEventListener("click", function (e) {
//   console.log("grandparent");
// });
// parent.addEventListener("click", function (e) {
//   console.log("parent");
// });
// child.addEventListener("click", function (e) {
//   console.log("child");
// });

// document.addEventListener("click", function () {
//   console.log("document");
// });

//event capturing

// grandparent.addEventListener(
//   "click",
//   function (e) {
//     console.log("grandparent");
//     e.stopPropagation();
//   },
//   { capture: true }
// );
// parent.addEventListener("click", function (e) {
//   console.log("parent");
// });
// child.addEventListener("click", function (e) {
//   console.log("child");
// });

// document.addEventListener("click", function () {
//   console.log("document");
// } , {once: true});

//removeEventListener

// grandparent.addEventListener("click", function (e) {
//   console.log("grandparent");
// });

// parent.addEventListener("click", printHi);
// setTimeout(() => {
//   parent.removeEventListener("click", printHi);
// }, 2000);

// child.addEventListener("click", function (e) {
//   console.log("child");
// });

// function printHi() {
//   console.log("Hi");
// }

//event deligation

const divs = document.querySelectorAll("div");

// divs.forEach((div) => {
//   div.addEventListener("click", function () {
//     console.log("Hi");
//   });
// });

// document.addEventListener("click", (e) => {
//   if (e.target.matches("div")) {
//     console.log("hi");
//   }
// });

//best way
addGlobalEventListener("click", "div", (e) => {
  console.log("hi");
});
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
