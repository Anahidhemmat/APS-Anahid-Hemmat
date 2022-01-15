//You Don't Know JS: this & Object Prototypes
//Chapter 3 OBJECTS

//objects have two forms
//1) The literal syntax

const shoppingList = {
  //key: value,
  fruit: ["Banana", "Apple", "Orange"],
  meat: "300g",
  eggs: 10,
  salt: "50g",
  rice: "500g",
};

//2) The constructed form
// const myObj = new Object();
// myObj.key = value;
// const myCar = new Car("Lamborgini", "Orange", 2020);

//The only difference is that you can add one or more key/value pairs to the literal declaration, whereas with constructed-form objects, you must add the properties one-by-one.

//It's a common mis-statement that "everything in JavaScript is an object". This is clearly not true.
//Function, String, Number, Boolean, Date, RegExp, Error, Array are sub-type of object

const strPrimitive = "I am a string"; // it's a primitive literal and immutable value
console.log(typeof strPrimitive); // string

//instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object
//the return value is a boolean value
console.log(strPrimitive instanceof String); // false

const strObject = new String("I am a string");
console.log(typeof strObject); //object
console.log(strObject instanceof String); //true

//To perform operations on strings, such as checking their length, accessing their individual character contents, etc, a String object is required.
//javascript automatically coerces a "string" primitive to a String object when necessary.

const myStr = "In both cases, we call a property or method ";
console.log(myStr.length); //44
console.log(myStr.charAt(3)); //b

//Strings and Numbers and Booleans have object wrapper form
//null and undefined have no object wrapper form
//Date values can only be created with their constructed object form
//Objects, Arrays, Functions, and RegExps are all objects regardless of whether the literal or constructed form is used.
//Error objects are rarely created explicitly in code, but usually created automatically when exceptions are thrown.

//It is strongly preferred by the majority of the JS community to use the LITERAL OBJECT FORM for a value.

//Content
//the contents of an object consist of values (any type) stored at specifically named locations, which we call properties.
//What is stored in the container are  property names, which act as pointers (technically, references) to where the values are stored.

const laptop = {
  year: 2019,
  model: "MacBook Prp",
  color: "silver",
  screen: "14 inch",
};
//there are to ways to acces properties
// use . operator
console.log(laptop.model); // "MacBook Prp"
//use [] operator
console.log(laptop["model"]); //"MacBook Prp"

//In objects, property names are always strings.

let wantA = true;
const obj = {
  A: 2,
};

let idx;

if (wantA) {
  idx = "A";
}
//later
console.log(obj[idx]); // 2

//be careful not to confuse the use of numbers between objects and arrays.

const obj2 = {};

obj2[true] = "Hi!";
obj2[3] = "baby";
obj2[obj2] = "unknown";

console.log(obj2["true"], obj2["3"], obj2["[object Object]"]); // "Hi!" "baby" "unknown"
