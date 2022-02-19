//HTTP REQUEST

// //Ceating Request Object
// const request = new XMLHttpRequest();

// // XMLHttpRequest.readystate => one of XMLHttpRequest properties
// //readystatechange event

// request.addEventListener("readystatechange", () => {
//   //   console.log(request, request.readyState);
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText); //responseText is a property that contains response data
//   } else if (request.readyState === 4) {
//     console.log("could not fetch the data");
//   }
// });

// //open(Method, End Point);
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/ ");

// //send();
// request.send();

//CALLBACK VERSION => async

// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       //JSON
//       const data = JSON.parse(request.statusText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch the data", undefined);
//     }
//   });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/ ");
//   request.send();
// };

// getTodos((err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//JSON

// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       //JSON
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch the data", undefined);
//     }
//   });

//   request.open("GET", "jsons/todos.json");
//   request.send();
// };

// getTodos((err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//CALLBACK HELL

// const getTodos = (url, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       //JSON
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch the data", undefined);
//     }
//   });

//   request.open("GET", url);
//   request.send();
// };

// getTodos("jsons/todos.json", (err, data) => {
//   console.log(data);
//   getTodos("jsons/books.json", (err, data) => {
//     console.log(data);
//     getTodos("jsons/users.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

//Promise Basics

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     //fetch something
//     // resolve("some data");
//     reject("some error");
//   });
// };

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//PROMISE VERSION => async

// const getTodos = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         //JSON
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting data");
//       }
//     });

//     request.open("GET", url);
//     request.send();
//   });
// };

// //chaning promises
// getTodos("jsons/books.json")
//   .then((data) => {
//     console.log("Data 1 recived:", data);
//     return getTodos("jsons/users.json");
//   })
//   .then((data) => {
//     console.log("Data 2 recived:", data);
//     return getTodos("jsons/todos.json");
//   })
//   .then((data) => {
//     console.log("Data 3 recived:", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetch API

// fetch("jsons/users.json")
//   .then((response) => {
//     console.log("resolved", response); //returns an object
//     return response.json(); //returns promise
//   })
//   .then((data) => {
//     console.log(data); //getting data
//   })
//   .catch((err) => {
//     console.log("rejected"); //catching error
//   });

//async & await

//returns promise
const getData = async () => {
  const response = await fetch("jsons/users.json"); //fetch API
  const data = await response.json(); //returns promise
  return data;
};

getData().then((data) => {
  console.log("resolved", data);
});
