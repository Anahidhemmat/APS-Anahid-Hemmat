//prototype inheritence

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal, //sets animal to be the prototype of rabbit.
};

let longEar = {
  earLength: 10,
  __proto__: rabbit, //sets rabbit to be the prototype of longEar.
};

longEar.walk();
