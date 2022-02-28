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
