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

const getTodos = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //JSON
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });

  request.open("GET", url);
  request.send();
};

getTodos("jsons/todos.json", (err, data) => {
  console.log(data);
  getTodos("jsons/books.json", (err, data) => {
    console.log(data);
    getTodos("jsons/users.json", (err, data) => {
      console.log(data);
    });
  });
});
