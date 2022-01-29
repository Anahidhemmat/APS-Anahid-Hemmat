const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

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

grandparent.addEventListener(
  "click",
  function (e) {
    console.log("grandparent");
  },
  { capture: true }
);
parent.addEventListener("click", function (e) {
  console.log("parent");
});
child.addEventListener("click", function (e) {
  console.log("child");
});

document.addEventListener("click", function () {
  console.log("document");
});
