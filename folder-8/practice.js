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

filterRange(arrayOfnumbers, 1, 4); //removed the numbers except from 1 to 4
console.log(arrayOfnumbers); //[ 3, 1 ]

//write a functon that sort array in decreasing order
let arr2 = [5, 2, 1, -10, 8];

function sortedArray(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortedArray(arr2));

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

console.log(copySorted(arr3)); //[ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr3); //[ 'HTML', 'JavaScript', 'CSS' ] (no changes)

//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Nina" },
  { id: 3, name: "Mamad" },
];
let user = users.map((person) => person.name);
console.log(user); //[ 'Anna', 'Nina', 'Mamad' ]
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users2 = [john, pete, mary];

let names = users2.map((person) => person.name);
console.log(names); //[ 'John', 'Pete', 'Mary' ]

//You have an array of user objects, each one has name, surname and id.
//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users3 = [john2, pete2, mary2];

let usersMapped = users3.map((person) => ({
  fullName: `${person.name} ${person.surname}`,
  id: user.id,
}));
console.log(usersMapped);
console.log(usersMapped[0].fullName);
