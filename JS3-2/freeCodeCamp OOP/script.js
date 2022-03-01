//Define a Constructor Function

// function Dog(name, color, numLegs) {
//   this.name = "spot";
//   this.color = "blue";
//   this.numLegs = 4;
// }

// const hound = new Dog();

//Extend Constructors to Receive Arguments
function Dog(name, color, numLegs) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const hound = new Dog("spot", "gray");
console.log(hound);

//Verify an Object's Constructor with instanceof operator

console.log(hound instanceof Dog); //true

//Understand Own Properties => check direct properties

let ownProps = [];

for (let prop in hound) {
  if (hound.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

console.log(ownProps);
