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

const isValueNull = (index) => index === null;

if (pairsByIndex.some(isValueNull)) {
  console.log("Error !");
  process.exit(1);
}

const students = ["Javad", "Anahid", "Mina", "Atena"];
const mentors = ["Shirin", "Bahar", "Maryam", "Ayda"];

const pairs = pairsByIndex.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
