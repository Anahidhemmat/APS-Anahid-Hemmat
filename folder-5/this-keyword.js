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

//how can we use "this" keyword

let myTodos3 = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
  addMeeting: function (numberOfMeetings) {
    return (this.meetings = this.meetings + numberOfMeetings);
  },
  summery: function () {
    return `You have ${this.meetings} meetings today :)`;
  },
};

console.log(myTodos3.addMeeting(4));
console.log(myTodos3.summery());
