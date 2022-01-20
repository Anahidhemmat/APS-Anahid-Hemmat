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

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
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
