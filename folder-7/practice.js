//fix this infinite loop
function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

console.log(printArray(6));

//Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
  let newNum = 0;
  for (let i = 1; i <= exp; i++) {
    newNum = num ** i;
  }
  return newNum;
}

console.log(calculateExponent(5, 5));

//another way to write function above
function calculateExponent(num, exp) {
  let newNum = 0;
  for (let i = 1; i <= exp; i++) {
    newNum = Math.pow(num, i);
  }
  return newNum;
}

console.log(calculateExponent(5, 5));

//Create a function that takes an array and returns the types of values (data types) in a new array.
let random = ["214", true, false, 2, 2.15, [], null];

function arrayValuesTypes(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(typeof arr[i]);
  }
  return newArr;
}

console.log(arrayValuesTypes(random));

//Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr, str) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === str) {
      result = arr.indexOf(str);
    }
  }
  return result;
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

//Create a function that finds the index of a given item.
//If the item is not present, return -1.

function search(arr, item) {
  return arr.includes(item) ? arr.indexOf(item) : -1;
}

console.log(search([1, 5, 3], 5));
