//Basics
//variables
let age = 25;
let year = 2019;

console.log(age, year); //25 2019

//we can change the value

age = 30;
console.log(age); //30

//if we use const keyword we can't change the value

const point = 100;
//point = 50 => we will get an error

//old way to creat variables
var score = 75;
console.log(score);

//we write variable names in camel case we can't use spaces
//variables can't start with numbers
//we can't use reserved keywords for variables

//we use // for single line comments
//we use /* */ for multi-line comments

//JAVASCRIPT DATA TYPES
//we have 7 data types

//Numbers => 1, 2, 100, 3.14, -24, 0, decimal numbers, integers
//Strings => a series of charecters in ' ' or " " => "Hello World","email"
//Boolean => true / false values => we use them for evaluating conditions
//Null => we can set a variable with no value => explicitly set
//Undefined => for variables that have not been defined => automatically set
//Objects => data structures => there are many different objects types => Arrays, functions, Dates, Literals
//Symbol => used with objects

//Strings
console.log("Hello, world");

let email = "anahidhemmat2130@gmail.com";
console.log(email);

//string concatination

let firstName = "Anahid";
let lastName = "Hemmat";
let fullName = firstName + " " + lastName; //space is also a charecters
console.log(fullName);

//getting charecters
console.log(fullName[0]);

//string length (property)

console.log(fullName.length);

//string methods //functions that can do things
//these methods do not modify the original value

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase(); // we can store values in variables
console.log(result);

let index = email.indexOf("@");
console.log(index); //16
