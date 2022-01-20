//Quiz
//way 1 - with array
const arr = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  " As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",

  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",

  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

let random = Math.floor(Math.random() * arr.length);
let answer = arr[random];

random >= 0 && random <= 9
  ? console.log(`${answer} - POSITIVE`)
  : random > 9 && random <= 14
  ? console.log(`${answer} - NATURAL`)
  : console.log(`${answer} - NEGATIVE`);

//way 2 -  object

// const myObj = {
//   positive: [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes definitely.",
//     "You may rely on it.",
//     " As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//   ],
//   natural: [
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//   ],
//   negetive: [
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful.",
//   ],
// };

// const { positive, natural, negetive } = myObj;

// const array = [positive, natural, negetive];

// let randomNum1 = Math.floor(Math.round() * array.length);
// let randomNum2 = Math.floor(Math.round() * array[randomNum1].length);

// let answer2 = array[randomNum1][randomNum2];

// const game = (Obj, randomAnswer) => {
//   const { positive, natural, negetive } = obj;
//   let check = positive.includes(randomAnswer)
//     ? `${randomAnswer} - POSITIVE`
//     : natural.includes(randomAnswer)
//     ? `${randomAnswer} - NATURAL`
//     : negetive.includes(randomAnswer)
//     ? `${randomAnswer} - POSITIVE`
//     : "Nothing";
//   return check;
// };

// console.log(game(myObj, answer2));