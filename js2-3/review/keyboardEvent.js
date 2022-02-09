//keypress
//keydown => doesn't know all keys

document.addEventListener("keypress", (e) => {
  console.log(e); //keyBoardEvent
});

document.addEventListener("keydown", (e) => {
  console.log(e); //keyBoardEvent
});

const bullet = document.querySelector("div");
let top = 0;
let left = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    bullet.style.top = `${top--}px`;
  } else if (e.code === "ArrowDown") {
    bullet.style.top = `${top++}px`;
  }
});
