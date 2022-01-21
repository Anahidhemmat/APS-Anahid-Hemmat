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

//ladder object

const ladder = {
  step: 0,
  up() {
    return this.step++;
  },
  down() {
    return this.step--;
  },
  showStep() {
    return this.step;
  },
};
ladder.up(); //1
ladder.up(); //2
ladder.up(); //3
ladder.down(); //2
console.log(ladder.showStep()); //2

//chaining
//Modify the code of up, down and showStep to make the calls chainable

const ladder2 = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder2.up().up().up().showStep().down().showStep();

//Array operations.

// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let styles = ["Jazz", "Blues", "“Rock-n-Roll”"];
styles[1] = "Classics";

console.log(styles.shift()); //"Jazz"
styles.unshift("Rap", "Reggae");
console.log(styles);

//this in array

let items = ["item1", "item2"];

items.push(function () {
  //it receives this referencing the object "items" and outputs the array:
  console.log(this);
});

items[2]();

//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.

let str1 = "list-style-image";

let camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

console.log(camelize(str1));
