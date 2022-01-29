const btn = document.querySelector("#v3");

btn.addEventListener("click", () => {
  alert("vs clicked");
});

function twist() {
  console.log("twist");
}
function shout() {
  console.log("shout");
}

const tasBtn = document.querySelector("#tas");
// tasBtn.onclick = twist;
// tasBtn.onclick = shout;

tasBtn.addEventListener("click", twist, { once: true });
tasBtn.addEventListener("click", shout);

//tasBtn.addEventListener("click", twist, shout); // doesnt work

//best way
// tasBtn.addEventListener("click", () => {
//   twist();
//   shout();
// });
