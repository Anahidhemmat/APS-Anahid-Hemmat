const form = document.querySelector("form");
const div = document.querySelector("div");
const p = document.querySelector("p");

//capture //window //doc //body //form //div //p
//target
//bubbling

form.addEventListener(
  "click",
  (e) => {
    console.log(`target:${e.target.tagName} this:${this.tagName}`); //ruye chi click shode // elementi ke rosh add event zadim (e.currentTarget.tagName ) => also possible
    e.stopPropagation();
  },
  { capture: true }
);

div.addEventListener("click", () => {
  console.log("div");
});

p.addEventListener("click", () => {
  console.log("p");
});
