//roll 2 dice with random number and consol log their sum
let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);

let roll = `you rolled a ${dice1} and a ${dice2}. they sum ${dice1 + dice2}`;

console.log(roll);
