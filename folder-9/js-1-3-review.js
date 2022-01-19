//For loop

for (let i = 1; i <= 6; i++) {
  console.log(i + "-in shabi k mign shab nist");
}

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 100; i >= 0; i--) {
  console.log(i);
}

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

//Quiz 3

const students = ["Sirvan", "Pourya", "Alireza", "saba", "Khorzoor"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].toUpperCase());
}

//nested loop
const airplane = [
  ["niloofar", "kosar", "Fatemeh"],
  ["ali", "mohsen", "Shirin"],
  ["atena", "mahdi", "benyamin"],
  ["bani", "mohammad", "sina"],
  ["Amir", "Beti", "Pourya"],
];

for (let i = 0; i < airplane.length; i++) {
  console.log(`Row - ${i + 1}`);
  for (let j = 0; j < airplane[i].length; j++) {
    console.log(`${airplane[i][j]}`);
  }
}

//while loop

const randomStuff = ["apple", 2, 4, null, true, "ana", ["cat", "ball"], "last"];

// let x = randomStuff.length - 1;

// while (x >= 0) {
//   console.log(randomStuff[x]);
//   x--;
// }

// let x2 = 0;
// while (x2 < randomStuff.length) {
//   console.log(randomStuff[x2]);
//   x++;
// };

//break

for (let i = 100; i >= 0; i--) {
  console.log(i);
  if (i === 50) {
    break;
  }
}
//Quiz 4
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  console.log(num * num);
}

//Array methods

//forEach()

const airplane2 = [
  ["motahare", "anahid", "amirmostafa"],
  ["maryam", "amir", "mina"],
  ["fatemeh", "fereshte", "kian"],
  ["kosar", "mohammad", "yousof"],
  ["mohsen", "hoseyn ", "shaden"],
];

let print = airplane2.forEach((row) => {
  console.log(row);
  row.forEach((p) => console.log(p));
});

//type of output => array/string/number

//map()

let pList = airplane2.map((row) => {
  let rowOfP = row.map((p) => p.toUpperCase());
  return rowOfP;
});
console.log(pList);

//type of output => array

//Quiz 5
// write a function to trim all the elements inside array with map

const airplanePassengers = [
  "      Sirvan     ",
  "      Zahra   ",
  "   Fatemeh   ",
  "Mohsen      ",
  "     Azam      ",
  "     Shirin      ",
];

let result = airplanePassengers.map((p) => p.trim());
console.log(result);
