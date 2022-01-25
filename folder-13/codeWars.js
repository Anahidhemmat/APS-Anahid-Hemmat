let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEveryOther(arr) {
  //your code here
  return arr.filter((element, index) => {
    if (index % 2 === 0) {
      return element;
    }
  });
}
console.log(removeEveryOther(numbers));
