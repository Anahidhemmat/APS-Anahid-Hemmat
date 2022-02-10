//Sync code example

function otherFunc() {
  console.log("We are in a func");
  console.log("Do sth");
}
console.log("Start");

otherFunc();
console.log("End");

//Async

console.log("Start");

setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

console.log("End");

console.log("start");
function loginUser(email, pass, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 3000);
}

const user = loginUser("anahid@gmail.com", 1234, (user) => {
  console.log(user);
});
console.log("end");
