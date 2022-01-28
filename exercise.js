function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
for (let i = 0; i < arrayOfPeople.length; i++) {
  h1.textContent +=  arrayOfPeople[i].name + " "; 
content.append(h1);
h2.textContent += arrayOfPeople[i].job + " ";
content.append(h2);
}
  
}

let people = [
  { name: "Alireza", job: "Teacher" },
  { name: "Jafar", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
]

listOfNames(people);




///////////////////////////////

function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.append(unorderedList);

  for ( let i = 0; i < arrayOfPeople.length; i++) {
    let itemList = document.createElement("li");
    itemList.textContent = arrayOfPeople[i];
    unorderedList.append(itemList);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"]

shoppingList(shopping);


///////////////

function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  h1.textContent = "Book List";
  content.append(h1)
  let ul = document.createElement("ul");
  content.append(ul);
  ul.style.listStyle = "none";

  for(let i = 0; i < books.length; i++) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = books[i].title + "-" + books[i].author;
    li.append(p);
    ul.append(li);

    

  let imageSrc = ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…jo9Pq/uGZhqozRRR+jo9Pq/uGZkWNFFFdVGhTUbJfuRbdz//Z", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ERFkEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…RAREQEREAYiICIiAiIgRJiICIiAgxECBJiICIiAiIgRERA//Z"];
    let image = document.createElement("img");
    for(let srcs of imageSrc) {
      image.src = srcs;
    }
    li.append(image);

  }

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
]

readingList(books)

///////////////

function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.append(ul);
  for(let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.textContent = todos[i].todo;
    ul.append(li);
    li.addEventListener("click",function() {
     if( li.style.textDecoration === "none") {
      li.style.textDecoration = "line-through";
     } else {
      li.style.textDecoration = "none";
     }
    });
  }
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);

/////////////////

function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let p = document.createElement("p");
  content.append(p);
  let select = document.createElement("select");
  content.append(select);
  for(let i = 0; i < colours.length; i++) {
    let option = document.createElement("option");
    option.textContent = colours[i];
    select.append(option);
    select.addEventListener("click", function() {
      p.textContent = "You have selected: " + option.textContent; 
    })
  };
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

