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

const myObj = {
  positive: [
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
  ],
  natural: [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  ],
  negetive: [
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ],
};

const { positive, natural, negetive } = myObj;

const array = [positive, natural, negetive];

let randomNum1 = Math.floor(Math.random() * array.length);
let randomNum2 = Math.floor(Math.random() * array[randomNum1].length);

let answer2 = array[randomNum1][randomNum2];

const game = (obj, randomAnswer) => {
  const { positive, natural, negetive } = obj;
  let check = positive.includes(randomAnswer)
    ? `${randomAnswer} - POSITIVE`
    : natural.includes(randomAnswer)
    ? `${randomAnswer} - NATURAL`
    : negetive.includes(randomAnswer)
    ? `${randomAnswer} - POSITIVE`
    : "Nothing";
  return check;
};

console.log(game(myObj, answer2));

//password validator
let passes = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];

function validatePasswords(passwords) {
  let notRepeated = passwords.map((pass, index) => {
    passwords.indexOf(pass) === index ? pass : false;
  });
  let isValid = notRepeated.map((pass) => {
    containsLowercaseLetter(pass) &&
    containsUppercaseLetter(pass) &&
    containsNumber(pass) &&
    containsSymbol(pass) &&
    pass.length >= 5
      ? true
      : false;
  });
  return isValid;
}
console.log(validatePasswords(passes));

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}
