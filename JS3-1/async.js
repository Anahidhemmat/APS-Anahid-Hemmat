// console.log(1);
// console.log(2);

// //async function
// setTimeout(() => {
//   console.log("some data");
// }, 3000);
// console.log(3);
// console.log(4);

//async await

const url = "https://jsonplaceholder.typicode.com/todos/2 ";

const getTodos = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Not found!!!");
  }
};

getTodos(url)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
