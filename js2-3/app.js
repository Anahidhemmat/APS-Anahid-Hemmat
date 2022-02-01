//sync code example

// function anotherFunc() {
//   console.log("This is another function");
//   console.log("Do some stuff");
// }

// console.log("start");

// anotherFunc();

// console.log("end");

//Async code example

// console.log("start");

// setTimeout(() => {
//   console.log("We are in the time out");
// }, 2000);

// console.log("end");

//another example

// console.log("start");

// function loginUser(email, password) {
//   setTimeout(() => {
//     console.log("Now we have the data");
//     return { userEmail: email };
//   }, 2000);
// }

// const user = loginUser("anahid@gmail.come", 12345);
// console.log(user);

// console.log("end");

//callbacks
// console.log("start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("Now we have the data");
//     callback({ userEmail: email });
//   }, 3000);
// }

// function getUsersVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 2000);
// }

// function getVideoDetails(video, callback) {
//   setTimeout(() => {
//     callback("Title of the video");
//   }, 1000);
// }

// const user = loginUser("anahid@gmail.come", 12345, (user) => {
//   console.log(user);
//   getUsersVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     getVideoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("end");
