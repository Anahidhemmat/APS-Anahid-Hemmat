const url = "https://jsonplaceholder.typicode.com/todos/ ";

// const request = new XMLHttpRequest();

// request.open("GET", "data.json"); //(Method, File or url we want to get data from)

// request.send(); //sending request

// request.onload = function () {
//   if (request.status === 200) {
//     const data = JSON.parse(request.responseText); // String => Object
//     //console.log(request.responseText);
//     for (let d of data) {
//       console.log(d);
//       console.log(d.fName);
//       console.log(d.lName);
//     }
//   } else {
//     console.log("not found");
//   }
// };

// const request = new XMLHttpRequest();

// request.open("GET", "data.txt"); //(Method, File or url we want to get data from)

// request.send(); //sending request

// request.onload = function () {
//   if (request.status === 200) {
//     console.log(request);
//   } else {
//     console.log("not found");
//   }
// };

const request = new XMLHttpRequest();

request.open("GET", url); //(Method, File or url we want to get data from)

request.send(); //sending request

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    //console.log(data);
    for (let d of data) {
      console.log(d);
    }
  } else {
    console.log("not found");
  }
};
