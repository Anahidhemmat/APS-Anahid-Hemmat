let randomNumber = Math.floor(Math.random() * 100 + 1);
let finalOutput = document.querySelector(".final-output");
let triesOutput = document.querySelector(".Tries-output");
let tries = 7;
triesOutput.textContent = `Number of Tries: ${tries}`;
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (tries === 0) {
    finalOutput.textContent = `You Lose, the number was ${randomNumber}`;
    triesOutput.textContent = "";
  } else if (guess < 1 || guess === "" || guess > 100) {
    finalOutput.textContent = "Please enter a number between 1 and 100";
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    finalOutput.textContent = "Number is too high, try again";
    triesOutput.textContent = `Number of Tries: ${--tries}`;
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    finalOutput.textContent = "Number is too low, try again";
    triesOutput.textContent = `Number of Tries: ${--tries}`;
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
    triesOutput.textContent = `It took you ${7 - tries} tries`;
    finalOutput.textContent = `${randomNumber}  is correct. You win!`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  let inputValues = document.querySelector(".inputs-Values");
  inputValues.value = "";
  finalOutput.textContent = "Get a number between 1 and 100";
  //Reset tries, and triesTaken by the user
  tries = 7;
  triesOutput.textContent = `Number of Tries: ${tries}`;
}

let newGameBtn = document.querySelector(".btnNewGame");
newGameBtn.addEventListener("click", newGame);

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
