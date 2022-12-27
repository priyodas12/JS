const person = {
  nickName: "babai",
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} laughing!`);
  },
};

person.laugh();
