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

//rest operator

// function sum(a, b, c, d) {
//   return arguments.reduce((acc, curr) => acc + curr);
// }

// console.log(sum(2, 3, 4, 5));

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}
//rest operator datayi ke behesh midim ro tabdil be array mikone
//console.log(sum(1, 2, 3, 4, 5, 6, 7));

//$           Destructuring params            ///

///$ EXAMPLE

const categories = [
  {
    color: "#f3c32c",
    name: "Housing",
    score_out_of_10: 1,
  },
  {
    color: "#f3d630",
    name: "Cost of Living",
    score_out_of_10: 2.618,
  },
  {
    color: "#f4eb33",
    name: "Startups",
    score_out_of_10: 10,
  },
  {
    color: "#d2ed31",
    name: "Venture Capital",
    score_out_of_10: 10,
  },
  {
    color: "#7adc29",
    name: "Travel Connectivity",
    score_out_of_10: 3.6545000000000005,
  },
  {
    color: "#36cc24",
    name: "Commute",
    score_out_of_10: 4.687250000000001,
  },
  {
    color: "#19ad51",
    name: "Business Freedom",
    score_out_of_10: 8.671,
  },
  {
    color: "#0d6999",
    name: "Safety",
    score_out_of_10: 5.7155000000000005,
  },
  {
    color: "#051fa5",
    name: "Healthcare",
    score_out_of_10: 6.448999999999999,
  },
  {
    color: "#150e78",
    name: "Education",
    score_out_of_10: 8.6245,
  },
  {
    color: "#3d14a4",
    name: "Environmental Quality",
    score_out_of_10: 6.4815000000000005,
  },
  {
    color: "#5c14a1",
    name: "Economy",
    score_out_of_10: 6.5145,
  },
  {
    color: "#88149f",
    name: "Taxation",
    score_out_of_10: 4.488,
  },
  {
    color: "#b9117d",
    name: "Internet Access",
    score_out_of_10: 5.605500000000001,
  },
  {
    color: "#d10d54",
    name: "Leisure & Culture",
    score_out_of_10: 9.407,
  },
  {
    color: "#e70c26",
    name: "Tolerance",
    score_out_of_10: 8.012500000000001,
  },
  {
    color: "#f1351b",
    name: "Outdoors",
    score_out_of_10: 7.014,
  },
];

console.log(categories.filter((category) => category.score_out_of_10 >= 9));

//destructure

console.log(categories.filter(({ score_out_of_10 }) => score_out_of_10 >= 9));

const films = categories.map(
  (film) =>
    `${film.name} with color of ${film.color}, is rated ${film.score_out_of_10}`
);
console.log(films);

//destructure
const anything = categories.map(
  ({ name, color, score_out_of_10 }) =>
    `${name} with color of ${color} is rated ${score_out_of_10}`
);

console.log(anything);
