/*
Given an object with students and the grades that they made on the tests
 that they took, determine which student has the best Test Average. 
 The key will be the student's name and the value will be an 
 array of their grades. You will only have to return the student's name.
  You do not need to return their Test Average.

Examples:

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"
Notes
All students in an object will have the same amount of test scores. So no student will have taken more tests than another. */
let testMark = {
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86],
};

function getBestStudent(obj) {
  let sumReduce;
  for (let keys in obj) {
    let average = (obj[keys] = obj[keys].reduce((a, b) => a + b));
   
    
  }
}
console.log(getBestStudent(testMark));
