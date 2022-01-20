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
