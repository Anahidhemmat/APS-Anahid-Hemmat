//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
let arrayOfnumbers = [5, 3, 8, 1];
function filttered(arr, a, b) {
  let newArr = arr.filter((num) => num >= a && num <= b);
  return newArr;
}

console.log(filttered(arrayOfnumbers, 1, 4));
console.log(arrayOfnumbers);
