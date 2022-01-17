/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

let names = [
  "Vajihe",
  "Alireza",
  "AmirMostafa",
  "AmirMehdi",
  "Alie",
  "Sarah",
  "MohammadHosein",
  "Fatemeh",
  "Mahjan",
];
function findLongNameThatStartsWithA(name) {
  return name.find((item) => item.indexOf("A") === 0 && item.length > 7);
}
let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

//syntax of find method
// let result = arr.find(function (item, index, array) {
//   // if true is returned, item is returned and iteration is stopped
//   // for falsy scenario returns undefined
// });

//example

let users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Nina" },
  { id: 3, name: "Mamad" },
];

let user = users.find((person) => person.id === 1);
console.log(user.name); //Anna

//The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.
const array1 = [5, 12, 8, 130, 44];

const isLargNumber = (number) => number > 13;
console.log(array1.findIndex(isLargNumber)); // returns index (3)

/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

const pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

// const isValueNull = (index) => index === null;

// if (pairsByIndex.some(isValueNull)) {
//   console.log("Error !");
//   process.exit(1);
// }

// const students = ["Javad", "Anahid", "Mina", "Atena"];
// const mentors = ["Shirin", "Bahar", "Maryam", "Ayda"];

// const pairs = pairsByIndex.map(function (indexes) {
//   const student = students[indexes[0]];
//   const mentor = mentors[indexes[1]];
//   return [student, mentor];
// });

// console.log(pairs);

/*
   This program should check if the array `group` contains only students
*/

const students2 = ["Hossein", "Jamal", "Mehdi", "Shaden", "Zaynab", "Niloofar"];
const group = ["Haniye", "Alireza", "Benyamin", "Fatemeh"];

let groupIsOnlyStudents = group.every((person) => person === students2); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

//we can use every to compare arrays

function isEqualArray(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index])
  );
}

console.log(isEqualArray([1, 2, 3], [1, 2, 3])); //true

/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

const pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

let pairsByIndex2 = pairsByIndexRaw.filter(
  (item) => item !== null && item.length === 2
); // Complete this statement
//filttered array
console.log(pairsByIndex2); //[ [ 0, 3 ], [ 1, 2 ], [ 2, 1 ] ]

const students = ["Javad", "Anahid", "Mina", "Atena"];
const mentors = ["Shirin", "Bahar", "Maryam", "Ayda"];

const pairs2 = pairsByIndex2.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs2);

// Using the .map() method, create a new array with `numbers` multiplied by 100

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let multiply = numbers.map((number) => number * 100);

console.log(multiply); //[ 10, 20, 30, 40, 50 ]
