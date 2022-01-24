//Quiz 1

// . Select the image element by it's id and save it to a variable called image
// . Select the h1 by it's id and save it to a variable called heading

//getElementById
const image = document.getElementById("unicorn"); //img element

const heading = document.getElementsByTagName("h1"); //h1 element

//getElementsByTagName

const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs); //html collections

//getElementsByClassName

const heading2 = document.getElementsByClassName("heading-2");
console.log(heading2);
