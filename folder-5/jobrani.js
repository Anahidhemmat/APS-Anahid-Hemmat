//roll 2 dice with random number and consol log their sum
let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);

let roll = `you rolled a ${dice1} and a ${dice2}. they sum ${dice1 + dice2}`;

console.log(roll);

//prompt
// let input = prompt("How old are you?");
// let age = parseInt(input);
// let birthday = 1400 - age;

// console.log(birthday);

//if statment

let number = 40;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//Quiz traffic signal

let trafficlight = "stop";

if (trafficlight === "stop") {
  console.log("red");
} else if (trafficlight === "slow") {
  console.log("yellow");
} else if (trafficlight === "go") {
  console.log("green");
} else {
  console.log("purpulr");
}

//nesting if statement
//creating password

let password = "anahid123";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Your password is strong");
  } else {
    console.log("your password contains empty string");
  }
} else {
  console.log("Your password length is less than 6");
}

//switch statement

// let sat = new Date.getDay();

// switch (day) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   default:
//     console.log("not valid");
//     break;
// }

//Arrays

let valueArr = [24, "Arad", true, null];
console.log(valueArr);
console.log(valueArr.length);

//nested arrays
let array = [
  [24, "Arad", true, null],
  [24, "Arad", true, null],
  [24, "Arad", true, null],
  [24, "Arad", true, null],
];
array[3][1] = "Anahid";

console.log(array);
