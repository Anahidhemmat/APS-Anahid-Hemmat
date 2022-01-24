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

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

// const firstDiv = document.querySelector("div");
// console.log(firstDiv);

// const elementWithId = document.querySelector("#jumbotron-text");
// console.log(firstDiv);

// const allParaInClass = document.querySelectorAll(".primary-content p");
// console.log(allParaInClass);

//Quiz 3
// change the word Delicious to Disgusting

// const word = document.querySelector("span");
// word.innerText = "<mark>Disgusting</mark>";

// const selectDiv = document.querySelector("div");

// selectDiv.textContent = "welcome to my site<b>Happy</b>";

// selectDiv.innerHTML = "Welcome To <b>Anahid</b>'s Page";
// console.log(selectDiv);

// //Attribute Selector
// //first way
// const input = document.querySelector("input");
// //setAttribute() //second way
// input.setAttribute("name", "myinput");
// input.setAttribute("id", "my-inp");

// //getAttribute
// const getNameAtt = input.getAttribute("name"); //myinput
// console.log(getNameAtt);

// const getIdAtt = input.getAttribute("id");
// console.log(getIdAtt);

//Quiz 4
// change the url to: 'https://ctl.s6img.com/society6/img/6KLGBRmtYG8sc6vShMmCzkIBuVc/w_1500/posters/top/~artwork,fw_2718,fh_3619,fx_-14,fy_162,iw_2745,ih_3294/s6-original-art-uploads/society6/uploads/misc/25b61819b78d4267ae26919e142ac513/~~/youre-eggzactly-my-type-funny-egg-pun-posters.jpg'
//change the alt text to: "chicken"

// const image = document.querySelector("img");

// image.setAttribute(
//   "src",
//   "https://ctl.s6img.com/society6/img/6KLGBRmtYG8sc6vShMmCzkIBuVc/w_1500/posters/top/~artwork,fw_2718,fh_3619,fx_-14,fy_162,iw_2745,ih_3294/s6-original-art-uploads/society6/uploads/misc/25b61819b78d4267ae26919e142ac513/~~/youre-eggzactly-my-type-funny-egg-pun-posters.jpg"
// );
// image.setAttribute("alt", "chiken");
// console.log(image);

//Quiz 5

//select the div with the id of container
//set it's text alignment to center
//give the image a width of 150px and a border radius of 50%

// const selectDiv = document.querySelector("#container");

// selectDiv.style.textAlign = "center";

// const image = document.querySelector("#container img");

// image.style.width = "150px";
//image.style.borderRadius = "50%";

//Quiz 6

//please write some JS codes to make the rainbow colored
//use this array of colors:
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!
//your task is to select all spans, iterate over them, assign them each one of the colors from the colors array.
//the first span should be red, second one orange and so on.
//YOU CODE GOES HERE:

const spanTags = document.querySelectorAll("span");

let count = 0;
for (let span of spanTags) {
  span.style.color = colors[count];
  count++;
}

const heading = document.querySelector("h1");

// let styles = heading.style;
// console.log(styles);

let styles2 = window.getComputedStyle(heading);
console.log(styles2);
