// document.querySelector("button").addEventListener("click", function (event) {
//   console.log(event);
// });

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  //   console.log(e);
  //   console.log(e.key);
  console.log(e.code);
});

// input.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("Up");
//       break;
//     case "ArrowDown":
//       console.log("Down");
//       break;
//     case "ArrowRight":
//       console.log("Right");
//       break;
//     case "ArrowLeft":
//       console.log("Left");
//       break;
//     default:
//       console.log("Ignored");
//   }
// });

const div = document.querySelector(".test");

div.classList.add("circle");

let divTop = 50;
let divLeft = 50;

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log((div.style.top = `${divTop--}px`));
      break;
    case "ArrowDown":
      console.log((div.style.top = `${divTop++}px`));
      break;
    case "ArrowRight":
      console.log((div.style.left = `${divLeft++}px`));
      break;
    case "ArrowLeft":
      console.log((div.style.left = `${divLeft--}px`));
      break;
    default:
      console.log("Ignored");
  }
});
