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
