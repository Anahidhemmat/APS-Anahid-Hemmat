//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
let arrayOfnumbers = [5, 3, 8, 1];
function filttered(arr, a, b) {
  let newArr = arr.filter((num) => num >= a && num <= b);
  return newArr;
}

console.log(filttered(arrayOfnumbers, 1, 4)); //[3,1]
console.log(arrayOfnumbers); //[5, 3, 8, 1]

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b.

function filterRange(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
    }
  }
}

console.log(filterRange(arrayOfnumbers, 1, 4)); //removed the numbers except from 1 to 4
console.log(arrayOfnumbers); //[ 3, 1 ]
