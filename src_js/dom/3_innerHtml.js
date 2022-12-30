const formInnerHtml = document.querySelector("form");
const imgInnerHtml = document.querySelector("img");
const ulInnerHtml = document.querySelector("ul");

console.log(imgInnerHtml);
console.log(ulInnerHtml);
console.log(formInnerHtml);

const h1 = document.querySelector("h1");
//this won't recognize the tag, consider as simple text
//h1.innerText += "<b> is super cool!!!!</b>";

//always update with innerHtml
h1.innerHTML += "<b> is cool!!!!</b>";

console.log(h1);
