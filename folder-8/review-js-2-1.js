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

//destructuring

//variable destructuring

// let PI = Math.PI;
// let E = Math.E;
// let SQET2 = Math.SQRT2;

const { PI, E, SQET2 } = Math;
console.log(PI);

const myArr = ["Kiana", "Mazloom", "Ana"];

const [name1, , name3] = myArr;
console.log(name3);

const scoreOfRallyRace = [3500, 3799, 4000, 8000, 8500, 9000, 12000];

const [winner, second, third, ...others] = scoreOfRallyRace;
console.log(others);

//object destructuring

const circle = {
  label: "circleX",
  radius: 2,
};
const circle2 = {
  label: "mina",
  radius: 3,
};
const circle3 = {
  label: "mina",
};
//PI * r * r

const circleArea = (obj) => {
  return (PI * obj.radius * obj.radius).toFixed(2);
};

console.log(circleArea(circle));

const circleArea2 = ({ radius }) => {
  return (PI * radius * radius).toFixed(2);
};
console.log(circleArea2(circle2));

const obj = {
  ram: 16,
  hard: 2,
  cpu: "corei7",
};

const asgar = {
  ram: 8,
  hard: 128,
  cpu: "core2",
};

const chemidoonam = ({ ram, hard, cpu }) => {
  return `My laptop has ram of ${ram} and hard of ${hard} and cpu of ${cpu}`;
};
console.log(chemidoonam(asgar));

//rest operator

const car = {
  cylinder: 6,
  passengers: 4,
  door: 2,
  colour: "blue",
  isFourWheelsDrive: true,
};

const { cylinder, passengers, ...others2 } = car;
console.log(cylinder); //6
console.log(others2);
console.log((others2.cylinder = 4)); //cylinder is added
console.log(others2);
console.log(car); //didn't change
