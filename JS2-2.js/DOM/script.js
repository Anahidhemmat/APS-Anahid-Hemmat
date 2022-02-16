const para = document.querySelector("p");
//console.log(para);

const div = document.querySelector("div.error");

//console.log(div);

const heading = document.querySelector("body > h1"); //copy selector from inspect => elements

//console.log(heading);

const paras = document.querySelectorAll("p"); //Nodelist
const errors = document.querySelectorAll(".error"); //Nodelist

paras.forEach((para) => {
  //console.log(para);
});

//console.log(paras[2]);

//console.log(errors);

//properties

para.innerText += " Welcome to my page";

div.innerText = "This is a div with an error class";

paras.forEach((para) => {
  para.innerText += " new text";
});

const content = document.querySelector(".content");

content.innerHTML += "<h2>This is a new h2</h2>";

const people = ["Mario", "Anna", "Kiana"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

//accessing attributes

const link = document.querySelector("a");

link.setAttribute("href", "https://www.netninja");
 
console.log(link.getAttribute("href"));

link.innerText = "Net ninja website";
