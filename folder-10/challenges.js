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
