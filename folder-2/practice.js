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

// create a function for the object type that specifies its name
function Car(color, model, year) {
  this.color = color;
  this.model = model;
  this.year = year;
  console.log(color, model, year);
}

Car("White", "Mustang", 2005);
