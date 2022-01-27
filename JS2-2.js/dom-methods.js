//dom methods

//INNER TEXT & HTML

const p = document.querySelector("p");

// console.log(p.innerText);
// console.log(p.innerHTML);
// console.log(p.textContent);

//p.innerText = "<b><i>APS</i>learners will be biggest developers</b>";
//p.innerHTML = "<b><i>APS</i> learners will be biggest developers</b>";
//p.textContent = "<b><i>APS</i>learners will be biggest developers</b>";

//$ ATTRIBUTE SELECTOR

const mainBanner = document.querySelector("img");
console.log(mainBanner);

// mainBanner.id = "mainBanner";
// mainBanner.src =
//   "https://media.istockphoto.com/photos/chicken-rare-breed-chickens-chinese-silk-portrait-on-white-background-picture-id1192152965";

//ATTRIBUTE METHOD

// mainBanner.setAttribute("id", "mainBanner");
// mainBanner.setAttribute(
//   "src",
//   "https://media.istockphoto.com/photos/chicken-rare-breed-chickens-chinese-silk-portrait-on-white-background-picture-id1192152965"
// );

// console.log(mainBanner);
//getAttribute()
// console.log(mainBanner.getAttribute("src"));
// console.log(mainBanner.getAttribute("id"));

// //$  STYLE

const allLinks = document.querySelectorAll("a");
//console.log(allLinks); //noteList of links

// const firstLink = allLinks[0];
// console.log(firstLink.style);
// console.log(window.getComputedStyle(firstLink));

for (let link of allLinks) {
  link.style.color = "olive";
  link.style.textDecoration = "none";
}

////$ ClassList

const h2 = document.querySelector("h2");
console.log(h2);
//thet overwrite each other
// h2.setAttribute("class", "purple");
// h2.setAttribute("class", "border");

//add
h2.classList.add("purple");
h2.classList.add("border");

//cotains
console.log(h2.classList.contains("atena")); //false
console.log(h2.classList.contains("border")); //true

//remove
h2.classList.remove("border");

//toggle
h2.classList.toggle("border");
h2.classList.toggle("purple");

//replace
h2.classList.replace("border", "blue");
