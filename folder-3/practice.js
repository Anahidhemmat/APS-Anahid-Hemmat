//return a new array with same elements, excpect sorted
const arr = ["a", "n", "c", "e", "z", "f"];

function sortArray(array) {
  return [...array].sort();
}
console.log(sortArray(arr));

//same as above
function sortArray(array) {
  return Array.from(array).sort();
}
console.log(sortArray(arr));

//Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
  let sum = 0;
  for (let keys in obj) {
    sum += obj[keys];
  }
  return sum - limit;
}
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));

//Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
const inkLevel = {
  cyan: 10,
  magenta: 20,
  yellow: 100,
};

function inkLevels(inks) {
  let inksValues = Object.values(inks);
  return Math.min(...inksValues);
}
console.log(inkLevels(inkLevel));

//Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

//Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
function relationToLuke(name) {
  let relation = {
    "Darth Vader": function () {
      return "Luke, I am your father.";
    },
    Leia: function () {
      return "Luke, I am your sister.";
    },
    Han: function () {
      return "Luke, I am your brother in law.";
    },
    R2D2: function () {
      return "Luke, I am your R2D2.";
    },
  };
  return relation[name]();
}

console.log(relationToLuke("Leia"));

//switch statments with objects
const type = "coke";

const drinks = {
  coke: function () {
    return "Coke";
  },
  pepsi: function () {
    return "Pepsi";
  },
  lemonade: function () {
    return "Lemonade";
  },
  juice: function () {
    return "Juice";
  },
};

console.log(drinks[type]());

//Object literal that returns string

function getDrink(type) {
  let drinks = {
    coke: "Coke",
    soda: "Soda",
    lemonade: "lemonade",
    default: "Pepsi",
  };
  return "My favorite drink is " + (drinks[type] || drinks["default"]);
}
let drink = getDrink("coke");
console.log(drink);

//Check if Two Items Are Equal
const object = { a: 1 };
const other = { a: 1 };
function isEqual_myVersion(a, b) {
  if (a[0] === b[0]) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual_myVersion(object, other));

//not completed
let millionsR = [
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572],
];

function millionsRounding(arr) {
  for (let i = 0; i < arr.length; i++) {
    let array = arr[i];
  }
}

console.log(millionsRounding(millionsR));
