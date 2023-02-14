// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

listItem1.textContent = "First New List Item!"
;listItem2.textContent = "Second new list Item"
// add the li elements to the ul in the nav-bar
document.querySelector("nav-bar")