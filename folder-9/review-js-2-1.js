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
