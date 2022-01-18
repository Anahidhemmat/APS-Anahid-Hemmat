//Objects
//Quiz 1
// Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!

const myLaptop = {
  model: "MacBook",
  color: "silver",
  year: 2015,
  isNew: false,
  features: ["apps", "wide screen", "internet access"],
};

//Quiz 2
const benyamin = {
  name: "benyamin",
  height: "176cm",
  color: "black",
  eyeColor: "abi they does have dog",
};

const tree = {
  leafColor: "green",
  age: 50,
  isRed: false,
  fruits: ["apple", "orange", "kiwi"],
};
//We can access properties with . notation and [ ] notation

console.log(myLaptop.features[1]);

let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
  colors: ["spaceGray", "black", "white"],
  spec: {
    owner: "vahid",
    age: 24,
    height: undefined,
  },
};

console.log(laptop.spec.owner); //vahid
console.log(laptop.colors[1][0]); //b
console.log(laptop["brand"]); //lenovo
console.log(laptop["colors"][2]); //white

let keys = "name";

// dynamic properties
const myObj = {
  age: 22,
  height: 150,
  [keys]: "mahdi",
  //name: "mehdi",
};
console.log(myObj[keys]); //mehdi
console.log(myObj.name); //mehdi
console.log(myObj["name"]); //mehdi

//functions in objects
const anna = "Kiana";
const jasem = {
  isLoggedIn() {
    return "User is logged in"; //regular func
  },
  isLoggedOut: () => {
    return "User is logged out"; // arrow func
  },
  anna,
};

console.log(jasem.isLoggedIn());
console.log(jasem.isLoggedOut());
console.log(jasem.anna);

//this keyword
const testerObj = {
  mehdiR: function () {
    console.log("Silam", this);
  },
  AnaA: () => {
    console.log(this);
  },
  nestedObj: {
    KianaR: function () {
      console.log(this); //nestedObj
    },
    KianaA: () => {
      console.log(this); //window
    },
  },
};
testerObj.mehdiR(); //out put is testerObj
testerObj.AnaA(); //window
