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

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  read(num1, num2) {
    return (calculator.num1 = num1), (calculator.num2 = num2);
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};
calculator.read(3, 2);
console.log(calculator.sum());
console.log(calculator.mul());
