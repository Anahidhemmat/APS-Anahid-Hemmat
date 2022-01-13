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
