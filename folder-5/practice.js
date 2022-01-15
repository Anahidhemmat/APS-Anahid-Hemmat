//Create a function which returns the number of true values there are in an array.
const arr = [true, false, false, true, false];
let count = 0;
function countTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
  }
  if (array.length === -1) {
    return 0;
  } else {
    return count;
  }
}
console.log(countTrue(arr));
