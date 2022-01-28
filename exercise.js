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
