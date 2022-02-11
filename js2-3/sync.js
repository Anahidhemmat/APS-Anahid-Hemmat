//Sync code example

// function otherFunc() {
//   console.log("We are in a func");
//   console.log("Do sth");
// }
// console.log("Start");

// otherFunc();
// console.log("End");

// //Async

// console.log("Start");

// setTimeout(() => {
//   console.log("We are in the timeout");
// }, 2000);

// console.log("End");

// console.log("start");

// function loginUser(email, pass, callback) {
//   setTimeout(() => {
//     callback({ userEmail: email });
//   }, 3000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 2000);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   }, 2000);
// }
// const user = loginUser("anahid@gmail.com", 1234, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("end");

// console.log("Start");

// setTimeout(() => {
//   console.log("We are in the timeout");
// }, 2000);

// console.log("End");

//promise version
console.log("start");

function loginUser(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user videos");
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

// loginUser("Ana", 1234)
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((details) => console.log(details))
//   .catch((err) => console.log(err));

//SYNC => best way
async function displayUser() {
  try {
    const loggedUser = await loginUser("Ana", 123456);
    const videos = await getUserVideos(loggedUser.email);
    const details = await videoDetails(videos[0]);
    console.log(details);
  } catch (err) {
    console.log("We could not get the data");
  }
}
displayUser();

console.log("end");

//Promise.all();

// const youtube = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from youtube");
//     resolve({ videos: [1, 2, 3, 4, 5, 6] });
//   }, 2000);
// });

// const facebook = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from facebook");
//     resolve({ user: "Name" });
//   }, 5000);
// });

//Promise.all([youtube, facebook]).then((result) => console.log(result));
