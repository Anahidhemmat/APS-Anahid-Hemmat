// const url = "https://jsonplaceholder.typicode.com/todos/ ";

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

// const request = new XMLHttpRequest();

// request.open("GET", url); //(Method, File or url we want to get data from)

// request.send(); //sending request

// request.onload = function () {
//   if (request.status === 200) {
//     const data = JSON.parse(request.responseText);
//     //console.log(data);
//     for (let d of data) {
//       console.log(d);
//     }
//   } else {
//     console.log("not found");
//   }
// };

//callback

const getTodos = function (url, callback) {
  const request = new XMLHttpRequest();

  request.open("GET", url); //(Method, File or url we want to get data from)

  request.send(); //sending request

  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      //console.log(data);
      // for (let d of data) {
      //   console.log(d);
      // }
      callback(undefined, data);
    } else {
      // console.log("not found");
      callback("not found", undefined);
    }
  };
};

const url = "https://jsonplaceholder.typicode.com/todos/1 ";
const url2 = "https://jsonplaceholder.typicode.com/todos/2 ";
const url3 = "https://jsonplaceholder.typicode.com/todos/3 ";

// getTodos(url, function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//     getTodos(url2, function (error, data) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//         getTodos(url3, function (error, data) {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

const getTodos = function (url, callback) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open("GET", url); //(Method, File or url we want to get data from)

    request.send(); //sending request

    request.onload = function () {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        //console.log(data);
        // for (let d of data) {
        //   console.log(d);
        // }
        resolve(undefined, data);
      } else {
        // console.log("not found");
        reject("not found", undefined);
      }
    };
  });
};

getTodos(url)
  .then((data) => {
    console.log(data);
    return getTodos(url2);
  })
  .then((data) => {
    console.log(data);
    return getTodos(url3);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
