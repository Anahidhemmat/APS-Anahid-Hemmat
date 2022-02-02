// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the user");
//     resolve({ user: "ed" });
//   }, 2000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("User not logged in"));
//   }, 2000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promise.all
// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from youtube");
//     resolve({ videos: [1, 2, 3, 4, 5] });
//   }, 2000);
// });

// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from facebook");
//     resolve({ user: "Name" });
//   }, 3000);
// });

// Promise.all([yt, fb]).then((result) => console.log(result));

//promise

//resolve
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done");
  }, 1000);
});

//reject

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whooops"));
  }, 1000);
});

//Immediately calling resolve/reject

let promise3 = new Promise(function (resolve, reject) {
  resolve("done");
});

//.then()

promise.then(
  function (result) {},
  function (error) {}
);

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

//.catch()

promise2.catch(error);

//or

promise2.then(null, (error) => console.log(error));
