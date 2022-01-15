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
