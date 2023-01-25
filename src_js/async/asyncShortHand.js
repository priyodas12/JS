const todos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/0", {
    method: "GET",
  });

  if (response.status !== 200) {
    throw new Error("Data not found!");
  }
  const data = await response.json();

  return response;
};

todos()
  .then((data) => console.log("Resolved", data))
  .catch((err) => console.log("Rejected", err));
