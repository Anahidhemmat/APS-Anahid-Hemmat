const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = new XMLHttpRequest();

request.open("GET", "data.json"); //(Method, File or url we want to get data from)

request.send(); //sending request

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText); // String => Object
    //console.log(request.responseText);
    for (let d of data) {
      console.log(d);
      console.log(d.fName);
      console.log(d.lName);
    }
  } else {
    console.log("not found");
  }
};
