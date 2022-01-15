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

//Computed Property Names
//Syntax myObject[prefix + name]

const prefix = "person";

const names = {
  [prefix + "One"]: "Anahid",
  [prefix + "Two"]: "Kiana",
  [prefix + "Three"]: "Mamad",
};

console.log(names["personOne"]); // Anahid
console.log(names["personThree"]); // Mamad

//There's nothing special about a function that comes from a property access.

function foo() {
  console.log("foo");
}

let someFoo = foo; //variable refrence to `foo`

const myObject2 = {
  someFoo: foo,
};

console.log(foo); // function foo(){..}
console.log(someFoo); // function foo(){..}
console.log(myObject2["someFoo"]); // function foo(){..}

//Even when you declare a function expression as part of the object-literal, that function doesn't magically belong more to the object -- still just multiple references to the same function object:

const myObject3 = {
  foo: function foo() {
    console.log("foo");
  },
};

const someFoo2 = myObject3.foo;
console.log(someFoo2); // function foo(){..}
console.log(myObject3.foo); // function foo(){..}

//Arrays
//arrays are objects with more structured organization for how and where values are stored

const myArray = ["mamad", "jafar", "jasem"];
console.log(myArray.length); //3
console.log(myArray[0]); // "mamad"

//you can also add properties onto the array
myArray.ghasem = "ghasem";

console.log(myArray.length); // 3
console.log(myArray.ghasem); //ghasem
//adding indexes to array
myArray["4"] = "hashem";

console.log(myArray.length); //5
console.log(myArray[4]); //hashem

//Immutability
//It's important to note that all of these approaches create shallow immutability. That is, they affect only the object and its direct property characteristics. If an object has a reference to another object (array, object, function, etc), the contents of that object are not affected, and remain mutable.

const myImmutableobj = {
  arr: [1, 2, 3, 4],
};
console.log(myImmutableobj.arr); // [1, 2, 3, 4]
myImmutableobj.arr.push(5);
console.log(myImmutableobj.arr); // [1, 2, 3, 4, 5]

//to also protect the contents of myImmutableObject.arr, you would also need to make "arr" immutable.

//Object constant
//By combining writable:false and configurable:false, you can essentially create a constant (cannot be changed, redefined or deleted) as an object property, like:
const number = {};
Object.defineProperty(number, "favoriteNum", {
  value: 2,
  writable: false,
  configurable: false,
});

//Prevent Extensions
//If you want to prevent an object from having new properties added to it, but otherwise leave the rest of the object's properties alone, call Object.preventExtensions(..)

let myObject4 = {
  a: 2,
};

Object.preventExtensions(myObject4);

myObject4.b = 3;
console.log(myObject4.b); // undefined
myObject4.a = 5;
console.log(myObject4.a); //5

//Object.seal(...)
//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
//Values of present properties can still be changed as long as they are writable.

const object1 = {
  prop1: 45,
};
Object.seal(object1);
object1.prop1 = 333;
console.log(object1.prop1); //333

delete object1.prop1; //cannot be deleted
console.log(object1.prop1); //333

//Object.freeze(..)
//creates a frozen object, which means it takes an existing object and essentially calls Object.seal(..) on it,
//but it also marks all "data accessor" properties as writable:false, so that their values cannot be changed.

const myPhone = {
  model: "iphone 12",
  year: 2021,
};

Object.freeze(myPhone);
myPhone.year = 2020;
console.log(myPhone.year); // 2021
