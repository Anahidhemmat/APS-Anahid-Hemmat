//object methods

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hi");
};

user.sayHi();

//"this" in methods

//To access the object, a method can use the this keyword.

let user2 = {
  name: "Mamad",
  surname: "Mamadian",
  age: 33,
  sayWelcome() {
    console.log(`Welcome to my page ${this.name} ${this.surname}`);
  },
};

user2.sayWelcome();

//here the same function is assigned to two different objects and has different “this” in the calls:

let user3 = {
  name: "Jasem",
  age: 30,
};

let user4 = {
  name: "Hassan",
  age: 24,
};

function logIn() {
  console.log(`User ${this.name} has logged in`);
}

user3.m = logIn;
user4.m = logIn;

user3.m(); //User Jasem has logged in
user4.m(); //User Hassan has logged in

//arrow functions have no this
//Arrow functions are special: they don’t have their “own” this

let user5 = {
  firstName: "Nana",
  //here arrow() uses this from the outer user.sayHi() method:
  sayHi2() {
    let arrow = () => console.log(`Hi ${this.firstName}`);
    arrow();
  },
};

user5.sayHi2();

//Arrays //internals

let fruits = [];
fruits[9999] = 5;
fruits.age = 25;

console.log(fruits);

let array = fruits;
console.log(fruits === array); //true

array.push("orange");

console.log(fruits); //is modified

//Array length

let randomArray = [];
randomArray[123] = "Hi";
console.log(randomArray.length); //124

//If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

let numbers = [1, 2, 3, 4, 5];

numbers.length = 2;
console.log(numbers); //[1,2]

numbers.length = 5; //return length back
console.log(numbers[3]); //undefiend

//we can clear the array like this:

numbers.length = 0;
console.log(numbers.length); //0
