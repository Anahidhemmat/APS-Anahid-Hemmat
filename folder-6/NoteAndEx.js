//Recursion
//Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler.

//Two ways of thinking
//lets's write a function that multiplies a number by itself n times.
// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

//There are two ways to implement it
//With for loop

function pow(number, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= number;
  }
  return result;
}

console.log(pow(2, 2)); // 4

//Recursive thinking: simplify the task and call self:

function pow2(number2, n2) {
  n2 === 1 ? number2 : number2 * pow2(number2, n2 - 1);
}

//how to use Array.sort() method
//The call to arr.sort() sorts the array in place, changing its element order.

const arr = [1, 5, 10, 23, 1000, 12];
arr.sort();
console.log(arr); //[ 1, 10, 1000, 12, 23, 5 ]

//but it doesn't work as expected
//we can fix that like this

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

arr.sort(compareNumeric);
console.log(arr); // [1, 5, 10, 12, 23, 1000]; //now it's work as intended

//Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.
//That allows to write shorter functions:

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr); //[ 1, 5, 10, 12, 23, 1000 ]

//We can use arrow functions here for neater sorting:

arr.sort((a, b) => a - b);
console.log(arr); //[ 1, 5, 10, 12, 23, 1000 ]

//use localCompare methods to sort strings correctly

const countries = ["Österreich", "Andorra", "Vietnam"];

countries.sort((a, b) => (a > b ? 1 : -1));
console.log(countries); //[ 'Andorra', 'Vietnam', 'Österreich' ] (wrong)

countries.sort((a, b) => a.localeCompare(b));
console.log(countries); // [ 'Andorra', 'Österreich', 'Vietnam' ] (correct)

//class with mahya

//foreach method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((num) => console.log(num));
//filter method
let x = numbers.filter((num) => num > 3);
console.log(x);

//map

let n = numbers.map((element) => element ** 2);
console.log(n);

//every
let n2 = numbers.every(function (ele) {
  return ele > 5;
});

console.log(n2); //false

//some

console.log(
  numbers.some(function (ele) {
    return ele > 4; //true
  })
);

//reduce

let myArr = numbers.reduce((pereviusItem, currentItem) => {
  return pereviusItem + currentItem;
}, 10); //initialValue

console.log(myArr);

//for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let index = 0; index < 10; index++) {
  console.log("Anna");
}

let arr2 = ["a", "b", "c"];

for (let index = 0; index < arr2.length; index++) {
  console.log(arr2[index]);
}

for (let index = 0; index < 5; index++) {
  arr.push(index);
}

console.log(arr);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += arr[i];
}

console.log(sum);

//while loop

let num = 12;

while (num !== 0) {
  console.log(num);
  num--;
}

//0 til 100 return even numbers

for (let index = 0; index <= 100; index++) {
  if (index % 2 === 0) {
    console.log("even ", index);
  }
}

for (let index = 0; index <= 100; index += 2) {
  console.log(index, "even");
}

//return odd numbers
for (let index = 0; index <= 100; index++) {
  if (index % 2 === 1) {
    console.log("even ", index);
  }
}

for (let index = 25; index >= 0; index--) {
  if (index % 5 === 0) {
    console.log(index);
  }
}

for (let index = 25; index >= 0; index -= 5) {
  console.log(index);
}

//nested loop

for (let index = 0; index <= 10; index++) {
  for (let j = 0; j <= 10; j++) {
    console.log(index * j);
    if (j === 4) break;
  }
}
