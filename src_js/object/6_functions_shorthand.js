const auth = {
  //this refers to current execution scope.
  username: "priyo",
  login() {
    console.log(this);
    console.log(`${this.username} logged in!`);
  },
  logout() {
    console.log(`${this.username} logged out!`);
  },
};

auth.login();
auth.logout();
