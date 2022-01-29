const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//basics
grandparent.addEventListener("click", function (e) {
  console.log(e);
});
grandparent.addEventListener("click", function (e) {
  console.log(e.target);
});
grandparent.addEventListener("click", function (e) {
  console.log("Grandparent 1");
});
