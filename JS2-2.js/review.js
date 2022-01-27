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

//console.log(greet("Anahid")); //Anahid, undefined !!!!

function greet2(person, msg = "Bye") {
  return `${msg}, ${person} !!!`;
}
//console.log(greet2("Anahid")); //Bye, Anahid !!!

function greet3(person, msg = "Bye", exp = "!!!") {
  return `${msg}, ${person} ${exp}`;
}

//console.log(greet3("Anahid", "XXX")); //XXX, Anahid !!!

//Object spread

const foxhound = {
  legs: 4,
  family: "English, American",
};

const bergamasco = {
  isFurry: true,
  family: "Persian sheepdog breed",
};

// const rareDogs = { family: "mixed", ...foxhound, ...bergamasco };
// console.log(rareDogs);

//order matters
const rareDogs = { ...foxhound, ...bergamasco, family: "mixed" };
// console.log(rareDogs);

//ARR and strings spread into an object:

// console.log({ ...[1, 2, 3] }); //{ '0': 1, '1': 2, '2': 3 }
// console.log({ ..."hello" }); //{ '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

//Another Example

const dataFromForm = {
  email: "fake@gmail.com",
  password: "fakeFake123",
  username: "fakeFunk",
};

const updateUser = {
  ...dataFromForm,
  id: "1234",
  isAdmin: false,
  email: "notFake@gmail.com",
};

//console.log(updateUser);
