//default params
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// console.log(rollDie());
// console.log(rollDie(12));

//old way

function rollDieOld(numSides) {
  if (numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}
// console.log(rollDieOld());
// console.log(rollDieOld(40));

//order Matters
function greet(msg = "Bye", person) {
  return `${msg}, ${person} !!!!`;
}

console.log(greet("Anahid")); //Anahid, undefined !!!!

function greet2(person, msg = "Bye") {
  return `${msg}, ${person} !!!`;
}
console.log(greet2("Anahid")); //Bye, Anahid !!!

function greet3(person, msg = "Bye", exp = "!!!") {
  return `${msg}, ${person} ${exp}`;
}

console.log(greet3("Anahid", "XXX")); //XXX, Anahid !!!
