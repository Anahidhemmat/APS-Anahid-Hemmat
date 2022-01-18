//Quiz

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let role = `You rolled ${dice1} and ${dice2}. They sum is ${dice1 + dice2}`;

console.log(role);
