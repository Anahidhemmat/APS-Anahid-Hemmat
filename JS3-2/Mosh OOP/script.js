//prototype inheritence

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal, //sets animal to be the prototype of rabbit.
};

//obj.hasOwnProperty(key);
for (let key in rabbit) {
  let isOwn = rabbit.hasOwnProperty(key); //true false

  if (isOwn) {
    // console.log(`Our: ${key}`);
  } else {
    // console.log(`Inherited: ${key}`);
  }
}
let longEar = {
  earLength: 10,
  __proto__: rabbit, //sets rabbit to be the prototype of longEar.
};

// longEar.walk();
// rabbit.sleep();
// console.log(rabbit);
// // animal.sleep();
// console.log(animal);

//setters and getters => prototype inheritence doesn't work for them

const user = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

const admin = {
  isAdmin: true,
  __proto__: user,
};

admin.fullName = "Anahid Hemmat";

// console.log(user);
// console.log(admin.fullName); //Anahid Hemmat
// console.log(user.fullName); //John Smith

//Task

// Use __proto__ to assign prototypes in a way that any property lookup will
// follow the path: pockets → bed → table → head. For instance, pockets.pen
// should be 3 (found in table), and bed.glasses should be 1 (found in head).

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// console.log(pockets.pen); //3
// console.log(bed.glasses); //1

// Native prototypes
// Task 1
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000); // shows "Hello!" after 1 second

// Task 2
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2); // shows 3 after 1 second

//OOP

//Object literals

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },

//   draw() {
//     console.log("draw");
//   },
// };

//factory function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

//Constructor function

function Circle(radius) {
  this.radius = radius;
  //abstraction => hide details and show essentials
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    //...
  };
  this.draw = function () {
    computeOptimumLocation(0, 1);
    //defaultLocation
    //this.radius
    console.log("draw");
  };

  //getters and setters
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) console.log("Invalid location");
      defaultLocation = value;
    },
  });
}

//in operator
const another = new Circle(1);
another.defaultLocation = 1;
if ("radius" in another) console.log("Circle has radius.");

for (let key in another) {
  if (typeof another[key] === "function") console.log(another[key]);
}

// console.log(another);

//EVERY OBJECT HAS A (CONSTRUCTOR PROPERTY => OBJ.CONSTRUCTOR) AND THAT REFRENCES THE FUNCTION THAT WAS USED TO CREATE THAT OBJECT

//Functions are Objects

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
`
);

// const circle1 = new Circle1(1);

//functions call methods

// Circle1.call({}, 1);
// Circle1.apply({}, [1]);

//Value vs Refrence Types

//value types/primitives => number, string, boolean, symbol, null, undefined => copied by their value
//Refrence Types => objects, functions, arrays => copied by their refrence

//Exercise

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch has already started");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch hasn't started yet");
    }
    running = false;
    endTime = new Date();
    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  //define duration property
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
}

const sw = new StopWatch();
