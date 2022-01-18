//Quiz

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let role = `You rolled ${dice1} and ${dice2}. They sum is ${dice1 + dice2}`;

console.log(role);

//if statement

//syntax
//if (condition) {
//     statement
// } else if (another condition) {
//     statement
// } else if (another condition) {
//     statement
// } else {
//     statement
// }

//Hour
//if hour is between 6am and 12pm: Good morning!
//if it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening!

let hour = 14;

//we can get rid off { } in this case
if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

//we can also write statement above like this:
hour >= 6 && hour < 12
  ? console.log("Good morning")
  : hour >= 12 && hour < 18
  ? console.log("Good afternoon!")
  : console.log("Good evening!");

let youLikeMeat = true;

if (youLikeMeat) {
  //code Block
  console.log("Meat menue");
}

//• If your number is even, print out: „even‟

let myNum = 11;

myNum % 2 === 0 ? console.log("even") : console.log("Odd");

//Quiz

let trafficSignal = "stop";

trafficSignal === "stop"
  ? console.log("red")
  : trafficSignal === "slow"
  ? console.log("yellow")
  : trafficSignal === "go"
  ? console.log("green")
  : console.log("blue");

//Make a password

let password = "Anahid 123";

if (password.length > 6)
  if (password.indexOf(" ") === -1)
    // console.log("Your pass is strong");
    console.log("Your pass is valid");
  else console.log("Your password contains space");
else console.log("Your pass is not valid");
