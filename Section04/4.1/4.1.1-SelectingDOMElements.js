// select all unordered list (ul) elements
console.log(
    'I think that I like using querySelector. This shows: ' , 
    document.querySelector("ul")
    );
// select all elements with the class "class-week"
console.log(document.querySelectorAll(".class-week"));
// select all elements with the class "nav-bar"
document.getElementsByClassName("nav-bar");
// select the element with the id "dog-picture" and save it to a variable
const dogPic = document.getElementById("dog-picture");
console.log("this is dog pic:", dogPic);