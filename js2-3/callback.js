// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

// const { reject } = require("async");

// loadScript("/my/script.js");
// newFunction(); //doesn't work

// //callback

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript("/my/script.js", function () {
//   // the callback runs after the script is loaded
//   newFunction(); // so now it works
// });

// That’s the idea: the second argument is a function (usually anonymous) that runs when the action is completed.

//another example

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`script load error for ${src}`));
//   document.head.append(script);
// }

// // loadScript("/my/script.js", (script) => {
// //   console.log(`The script ${script.src} loaded.`);
// //   loadScript("/my/script2.js", (script) => {
// //     console.log(`The second script is loaded`);
// //   });
// // });

// loadScript("/my/script.js", (error, script) => {
//   if (error) {
//     console.log("Script didn't load");
//   } else {
//     console.log(`The script  ${script.src} loaded`);
//   }
// });

//crash course

//sync
// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPosts(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }
// getPosts();
// createPosts({ title: "Post three", body: "This is post three" });

// //async with callback
// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPosts(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPosts({ title: "Post three", body: "This is post three" }, getPosts);

//async with Promises
// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPosts(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = true;
//       if (!error) {
//         resolve("We got the posts");
//       } else {
//         reject("Error, sth went wrong");
//       }
//     }, 2000);
//   });
// }

// createPosts({ title: "Post three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//Promise.all()

const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
  (res) => {
    res.json();
    return res;
  }
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
