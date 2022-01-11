//object literals

const user = {
  firstName: "Anahid",
  familyName: "Hemmat",
  age: 17,
  favouriteFood: ["Pizza", "Ghorme Sabzi", "Burger"],
  isHappy: true,
  address: {
    city: "Tbilisi",
    country: "Georgia",
  },
  email: "anahidhemmat2130@gmail.com",
  friends: [
    { name: "Bahar", age: 22 },
    { name: "Fatemeh", age: 20 },
  ],
  login() {
    return `${user.firstName} is logged in.`;
  },
  logOut: () => {
    return `${user.firstName} is logged out.`;
  },
  frendsFunc() {
    return this.friends;
  },
};

//access properties of an object
console.log(user.familyName);
console.log(user.favouriteFood[0]);
console.log(user.address.city);
console.log(user.friends[0].age);
console.log(user.login());
console.log(user.logOut());
console.log(user.frendsFunc());

//Destructuring

//Destructuring objects
const restaurant = {
  name: "Haj Abdolah And Brothers Except Jafar",
  address: {
    city: "Tehran",
    Country: "Iran",
  },
  menu: ["Kabab", "Ghorme Sabzi", "Gheyme"],
};

const { name, address, menu } = restaurant;
console.log(name);
console.log(address);
console.log(menu);

//we can change key names
const { name: restaurantName, address: location, menu: food } = restaurant;
console.log(location);

//Destructuring nested objects
const farsProvince = {
  locatedIn: "Iran",
  cities: {
    city1: "Shiraz",
    city2: "Fasa",
    city3: "Jahrom",
  },
};
const {
  cities,
  locatedIn,
  cities: { city1, city3 },
} = farsProvince;

console.log(
  `I was born in ${city1} and I am in love with ${city3}, these cities are located in ${locatedIn} <3`
);

//Destructuring arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, , , num5, ...restOfNumbers] = numbers; //we can use rest operator to reassign other elements of an array
console.log(num1 + num5);
console.log(restOfNumbers);

//Destructuring nested arrays

const books = [
  ["comedy", "fun", "drama", "scary"],
  ["bookName", "popular"],
];
const [[genre1, ...others], [book1, title]] = books;
console.log(`I love ${others} genre of movie`);
console.log(`${book1} is the most ${title} book I have ever read`);

//We can use destruturing with strings
const { length } = "Gol dar umad az hamum sombol darumad az hamum";
console.log(length); // prints the length of string in the console

//More practices on object and array Destructuring

const user2 = {
  firstName2: "Mamad",
  country: "Iran",
  toDo: {
    first: "Do the shopping",
    second: "Write an esay",
  },
};

const {
  firstName2,
  country,
  toDo: { first, second },
} = user2;
console.log(firstName2);
console.log(country);
console.log(first);
console.log(second);

const values = [
  ["film", "phone", "jafar", "asgar"],
  ["Mamadeshoon", "javadeshoon"],
];
const [[element1, , , element4], [element5, element6]] = values;
console.log(`${element6} is in class 2A:))))`);

//spread operator
///add elements of an existing array into a new array with spread operator

const langueges = ["html", "css", "javascript"];
const languages2 = ["C", "C++", ...langueges, "Java", "JQuery"];
console.log(languages2);

//pass elements of an array as arguments to a function with spread operator
const arr = [23, 45, 44];
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sum(...arr));

//concatenate arrays with spread operator

const arr1 = ["Hello Baby"];
const arr2 = ["How are you?"];
const arr3 = ["<3 <3 <3"];

const concatinate = [...arr1, ...arr2, ...arr3];

console.log(concatinate);

//rest operator
//we can use rest operator as a function parameter
