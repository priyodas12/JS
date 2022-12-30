let h1 = document.querySelector("h1");

console.log(h1);

let h1InnerText = h1.innerText;
//text between h1 tag
console.log(h1InnerText);

h1InnerText = "Testing it!"; //it will just update the string value of variable
//h1.innerText = h1InnerText; //here it goes with update!

const ul = document.querySelector("ul");

console.log(ul);

const ulInnerText = ul.innerText;

console.log(ulInnerText); // it will represents all text as list inside li tag.

//get all text inside the web page

const body = document.body;

const bodyText = body.innerText;

console.log(bodyText);

const bodyTextContent = body.textContent;

console.log(bodyTextContent);
