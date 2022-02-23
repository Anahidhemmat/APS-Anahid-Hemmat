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

//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

//Title Case a Sentence

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] =
      newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");

//Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    let newStr = str.slice(0, num).concat("...");
    return newStr;
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Finders Keepers

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  console.log(localArr);
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

//second way
function bouncer2(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(bouncer2([7, "ate", "", false, 9]));

//Where do I Belong

// function getIndexToIns(arr, num) {

// }

// console.log(getIndexToIns([40, 60], 50));

//Mutations

function mutation(arr) {
  let secStr = arr.pop().toLowerCase().split("");
  console.log(secStr);
  let firstStr = arr[0].toLowerCase().split("");
  console.log(firstStr);
  for (let i = 0; i < secStr.length; i++) {
    if (firstStr.indexOf(secStr[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

function mutation2(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((item) => arr[0].toLowerCase().split("").indexOf(item) !== -1);
}

console.log(mutation2(["hello", "hey"]));
