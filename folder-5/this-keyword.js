//creating functions in object
let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
  addMeeting: function () {
    console.log("Hey I am a function!");
  },
};

myTodos.addMeeting();

//accessing properties of an object in function with "this" keyword

let myTodos2 = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
  addMeeting: function () {
    console.log(this);
  },
};

myTodos2.addMeeting();
