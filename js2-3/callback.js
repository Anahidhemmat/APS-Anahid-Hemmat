// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

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

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}
getPosts();
createPosts({ title: "Post three", body: "This is post three" });
