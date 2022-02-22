const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

//Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender,
  };
  // Only change code above this line
};

//Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

//Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

////////////////////////////////////////////////////////////////////////////
// GETTER & SETTER
////////////////////////////////////////////////////////////////////////////

// getters => access properties
// setters => change (mutate) them

const person = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Anahid Hemmat";

console.log(person);

// Object.defineProperty();

console.log(new Date().getFullYear()); //this year 2022

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  //calculating age
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}
let john = new User("John", new Date(2000, 2, 22));
console.log(john.birthday);
console.log(john.age);

//////////////////////////////////////////////////////////////////
// Algorithms
//////////////////////////////////////////////////////////////////

//Factorialize a Number
function factorialize(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

factorialize(5);

//Find the Longest Word in a String
function findLongestWordLength(str) {
  return str.split(" ").reduce((long, word) => {
    console.log(long);
    return Math.max(long, word.length);
  }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
  }
  return newArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
