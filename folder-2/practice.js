//You can use the bracket notation with for...in to iterate over all the enumerable properties of an object.
const myCar = {
  color: "White",
  model: "Mustang",
  year: 2005,
};

function showPrps(obj, objName) {
  let result = "";
  for (let i in obj) {
    result += ` ${objName}.${i} = ${obj[i]}`;
  }
  return result;
}

console.log(showPrps(myCar, "myCar"));

//The this keyword refers to the current object of which properties the method is calling.
const user001 = {
  firstName: "John",
  lastName: "Smith",
  birthday: "1988",
  getName() {
    return `User's name: ${this.firstName} ${this.lastName}`;
  },
};
console.log(user001.getName());

// create a function for the object type that specifies its name
function Car(color, model, year) {
  this.color = color;
  this.model = model;
  this.year = year;
  console.log(color, model, year);
}

Car("White", "Mustang", 2005);

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//Example => getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

//Object.freeze() method freezes an object. and you can't change frozen object's properties no longer
function preventChanges(obj) {
  Object.freeze(obj);
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}

console.log(preventChanges(myCar)); //myCar object properties didn't change

//destructuring an array
const writeYourCodeHere = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, third, ...other] = writeYourCodeHere;
console.log(other);

//Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
const volume = {
  width: 5,
  length: 10,
  height: 2,
};

function volumeOfBox(sizes) {
  return sizes.width * sizes.length * sizes.height;
}
console.log(volumeOfBox(volume));

//Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings with 50-30-20 strategy

function fiftyThirtyTwenty(ati) {
  return {
    Needs: 0.5 * ati,
    Wants: 0.3 * ati,
    Savings: 0.2 * ati,
  };
}

console.log(fiftyThirtyTwenty(1000));
