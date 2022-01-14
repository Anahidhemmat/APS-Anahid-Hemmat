/*
Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.

Examples
itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300") ➞ ["Bread", "Fertilizer", "Water"]

itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1") ➞ "Nothing"
Notes
Return "Nothing" if you can't afford anything from the store. */

const itemsPurchased = {
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200",
};

function enoughMoney(obj, money) {
  //const price = Object.values(obj).map((num) => parseFloat(num.slice(1)));
  let array = [];
  for (const keys in obj) {
    obj[keys] = obj[keys].slice(1).replace(",", "");
    if (obj[keys] <= money.slice(1)) {
      array.unshift(keys);
    }
  }
  if (array.length >= 1) {
    return array.sort();
  } else {
    return "NOTHING!";
  }
}
console.log(enoughMoney(itemsPurchased, "$300"));
