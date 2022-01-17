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

console.log(search([1, 5, 3], 9));

//Create a function which returns the length of a string, WITHOUT using String.length property.
function length(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
  }
  return count;
}
console.log(length("wash your hands!"));

//Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num = ((i + 1) / 2) * i;
  }
  return num;
}
console.log(addUpTo(3)); //6

//another solution for function above

function addUpTo2(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num += i;
  }
  return num;
}
console.log(addUpTo2(3)); //6

//another solution for function above with recursion

function addUpTo3(n) {
  if (n === 1) return 1;
  return n + addUpTo3(n - 1);
}
console.log(addUpTo3(3)); //6

//Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself.
//This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

function addIndexes(arr) {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    indexes.push(i);
  }
  return indexes;
}

console.log(addIndexes([0, 0, 0, 0, 0])); //[ 0, 1, 2, 3, 4 ]

//Create a function which returns the total of all odd numbers up to and including n.
//n will be given as an odd number.

function addOddToN(n) {
  let num = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      num += i;
    }
  }
  return num;
}
console.log(addOddToN(13)); //49
