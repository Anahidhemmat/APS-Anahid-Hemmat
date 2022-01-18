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

let email = "anahidhemmat2130@gmail.com ";
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

//common string methods

//lastIndexOf()
let result2 = email.lastIndexOf("m");
console.log(result2); //25

//slice()

let result3 = email.slice(0, 12);
console.log(result3);

//substr()

let result4 = email.substr(4, 10); //second argument is number of charecters
console.log(result4);

//replace()

let result5 = email.replace("a", "n"); //only replaces the first a char
console.log(result5);

//replaceAll()

let result6 = email.replaceAll("a", "n"); //replaces all "a"s with "n"s
console.log(result6);

//repeat()

let result7 = email.repeat(2);
console.log(result7);

//Numbers

let radius = 10;
const pi = 3.14;

//math operators + , -, *, /, **, %

console.log(10 / 2); //5

let remainder = radius % 3;
console.log(remainder); //1

let area = pi * radius ** 2;
console.log(area); //314

//order of operation - B(brackets) I(**) D(/) M(*) A(+) S(-)

let orderMatter = 5 * (10 - 3) ** 2;
console.log(orderMatter); //245

let likes = 10;
likes = likes + 1;

//shorthand notation
likes++;
likes--;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;

console.log(likes);

//NaN - not a number
console.log(6 * "hello"); //NaN

//concatination

let blog = "the blog has" + likes + "likes.";
console.log(blog);

//template strings
const title = "Best reads of 2021";
const author = "Mamad";
const like = 30;

//concatination way
let result8 =
  "The blog called " + title + " by " + author + " has " + like + " likes.";
console.log(result8);

//template strings / template literals
let result9 = `Thw blog called ${title} by ${author} has ${like} likes.`;
console.log(result9);

//Quiz
//What is value of score after the following code runs?
let score2 = 5;
score2 + 4;
console.log(score2); //5

//What is the value of waterBoilingPoint after the following code runs?
let waterBoilingPoint = 100;
waterBoilingPoint /= 2;
waterBoilingPoint += 10;
console.log(waterBoilingPoint); //60

//What is the value of myAge after the following code runs?
let myAge = 29;
console.log(myAge++); //29
console.log(myAge); //30
