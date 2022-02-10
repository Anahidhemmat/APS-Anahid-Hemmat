const books = [
  { title: "java", content: "hello" },
  { title: "java2", content: "hello2" },
];

function showBooks() {
  books.forEach((book) => {
    console.log(Element.title, Element.content);
  });
}

function addBook(callback) {
  setTimeout(() => {
    books.push({ title: "java", content: "hello" });
    callback();
  }, 2000);
}

console.log("ana");

addBook();
showBooks();

addBook(showBooks);
