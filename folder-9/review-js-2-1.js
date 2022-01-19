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

//Quiz 8

/*
1- Define an array containing the 3 persons defined below.
2- Return an array of the person names (hint: use map).
3- Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

let persons = [person1, person2, person3];

let personNames = persons.map((p) => p.name);

let personsYoungerThan28YearsOld = persons.filter((p) => p.age < 28);

//Quiz 9

/*
An array of travel destinations is defined below.Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1- Filter the travelDestinations array to return all destination names reachable within 500 kms.
2- Find a destination name reachable by ferry.
3- Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let destinationNamesWithin500Kms = travelDestinations
  .filter((dest) => dest.distanceKms < 500)
  .map((destN) => destN.destinationName); // Complete here

let destinationNameReachableByFerry = travelDestinations
  .filter((dest) => dest.transportations.includes["ferry"])
  .map((destN) => destN.destinationName); // Complete here

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
  .filter(
    (dest) => dest.distanceKms > 300 && dest.transportations.includes("train")
  )
  .map((destN) => destN.destinationName); // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

destinationNamesMoreThan300KmsAwayByTrain.forEach((destN) =>
  console.log(destN)
);

//Quiz 10

/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1- Define a method findAvailableRestaurants which takes a number of people in parameter and returns all the restaurant names which have the required number of seats available at the moment.

2- Define a method findRestaurantServingDish which takes a dish name in parameter and returns all the restaurant names serving this dish.

3- Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west), and returns the number of restaurants in this area.
*/

let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    // Complete here
    let available = restaurants
      .filter((resta) => resta.totalSeats - resta.numberOfCustomers)
      .map((restN) => restN.name);
    console.log(available);
  },
  findRestaurantServingDish: function (dishName) {
    // Complete here
    let available = restaurants
      .filter((rest) => rest.menu.includes(dishName))
      .map((restN) => restN.name);
    console.log(available);
  },
  countNumberOfRestaurantsInArea: function (area) {
    // Complete here
    let available = restaurants.filter(
      (resta) => resta.address.area === area
    ).length;
    return available;
  },
};

console.log(
  restaurantFinderApplication.countNumberOfRestaurantsInArea("center")
);

//Quiz mozafar

/*
You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

let mentorsName = Object.keys(mentorsAges);
let uppercased = mentorsName.map((name) => name.toLowerCase());

//Quiz

const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for (let names in traineeGrades) {
  if (traineeGrades[names] > 17) {
    console.log(`${names.toUpperCase()} - ${traineeGrades[names]}`);
  }
}
