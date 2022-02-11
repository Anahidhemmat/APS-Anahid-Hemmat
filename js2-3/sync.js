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

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 2000);
}
const user = loginUser("anahid@gmail.com", 1234, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("end");
