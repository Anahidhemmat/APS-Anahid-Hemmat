const form = document.querySelector("#tweetForm");
const ul = document.querySelector("#tweets");

const addTweet = (username, tweet) => {
  const li = document.createElement("li");
  const b = document.createElement("b");
  b.append(username);
  li.append(b, ` - ${tweet}`);
  ul.append(li);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //elements
  console.dir(form);

  //   //few methods to access input
  //   console.log(form.elements.username.value);
  //   //if you use name in your input
  //   console.log(e.target.username.value);

  //   console.log(form.elements[0].value);

  //   //use name
  //   console.log(form.elements.username.value);
  //   //use id
  //   console.log(e.target.username.value);
  const usernameInput = e.target.username.value;
  const tweetInput = e.target.tweet.value;

  if (!usernameInput || !tweetInput) {
    alert("yechi benvis khob, mage shahre herte");
    return;
  } else {
    addTweet(usernameInput, tweetInput);

    //khali krdn input in form
    e.target.username.value = "";
    e.target.tweet.value = "";
  }
});
