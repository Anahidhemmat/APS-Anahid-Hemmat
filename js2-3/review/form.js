//form

console.log(tForm); //name
console.log(tweetForm); //id

//document => forms => HTMLCollection

console.log(document.forms[0]);
console.log(document.forms.tForm);
console.log(document.forms.tweetForm);

const form = document.querySelector("form");
const ul = document.querySelector("ul");

//elements

console.dir(form.elements);
console.dir(form.elements.username);
console.dir(form.elements.tweet);

console.dir(form.tweet);
console.dir(form.username);

//submit

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  e.target.username;
  e.target.elements.username;

  e.target.submit();

  const li = document.createElement("li");
  li.textContent = `${e.target.username} - ${e.target.tweet}`;

  ul.append(li);

  e.target.username = " ";
  e.target.tweet = " ";
});
