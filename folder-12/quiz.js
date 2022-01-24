//Quiz 1

// . Select the image element by it's id and save it to a variable called image
// . Select the h1 by it's id and save it to a variable called heading

//getElementById
// const image = document.getElementById("unicorn"); //img element

// const heading = document.getElementsByTagName("h1"); //h1 element

// //getElementsByTagName

// const allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs); //html collections

// //getElementsByClassName

// const heading2 = document.getElementsByClassName("heading-2");
// console.log(heading2);

/*
Quiz 2 
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    2. the first div element node
    --> should log the ".site-header" node
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

const allPara = document.querySelectorAll("p");
console.log(allPara);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const elementWithId = document.querySelector("#jumbotron-text");
console.log(firstDiv);

const allParaInClass = document.querySelectorAll(".primary-content p");
console.log(allParaInClass);
