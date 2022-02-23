//Array constructor function

const ages = new Array(20, 25, 30);
console.log(ages);

const newStr = new String("Hi baby");

const neNum = new Number(10);

const user = new Object();

const bool = new Boolean();

//Classes

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} has just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} has just logged out`);
    return this; //if we return this we can chain methods
  }
  incScore() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User("Ana123", "anahid@gmail.com");
const userTwo = new User("mamad123", "mamad@gmail.com");

console.log(userOne, userTwo);

userOne.login();
userTwo.logout().incScore().incScore();
