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

//Quiz
//change skateboard to be beard
let quiz = "skateboard";

quiz = quiz.slice(5).replace("o", "e");
console.log(quiz); //beard

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

//undefined
let age1;
console.log(age1, age1 + 3, `the age is ${age1}`); //undefined NaN the age is undefined
//null
let age2 = null;
console.log(age2, age2 + 3, `the age is ${age2}`); //null 3 the age is null

//null as a number => 0
//null as a string => "null"
//null as a boolean => false

//booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
let names = ["maria", "luigi", "tea"];

let result10 = email.includes("@");
console.log(result10); //true

let result11 = names.includes("Ana");
console.log(result11); //false

//comparison operators

console.log(age == 25); //false
console.log(age == 30); //true
console.log(age != 25); //true
console.log(age > 25); //true
console.log(age < 25); //false
console.log(age <= 30); //true
console.log(age >= 25); //true

let name = "shaun";
console.log(name == "shaun"); //true
console.log(name == "Shaun"); //false
console.log(name > "crystal"); //true //later letters are greater
console.log(name > "Shaun"); //true //lowercases are greater
console.log(name > "Crystal"); //true

//loose comparison (different types can still be equal)

console.log(age == 30); //true
console.log(age == "30"); //true

//strict comparison (different types cannot be equal)

console.log(age === 30); //true
console.log(age === "30"); //false
console.log(age !== 30); //false
console.log(age !== "30"); //true

//type conversion
let score3 = "100";
console.log(score3 + 1); //1001

score3 = Number(score3);
console.log(score3 + 1); //101

console.log(typeof score3); //number

let result12 = Number("hello");
console.log(result12); //NaN

let result13 = String(50);
console.log(result13, typeof result13); // 50 string

let result14 = Boolean(100);
console.log(result14, typeof result14); //true boolean

let result15 = Boolean(0);
console.log(result15, typeof result15); //false boolean

let result16 = Boolean("");
console.log(result16, typeof result16); //false boolean

//number + string => string
//number -, /, *, string => number

//Math

let myNum;
//myNum = Math.round(3.5);//4
//myNum = Math.floor(3.9); //3
//myNum = Math.ceil(3.1);//4
myNum = Math.pow(3, 2); //9
myNum = Math.sqrt(64); //8
myNum = Math.abs(-1); //1
myNum = Math.min(1, 5, 2, 4, 3); //1
myNum = Math.max(3, 2, 5, 4, 1); //5
myNum = Math.PI; //constant
myNum = Math.E; //cinstant

console.log(myNum);

//solve for hypotenuse of a right triangle
let a = 4;
let b = 3;

let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(c);
