let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Removing Elements

function removeEveryOther(arr) {
  //your code here
  return arr.filter((element, index) => {
    if (index % 2 === 0) {
      return element;
    }
  });
}
console.log(removeEveryOther(numbers));

//Grasshopper - Summation

var summation = function (num) {
  // Code here
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8)); //36

//Find the Difference in Age between Oldest and Youngest Family Members
let array = [82, 15, 6, 38, 35];

function differenceInAges(ages) {
  let newArr = [];
  let youngest = Math.min(...ages);
  console.log(youngest);
  let oldest = Math.max(...ages);
  console.log(oldest);
  let difference = oldest - youngest;
  console.log(difference);

  newArr.push(youngest, oldest, difference);
  return newArr;
}
console.log(differenceInAges(array));
