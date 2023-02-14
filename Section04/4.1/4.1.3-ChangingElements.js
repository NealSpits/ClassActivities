// print the outer HTML of the navigation bar
const outerNav = document.querySelector(".nav-bar").outerHTML;
console.log("this is the outerHTML of nav:" , outerNav);
// print the inner HTML of the navigation bar
const innerNav = document.querySelector("nav-bar").innerHTML;
console.log("this is the innerhtml of nav-bar:", innerNav);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"

// select the img element and add a src attribute
document.querySelector("img").src = "https://jooinn.com/images/dog-67.jpg"
// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";