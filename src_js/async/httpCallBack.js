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

let assignTodosWithPromise = (resource) => {
  console.log("assignTodosWithPromise:  " + resource);
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request, request.readyState);
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        //console.log("can't able to fetch!");
        reject("Error while getting data: " + request.status);
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

let urlEndPoint = "https://jsonplaceholder.typicode.com/todos1";

console.log(1);
console.log(2);
console.log(3);
// assignTodos((err, data) => {
//   console.log("callback triggered!");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

assignTodosWithPromise(urlEndPoint)
  .then((data) => {
    console.log("promise resolved! ", data);
  })
  .catch((error) => console.log(error));
console.log(4);
console.log(5);
