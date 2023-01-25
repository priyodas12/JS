const name = ["priyo", "das"];

console.log(typeof name);
/*
1-it creates a new empty object.
2-it binds the value of 'this' to the new empty object.
3-it calls the constructor function to build the object.
*/
class User {
  constructor(username, email) {
    console.log("User:constructor call!");
    this.username = "priyo";
    this.email = "priyo@test.com";
    this.login = () => {
      console.log(`${this.username} has logged in!`);
    };
    User.prototype.logout = () => {
      console.log(`${this.username} has logged out!`);
    };
  }
}

const person = new User();

console.log(person);

person.login();

console.log(person.username, person.email);
