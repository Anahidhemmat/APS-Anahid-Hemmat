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
