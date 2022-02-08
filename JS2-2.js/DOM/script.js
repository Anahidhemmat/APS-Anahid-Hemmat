const para = document.querySelector("p");
console.log(para);

const div = document.querySelector("div.error");

console.log(div);

const heading = document.querySelector("body > h1"); //copy selector from inspect => elements

console.log(heading);

const paras = document.querySelectorAll("p"); //Nodelist
const errors = document.querySelectorAll(".error"); //Nodelist

paras.forEach((para) => {
  console.log(para);
});

console.log(paras[2]);

console.log(errors);
