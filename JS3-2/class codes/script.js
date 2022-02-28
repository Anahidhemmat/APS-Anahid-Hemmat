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
    console.log(`Our: ${key}`);
  } else {
    console.log(`Inherited: ${key}`);
  }
}
let longEar = {
  earLength: 10,
  __proto__: rabbit, //sets rabbit to be the prototype of longEar.
};

longEar.walk();
rabbit.sleep();
console.log(rabbit);
// animal.sleep();
console.log(animal);

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

console.log(user);
console.log(admin.fullName); //Anahid Hemmat
console.log(user.fullName); //John Smith

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

console.log(pockets.pen); //3
console.log(bed.glasses); //1

// Native prototypes
// Task 1
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second
