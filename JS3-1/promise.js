function pizza() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("pizza is ready");
    } else {
      reject("we don't have pizza");
    }
  });
}

function soda() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("pizza is ready");
    } else {
      reject("we don't have pizza");
    }
  });
}

// pizza().then(msg =>  {

// })

//promises

// const getTodoos = function() {
//     return new Promise((resolve,reject) => {
//         if(){
//             resolve(data);
//         } else {
//             reject(error)
//         }
//     })
// }

// getTodoos().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
