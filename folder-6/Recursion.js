//Recursion
//Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler.

//Two ways of thinking
//lets's write a function that multiplies a number by itself n times.
// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

//There are two ways to implement it
//With for loop

function pow(number, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= number;
  }
  return result;
}

console.log(pow(2, 2)); // 4

//Recursive thinking: simplify the task and call self:

function pow2(number2, n2) {
  n2 === 1 ? number2 : number2 * pow2(number2, n2 - 1);
}
