const btns = document.querySelectorAll("button"); //nodelist
const ps = document.querySelectorAll("p"); //nodelist

for (let btn of btns) {
  btn.addEventListener("mouseenter", () => {
    // btn.style.backgroundColor = "red";
    // btn.style.color = "white";
    colorise();

    btn.addEventListener("mouseenter", () => {
      colorise();
    });
  });
}

for (let p of ps) {
  p.addEventListener("mouseenter", () => {
    // p.style.backgroundColor = "red";
    // p.style.color = "white";
    colorise();
  });
}

function colorise() {
  this.style.backgroundColor = "red";
  this.style.color = "white";
}
