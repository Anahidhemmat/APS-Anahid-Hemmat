//Objects

const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
console.log(user);

//this is how we remove a property from an object

delete user.name;
console.log(user);

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schudle = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schudle));

//Write the function to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function salarySum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  //isObjectEmpty
  return Object.keys(obj).length === 0 ? 0 : sum;
}

console.log(salarySum(salaries)); //390

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
    return obj;
  }
}

console.log(multiplyNumeric(menu));

//another solution for function above

function multiplyNumeric2(obj) {
  for (let key in obj) {
    if (Number.isInteger(obj[key])) {
      obj[key] *= 2;
    }
    return obj;
  }
}

console.log(multiplyNumeric2(menu));

//When an object variable is copied, the reference is copied, but the object itself is not duplicated.

//Now we have two variables, each storing a reference to the same object:
const user2 = { id: 001, name: "Ana" };

const person2 = user2; //copy the refrence

//We can use either variable to access the object and modify its contents:

person2.name = "Nina";

console.log(user2); //name has been changed

//Object Comparison by refrence

let a = {};
let b = a;

console.log(a === b); //true , both variables reference the same object

//but two independent objects are not equal
// even though both are empty
let mamad = {};
let mamad2 = {};

console.log(mamad === mamad2); //false

//this is how we duplicate an object

let user3 = {
  name: "Mamal",
  age: 30,
};

let clone = {};

for (let key in user3) {
  clone[key] = user3[key];
}

clone.name = "Kian";
console.log(user3); //name has not changed

//we can use Object.assign() to merge several objects into one
let allUsers = { name: "unKnown" };
Object.assign(allUsers, user, user2, user3);

console.log(allUsers);
