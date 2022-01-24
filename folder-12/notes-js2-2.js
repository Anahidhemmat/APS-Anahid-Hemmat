// querySelector()
// Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.

// selectors
//A DOMString containing one or more selectors to match.
//This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown.

//If no matches are found, the returned value is null.

// querySelectorAll()
// Returns a NodeList containing all matching Element nodes within the node's subtree,
// or an empty NodeList if no matches are found.

//NOTE
//The NodeList returned by querySelectorAll() is not live, which means that changes in the DOM are not reflected in the collection.
//This is different from other DOM querying methods that return live node lists.

//so you can group multiple selectors in a single query.

//To select all paragraph (p) elements in a document whose classes include warning or note, you can do the following:
const special = document.querySelectorAll("p.warning, p.note");

//You can also query by ID. For example:
const special2 = document.querySelector("#main, #basic, #exclamation");

//DOM properties and methods

//innerText
// Note:
// innerText is easily confused with Node.textContent, but there are important differences between the two.
//  Basically, innerText is aware of the rendered appearance of text, while textContent is not.

//tetxContent
//Differences from innerText
//1-textContent gets the content of all elements, including <script> and <style> elements.
// In contrast, innerText only shows "human-readable" elements.

//2-textContent returns every element in the node. In contrast,
//innerText is aware of styling and won't return the text of "hidden" elements.

//Differences from innerHTML
// Element.innerHTML returns HTML, as its name indicates.
//  Sometimes people use innerHTML to retrieve or write text inside an element,
//  but textContent has better performance because its value is not parsed as HTML.

//Example
<div id="divA">
  This is <span>some</span> text!
</div>;

const text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'

const text = (document.getElementById("divA").textContent =
  "This text is different!");
// The HTML for divA is now:
// <div id="divA">This text is different!</div>

//innerHTML
//The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
//This lets you look at the HTML markup of the element's content nodes.
