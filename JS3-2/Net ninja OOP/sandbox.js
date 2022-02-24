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
//SUBCLASSES

class Admin extends User {
  constructor(username, email, title) {
    //super()
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userThree = new Admin("somayeh33", "somayeh@gmail.com", "admin");

let users = [userOne, userTwo, userThree];

userOne.login();
userTwo.logout().incScore().incScore();
userThree.deleteUser(userTwo);
console.log(userThree);

//constructor function

function User2(username, email) {
  this.username = username;
  this.email = email;
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`);
  //   };
}
//prototype method

User2.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User2.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};
const userFour = new User2("Kiana", "Kiana@gmail.com");

userFour.login();
userFour.logout();

//sub constructor function

function Admin2(username, email, title) {
  User2.call(this, username, email);
  this.title = title;
}

const newAdmin = new Admin2("dayan", "dayan@gmail.com", "DAN");
Admin2.prototype = Object.create(User2.prototype); //Admin inherits prototype from User2
Admin2.prototype.deleteUser = function () {
  //delete a user
};
