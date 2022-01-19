//Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
  return ((num + 1) / 2) * num;
}

console.log(addUp(4));

//Sort an Array by String Length

const randomArr = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(randomArr));

//Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

const names = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

function afterNYears(namesObj, nYears) {
  for (let ages in namesObj) {
    namesObj[ages] = namesObj[ages] + nYears;
  }
  return namesObj;
}

console.log(afterNYears(names, 10));
