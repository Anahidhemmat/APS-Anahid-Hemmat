//What is the result of accessing its ref?
function makeUser() {
  return {
    name: "Anna",
    ref: this,
  };
}
let user = makeUser();

console.log(user.ref.name); //undefined

//here is the opposite case

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user2 = makeUser2();

console.log(user2.ref().name); //John
