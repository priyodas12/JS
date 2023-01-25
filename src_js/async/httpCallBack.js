let assignTodos = (callback) => {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //console.log(request, request.readyState);
      let data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      //console.log("can't able to fetch!");
      callback(
        "Could not able to fetch data, error code :" + request.status,
        undefined
      );
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");

  request.send();
};

console.log(1);
console.log(2);
console.log(3);
assignTodos((err, data) => {
  console.log("callback triggered!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log(4);
console.log(5);
