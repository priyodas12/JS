let assignTodos = (callback) => {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //console.log(request, request.readyState);
      callback(undefined, request.response);
    } else if (request.readyState === 4) {
      //console.log("can't able to fetch!");
      callback(request.status, undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todoss");

  request.send();
};

assignTodos((err, data) => {
  console.log("callback triggered!");
  console.log(err, data);
});
