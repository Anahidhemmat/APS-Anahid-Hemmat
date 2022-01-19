//Quiz
/*
    Console.log the values of each property of "kitten"
*/

const kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

const { ageMonths, isFemale, furColour } = kitten;

console.log(ageMonths);
console.log(isFemale);
console.log(furColour);

console.log(kitten.ageMonths, kitten["isFemale"], kitten["fur" + "Colour"]);

//Quiz 5

/* take a look at restaurant, your task is to:

1- create a variable named 'fullAddress' that points to a string using the information from restaurant.
2- full address should point to a string that includes the address, city, state, and zipcode from the restaurant object. 


good luck
*/

//PLEASE DO NOT TOUCH THIS LINE!
const restaurant = {
  name: "brother's of Rahmani except jafar",
  address: `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
  city: "Tehran",
  state: "Persia",
  zipcode: "99999",
};

//first way
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;

console.log(fullAddress);

//second way
const { address, city, state, zipcode } = restaurant;
let fullAddress2 = `${address}, ${city}, ${state}`;

//third way

let fullAddress3 = [address, city, state, zipcode];
console.log(...fullAddress3);

//this is how we change the value of a property

kitten.ageMonths = 11;
kitten.furColour = "white";
console.log(kitten);

// lets add some properties (colours , touchScreen , owner , brand) to this object:

const laptop = {
  brand: "Lenovo",
  screenSize: 13,
};

laptop.colours = ["white", "black", "silver"];
laptop.owener = "Anahid";
laptop.brand = "Apple";

console.log(laptop);

//we can have objects in arrays
const kitten1 = {
  name: "FluffySagSibil",
  weeksOld: 2,
};

const kitten2 = {
  name: "MegatronZakhmKhorder",
  weeksOld: 1,
};

const kitten3 = {
  name: "BillyNoPv",
  weeksOld: 5,
};

const kittens = [kitten1, kitten2, kitten3];

console.log(kittens[1].weeksOld);
console.log(kittens[2].name);

//lexical scope

function jasem() {
  const name = "jasem";
  console.log(name);

  function jasem2() {
    const surname = "jasemian";
    console.log(name, surname);

    function jasem3() {
      const age = 22;
      console.log(age);
    }
    jasem3();
  }
  jasem2();
}
jasem();

//HOC => higher order components

function callTwice(funcArg) {
  funcArg();
  funcArg();
}

function dice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(dice);

//We can write functions in objects // we call them method

const myMath = {
  sq(number) {
    return number * 2;
  },
  cube: (num) => {
    return Math.pow(num, 3);
  },
};
console.log(myMath.sq(2));
console.log(myMath.cube(3));
